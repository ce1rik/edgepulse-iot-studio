import ImportedReact, {
  useState as _useState,
  useEffect as _useEffect,
  useRef as _useRef,
  useMemo as _useMemo,
  useCallback as _useCallback
} from 'react';

const HostReact =
  typeof window !== 'undefined' && window.React ? window.React : ImportedReact;

if (
  typeof window !== 'undefined' &&
  window.React &&
  ImportedReact &&
  ImportedReact !== window.React
) {
  try {
    ImportedReact.createElement = window.React.createElement;
    ImportedReact.cloneElement = window.React.cloneElement;
    ImportedReact.Fragment = window.React.Fragment;
  } catch (_) {
  }
}

const React = HostReact;
const useState = HostReact.useState || _useState;
const useEffect = HostReact.useEffect || _useEffect;
const useRef = HostReact.useRef || _useRef;
const useMemo = HostReact.useMemo || _useMemo;
const useCallback = HostReact.useCallback || _useCallback;

function createIcon(paths) {
  return function IconComponent({ className = 'w-4 h-4', ...props }) {
    const React = HostReact;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        {paths}
      </svg>
    );
  };
}

const Activity = createIcon(<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />);
const Cpu = createIcon(
  <>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </>
);
const Database = createIcon(
  <>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </>
);
const Download = createIcon(
  <>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </>
);
const Flame = createIcon(
  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
);
const Zap = createIcon(<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />);
const Radio = createIcon(
  <>
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
  </>
);
const RotateCcw = createIcon(
  <>
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
  </>
);
const Play = createIcon(<polygon points="5 3 19 12 5 21 5 3" />);
const Pause = createIcon(
  <>
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </>
);
const AlertTriangle = createIcon(
  <>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </>
);
const CheckCircle2 = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </>
);
const Copy = createIcon(
  <>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </>
);
const Check = createIcon(<polyline points="20 6 9 17 4 12" />);
const Terminal = createIcon(
  <>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </>
);
const Sliders = createIcon(
  <>
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </>
);
const Wifi = createIcon(
  <>
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </>
);
const TrendingUp = createIcon(
  <>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </>
);
const TrendingDown = createIcon(
  <>
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </>
);
const Minus = createIcon(<line x1="5" y1="12" x2="19" y2="12" />);
const FileSpreadsheet = createIcon(
  <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M8 13h2" />
    <path d="M8 17h2" />
    <path d="M14 13h2" />
    <path d="M14 17h2" />
  </>
);
const FileJson = createIcon(
  <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" />
    <path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" />
  </>
);
const Trash2 = createIcon(
  <>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </>
);
const Filter = createIcon(<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />);
const Code2 = createIcon(
  <>
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </>
);
const Server = createIcon(
  <>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </>
);
const ShieldAlert = createIcon(
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </>
);
const Gauge = createIcon(
  <>
    <path d="m12 14 4-4" />
    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
  </>
);

// ============================================================================
// NODE DEFINITIONS & INITIAL CONFIGURATION
// ============================================================================
const NODE_CONFIGS = {
  'ESP32-NODE-01': {
    id: 'ESP32-NODE-01',
    name: 'Cold Storage Unit A',
    location: 'Zone 1 — Walk-In Chiller',
    nominalTemp: 4.0,
    tempStdBase: 0.22,
    nominalPower: 180,
    powerStdBase: 6.5,
    nominalVoltage: 230.0,
    baseRssi: -58,
    freeHeap: 248.4,
    mac: '24:6F:28:1A:9C:01',
    firmware: 'v2.4.1-edge'
  },
  'ESP32-NODE-02': {
    id: 'ESP32-NODE-02',
    name: 'Main Distribution Panel',
    location: 'Zone 2 — Electrical Room',
    nominalTemp: 38.5,
    tempStdBase: 0.45,
    nominalPower: 1450,
    powerStdBase: 28.0,
    nominalVoltage: 228.0,
    baseRssi: -64,
    freeHeap: 236.8,
    mac: '24:6F:28:1A:9C:02',
    firmware: 'v2.4.1-edge'
  },
  'ESP32-NODE-03': {
    id: 'ESP32-NODE-03',
    name: 'Network & Server Rack',
    location: 'Zone 3 — Comms Closet',
    nominalTemp: 27.0,
    tempStdBase: 0.30,
    nominalPower: 620,
    powerStdBase: 14.0,
    nominalVoltage: 231.0,
    baseRssi: -51,
    freeHeap: 254.2,
    mac: '24:6F:28:1A:9C:03',
    firmware: 'v2.4.1-edge'
  }
};

const WINDOW_SIZE = 40;

// Helper: Box-Muller Gaussian random number generator
function gaussianRandom(mean = 0, stdev = 1) {
  const u = 1 - Math.random();
  const v = Math.random();
  const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return z * stdev + mean;
}

// Helper: Generate initial 35 points of clean historical data per node
function generateInitialHistory() {
  const now = Date.now();
  const historyByNode = {};

  Object.values(NODE_CONFIGS).forEach((cfg) => {
    const points = [];
    for (let i = 35; i >= 1; i--) {
      const ts = new Date(now - i * 1000);
      const temp = Number(gaussianRandom(cfg.nominalTemp, cfg.tempStdBase).toFixed(2));
      const voltage = Number(gaussianRandom(cfg.nominalVoltage, 0.8).toFixed(1));
      const power = Number(gaussianRandom(cfg.nominalPower, cfg.powerStdBase).toFixed(1));
      const current = Number((power / voltage).toFixed(2));
      const tempZ = Number(((temp - cfg.nominalTemp) / cfg.tempStdBase).toFixed(2));
      const powerZ = Number(((power - cfg.nominalPower) / cfg.powerStdBase).toFixed(2));
      const maxAbsZ = Math.max(Math.abs(tempZ), Math.abs(powerZ));

      points.push({
        seq: 36 - i,
        timestamp: ts.toISOString(),
        timeLabel: ts.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        nodeId: cfg.id,
        temp,
        power,
        voltage,
        current,
        tempMean: cfg.nominalTemp,
        tempStd: cfg.tempStdBase,
        powerMean: cfg.nominalPower,
        powerStd: cfg.powerStdBase,
        tempZ,
        powerZ,
        maxAbsZ,
        isAnomaly: false,
        faultMode: 'NOMINAL',
        rssi: Math.round(gaussianRandom(cfg.baseRssi, 1.5)),
        heapKB: Number((cfg.freeHeap + gaussianRandom(0, 0.8)).toFixed(1))
      });
    }
    historyByNode[cfg.id] = points;
  });

  return historyByNode;
}

// ============================================================================
// STATISTICAL ENGINE (MEAN, STD DEV, OLS REGRESSION)
// ============================================================================
function computeStats(values, fallbackMean = 0, fallbackStd = 1) {
  if (!values || values.length === 0) {
    return { mean: fallbackMean, std: fallbackStd, min: fallbackMean, max: fallbackMean };
  }
  const n = values.length;
  const mean = values.reduce((acc, val) => acc + val, 0) / n;
  const variance =
    values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / Math.max(1, n - 1);
  const std = Math.max(Math.sqrt(variance), fallbackStd * 0.35);
  const min = Math.min(...values);
  const max = Math.max(...values);
  return { mean, std, min, max };
}

