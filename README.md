# EdgePulse — ESP32 Telemetry & Anomaly Analytics Studio

**EdgePulse** is an IoT telemetry dashboard, virtual hardware fault emulator, and time-series anomaly detection tool. I built it to connect **ESP32 microcontroller sensor nodes** (via both **USB Web Serial** and **Wi-Fi**) with browser-based **statistical diagnostics** (rolling Z-score confidence bands and Ordinary Least Squares linear regression forecasting) backed by **Supabase PostgreSQL**.

## Features

* **Web Serial API Hardware Bridge (115200 Baud):** Plug a physical ESP32 directly into your laptop's USB port and stream newline-delimited JSON packets straight into the chart using Chrome/Edge's native `navigator.serial` API—plus a built-in **Serial Monitor & JSON Packet Injector** to test custom frames without hardware attached.

* **3-Node Virtual ESP32 Cluster Emulator:** Stream telemetry across three zones (`ESP32-NODE-01` Cold Storage Chiller, `ESP32-NODE-02` Main Distribution Panel, and `ESP32-NODE-03` Comms Server Rack) at `250ms`, `500ms`, or `1000ms` intervals.

* **Hardware Fault Injection:** Trigger **Thermal Spikes**, **AC Voltage Sags**, and **Sensor Noise** on the fly to test how the rolling confidence bands and regression trendlines react.

* **Dual-Axis SVG Time-Series Chart:** Built from scratch without external charting libraries. Includes a shaded confidence envelope, OLS regression line, anomaly markers, and sample-level crosshair inspection.

* **CSV & JSON Export:** Dump the current multi-node telemetry window and anomaly logs to **CSV** or **JSON** for offline analysis in Python/Pandas.

* **ESP32 Firmware & Supabase SQL Generators:** Configure GPIO pins directly in the UI and export the matching `.ino` C++ sketch and PostgreSQL schema (with BRIN indexes and Row-Level Security).

## How the Anomaly Engine Works

Instead of relying on static hard-coded cutoffs that trigger false alarms during normal load changes, **EdgePulse** scores incoming readings against a sliding window of $N = 40$ telemetry packets per node:

1. **Rolling Z-Score Anomaly Detection**
   Calculates the rolling mean ($\mu$) and standard deviation ($\sigma$) over the active window:

   $$
   Z_t = \frac{x_t - \mu_{\text{window}}}{\sigma_{\text{window}}}
   $$

   Any frame where $\vert Z_t \vert \ge k$ (adjustable from $1.5\sigma$ to $3.5\sigma$, default $2.2\sigma$) flags the hardware node and logs a `WARNING` or `CRITICAL` event.

2. **Ordinary Least Squares (OLS) Thermal Trend Forecasting**
   Computes the linear regression slope ($\beta_1$) and $R^2$ fit over the active window to project a **5-minute thermal trajectory**:

   $$
   \beta_1 = \frac{n \sum (t_i y_i) - \sum t_i \sum y_i}{n \sum t_i^2 - (\sum t_i)^2}
   $$

## System Architecture

1. **ESP32 Edge Layer:** Reads `DHT22`, `ACS712`, and `ZMPT101B` sensors via 64-sample ADC oversampling, computes rolling Z-scores in a circular buffer, outputs newline-delimited JSON over USB Serial (`115200` baud), and posts JSON payloads over HTTPS.

2. **Supabase Backend:** Ingests telemetry via PostgREST, runs a `PL/pgSQL` trigger on insert to log anomalies automatically, and broadcasts live updates over Supabase Realtime.

3. **React Studio UI:** Connects directly to physical ESP32 nodes via the browser's Web Serial API (or runs the 3-node virtual emulator), visualizes the real-time stream, and exports `.csv`, `.json`, `.ino`, and `.sql` files.

## Default ESP32-WROOM-32D Pinout

| Peripheral Sensor | Signal Type | Default GPIO | Description | 
| ----- | ----- | ----- | ----- | 
| **DHT22** | Digital One-Wire | `GPIO 4` | Ambient & enclosure temperature sensing ($^\circ\text{C}$) | 
| **ACS712 (30A)** | Analog (`ADC1_CH6`) | `GPIO 34` | 64-sample RMS AC current draw measurement ($\text{A}$) | 
| **ZMPT101B** | Analog (`ADC1_CH7`) | `GPIO 35` | 64-sample RMS AC line voltage sensing ($\text{V}$) | 
| **Status Watchdog** | Digital Output | `GPIO 2` | On-board alert LED driven HIGH when $\vert Z \vert \ge k$ | 

## Running Locally

```
git clone https://github.com/ce1rik/edgepulse-iot-studio.git
cd edgepulse-iot-studio
npm install
npm run dev
```

## Author

**Ceirik G. Agustin**

Computer Engineering Student | Full-Stack & Embedded Systems Developer

Cagayan de Oro, Philippines