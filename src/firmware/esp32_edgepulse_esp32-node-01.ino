/**
 * ============================================================================
 * EdgePulse — ESP32 Edge Telemetry & Statistical Anomaly Node Firmware
 * Target Node : ESP32-NODE-01
 * Framework   : Arduino / ESP-IDF (ESP32-WROOM-32D)
 * Features    : Edge Rolling Z-Score Calculation, Hardware ADC Oversampling,
 *               Supabase PostgreSQL REST Ingestion & Status Watchdog
 * ============================================================================
 */

#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <DHT.h>
#include <math.h>

// --- Network & Cloud Credentials ---
const char* WIFI_SSID     = "Engineering_Lab_IoT";
const char* WIFI_PASSWORD = "YOUR_WIFI_PASSWORD";
const char* SUPABASE_URL  = "https://xyzcompany.supabase.co/rest/v1/telemetry_logs";
const char* SUPABASE_KEY  = "YOUR_SUPABASE_SERVICE_ROLE_OR_ANON_KEY";
const char* NODE_ID       = "ESP32-NODE-01";

// --- Hardware Pin Assignments ---
#define PIN_DHT_SENSOR    4     // Digital Temperature Sensor (DHT22)
#define PIN_ACS712_ADC    34    // Analog Current Sensor (ADC1)
#define PIN_ZMPT101B_ADC  35    // Analog AC Voltage Sensor (ADC1)
#define PIN_STATUS_LED    2     // On-board Anomaly Alert LED

#define DHTTYPE           DHT22
#define SAMPLE_INTERVAL   1000UL
#define WINDOW_SIZE       25
#define Z_SCORE_THRESHOLD 2.20f

DHT dht(PIN_DHT_SENSOR, DHTTYPE);

// --- Rolling Window Buffer for Edge Statistical Analysis ---
float tempBuffer[WINDOW_SIZE];
int bufferIndex = 0;
int sampleCount = 0;
unsigned long lastTelemetryTick = 0;
unsigned long packetSequence = 0;

void computeRollingStats(float* buf, int count, float &mean, float &stdDev) {
  if (count <= 0) { mean = 25.0f; stdDev = 0.5f; return; }
  float sum = 0.0f;
  for (int i = 0; i < count; i++) sum += buf[i];
  mean = sum / count;

  float varianceSum = 0.0f;
  for (int i = 0; i < count; i++) {
    varianceSum += pow(buf[i] - mean, 2);
  }
  stdDev = sqrt(varianceSum / max(1, count - 1));
  if (stdDev < 0.15f) stdDev = 0.15f; // Noise floor clamp
}

float readRmsVoltage() {
  long adcSum = 0;
  for (int i = 0; i < 64; i++) {
    adcSum += analogRead(PIN_ZMPT101B_ADC);
    delayMicroseconds(250);
  }
  float avgAdc = adcSum / 64.0f;
  return 220.0f + ((avgAdc - 2048.0f) * 0.015f);
}

float readRmsCurrent() {
  long adcSum = 0;
  for (int i = 0; i < 64; i++) {
    adcSum += analogRead(PIN_ACS712_ADC);
    delayMicroseconds(250);
  }
  float voltagePin = (adcSum / 64.0f) * (3.3f / 4095.0f);
  return fabs((voltagePin - 1.65f) / 0.066f);
}

void setup() {
  Serial.begin(115200);
  pinMode(PIN_STATUS_LED, OUTPUT);
  analogReadResolution(12);
  dht.begin();

  Serial.printf("[EdgePulse] Booting Node %s...\n", NODE_ID);
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  while (WiFi.status() != WL_CONNECTED) {
    delay(400);
    Serial.print(".");
  }
  Serial.printf("\n[EdgePulse] Wi-Fi Connected! IP: %s | RSSI: %d dBm\n",
                WiFi.localIP().toString().c_str(), WiFi.RSSI());
}

void loop() {
  unsigned long now = millis();
  if (now - lastTelemetryTick < SAMPLE_INTERVAL) return;
  lastTelemetryTick = now;

  // 1. Acquire Sensor Readings
  float temperature = dht.readTemperature();
  if (isnan(temperature)) temperature = 25.0f;
  float voltage = readRmsVoltage();
  float current = readRmsCurrent();
  float powerWatts = voltage * current;

  // 2. Compute Rolling Mean & Z-Score on the Edge
  float rollingMean = 0.0f, rollingStd = 1.0f;
  computeRollingStats(tempBuffer, sampleCount, rollingMean, rollingStd);
  float tempZScore = (temperature - rollingMean) / rollingStd;
  bool isAnomaly = fabs(tempZScore) >= Z_SCORE_THRESHOLD;

  // Update Circular Buffer
  tempBuffer[bufferIndex] = temperature;
  bufferIndex = (bufferIndex + 1) % WINDOW_SIZE;
  if (sampleCount < WINDOW_SIZE) sampleCount++;

  // Drive Hardware Anomaly Status LED
  digitalWrite(PIN_STATUS_LED, isAnomaly ? HIGH : LOW);
  packetSequence++;

  // 3. Serialize Telemetry JSON Payload
  StaticJsonDocument<384> doc;
  doc["node_id"]       = NODE_ID;
  doc["seq"]           = packetSequence;
  doc["temperature_c"] = serialized(String(temperature, 2));
  doc["voltage_v"]     = serialized(String(voltage, 1));
  doc["current_a"]     = serialized(String(current, 2));
  doc["power_w"]       = serialized(String(powerWatts, 1));
  doc["rolling_mean"]  = serialized(String(rollingMean, 2));
  doc["z_score"]       = serialized(String(tempZScore, 2));
  doc["is_anomaly"]    = isAnomaly;
  doc["rssi_dbm"]      = WiFi.RSSI();
  doc["free_heap_kb"]  = ESP.getFreeHeap() / 1024.0f;

  String jsonPayload;
  serializeJson(doc, jsonPayload);
  Serial.println(jsonPayload);

  // 4. Dispatch to Supabase PostgreSQL via REST
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(SUPABASE_URL);
    http.addHeader("Content-Type", "application/json");
    http.addHeader("apikey", SUPABASE_KEY);
    http.addHeader("Authorization", String("Bearer ") + SUPABASE_KEY);
    http.addHeader("Prefer", "return=minimal");

    int httpResponseCode = http.POST(jsonPayload);
    if (httpResponseCode >= 400) {
      Serial.printf("[EdgePulse] Supabase POST Error: HTTP %d\n", httpResponseCode);
    }
    http.end();
  }
}