// Ordinary Least Squares (OLS) Linear Regression over array of numbers
// Returns slope per step, intercept, R-squared, and fitted values
function computeOLS(values, sampleRateMs = 500) {
  const n = values.length;
  if (n < 3) {
    return { slopePerStep: 0, slopePerMin: 0, intercept: values[0] || 0, r2: 0, forecast5Min: values[n - 1] || 0, line: values };
  }

  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumXX = 0;

  for (let i = 0; i < n; i++) {
    sumX += i;
    sumY += values[i];
    sumXY += i * values[i];
    sumXX += i * i;
  }

  const denominator = n * sumXX - sumX * sumX;
  const slopePerStep = denominator === 0 ? 0 : (n * sumXY - sumX * sumY) / denominator;
  const intercept = (sumY - slopePerStep * sumX) / n;

  // Compute R^2
  const meanY = sumY / n;
  let ssTot = 0;
  let ssRes = 0;
  const line = [];

  for (let i = 0; i < n; i++) {
    const fitted = intercept + slopePerStep * i;
    line.push(fitted);
    ssTot += Math.pow(values[i] - meanY, 2);
    ssRes += Math.pow(values[i] - fitted, 2);
  }

  const r2 = ssTot === 0 ? 0 : Math.max(0, Math.min(1, 1 - ssRes / ssTot));

  // Convert slopePerStep into rate per minute
  // (To make demo intuitive, 1 step represents 1 telemetry interval; we scale to 60 steps/min equivalent)
  const stepsPerMin = 60000 / Math.max(250, sampleRateMs);
  const slopePerMin = slopePerStep * (stepsPerMin * 0.25); // scaled for realistic physical thermal inertia
  const currentVal = values[n - 1];
  const forecast5Min = currentVal + slopePerMin * 5;

  return {
    slopePerStep,
    slopePerMin,
    intercept,
    r2,
    forecast5Min,
    line
  };
}

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================
export default function App() {
  const React = HostReact;
  // Navigation & Simulation State
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedNodeId, setSelectedNodeId] = useState('ESP32-NODE-01');
  const [isRunning, setIsRunning] = useState(true);
  const [sampleRateMs, setSampleRateMs] = useState(500);
  const [zThreshold, setZThreshold] = useState(2.2);
  const [showOlsLine, setShowOlsLine] = useState(true);
  const [chartMetric, setChartMetric] = useState('dual'); // 'dual' | 'temp' | 'power'

  // Fault Injection State per Node
  const [nodeFaults, setNodeFaults] = useState({
    'ESP32-NODE-01': { mode: 'NOMINAL', intensity: 0 },
    'ESP32-NODE-02': { mode: 'NOMINAL', intensity: 0 },
    'ESP32-NODE-03': { mode: 'NOMINAL', intensity: 0 }
  });

  // Telemetry History & Anomaly Logs
  const [telemetryByNode, setTelemetryByNode] = useState(() => generateInitialHistory());
  const [anomalyLogs, setAnomalyLogs] = useState([
    {
      id: 'ANOM-INIT-1',
      timestamp: new Date(Date.now() - 140000).toLocaleTimeString([], { hour12: false }),
      isoTime: new Date(Date.now() - 140000).toISOString(),
      nodeId: 'ESP32-NODE-02',
      metric: 'Temperature (°C)',
      observed: '40.12 °C',
      mean: '38.52 °C',
      zScore: 2.84,
      faultMode: 'THERMAL_SPIKE',
      severity: 'WARNING'
    },
    {
      id: 'ANOM-INIT-2',
      timestamp: new Date(Date.now() - 75000).toLocaleTimeString([], { hour12: false }),
      isoTime: new Date(Date.now() - 75000).toISOString(),
      nodeId: 'ESP32-NODE-01',
      metric: 'Power Draw (W)',
      observed: '214.6 W',
      mean: '180.4 W',
      zScore: 3.45,
      faultMode: 'VOLTAGE_SAG',
      severity: 'CRITICAL'
    }
  ]);

  // Interactive SVG Chart Hover State
  const [hoverIndex, setHoverIndex] = useState(null);

  // Anomaly Log Filter State
  const [logNodeFilter, setLogNodeFilter] = useState('ALL');
  const [logSeverityFilter, setLogSeverityFilter] = useState('ALL');

  // Firmware Generator State
  const [fwConfig, setFwConfig] = useState({
    nodeId: 'ESP32-NODE-01',
    wifiSsid: 'Engineering_Lab_IoT',
    supabaseUrl: 'https://xyzcompany.supabase.co',
    tempPin: 4,
    currentPin: 34,
    voltagePin: 35,
    statusLedPin: 2,
    intervalMs: 1000,
    zScoreAlertLimit: 2.2
  });

  // Copy / Export Feedback State
  const [copiedId, setCopiedId] = useState(null);
  const [exportToast, setExportToast] = useState(null);

  // Refs for mutable simulation tracking inside setInterval
  const faultRef = useRef(nodeFaults);
  useEffect(() => {
    faultRef.current = nodeFaults;
  }, [nodeFaults]);

  const zThresholdRef = useRef(zThreshold);
  useEffect(() => {
    zThresholdRef.current = zThreshold;
  }, [zThreshold]);

  // Trigger a fault mode on the currently selected node
  const triggerFault = useCallback((mode) => {
    setNodeFaults((prev) => ({
      ...prev,
      [selectedNodeId]: {
        mode,
        intensity: mode === 'NOMINAL' ? 0 : 1
      }
    }));
  }, [selectedNodeId]);

  // Real-time Simulation Tick
  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      const now = new Date();
      const timeLabel = now.toLocaleTimeString([], {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      const isoTime = now.toISOString();

      const newAnomalies = [];

      setTelemetryByNode((prevHistory) => {
        const updatedHistory = { ...prevHistory };

        Object.keys(NODE_CONFIGS).forEach((nodeId) => {
          const cfg = NODE_CONFIGS[nodeId];
          const nodeHistory = prevHistory[nodeId] || [];
          const lastPoint = nodeHistory[nodeHistory.length - 1];
          const currentFault = faultRef.current[nodeId] || { mode: 'NOMINAL', intensity: 0 };

          // Calculate baseline stats from nominal/clean window so ongoing faults don't immediately mask themselves
          const recentTemps = nodeHistory.slice(-25).map((p) => p.temp);
          const recentPowers = nodeHistory.slice(-25).map((p) => p.power);

          const rawTempStats = computeStats(recentTemps, cfg.nominalTemp, cfg.tempStdBase);
          const rawPowerStats = computeStats(recentPowers, cfg.nominalPower, cfg.powerStdBase);

          // Blend with physical baseline calibration to prevent variance inflation during sustained faults
          const effectiveTempMean = cfg.nominalTemp * 0.65 + rawTempStats.mean * 0.35;
          const effectiveTempStd = Math.max(cfg.tempStdBase, rawTempStats.std * 0.55);

          const effectivePowerMean = cfg.nominalPower * 0.65 + rawPowerStats.mean * 0.35;
          const effectivePowerStd = Math.max(cfg.powerStdBase, rawPowerStats.std * 0.55);

          let nextTemp = gaussianRandom(cfg.nominalTemp, cfg.tempStdBase);
          let nextVoltage = gaussianRandom(cfg.nominalVoltage, 0.7);
          let nextPower = gaussianRandom(cfg.nominalPower, cfg.powerStdBase);

          // Apply active hardware fault injection
          if (currentFault.mode === 'THERMAL_SPIKE') {
            const prevTempOffset = Math.max(0, (lastPoint?.temp || cfg.nominalTemp) - cfg.nominalTemp);
            const rampedOffset = Math.min(cfg.tempStdBase * 6.5, prevTempOffset + cfg.tempStdBase * 0.85);
            nextTemp = cfg.nominalTemp + rampedOffset + gaussianRandom(0, cfg.tempStdBase * 0.5);
            nextPower = cfg.nominalPower + rampedOffset * 12 + gaussianRandom(0, cfg.powerStdBase);
          } else if (currentFault.mode === 'VOLTAGE_SAG') {
            nextVoltage = gaussianRandom(194.5, 2.1);
            nextPower = cfg.nominalPower + cfg.powerStdBase * 4.2 + gaussianRandom(0, cfg.powerStdBase * 0.8);
            nextTemp = cfg.nominalTemp + cfg.tempStdBase * 1.4 + gaussianRandom(0, cfg.tempStdBase * 0.4);
          } else if (currentFault.mode === 'SENSOR_NOISE') {
            nextTemp = gaussianRandom(cfg.nominalTemp, cfg.tempStdBase * 3.8);
            nextPower = gaussianRandom(cfg.nominalPower, cfg.powerStdBase * 3.6);
            nextVoltage = gaussianRandom(cfg.nominalVoltage, 4.5);
          } else {
            // Smooth recovery toward nominal if recovering from a spike
            if (lastPoint && Math.abs(lastPoint.temp - cfg.nominalTemp) > cfg.tempStdBase * 2) {
              nextTemp = lastPoint.temp * 0.55 + cfg.nominalTemp * 0.45 + gaussianRandom(0, cfg.tempStdBase * 0.3);
            }
          }

          nextTemp = Number(nextTemp.toFixed(2));
          nextVoltage = Number(nextVoltage.toFixed(1));
          nextPower = Number(nextPower.toFixed(1));
          const nextCurrent = Number((nextPower / Math.max(100, nextVoltage)).toFixed(2));

          const tempZ = Number(((nextTemp - effectiveTempMean) / effectiveTempStd).toFixed(2));
          const powerZ = Number(((nextPower - effectivePowerMean) / effectivePowerStd).toFixed(2));
          const maxAbsZ = Number(Math.max(Math.abs(tempZ), Math.abs(powerZ)).toFixed(2));

          const threshold = zThresholdRef.current;
          const isAnomaly = maxAbsZ >= threshold;

          const newPoint = {
            seq: (lastPoint?.seq || 0) + 1,
            timestamp: isoTime,
            timeLabel,
            nodeId,
            temp: nextTemp,
            power: nextPower,
            voltage: nextVoltage,
            current: nextCurrent,
            tempMean: Number(effectiveTempMean.toFixed(2)),
            tempStd: Number(effectiveTempStd.toFixed(2)),
            powerMean: Number(effectivePowerMean.toFixed(1)),
            powerStd: Number(effectivePowerStd.toFixed(1)),
            tempZ,
            powerZ,
            maxAbsZ,
            isAnomaly,
            faultMode: currentFault.mode,
            rssi: Math.round(gaussianRandom(cfg.baseRssi, 1.5)),
            heapKB: Number((cfg.freeHeap + gaussianRandom(0, 0.9)).toFixed(1))
          };

          updatedHistory[nodeId] = [...nodeHistory.slice(-(WINDOW_SIZE - 1)), newPoint];

          if (isAnomaly) {
            const isTempPrimary = Math.abs(tempZ) >= Math.abs(powerZ);
            const primaryZ = isTempPrimary ? tempZ : powerZ;
            const severity = Math.abs(primaryZ) >= threshold + 0.8 ? 'CRITICAL' : 'WARNING';

            newAnomalies.push({
              id: `ANOM-${now.getTime()}-${nodeId}`,
              timestamp: timeLabel,
              isoTime,
              nodeId,
              metric: isTempPrimary ? 'Temperature (°C)' : 'Power Draw (W)',
              observed: isTempPrimary ? `${nextTemp.toFixed(2)} °C` : `${nextPower.toFixed(1)} W`,
              mean: isTempPrimary ? `${effectiveTempMean.toFixed(2)} °C` : `${effectivePowerMean.toFixed(1)} W`,
              zScore: primaryZ,
              faultMode: currentFault.mode,
              severity
            });
          }
        });

        return updatedHistory;
      });

      if (newAnomalies.length > 0) {
        setAnomalyLogs((prev) => [...newAnomalies, ...prev].slice(0, 120));
      }
    }, sampleRateMs);

    return () => clearInterval(timer);
  }, [isRunning, sampleRateMs]);

  // Active Node Data & Derived Statistics
  const activeNodeCfg = NODE_CONFIGS[selectedNodeId];
  const activeSeries = telemetryByNode[selectedNodeId] || [];
  const latestPoint = activeSeries[activeSeries.length - 1] || {};
  const activeFault = nodeFaults[selectedNodeId]?.mode || 'NOMINAL';

  const tempValues = useMemo(() => activeSeries.map((d) => d.temp), [activeSeries]);
  const powerValues = useMemo(() => activeSeries.map((d) => d.power), [activeSeries]);

  const tempStats = useMemo(
    () => computeStats(tempValues, activeNodeCfg.nominalTemp, activeNodeCfg.tempStdBase),
    [tempValues, activeNodeCfg]
  );
  const powerStats = useMemo(
    () => computeStats(powerValues, activeNodeCfg.nominalPower, activeNodeCfg.powerStdBase),
    [powerValues, activeNodeCfg]
  );

  const tempOls = useMemo(
    () => computeOLS(tempValues, sampleRateMs),
    [tempValues, sampleRateMs]
  );
  const powerOls = useMemo(
    () => computeOLS(powerValues, sampleRateMs),
    [powerValues, sampleRateMs]
  );

  // Filtered Anomaly Logs
  const filteredAnomalies = useMemo(() => {
    return anomalyLogs.filter((item) => {
      const matchNode = logNodeFilter === 'ALL' || item.nodeId === logNodeFilter;
      const matchSev = logSeverityFilter === 'ALL' || item.severity === logSeverityFilter;
      return matchNode && matchSev;
    });
  }, [anomalyLogs, logNodeFilter, logSeverityFilter]);

  // Copy to Clipboard Utility
  const handleCopyText = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  // File Download Utility (CSV / JSON / INO / SQL)
  const triggerFileDownload = (content, filename, mimeType) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setExportToast(`Exported ${filename}`);
    setTimeout(() => setExportToast(null), 3000);
  };

  // Export Telemetry CSV
  const handleExportTelemetryCSV = () => {
    const allRows = Object.values(telemetryByNode).flat();
    const headers = [
      'seq',
      'timestamp',
      'node_id',
      'temperature_c',
      'power_w',
      'voltage_v',
      'current_a',
      'temp_rolling_mean',
      'temp_rolling_std',
      'temp_z_score',
      'power_z_score',
      'is_anomaly',
      'fault_mode',
      'rssi_dbm',
      'free_heap_kb'
    ];
    const csvLines = [
      headers.join(','),
      ...allRows.map((r) =>
        [
          r.seq,
          r.timestamp,
          r.nodeId,
          r.temp,
          r.power,
          r.voltage,
          r.current,
          r.tempMean,
          r.tempStd,
          r.tempZ,
          r.powerZ,
          r.isAnomaly,
          r.faultMode,
          r.rssi,
          r.heapKB
        ].join(',')
      )
    ];
    triggerFileDownload(csvLines.join('\n'), `edgepulse_telemetry_${Date.now()}.csv`, 'text/csv;charset=utf-8;');
  };

  // Export Telemetry & Anomalies JSON
  const handleExportDatasetJSON = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      project: 'EdgePulse — ESP32 Telemetry & Anomaly Analytics Studio',
      zScoreThreshold: zThreshold,
      nodes: NODE_CONFIGS,
      telemetryWindow: telemetryByNode,
      anomalyEvents: anomalyLogs
    };
    triggerFileDownload(
      JSON.stringify(payload, null, 2),
      `edgepulse_dataset_${Date.now()}.json`,
      'application/json'
    );
  };

  // Dynamic C++ Firmware Code Generator
  const generatedFirmwareCode = useMemo(() => {
    return `/**
 * ============================================================================
 * EdgePulse — ESP32 Edge Telemetry & Statistical Anomaly Node Firmware
 * Target Node : ${fwConfig.nodeId}
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
const char* WIFI_SSID     = "${fwConfig.wifiSsid}";
const char* WIFI_PASSWORD = "YOUR_WIFI_PASSWORD";
const char* SUPABASE_URL  = "${fwConfig.supabaseUrl}/rest/v1/telemetry_logs";
const char* SUPABASE_KEY  = "YOUR_SUPABASE_SERVICE_ROLE_OR_ANON_KEY";
const char* NODE_ID       = "${fwConfig.nodeId}";

// --- Hardware Pin Assignments ---
#define PIN_DHT_SENSOR    ${fwConfig.tempPin}     // Digital Temperature Sensor (DHT22)
#define PIN_ACS712_ADC    ${fwConfig.currentPin}    // Analog Current Sensor (ADC1)
#define PIN_ZMPT101B_ADC  ${fwConfig.voltagePin}    // Analog AC Voltage Sensor (ADC1)
#define PIN_STATUS_LED    ${fwConfig.statusLedPin}     // On-board Anomaly Alert LED

#define DHTTYPE           DHT22
#define SAMPLE_INTERVAL   ${fwConfig.intervalMs}UL
#define WINDOW_SIZE       25
#define Z_SCORE_THRESHOLD ${Number(fwConfig.zScoreAlertLimit).toFixed(2)}f

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

  Serial.printf("[EdgePulse] Booting Node %s...\\n", NODE_ID);
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  while (WiFi.status() != WL_CONNECTED) {
    delay(400);
    Serial.print(".");
  }
  Serial.printf("\\n[EdgePulse] Wi-Fi Connected! IP: %s | RSSI: %d dBm\\n",
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
      Serial.printf("[EdgePulse] Supabase POST Error: HTTP %d\\n", httpResponseCode);
    }
    http.end();
  }
}`;
  }, [fwConfig]);

  // Supabase SQL Schema
  const supabaseSchemaCode = `-- ============================================================================
-- EdgePulse — Supabase PostgreSQL Telemetry & Anomaly Analytics Schema
-- Includes: Time-Series Tables, BRIN/B-Tree Indexes, RLS Policies & PL/pgSQL Trigger
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Primary ESP32 High-Frequency Telemetry Table
CREATE TABLE IF NOT EXISTS public.telemetry_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    node_id VARCHAR(32) NOT NULL,
    seq BIGINT NOT NULL DEFAULT 0,
    temperature_c NUMERIC(6, 2) NOT NULL,
    voltage_v NUMERIC(6, 2) NOT NULL,
    current_a NUMERIC(6, 2) NOT NULL,
    power_w NUMERIC(8, 2) NOT NULL,
    rolling_mean NUMERIC(6, 2),
    z_score NUMERIC(6, 2) NOT NULL DEFAULT 0.00,
    is_anomaly BOOLEAN NOT NULL DEFAULT FALSE,
    rssi_dbm SMALLINT,
    free_heap_kb NUMERIC(6, 1)
);

-- 2. Dedicated Statistical Anomaly Events Audit Table
CREATE TABLE IF NOT EXISTS public.anomaly_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    detected_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    telemetry_id UUID REFERENCES public.telemetry_logs(id) ON DELETE CASCADE,
    node_id VARCHAR(32) NOT NULL,
    metric_name VARCHAR(32) NOT NULL,
    observed_value NUMERIC(8, 2) NOT NULL,
    baseline_mean NUMERIC(8, 2) NOT NULL,
    z_score NUMERIC(6, 2) NOT NULL,
    severity VARCHAR(16) NOT NULL CHECK (severity IN ('WARNING', 'CRITICAL')),
    resolved BOOLEAN NOT NULL DEFAULT FALSE
);

-- 3. High-Performance Time-Series Indexes
CREATE INDEX IF NOT EXISTS idx_telemetry_node_created
    ON public.telemetry_logs (node_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_telemetry_brin_created
    ON public.telemetry_logs USING BRIN (created_at);

CREATE INDEX IF NOT EXISTS idx_anomaly_events_severity
    ON public.anomaly_events (node_id, severity, detected_at DESC);

-- 4. PL/pgSQL Trigger Function for Automated Server-Side Anomaly Auditing
CREATE OR REPLACE FUNCTION public.fn_audit_telemetry_anomaly()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_severity VARCHAR(16);
BEGIN
    IF ABS(NEW.z_score) >= ${zThreshold.toFixed(2)} THEN
        NEW.is_anomaly := TRUE;
        v_severity := CASE WHEN ABS(NEW.z_score) >= ${(zThreshold + 0.8).toFixed(2)} THEN 'CRITICAL' ELSE 'WARNING' END;

        INSERT INTO public.anomaly_events (
            telemetry_id, node_id, metric_name, observed_value, baseline_mean, z_score, severity
        ) VALUES (
            NEW.id,
            NEW.node_id,
            'temperature_c',
            NEW.temperature_c,
            COALESCE(NEW.rolling_mean, NEW.temperature_c),
            NEW.z_score,
            v_severity
        );
    END IF;
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_telemetry_anomaly_check ON public.telemetry_logs;
CREATE TRIGGER trg_telemetry_anomaly_check
    BEFORE INSERT ON public.telemetry_logs
    FOR EACH ROW
    EXECUTE FUNCTION public.fn_audit_telemetry_anomaly();

-- 5. Row-Level Security (RLS) Policies
ALTER TABLE public.telemetry_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.anomaly_events ENABLE ROW LEVEL SECURITY;

-- Allow authenticated dashboard users to read live telemetry
CREATE POLICY "Allow public read access to telemetry_logs"
    ON public.telemetry_logs FOR SELECT
    USING (true);

-- Allow ESP32 Edge Nodes (via service_role or IoT API key) to insert logs
CREATE POLICY "Allow edge device telemetry ingestion"
    ON public.telemetry_logs FOR INSERT
    WITH CHECK (node_id LIKE 'ESP32-NODE-%');

CREATE POLICY "Allow public read access to anomaly_events"
    ON public.anomaly_events FOR SELECT
    USING (true);

-- 6. Enable Supabase Realtime Broadcast
ALTER PUBLICATION supabase_realtime ADD TABLE public.telemetry_logs;
ALTER PUBLICATION supabase_realtime ADD TABLE public.anomaly_events;`;

  // ============================================================================
  // SVG DUAL TIME-SERIES CHART GEOMETRY CALCULATIONS
  // ============================================================================
  const svgWidth = 860;
  const svgHeight = 300;
  const padLeft = 52;
  const padRight = 54;
  const padTop = 24;
  const padBottom = 34;
  const plotW = svgWidth - padLeft - padRight;
  const plotH = svgHeight - padTop - padBottom;

  // Temperature Y-Domain
  const tempBandLow = tempStats.mean - zThreshold * tempStats.std;
  const tempBandHigh = tempStats.mean + zThreshold * tempStats.std;
  const minTempY = Math.min(tempStats.min, tempBandLow, activeNodeCfg.nominalTemp - activeNodeCfg.tempStdBase * 4) - 0.6;
  const maxTempY = Math.max(tempStats.max, tempBandHigh, activeNodeCfg.nominalTemp + activeNodeCfg.tempStdBase * 4) + 0.6;

  // Power Y-Domain
  const minPowerY = Math.min(powerStats.min, activeNodeCfg.nominalPower - activeNodeCfg.powerStdBase * 4) - 15;
  const maxPowerY = Math.max(powerStats.max, activeNodeCfg.nominalPower + activeNodeCfg.powerStdBase * 4) + 15;

  const getX = (index, total) => {
    if (total <= 1) return padLeft;
    return padLeft + (index / (total - 1)) * plotW;
  };

  const getTempY = (val) => {
    const ratio = (val - minTempY) / Math.max(0.001, maxTempY - minTempY);
    return padTop + plotH - Math.max(0, Math.min(1, ratio)) * plotH;
  };

  const getPowerY = (val) => {
    const ratio = (val - minPowerY) / Math.max(0.001, maxPowerY - minPowerY);
    return padTop + plotH - Math.max(0, Math.min(1, ratio)) * plotH;
  };

  const tempPointsStr = activeSeries
    .map((pt, idx) => `${getX(idx, activeSeries.length).toFixed(1)},${getTempY(pt.temp).toFixed(1)}`)
    .join(' ');

  const powerPointsStr = activeSeries
    .map((pt, idx) => `${getX(idx, activeSeries.length).toFixed(1)},${getPowerY(pt.power).toFixed(1)}`)
    .join(' ');

  const olsPointsStr = tempOls.line
    .map((val, idx) => `${getX(idx, tempOls.line.length).toFixed(1)},${getTempY(val).toFixed(1)}`)
    .join(' ');

  const bandTopY = getTempY(tempBandHigh);
  const bandBottomY = getTempY(tempBandLow);
  const meanLineY = getTempY(tempStats.mean);

  const inspectedPoint =
    hoverIndex !== null && activeSeries[hoverIndex]
      ? activeSeries[hoverIndex]
      : latestPoint;

  const isCurrentNodeAnomalous = (latestPoint?.maxAbsZ || 0) >= zThreshold;
  const estDailyKwh = ((latestPoint?.power || activeNodeCfg.nominalPower) * 24) / 1000;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Export Toast Notification */}
      {exportToast && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-emerald-500 text-slate-950 px-4 py-2.5 rounded-lg shadow-xl font-medium text-sm animate-bounce">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{exportToast}</span>
        </div>
      )}

      {/* ====================================================================
          1. TOP NAVIGATION & TELEMETRY STATUS BAR
         ==================================================================== */}
      <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          {/* Brand Title & Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-inner">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base sm:text-lg font-bold tracking-tight text-white">
                    EdgePulse <span className="text-slate-500 font-mono font-normal">//</span>{' '}
                    <span className="text-emerald-400">IoT Telemetry & Anomaly Studio</span>
                  </h1>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
                    v2.4-Portfolio
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Virtual ESP32 Cluster Emulator • Rolling Z-Score & OLS Forecasting • Supabase Integration
                </p>
              </div>
            </div>

            {/* Mobile Play/Pause Toggle */}
            <button
              onClick={() => setIsRunning((r) => !r)}
              className={`lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all ${
                isRunning
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40'
                  : 'bg-amber-500/15 text-amber-300 border-amber-500/40'
              }`}
            >
              {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isRunning ? 'LIVE' : 'PAUSED'}
            </button>
          </div>

          {/* Right Controls: Simulation Status, Sampling Frequency & Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-2.5">
            {/* Stream Status & Sampling Selector */}
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-lg p-1">
              <button
                onClick={() => setIsRunning((r) => !r)}
                className={`hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all ${
                  isRunning
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}
                title="Toggle Virtual ESP32 Telemetry Stream"
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isRunning ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'
                  }`}
                />
                {isRunning ? 'STREAMING' : 'PAUSED'}
              </button>

              <div className="flex items-center gap-1 px-2 text-xs text-slate-400 font-mono">
                <span>RATE:</span>
                {[250, 500, 1000].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setSampleRateMs(rate)}
                    className={`px-2 py-0.5 rounded text-xs font-mono transition-colors ${
                      sampleRateMs === rate
                        ? 'bg-slate-800 text-emerald-400 font-semibold border border-slate-700'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {rate}ms
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex flex-wrap items-center gap-1 bg-slate-900/90 border border-slate-800 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'dashboard'
                    ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Dashboard & Analytics</span>
              </button>

              <button
                onClick={() => setActiveTab('anomalies')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'anomalies'
                    ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Anomaly Log & Export</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    activeTab === 'anomalies'
                      ? 'bg-slate-950 text-emerald-400'
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}
                >
                  {anomalyLogs.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('firmware')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'firmware'
                    ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>ESP32 Firmware (.ino)</span>
              </button>

              <button
                onClick={() => setActiveTab('schema')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'schema'
                    ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>Supabase Schema (.sql)</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. NODE SELECTOR & HARDWARE FAULT INJECTION BAR
         ==================================================================== */}
      <section className="bg-slate-900/40 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
          {/* Edge Node Selector Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mr-1">
              <Server className="w-3.5 h-3.5 text-emerald-400" />
              Edge Nodes:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1">
              {Object.values(NODE_CONFIGS).map((node) => {
                const nodeSeries = telemetryByNode[node.id] || [];
                const lastPt = nodeSeries[nodeSeries.length - 1];
                const fault = nodeFaults[node.id]?.mode || 'NOMINAL';
                const isSelected = selectedNodeId === node.id;
                const hasAlert = (lastPt?.maxAbsZ || 0) >= zThreshold;

                return (
                  <button
                    key={node.id}
                    onClick={() => {
                      setSelectedNodeId(node.id);
                      setFwConfig((prev) => ({ ...prev, nodeId: node.id }));
                    }}
                    className={`text-left px-3 py-2 rounded-lg border transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-slate-900 border-emerald-500/60 shadow-md shadow-emerald-500/5'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            hasAlert
                              ? 'bg-rose-500 animate-ping'
                              : fault !== 'NOMINAL'
                              ? 'bg-amber-400'
                              : 'bg-emerald-400'
                          }`}
                        />
                        <span className="font-mono text-xs font-bold text-white truncate">
                          {node.id}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">{node.name}</p>
                    </div>

                    <div className="text-right font-mono shrink-0">
                      <div
                        className={`text-xs font-semibold ${
                          hasAlert ? 'text-rose-400' : 'text-emerald-400'
                        }`}
                      >
                        {lastPt ? `${lastPt.temp.toFixed(1)}°C` : `${node.nominalTemp}°C`}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {lastPt ? `${lastPt.power.toFixed(0)}W` : `${node.nominalPower}W`}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hardware Fault Injection Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-2 xl:pt-0 border-t xl:border-t-0 border-slate-800/80">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mr-1">
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              Fault Simulator ({selectedNodeId}):
            </span>

            <button
              onClick={() => triggerFault('THERMAL_SPIKE')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                activeFault === 'THERMAL_SPIKE'
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/60 shadow-sm shadow-rose-500/20'
                  : 'bg-slate-900 hover:bg-rose-500/10 text-slate-300 hover:text-rose-300 border-slate-800'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-rose-400" />
              <span>Inject Thermal Spike</span>
            </button>

            <button
              onClick={() => triggerFault('VOLTAGE_SAG')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                activeFault === 'VOLTAGE_SAG'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-sm shadow-amber-500/20'
                  : 'bg-slate-900 hover:bg-amber-500/10 text-slate-300 hover:text-amber-300 border-slate-800'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Simulate Voltage Sag</span>
            </button>

            <button
              onClick={() => triggerFault('SENSOR_NOISE')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                activeFault === 'SENSOR_NOISE'
                  ? 'bg-purple-500/20 text-purple-300 border-purple-500/60 shadow-sm shadow-purple-500/20'
                  : 'bg-slate-900 hover:bg-purple-500/10 text-slate-300 hover:text-purple-300 border-slate-800'
              }`}
            >
              <Radio className="w-3.5 h-3.5 text-purple-400" />
              <span>Inject Sensor Noise</span>
            </button>

            <button
              onClick={() => triggerFault('NOMINAL')}
              disabled={activeFault === 'NOMINAL'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                activeFault === 'NOMINAL'
                  ? 'bg-slate-900/40 text-slate-600 border-slate-800/50 cursor-not-allowed'
                  : 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border-emerald-500/40'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Normalize Hardware</span>
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          MAIN CONTENT CONTAINER
         ==================================================================== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* ==================================================================
            TAB 1: DASHBOARD & REAL-TIME DATA ANALYTICS
           ================================================================== */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Active Fault Banner if non-nominal */}
            {activeFault !== 'NOMINAL' && (
              <div className="bg-rose-500/10 border border-rose-500/40 rounded-xl px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 animate-pulse" />
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold">
                      Active Hardware Fault Injection // {selectedNodeId}
                    </span>
                    <p className="text-xs text-slate-300">
                      Mode: <strong className="font-mono text-white">{activeFault}</strong> — Watch the rolling Z-Score (Z = (x − μ)/σ) and OLS trendline respond in real time.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => triggerFault('NOMINAL')}
                  className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-rose-500 text-slate-950 font-semibold text-xs hover:bg-rose-400 transition-colors shrink-0"
                >
                  Restore Nominal State
                </button>
              </div>
            )}

            {/* 4 KPI METRIC CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1: Temperature & OLS Regression Trend */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-slate-400">
                    Temperature ({selectedNodeId})
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono ${
                      Math.abs(tempOls.slopePerMin) > 0.35
                        ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                        : 'bg-slate-800 text-emerald-400'
                    }`}
                  >
                    {tempOls.slopePerMin > 0.1 ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : tempOls.slopePerMin < -0.1 ? (
                      <TrendingDown className="w-3 h-3" />
                    ) : (
                      <Minus className="w-3 h-3" />
                    )}
                    {tempOls.slopePerMin >= 0 ? '+' : ''}
                    {tempOls.slopePerMin.toFixed(2)}°C/m
                  </span>
                </div>

                <div className="my-1 flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-mono text-white">
                    {latestPoint.temp?.toFixed(2)}
                  </span>
                  <span className="text-sm font-mono text-slate-400">°C</span>
                </div>

                <div className="pt-3 mt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Target: {activeNodeCfg.nominalTemp.toFixed(1)}°C</span>
                  <span className="text-slate-300">
                    5m Forecast:{' '}
                    <strong className="text-emerald-400">
                      {tempOls.forecast5Min.toFixed(1)}°C
                    </strong>
                  </span>
                </div>
              </div>

              {/* Card 2: Real-Time Power & Voltage */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-slate-400">
                    Power & Line Voltage
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                      latestPoint.voltage < 208
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {latestPoint.voltage?.toFixed(1)} V • {latestPoint.current?.toFixed(2)} A
                  </span>
                </div>

                <div className="my-1 flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-mono text-white">
                    {latestPoint.power?.toFixed(1)}
                  </span>
                  <span className="text-sm font-mono text-slate-400">Watts</span>
                </div>

                <div className="pt-3 mt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Est. Load: {estDailyKwh.toFixed(1)} kWh/d</span>
                  <span className="text-slate-300">
                    Mean: <strong>{powerStats.mean.toFixed(0)}W</strong>
                  </span>
                </div>
              </div>

              {/* Card 3: Statistical Rolling Z-Score */}
              <div
                className={`rounded-xl p-4 flex flex-col justify-between border transition-colors ${
                  isCurrentNodeAnomalous
                    ? 'bg-rose-950/25 border-rose-500/50'
                    : 'bg-slate-900/70 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-slate-400">
                    Rolling Z-Score (|Z|)
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider ${
                      isCurrentNodeAnomalous
                        ? 'bg-rose-500 text-slate-950'
                        : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    }`}
                  >
                    {isCurrentNodeAnomalous ? 'ANOMALY DETECTED' : 'NOMINAL'}
                  </span>
                </div>

                <div className="my-1 flex items-baseline justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`text-3xl font-bold font-mono ${
                        isCurrentNodeAnomalous ? 'text-rose-400' : 'text-emerald-400'
                      }`}
                    >
                      {latestPoint.maxAbsZ?.toFixed(2)}
                    </span>
                    <span className="text-xs font-mono text-slate-400">σ</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    Limit: ±{zThreshold.toFixed(1)}σ
                  </span>
                </div>

                {/* Visual Z-Score Bar */}
                <div className="pt-2 mt-1">
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        isCurrentNodeAnomalous
                          ? 'bg-rose-500'
                          : latestPoint.maxAbsZ > zThreshold * 0.75
                          ? 'bg-amber-400'
                          : 'bg-emerald-400'
                      }`}
                      style={{
                        width: `${Math.min(100, ((latestPoint.maxAbsZ || 0) / 4.5) * 100)}%`
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5">
                    <span>Temp Z: {latestPoint.tempZ?.toFixed(2)}σ</span>
                    <span>Power Z: {latestPoint.powerZ?.toFixed(2)}σ</span>
                  </div>
                </div>
              </div>

              {/* Card 4: ESP32 Hardware Diagnostics */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-slate-400">
                    ESP32 Diagnostics
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400">
                    <Wifi className="w-3.5 h-3.5" />
                    {latestPoint.rssi} dBm
                  </span>
                </div>

                <div className="my-1 grid grid-cols-2 gap-2 font-mono">
                  <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg px-2.5 py-1.5">
                    <div className="text-[10px] text-slate-400">FREE HEAP</div>
                    <div className="text-sm font-bold text-white">{latestPoint.heapKB} KB</div>
                  </div>
                  <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg px-2.5 py-1.5">
                    <div className="text-[10px] text-slate-400">PACKETS RX</div>
                    <div className="text-sm font-bold text-emerald-400">#{latestPoint.seq}</div>
                  </div>
                </div>

                <div className="pt-2 mt-1 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>MAC: {activeNodeCfg.mac}</span>
                  <span className="text-emerald-400">0.0% Loss</span>
                </div>
              </div>
            </div>

            {/* INTERACTIVE SVG TIME-SERIES CHART + STATISTICAL SUMMARY PANEL */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left 2 Columns: Dual SVG Time-Series Chart */}
              <div className="lg:col-span-2 bg-slate-900/70 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
                {/* Chart Header & Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base font-bold text-white">
                        Real-Time Telemetry & Statistical Confidence Band
                      </h2>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-emerald-400">
                        N = {activeSeries.length} samples
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Shaded region shows rolling μ ± {zThreshold.toFixed(1)}σ normal operating envelope; pulsing red markers indicate |Z| ≥ {zThreshold.toFixed(1)}.
                    </p>
                  </div>

                  {/* Layer Toggles */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <button
                      onClick={() => setChartMetric('dual')}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        chartMetric === 'dual'
                          ? 'bg-emerald-500 text-slate-950 font-semibold'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      Dual (Temp + W)
                    </button>
                    <button
                      onClick={() => setChartMetric('temp')}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        chartMetric === 'temp'
                          ? 'bg-emerald-500 text-slate-950 font-semibold'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      Temp Only
                    </button>
                    <button
                      onClick={() => setShowOlsLine((v) => !v)}
                      className={`px-2.5 py-1 rounded text-xs font-mono border transition-colors ${
                        showOlsLine
                          ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                          : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}
                    >
                      OLS Trendline
                    </button>
                  </div>
                </div>

                {/* SVG Canvas */}
                <div className="relative w-full overflow-hidden bg-slate-950/80 border border-slate-800/90 rounded-lg p-2">
                  <svg
                    viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                    className="w-full h-64 sm:h-72 select-none overflow-visible"
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <defs>
                      <linearGradient id="tempBandGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.16" />
                        <stop offset="50%" stopColor="#10b981" stopOpacity="0.06" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.16" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Grid Lines & Left/Right Axis Labels */}
                    {[0, 0.25, 0.5, 0.75, 1].map((step, i) => {
                      const y = padTop + step * plotH;
                      const tempLabel = (maxTempY - step * (maxTempY - minTempY)).toFixed(1);
                      const powerLabel = (maxPowerY - step * (maxPowerY - minPowerY)).toFixed(0);
                      return (
                        <g key={i}>
                          <line
                            x1={padLeft}
                            y1={y}
                            x2={svgWidth - padRight}
                            y2={y}
                            stroke="#1e293b"
                            strokeDasharray="3 3"
                            strokeWidth="1"
                          />
                          {/* Left Axis: Temperature */}
                          <text
                            x={padLeft - 8}
                            y={y + 4}
                            textAnchor="end"
                            className="fill-emerald-400 font-mono text-[10px]"
                          >
                            {tempLabel}°C
                          </text>
                          {/* Right Axis: Power */}
                          {chartMetric === 'dual' && (
                            <text
                              x={svgWidth - padRight + 8}
                              y={y + 4}
                              textAnchor="start"
                              className="fill-amber-400 font-mono text-[10px]"
                            >
                              {powerLabel}W
                            </text>
                          )}
                        </g>
                      );
                    })}

                    {/* Shaded Rolling Mean ± k*Sigma Confidence Band */}
                    <rect
                      x={padLeft}
                      y={Math.min(bandTopY, bandBottomY)}
                      width={plotW}
                      height={Math.max(2, Math.abs(bandBottomY - bandTopY))}
                      fill="url(#tempBandGrad)"
                      stroke="#10b981"
                      strokeOpacity="0.25"
                      strokeDasharray="4 4"
                    />

                    {/* Rolling Mean Centerline */}
                    <line
                      x1={padLeft}
                      y1={meanLineY}
                      x2={svgWidth - padRight}
                      y2={meanLineY}
                      stroke="#10b981"
                      strokeOpacity="0.4"
                      strokeDasharray="2 4"
                      strokeWidth="1"
                    />

                    {/* Power Draw Line (Secondary Axis) */}
                    {chartMetric === 'dual' && activeSeries.length > 1 && (
                      <polyline
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="1.75"
                        strokeOpacity="0.75"
                        points={powerPointsStr}
                      />
                    )}

                    {/* OLS Linear Regression Trendline */}
                    {showOlsLine && tempOls.line.length > 1 && (
                      <polyline
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="1.75"
                        strokeDasharray="6 4"
                        points={olsPointsStr}
                      />
                    )}

                    {/* Primary Temperature Line */}
                    {activeSeries.length > 1 && (
                      <polyline
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={tempPointsStr}
                      />
                    )}

                    {/* Data Points & Pulsing Red Anomaly Markers */}
                    {activeSeries.map((pt, idx) => {
                      const cx = getX(idx, activeSeries.length);
                      const cy = getTempY(pt.temp);
                      const isPtAnomaly = pt.maxAbsZ >= zThreshold;

                      return (
                        <g key={pt.seq}>
                          {isPtAnomaly && (
                            <>
                              <circle
                                cx={cx}
                                cy={cy}
                                r="8"
                                fill="#f43f5e"
                                fillOpacity="0.28"
                              />
                              <circle
                                cx={cx}
                                cy={cy}
                                r="4.5"
                                fill="#f43f5e"
                                stroke="#0f172a"
                                strokeWidth="1.5"
                              />
                            </>
                          )}
                          {!isPtAnomaly && idx === activeSeries.length - 1 && (
                            <circle
                              cx={cx}
                              cy={cy}
                              r="4"
                              fill="#10b981"
                              stroke="#0f172a"
                              strokeWidth="1.5"
                            />
                          )}
                        </g>
                      );
                    })}

                    {/* Hover Inspection Crosshair */}
                    {hoverIndex !== null && activeSeries[hoverIndex] && (
                      <g>
                        <line
                          x1={getX(hoverIndex, activeSeries.length)}
                          y1={padTop}
                          x2={getX(hoverIndex, activeSeries.length)}
                          y2={padTop + plotH}
                          stroke="#94a3b8"
                          strokeWidth="1"
                          strokeDasharray="3 3"
                        />
                        <circle
                          cx={getX(hoverIndex, activeSeries.length)}
                          cy={getTempY(activeSeries[hoverIndex].temp)}
                          r="5"
                          fill="#ffffff"
                          stroke="#10b981"
                          strokeWidth="2"
                        />
                      </g>
                    )}

                    {/* Invisible Hover Slice Columns for Smooth Point Inspection */}
                    {activeSeries.map((_, idx) => {
                      const sliceW = plotW / Math.max(1, activeSeries.length);
                      const x = padLeft + idx * sliceW - sliceW / 2;
                      return (
                        <rect
                          key={idx}
                          x={Math.max(padLeft, x)}
                          y={padTop}
                          width={sliceW}
                          height={plotH}
                          fill="transparent"
                          className="cursor-crosshair"
                          onMouseEnter={() => setHoverIndex(idx)}
                        />
                      );
                    })}
                  </svg>

                  {/* Interactive Hover / Latest Point Inspector Bar */}
                  <div className="mt-2 pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                        {hoverIndex !== null ? 'INSPECTING SAMPLE' : 'LATEST SAMPLE'} #{inspectedPoint.seq}
                      </span>
                      <span className="text-slate-400">{inspectedPoint.timeLabel}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-emerald-400">
                        Temp: <strong>{inspectedPoint.temp?.toFixed(2)}°C</strong>
                      </span>
                      <span className="text-amber-400">
                        Power: <strong>{inspectedPoint.power?.toFixed(1)}W</strong>
                      </span>
                      <span className="text-slate-300">
                        Volt: <strong>{inspectedPoint.voltage?.toFixed(1)}V</strong>
                      </span>
                      <span
                        className={
                          inspectedPoint.maxAbsZ >= zThreshold
                            ? 'text-rose-400 font-bold'
                            : 'text-slate-400'
                        }
                      >
                        Z-Score: {inspectedPoint.maxAbsZ?.toFixed(2)}σ
                      </span>
                    </div>
                  </div>
                </div>

                {/* Chart Legend */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-0.5 bg-emerald-400 inline-block" />
                      Temperature (°C)
                    </span>
                    {chartMetric === 'dual' && (
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-0.5 bg-amber-400 inline-block" />
                        Power Draw (W)
                      </span>
                    )}
                    {showOlsLine && (
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-0.5 bg-sky-400 border-b border-dashed inline-block" />
                        OLS Regression Trend
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                      Anomaly (|Z| ≥ {zThreshold.toFixed(1)}σ)
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">
                    Hover chart to inspect individual packets
                  </span>
                </div>
              </div>

              {/* Right Column: Statistical Summary & Sensitivity Controls */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-base font-bold text-white flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-emerald-400" />
                      Statistical Engine
                    </h2>
                    <span className="text-xs font-mono text-slate-400">{selectedNodeId}</span>
                  </div>

                  {/* Z-Score Threshold Slider */}
                  <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-3.5 mb-4">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-medium text-slate-300">
                        Anomaly Sensitivity Threshold
                      </span>
                      <span className="font-mono font-bold text-emerald-400">
                        ±{zThreshold.toFixed(1)}σ
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1.5"
                      max="3.5"
                      step="0.1"
                      value={zThreshold}
                      onChange={(e) => setZThreshold(parseFloat(e.target.value))}
                      className="w-full accent-emerald-400 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                      <span>1.5σ (Strict)</span>
                      <span>2.2σ (Default)</span>
                      <span>3.5σ (Permissive)</span>
                    </div>
                  </div>

                  {/* Rolling Parameter Table */}
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-400">Temp Rolling Mean (μ)</span>
                      <span className="text-white font-semibold">{tempStats.mean.toFixed(2)} °C</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-400">Temp Std Deviation (σ)</span>
                      <span className="text-white font-semibold">±{tempStats.std.toFixed(2)} °C</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-400">Window Min / Max</span>
                      <span className="text-slate-200">
                        {tempStats.min.toFixed(1)}°C / {tempStats.max.toFixed(1)}°C
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-400">OLS Slope (ΔT / min)</span>
                      <span
                        className={
                          Math.abs(tempOls.slopePerMin) > 0.35
                            ? 'text-rose-400 font-bold'
                            : 'text-sky-400'
                        }
                      >
                        {tempOls.slopePerMin >= 0 ? '+' : ''}
                        {tempOls.slopePerMin.toFixed(2)} °C/min
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-400">OLS Goodness of Fit (R²)</span>
                      <span className="text-slate-200">{(tempOls.r2 * 100).toFixed(1)}%</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-slate-400">Power Rolling Mean (μ_P)</span>
                      <span className="text-amber-400 font-semibold">
                        {powerStats.mean.toFixed(1)} W (±{powerStats.std.toFixed(1)}W)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Live Serial Telemetry JSON Frame Preview */}
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 font-mono text-[11px]">
                  <div className="flex items-center justify-between text-slate-400 mb-1.5 pb-1 border-b border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      UART / REST JSON Frame
                    </span>
                    <span className="text-[10px] text-emerald-400">115200 baud</span>
                  </div>
                  <pre className="text-slate-300 overflow-x-auto leading-relaxed">
{`{
  "node": "${selectedNodeId}",
  "seq": ${latestPoint.seq || 1},
  "temp_c": ${latestPoint.temp?.toFixed(2)},
  "power_w": ${latestPoint.power?.toFixed(1)},
  "z_score": ${latestPoint.maxAbsZ?.toFixed(2)},
  "anomaly": ${isCurrentNodeAnomalous}
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            TAB 2: ANOMALY LOG & DATASET EXPORT
           ================================================================== */}
        {activeTab === 'anomalies' && (
          <div className="space-y-6">
            {/* Top Action & Dataset Export Bar */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  Statistical Anomaly Audit Log & Dataset Exporter
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Every telemetry packet exceeding |Z| ≥ {zThreshold.toFixed(1)}σ is captured below. Export the full time-series dataset as CSV or JSON for Python/Pandas, R, or Jupyter analysis.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={handleExportTelemetryCSV}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-all shadow-sm"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Download Telemetry CSV</span>
                </button>

                <button
                  onClick={handleExportDatasetJSON}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-semibold text-xs transition-all"
                >
                  <FileJson className="w-4 h-4 text-emerald-400" />
                  <span>Download Full JSON</span>
                </button>

                <button
                  onClick={() => setAnomalyLogs([])}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-rose-500/15 text-slate-400 hover:text-rose-300 border border-slate-800 text-xs transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Log</span>
                </button>
              </div>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-emerald-400" />
                  Filter Node:
                </span>
                {['ALL', 'ESP32-NODE-01', 'ESP32-NODE-02', 'ESP32-NODE-03'].map((nodeOption) => (
                  <button
                    key={nodeOption}
                    onClick={() => setLogNodeFilter(nodeOption)}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      logNodeFilter === nodeOption
                        ? 'bg-emerald-500 text-slate-950 font-semibold'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {nodeOption}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Severity:</span>
                {['ALL', 'WARNING', 'CRITICAL'].map((sev) => (
                  <button
                    key={sev}
                    onClick={() => setLogSeverityFilter(sev)}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      logSeverityFilter === sev
                        ? 'bg-slate-800 text-white font-semibold border border-slate-600'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {sev}
                  </button>
                ))}
              </div>
            </div>

            {/* Anomaly Events Table */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-950/60 text-[11px] font-mono uppercase text-slate-400">
                      <th className="py-3 px-4">Timestamp</th>
                      <th className="py-3 px-4">Node ID</th>
                      <th className="py-3 px-4">Metric</th>
                      <th className="py-3 px-4">Observed</th>
                      <th className="py-3 px-4">Rolling Mean (μ)</th>
                      <th className="py-3 px-4">Z-Score (Z)</th>
                      <th className="py-3 px-4">Fault Mode</th>
                      <th className="py-3 px-4">Severity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/70 text-xs font-mono">
                    {filteredAnomalies.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="py-12 text-center text-slate-400 font-sans">
                          No anomaly events match the current filter. Click{' '}
                          <strong className="text-rose-400">Inject Thermal Spike</strong> or{' '}
                          <strong className="text-amber-400">Simulate Voltage Sag</strong> above to test live anomaly capture!
                        </td>
                      </tr>
                    ) : (
                      filteredAnomalies.map((row) => (
                        <tr
                          key={row.id}
                          className="hover:bg-slate-800/40 transition-colors"
                        >
                          <td className="py-3 px-4 text-slate-300">{row.timestamp}</td>
                          <td className="py-3 px-4 font-bold text-white">{row.nodeId}</td>
                          <td className="py-3 px-4 text-slate-300">{row.metric}</td>
                          <td className="py-3 px-4 text-white font-semibold">{row.observed}</td>
                          <td className="py-3 px-4 text-slate-400">{row.mean}</td>
                          <td className="py-3 px-4 font-bold text-rose-400">
                            {row.zScore >= 0 ? `+${row.zScore}` : row.zScore}σ
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[10px]">
                              {row.faultMode}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                row.severity === 'CRITICAL'
                                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                              }`}
                            >
                              {row.severity}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'firmware' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Hardware Pin & Cloud Configuration Form */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 space-y-4 self-start">
              <div>
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  ESP32 Hardware Configuration
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Customize GPIO pins, ADC channels, and Supabase REST endpoint to generate production-ready Arduino C++ firmware.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-mono text-slate-400 mb-1">TARGET NODE ID</label>
                  <select
                    value={fwConfig.nodeId}
                    onChange={(e) => setFwConfig({ ...fwConfig, nodeId: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 font-mono text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="ESP32-NODE-01">ESP32-NODE-01 (Cold Storage)</option>
                    <option value="ESP32-NODE-02">ESP32-NODE-02 (Main Panel)</option>
                    <option value="ESP32-NODE-03">ESP32-NODE-03 (Server Rack)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-slate-400 mb-1">WIFI SSID</label>
                  <input
                    type="text"
                    value={fwConfig.wifiSsid}
                    onChange={(e) => setFwConfig({ ...fwConfig, wifiSsid: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 font-mono text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-mono text-slate-400 mb-1">SUPABASE PROJECT URL</label>
                  <input
                    type="text"
                    value={fwConfig.supabaseUrl}
                    onChange={(e) => setFwConfig({ ...fwConfig, supabaseUrl: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 font-mono text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-mono text-slate-400 mb-1">DHT22 TEMP GPIO</label>
                    <input
                      type="number"
                      value={fwConfig.tempPin}
                      onChange={(e) =>
                        setFwConfig({ ...fwConfig, tempPin: parseInt(e.target.value || '4', 10) })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 font-mono text-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-slate-400 mb-1">ACS712 ADC GPIO</label>
                    <input
                      type="number"
                      value={fwConfig.currentPin}
                      onChange={(e) =>
                        setFwConfig({
                          ...fwConfig,
                          currentPin: parseInt(e.target.value || '34', 10)
                        })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 font-mono text-emerald-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-mono text-slate-400 mb-1">ZMPT101B ADC GPIO</label>
                    <input
                      type="number"
                      value={fwConfig.voltagePin}
                      onChange={(e) =>
                        setFwConfig({
                          ...fwConfig,
                          voltagePin: parseInt(e.target.value || '35', 10)
                        })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 font-mono text-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-slate-400 mb-1">POLL INTERVAL (MS)</label>
                    <input
                      type="number"
                      step="250"
                      value={fwConfig.intervalMs}
                      onChange={(e) =>
                        setFwConfig({
                          ...fwConfig,
                          intervalMs: parseInt(e.target.value || '1000', 10)
                        })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 font-mono text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => handleCopyText(generatedFirmwareCode, 'firmware')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-all"
                >
                  {copiedId === 'firmware' ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied C++ Firmware to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Firmware Code (.ino)</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() =>
                    triggerFileDownload(
                      generatedFirmwareCode,
                      `esp32_edgepulse_${fwConfig.nodeId.toLowerCase()}.ino`,
                      'text/plain;charset=utf-8;'
                    )
                  }
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-all"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Download .ino Sketch</span>
                </button>
              </div>
            </div>

            {/* Right 2 Columns: Live Generated C++ Code */}
            <div className="lg:col-span-2 bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span>esp32_edgepulse_node.ino</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  ESP32-WROOM-32D • C++17 • ArduinoJson
                </span>
              </div>
              <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[600px]">
                <code>{generatedFirmwareCode}</code>
              </pre>
            </div>
          </div>
        )}

        {/* ==================================================================
            TAB 4: SUPABASE POSTGRESQL & RLS SCHEMA (.SQL)
           ================================================================== */}
        {activeTab === 'schema' && (
          <div className="space-y-4">
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-emerald-400" />
                  Supabase PostgreSQL Schema, Time-Series Indexes & PL/pgSQL Anomaly Trigger
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Paste this directly into the Supabase SQL Editor to provision the <code className="text-emerald-400">telemetry_logs</code> and <code className="text-emerald-400">anomaly_events</code> tables with Row-Level Security (RLS).
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={() => handleCopyText(supabaseSchemaCode, 'sql')}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-all"
                >
                  {copiedId === 'sql' ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied SQL!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Schema SQL</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() =>
                    triggerFileDownload(
                      supabaseSchemaCode,
                      'edgepulse_supabase_schema.sql',
                      'application/sql'
                    )
                  }
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-xs transition-all"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Download .sql</span>
                </button>
              </div>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden">
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>supabase/migrations/20261016_edgepulse_schema.sql</span>
                <span>PostgreSQL 15+ • BRIN + B-Tree Indexed • RLS Enabled</span>
              </div>
              <pre className="p-5 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                <code>{supabaseSchemaCode}</code>
              </pre>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}