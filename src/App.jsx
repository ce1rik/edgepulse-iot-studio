import ImportedReact, {
  useState as _useState,
  useEffect as _useEffect,
  useRef as _useRef,
  useMemo as _useMemo,
  useCallback as _useCallback
} from 'react';

// Use window.React if present so preview sandboxes don't hit a dual-React symbol mismatch
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
    // read-only namespace in strict ESM environments
  }
}

const React = HostReact;
const useState = HostReact.useState || _useState;
const useEffect = HostReact.useEffect || _useEffect;
const useRef = HostReact.useRef || _useRef;
const useMemo = HostReact.useMemo || _useMemo;
const useCallback = HostReact.useCallback || _useCallback;

// Inline SVG helper so the dashboard runs with zero external icon dependencies
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
const Usb = createIcon(
  <>
    <circle cx="10" cy="7" r="1" />
    <circle cx="4" cy="20" r="1" />
    <path d="M4.7 19.3 19 5" />
    <path d="m21 3-3 1 2 2Z" />
    <path d="M9.26 7.68 5 12l2 5" />
    <path d="m10 14 5 2 3.5-3.5" />
    <path d="m18 12 1-1 1 1-1 1Z" />
  </>
);
const Send = createIcon(
  <>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </>
);

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
    firmware: 'v2.5.0-usb'
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
    firmware: 'v2.5.0-usb'
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
    firmware: 'v2.5.0-usb'
  }
};

const WINDOW_SIZE = 40;

// Box-Muller transform for realistic sensor jitter instead of flat Math.random()
function gaussianRandom(mean = 0, stdev = 1) {
  const u = 1 - Math.random();
  const v = Math.random();
  const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return z * stdev + mean;
}

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

function computeStats(values, fallbackMean = 0, fallbackStd = 1) {
  if (!values || values.length === 0) {
    return { mean: fallbackMean, std: fallbackStd, min: fallbackMean, max: fallbackMean };
  }
  const n = values.length;
  const mean = values.reduce((acc, val) => acc + val, 0) / n;
  const variance =
    values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / Math.max(1, n - 1);
  // Clamp floor so ultra-quiet periods don't cause huge Z-scores on minor sensor noise
  const std = Math.max(Math.sqrt(variance), fallbackStd * 0.35);
  const min = Math.min(...values);
  const max = Math.max(...values);
  return { mean, std, min, max };
}

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

  // Scale step slope to a realistic 5-minute physical thermal projection
  const stepsPerMin = 60000 / Math.max(250, sampleRateMs);
  const slopePerMin = slopePerStep * (stepsPerMin * 0.25);
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

export default function App() {
  const React = HostReact;
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedNodeId, setSelectedNodeId] = useState('ESP32-NODE-01');
  const [isRunning, setIsRunning] = useState(true);
  const [sampleRateMs, setSampleRateMs] = useState(500);
  const [zThreshold, setZThreshold] = useState(2.2);
  const [showOlsLine, setShowOlsLine] = useState(true);
  const [chartMetric, setChartMetric] = useState('dual');

  // Web Serial API & Serial Console state
  const [serialConnected, setSerialConnected] = useState(false);
  const [baudRate, setBaudRate] = useState(115200);
  const [showSerialDrawer, setShowSerialDrawer] = useState(false);
  const [serialError, setSerialError] = useState(null);
  const [serialPacketCount, setSerialPacketCount] = useState(0);
  const [customJsonPacket, setCustomJsonPacket] = useState(
    '{"node_id":"ESP32-NODE-01","temperature_c":9.85,"voltage_v":227.4,"current_a":0.96,"power_w":218.3,"rssi_dbm":-55,"free_heap_kb":246.2}'
  );
  const [serialConsoleLines, setSerialConsoleLines] = useState([
    {
      id: 'SER-INIT-1',
      time: new Date().toLocaleTimeString([], { hour12: false }),
      type: 'SYS',
      text: '[EdgePulse] Web Serial bridge initialized. Ready for USB UART @ 115200 baud or manual JSON packet injection.'
    }
  ]);

  const serialPortRef = useRef(null);
  const serialReaderRef = useRef(null);
  const keepReadingRef = useRef(false);
  const selectedNodeRef = useRef(selectedNodeId);
  useEffect(() => {
    selectedNodeRef.current = selectedNodeId;
  }, [selectedNodeId]);

  const [nodeFaults, setNodeFaults] = useState({
    'ESP32-NODE-01': { mode: 'NOMINAL', intensity: 0 },
    'ESP32-NODE-02': { mode: 'NOMINAL', intensity: 0 },
    'ESP32-NODE-03': { mode: 'NOMINAL', intensity: 0 }
  });

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

  const [hoverIndex, setHoverIndex] = useState(null);
  const [logNodeFilter, setLogNodeFilter] = useState('ALL');
  const [logSeverityFilter, setLogSeverityFilter] = useState('ALL');

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

  const [copiedId, setCopiedId] = useState(null);
  const [exportToast, setExportToast] = useState(null);

  // Keep refs synced so the interval closure always reads current fault/threshold settings
  const faultRef = useRef(nodeFaults);
  useEffect(() => {
    faultRef.current = nodeFaults;
  }, [nodeFaults]);

  const zThresholdRef = useRef(zThreshold);
  useEffect(() => {
    zThresholdRef.current = zThreshold;
  }, [zThreshold]);

  const triggerFault = useCallback((mode) => {
    setNodeFaults((prev) => ({
      ...prev,
      [selectedNodeId]: {
        mode,
        intensity: mode === 'NOMINAL' ? 0 : 1
      }
    }));
  }, [selectedNodeId]);

  const appendSerialConsole = useCallback((type, text) => {
    const time = new Date().toLocaleTimeString([], {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    setSerialConsoleLines((prev) => [
      ...prev.slice(-79),
      { id: `SER-${Date.now()}-${Math.random()}`, time, type, text }
    ]);
  }, []);

  // Parse incoming serial line (from physical USB ESP32 or packet tester) and inject into node telemetry
  const ingestSerialLine = useCallback(
    (rawLine) => {
      const trimmed = (rawLine || '').trim();
      if (!trimmed) return;

      appendSerialConsole('RX', trimmed);

      if (!trimmed.startsWith('{')) return;

      try {
        const parsed = JSON.parse(trimmed);
        const targetNodeId =
          parsed.node_id && NODE_CONFIGS[parsed.node_id]
            ? parsed.node_id
            : selectedNodeRef.current;

        const cfg = NODE_CONFIGS[targetNodeId];
        const now = new Date();
        const timeLabel = now.toLocaleTimeString([], {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        const isoTime = now.toISOString();

        let detectedAnomaly = null;

        setTelemetryByNode((prevHistory) => {
          const nodeHistory = prevHistory[targetNodeId] || [];
          const lastPoint = nodeHistory[nodeHistory.length - 1];

          const recentTemps = nodeHistory.slice(-25).map((p) => p.temp);
          const recentPowers = nodeHistory.slice(-25).map((p) => p.power);

          const rawTempStats = computeStats(recentTemps, cfg.nominalTemp, cfg.tempStdBase);
          const rawPowerStats = computeStats(recentPowers, cfg.nominalPower, cfg.powerStdBase);

          const effectiveTempMean = cfg.nominalTemp * 0.65 + rawTempStats.mean * 0.35;
          const effectiveTempStd = Math.max(cfg.tempStdBase, rawTempStats.std * 0.55);

          const effectivePowerMean = cfg.nominalPower * 0.65 + rawPowerStats.mean * 0.35;
          const effectivePowerStd = Math.max(cfg.powerStdBase, rawPowerStats.std * 0.55);

          const nextTemp = Number(
            (parsed.temperature_c ?? parsed.temp ?? cfg.nominalTemp).toFixed(2)
          );
          const nextVoltage = Number(
            (parsed.voltage_v ?? parsed.voltage ?? cfg.nominalVoltage).toFixed(1)
          );
          const nextPower = Number(
            (
              parsed.power_w ??
              parsed.power ??
              (parsed.current_a ? nextVoltage * parsed.current_a : cfg.nominalPower)
            ).toFixed(1)
          );
          const nextCurrent = Number(
            (parsed.current_a ?? nextPower / Math.max(100, nextVoltage)).toFixed(2)
          );

          const tempZ = Number(((nextTemp - effectiveTempMean) / effectiveTempStd).toFixed(2));
          const powerZ = Number(((nextPower - effectivePowerMean) / effectivePowerStd).toFixed(2));
          const maxAbsZ = Number(Math.max(Math.abs(tempZ), Math.abs(powerZ)).toFixed(2));

          const threshold = zThresholdRef.current;
          const isAnomaly = maxAbsZ >= threshold;

          const newPoint = {
            seq: parsed.seq || (lastPoint?.seq || 0) + 1,
            timestamp: isoTime,
            timeLabel,
            nodeId: targetNodeId,
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
            faultMode: 'USB_SERIAL',
            rssi: parsed.rssi_dbm ?? cfg.baseRssi,
            heapKB: Number((parsed.free_heap_kb ?? cfg.freeHeap).toFixed(1))
          };

          if (isAnomaly) {
            const isTempPrimary = Math.abs(tempZ) >= Math.abs(powerZ);
            const primaryZ = isTempPrimary ? tempZ : powerZ;
            const severity = Math.abs(primaryZ) >= threshold + 0.8 ? 'CRITICAL' : 'WARNING';

            detectedAnomaly = {
              id: `ANOM-USB-${now.getTime()}-${targetNodeId}`,
              timestamp: timeLabel,
              isoTime,
              nodeId: targetNodeId,
              metric: isTempPrimary ? 'Temperature (°C)' : 'Power Draw (W)',
              observed: isTempPrimary ? `${nextTemp.toFixed(2)} °C` : `${nextPower.toFixed(1)} W`,
              mean: isTempPrimary
                ? `${effectiveTempMean.toFixed(2)} °C`
                : `${effectivePowerMean.toFixed(1)} W`,
              zScore: primaryZ,
              faultMode: 'USB_SERIAL',
              severity
            };
          }

          return {
            ...prevHistory,
            [targetNodeId]: [...nodeHistory.slice(-(WINDOW_SIZE - 1)), newPoint]
          };
        });

        setSerialPacketCount((c) => c + 1);
        if (detectedAnomaly) {
          setAnomalyLogs((prev) => [detectedAnomaly, ...prev].slice(0, 120));
        }
      } catch (err) {
        appendSerialConsole('ERR', `Malformed JSON frame: ${err.message}`);
      }
    },
    [appendSerialConsole]
  );

  const disconnectUsbSerial = useCallback(async () => {
    keepReadingRef.current = false;
    try {
      if (serialReaderRef.current) {
        await serialReaderRef.current.cancel();
        serialReaderRef.current.releaseLock();
        serialReaderRef.current = null;
      }
      if (serialPortRef.current) {
        await serialPortRef.current.close();
        serialPortRef.current = null;
      }
    } catch (err) {
      appendSerialConsole('ERR', `Port close warning: ${err.message}`);
    } finally {
      setSerialConnected(false);
      appendSerialConsole('SYS', 'Disconnected from USB Serial port. Reverted to Virtual Emulator.');
    }
  }, [appendSerialConsole]);

  const connectUsbSerial = useCallback(async () => {
    setSerialError(null);
    setShowSerialDrawer(true);

    if (typeof navigator === 'undefined' || !('serial' in navigator)) {
      const msg =
        'Web Serial API is not available in this browser context. Use Chrome or Edge on desktop (HTTPS or localhost), or test below with the Manual JSON Packet Injector.';
      setSerialError(msg);
      appendSerialConsole('ERR', msg);
      return;
    }

    try {
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: Number(baudRate) || 115200 });

      serialPortRef.current = port;
      keepReadingRef.current = true;
      setSerialConnected(true);
      appendSerialConsole(
        'SYS',
        `Connected to physical ESP32 over USB Serial (${baudRate} baud). Virtual emulator paused for ${selectedNodeRef.current}.`
      );

      const decoder = new TextDecoder();
      let lineBuffer = '';

      while (port.readable && keepReadingRef.current) {
        const reader = port.readable.getReader();
        serialReaderRef.current = reader;
        try {
          while (keepReadingRef.current) {
            const { value, done } = await reader.read();
            if (done) break;
            if (value) {
              lineBuffer += decoder.decode(value, { stream: true });
              const lines = lineBuffer.split(/\r?\n/);
              lineBuffer = lines.pop() || '';
              for (const line of lines) {
                ingestSerialLine(line);
              }
            }
          }
        } catch (readErr) {
          if (keepReadingRef.current) {
            appendSerialConsole('ERR', `Serial read interrupted: ${readErr.message}`);
          }
        } finally {
          reader.releaseLock();
          serialReaderRef.current = null;
        }
      }
    } catch (err) {
      setSerialError(err.message || 'Serial connection cancelled or failed.');
      appendSerialConsole('ERR', `USB connection failed: ${err.message}`);
      setSerialConnected(false);
    }
  }, [baudRate, appendSerialConsole, ingestSerialLine]);

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
          // If physical USB Serial is active, let the USB stream drive the selected node
          if (serialConnected && nodeId === selectedNodeRef.current) {
            return;
          }

          const cfg = NODE_CONFIGS[nodeId];
          const nodeHistory = prevHistory[nodeId] || [];
          const lastPoint = nodeHistory[nodeHistory.length - 1];
          const currentFault = faultRef.current[nodeId] || { mode: 'NOMINAL', intensity: 0 };

          const recentTemps = nodeHistory.slice(-25).map((p) => p.temp);
          const recentPowers = nodeHistory.slice(-25).map((p) => p.power);

          const rawTempStats = computeStats(recentTemps, cfg.nominalTemp, cfg.tempStdBase);
          const rawPowerStats = computeStats(recentPowers, cfg.nominalPower, cfg.powerStdBase);

          // Weight rolling stats with nominal calibration so prolonged faults don't normalize themselves
          const effectiveTempMean = cfg.nominalTemp * 0.65 + rawTempStats.mean * 0.35;
          const effectiveTempStd = Math.max(cfg.tempStdBase, rawTempStats.std * 0.55);

          const effectivePowerMean = cfg.nominalPower * 0.65 + rawPowerStats.mean * 0.35;
          const effectivePowerStd = Math.max(cfg.powerStdBase, rawPowerStats.std * 0.55);

          let nextTemp = gaussianRandom(cfg.nominalTemp, cfg.tempStdBase);
          let nextVoltage = gaussianRandom(cfg.nominalVoltage, 0.7);
          let nextPower = gaussianRandom(cfg.nominalPower, cfg.powerStdBase);

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
          } else if (lastPoint && Math.abs(lastPoint.temp - cfg.nominalTemp) > cfg.tempStdBase * 2) {
            // Cool down gradually after clearing a thermal fault
            nextTemp = lastPoint.temp * 0.55 + cfg.nominalTemp * 0.45 + gaussianRandom(0, cfg.tempStdBase * 0.3);
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
  }, [isRunning, sampleRateMs, serialConnected]);

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

  const filteredAnomalies = useMemo(() => {
    return anomalyLogs.filter((item) => {
      const matchNode = logNodeFilter === 'ALL' || item.nodeId === logNodeFilter;
      const matchSev = logSeverityFilter === 'ALL' || item.severity === logSeverityFilter;
      return matchNode && matchSev;
    });
  }, [anomalyLogs, logNodeFilter, logSeverityFilter]);

  const handleCopyText = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

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

  const generatedFirmwareCode = useMemo(() => {
    return `/*
 * EdgePulse Node Firmware (${fwConfig.nodeId})
 * Target: ESP32-WROOM-32D (Arduino / ESP-IDF)
 * Dual Transport: Streams newline-delimited JSON over USB Serial (115200 baud)
 * for direct Web Serial API ingestion AND posts to Supabase PostgREST over Wi-Fi.
 */

#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <DHT.h>
#include <math.h>

const char* WIFI_SSID     = "${fwConfig.wifiSsid}";
const char* WIFI_PASSWORD = "YOUR_WIFI_PASSWORD";
const char* SUPABASE_URL  = "${fwConfig.supabaseUrl}/rest/v1/telemetry_logs";
const char* SUPABASE_KEY  = "YOUR_SUPABASE_SERVICE_ROLE_OR_ANON_KEY";
const char* NODE_ID       = "${fwConfig.nodeId}";

#define PIN_DHT_SENSOR    ${fwConfig.tempPin}
#define PIN_ACS712_ADC    ${fwConfig.currentPin}
#define PIN_ZMPT101B_ADC  ${fwConfig.voltagePin}
#define PIN_STATUS_LED    ${fwConfig.statusLedPin}

#define DHTTYPE           DHT22
#define SAMPLE_INTERVAL   ${fwConfig.intervalMs}UL
#define WINDOW_SIZE       25
#define Z_SCORE_THRESHOLD ${Number(fwConfig.zScoreAlertLimit).toFixed(2)}f

DHT dht(PIN_DHT_SENSOR, DHTTYPE);

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
  if (stdDev < 0.15f) stdDev = 0.15f; // clamp noise floor
}

// 64-sample oversampling to smooth out ESP32 ADC non-linearity
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

  Serial.printf("[EdgePulse] Booting %s (Web Serial + Wi-Fi)...\\n", NODE_ID);
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  // Non-blocking 4-second Wi-Fi attempt so USB Serial works even offline
  unsigned long startAttempt = millis();
  while (WiFi.status() != WL_CONNECTED && millis() - startAttempt < 4000) {
    delay(250);
  }
}

void loop() {
  unsigned long now = millis();
  if (now - lastTelemetryTick < SAMPLE_INTERVAL) return;
  lastTelemetryTick = now;

  float temperature = dht.readTemperature();
  if (isnan(temperature)) temperature = 25.0f;
  float voltage = readRmsVoltage();
  float current = readRmsCurrent();
  float powerWatts = voltage * current;

  float rollingMean = 0.0f, rollingStd = 1.0f;
  computeRollingStats(tempBuffer, sampleCount, rollingMean, rollingStd);
  float tempZScore = (temperature - rollingMean) / rollingStd;
  bool isAnomaly = fabs(tempZScore) >= Z_SCORE_THRESHOLD;

  tempBuffer[bufferIndex] = temperature;
  bufferIndex = (bufferIndex + 1) % WINDOW_SIZE;
  if (sampleCount < WINDOW_SIZE) sampleCount++;

  digitalWrite(PIN_STATUS_LED, isAnomaly ? HIGH : LOW);
  packetSequence++;

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
  doc["rssi_dbm"]      = WiFi.status() == WL_CONNECTED ? WiFi.RSSI() : -50;
  doc["free_heap_kb"]  = ESP.getFreeHeap() / 1024.0f;

  String jsonPayload;
  serializeJson(doc, jsonPayload);
  // Newline-delimited JSON frame read directly by EdgePulse Web Serial API
  Serial.println(jsonPayload);

  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(SUPABASE_URL);
    http.addHeader("Content-Type", "application/json");
    http.addHeader("apikey", SUPABASE_KEY);
    http.addHeader("Authorization", String("Bearer ") + SUPABASE_KEY);
    http.addHeader("Prefer", "return=minimal");

    int status = http.POST(jsonPayload);
    if (status >= 400) {
      Serial.printf("[EdgePulse] POST failed (HTTP %d)\\n", status);
    }
    http.end();
  }
}`;
  }, [fwConfig]);

  const supabaseSchemaCode = `-- EdgePulse PostgreSQL schema for Supabase
-- Sets up telemetry_logs, anomaly_events, indexes, RLS, and an insert trigger

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

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

-- BRIN index keeps time-range scans fast as telemetry_logs grows
CREATE INDEX IF NOT EXISTS idx_telemetry_node_created
    ON public.telemetry_logs (node_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_telemetry_brin_created
    ON public.telemetry_logs USING BRIN (created_at);

CREATE INDEX IF NOT EXISTS idx_anomaly_events_severity
    ON public.anomaly_events (node_id, severity, detected_at DESC);

-- Automatically log an anomaly event whenever |z_score| crosses the threshold
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

ALTER TABLE public.telemetry_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.anomaly_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to telemetry_logs"
    ON public.telemetry_logs FOR SELECT
    USING (true);

CREATE POLICY "Allow edge device telemetry ingestion"
    ON public.telemetry_logs FOR INSERT
    WITH CHECK (node_id LIKE 'ESP32-NODE-%');

CREATE POLICY "Allow public read access to anomaly_events"
    ON public.anomaly_events FOR SELECT
    USING (true);

ALTER PUBLICATION supabase_realtime ADD TABLE public.telemetry_logs;
ALTER PUBLICATION supabase_realtime ADD TABLE public.anomaly_events;`;

  const svgWidth = 860;
  const svgHeight = 300;
  const padLeft = 52;
  const padRight = 54;
  const padTop = 24;
  const padBottom = 34;
  const plotW = svgWidth - padLeft - padRight;
  const plotH = svgHeight - padTop - padBottom;

  const tempBandLow = tempStats.mean - zThreshold * tempStats.std;
  const tempBandHigh = tempStats.mean + zThreshold * tempStats.std;
  const minTempY = Math.min(tempStats.min, tempBandLow, activeNodeCfg.nominalTemp - activeNodeCfg.tempStdBase * 4) - 0.6;
  const maxTempY = Math.max(tempStats.max, tempBandHigh, activeNodeCfg.nominalTemp + activeNodeCfg.tempStdBase * 4) + 0.6;

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
      {exportToast && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-emerald-500 text-slate-950 px-4 py-2.5 rounded-lg shadow-xl font-medium text-sm animate-bounce">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{exportToast}</span>
        </div>
      )}

      <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
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
                    v2.5-USB
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  ESP32 Cluster Emulator • Web Serial USB Bridge • Rolling Z-Score & OLS Forecasting
                </p>
              </div>
            </div>

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

          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-2.5">
            {/* Web Serial USB Hardware Bridge Controls */}
            <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 rounded-lg p-1">
              {serialConnected ? (
                <button
                  onClick={disconnectUsbSerial}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-rose-500/20 hover:text-rose-300 hover:border-rose-500/40 transition-all"
                  title="Disconnect physical ESP32 USB Serial port"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <Usb className="w-3.5 h-3.5" />
                  <span>USB LIVE ({serialPacketCount} pkts)</span>
                </button>
              ) : (
                <button
                  onClick={connectUsbSerial}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-950 text-cyan-400 hover:bg-cyan-950/50 border border-cyan-500/30 transition-all"
                  title="Connect physical ESP32 via Chrome/Edge Web Serial API (115200 baud)"
                >
                  <Usb className="w-3.5 h-3.5" />
                  <span>Connect USB Serial</span>
                </button>
              )}

              <button
                onClick={() => setShowSerialDrawer((s) => !s)}
                className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-mono transition-colors ${
                  showSerialDrawer
                    ? 'bg-slate-800 text-cyan-300 border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Toggle Serial Monitor & JSON Packet Injector"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Monitor</span>
              </button>
            </div>

            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-lg p-1">
              <button
                onClick={() => setIsRunning((r) => !r)}
                className={`hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all ${
                  isRunning
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}
                title="Toggle telemetry stream"
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

      {/* Collapsible Web Serial Monitor & Manual JSON Frame Injector */}
      {showSerialDrawer && (
        <section className="bg-slate-950 border-b border-cyan-500/30 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Usb className="w-4 h-4" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-white">
                      Web Serial Hardware Bridge (UART / USB-CDC)
                    </h2>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                        serialConnected
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {serialConnected ? 'CONNECTED TO COM PORT' : 'VIRTUAL EMULATOR FALLBACK'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Streams newline-delimited JSON packets from a physical ESP32 via Chrome/Edge{' '}
                    <code className="text-cyan-300 font-mono">navigator.serial</code> or tests the parser with manual JSON frames below.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <label className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <span>Baud:</span>
                  <select
                    value={baudRate}
                    onChange={(e) => setBaudRate(Number(e.target.value))}
                    disabled={serialConnected}
                    className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs font-mono text-slate-200"
                  >
                    <option value={9600}>9600</option>
                    <option value={57600}>57600</option>
                    <option value={115200}>115200</option>
                    <option value={230400}>230400</option>
                  </select>
                </label>

                {!serialConnected ? (
                  <button
                    onClick={connectUsbSerial}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
                  >
                    <Usb className="w-3.5 h-3.5" />
                    <span>Select Serial Port</span>
                  </button>
                ) : (
                  <button
                    onClick={disconnectUsbSerial}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30 transition-colors"
                  >
                    <span>Close Port</span>
                  </button>
                )}

                <button
                  onClick={() => setSerialConsoleLines([])}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800"
                >
                  Clear Log
                </button>
              </div>
            </div>

            {serialError && (
              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-center justify-between gap-2">
                <span>{serialError}</span>
                <button
                  onClick={() => setSerialError(null)}
                  className="text-[11px] font-mono underline shrink-0"
                >
                  Dismiss
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
              {/* Live Serial RX Stream */}
              <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-lg p-3 font-mono text-xs h-36 overflow-y-auto space-y-1">
                {serialConsoleLines.length === 0 ? (
                  <div className="text-slate-500 text-center py-10">
                    Waiting for incoming serial frames...
                  </div>
                ) : (
                  serialConsoleLines.map((line) => (
                    <div key={line.id} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-slate-500 shrink-0">{line.time}</span>
                      <span
                        className={`px-1.5 rounded text-[10px] font-bold shrink-0 ${
                          line.type === 'RX'
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : line.type === 'ERR'
                            ? 'bg-rose-500/20 text-rose-300'
                            : 'bg-cyan-500/20 text-cyan-300'
                        }`}
                      >
                        {line.type}
                      </span>
                      <span className="text-slate-200 break-all">{line.text}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Manual Serial JSON Packet Tester (works without hardware connected) */}
              <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-lg p-3 flex flex-col justify-between gap-2">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                      Test Serial JSON Frame Injector
                    </span>
                    <button
                      onClick={() =>
                        setCustomJsonPacket(
                          JSON.stringify({
                            node_id: selectedNodeId,
                            temperature_c: Number(
                              (activeNodeCfg.nominalTemp + activeNodeCfg.tempStdBase * 4.2).toFixed(2)
                            ),
                            voltage_v: 226.8,
                            current_a: 1.15,
                            power_w: Number(
                              (activeNodeCfg.nominalPower + activeNodeCfg.powerStdBase * 3.8).toFixed(1)
                            ),
                            rssi_dbm: -53,
                            free_heap_kb: 245.6
                          })
                        )
                      }
                      className="text-[11px] font-mono text-slate-400 hover:text-emerald-400 underline"
                    >
                      Load Spike Preset
                    </button>
                  </div>
                  <textarea
                    rows={3}
                    value={customJsonPacket}
                    onChange={(e) => setCustomJsonPacket(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-xs font-mono text-emerald-300 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <button
                  onClick={() => ingestSerialLine(customJsonPacket)}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-semibold transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Inject JSON Frame into {selectedNodeId}</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-slate-900/40 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
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
                        className={`text-xs font-bold ${
                          hasAlert ? 'text-rose-400' : 'text-emerald-400'
                        }`}
                      >
                        {lastPt ? `${lastPt.temp.toFixed(1)}°C` : '--'}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {lastPt ? `${lastPt.power.toFixed(0)}W` : '--'}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 xl:pt-0 border-t xl:border-t-0 border-slate-800/80">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mr-1">
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              Fault Injection ({selectedNodeId}):
            </span>

            <button
              onClick={() => triggerFault('THERMAL_SPIKE')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                activeFault === 'THERMAL_SPIKE'
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 shadow-sm'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-rose-500/40 hover:text-rose-300'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-rose-400" />
              <span>Thermal Spike</span>
            </button>

            <button
              onClick={() => triggerFault('VOLTAGE_SAG')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                activeFault === 'VOLTAGE_SAG'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-amber-500/40 hover:text-amber-300'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>AC Voltage Sag</span>
            </button>

            <button
              onClick={() => triggerFault('SENSOR_NOISE')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                activeFault === 'SENSOR_NOISE'
                  ? 'bg-purple-500/20 text-purple-300 border-purple-500/50 shadow-sm'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-purple-500/40 hover:text-purple-300'
              }`}
            >
              <Radio className="w-3.5 h-3.5 text-purple-400" />
              <span>ADC Sensor Noise</span>
            </button>

            <button
              onClick={() => triggerFault('NOMINAL')}
              disabled={activeFault === 'NOMINAL'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                activeFault === 'NOMINAL'
                  ? 'bg-slate-900/40 text-slate-600 border-slate-800/60 cursor-not-allowed'
                  : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/25'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restore Nominal</span>
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-mono uppercase tracking-wider">Temperature (DHT22)</span>
                  <span
                    className={`font-mono px-2 py-0.5 rounded text-[11px] font-semibold ${
                      Math.abs(latestPoint.tempZ || 0) >= zThreshold
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        : 'bg-slate-800 text-emerald-400'
                    }`}
                  >
                    Z = {latestPoint.tempZ >= 0 ? `+${latestPoint.tempZ}` : latestPoint.tempZ}σ
                  </span>
                </div>
                <div className="flex items-baseline justify-between my-1">
                  <span className="text-3xl font-bold font-mono text-white">
                    {latestPoint.temp !== undefined ? `${latestPoint.temp.toFixed(2)} °C` : '--'}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    μ: {tempStats.mean.toFixed(2)}°C
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span>Rolling σ: ±{tempStats.std.toFixed(2)}°C</span>
                  <span>
                    Range: {tempStats.min.toFixed(1)}–{tempStats.max.toFixed(1)}°C
                  </span>
                </div>
              </div>

              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-mono uppercase tracking-wider">Load Power (ACS712)</span>
                  <span className="font-mono px-2 py-0.5 rounded text-[11px] bg-slate-800 text-cyan-300">
                    {latestPoint.voltage?.toFixed(1)}V • {latestPoint.current?.toFixed(2)}A
                  </span>
                </div>
                <div className="flex items-baseline justify-between my-1">
                  <span className="text-3xl font-bold font-mono text-white">
                    {latestPoint.power !== undefined ? `${latestPoint.power.toFixed(1)} W` : '--'}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Z = {latestPoint.powerZ >= 0 ? `+${latestPoint.powerZ}` : latestPoint.powerZ}σ
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span>Est. Energy: {estDailyKwh.toFixed(2)} kWh/day</span>
                  <span>μ: {powerStats.mean.toFixed(0)}W</span>
                </div>
              </div>

              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-mono uppercase tracking-wider">OLS 5-Min Forecast</span>
                  <span className="font-mono px-2 py-0.5 rounded text-[11px] bg-slate-800 text-amber-300">
                    R² = {tempOls.r2.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-baseline justify-between my-1">
                  <span className="text-3xl font-bold font-mono text-white">
                    {tempOls.forecast5Min.toFixed(2)} °C
                  </span>
                  <span
                    className={`flex items-center gap-1 text-xs font-mono font-semibold ${
                      tempOls.slopePerMin > 0.15
                        ? 'text-rose-400'
                        : tempOls.slopePerMin < -0.15
                        ? 'text-cyan-400'
                        : 'text-emerald-400'
                    }`}
                  >
                    {tempOls.slopePerMin > 0.05 ? (
                      <TrendingUp className="w-3.5 h-3.5" />
                    ) : tempOls.slopePerMin < -0.05 ? (
                      <TrendingDown className="w-3.5 h-3.5" />
                    ) : (
                      <Minus className="w-3.5 h-3.5" />
                    )}
                    {tempOls.slopePerMin >= 0 ? '+' : ''}
                    {tempOls.slopePerMin.toFixed(2)} °C/m
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span>Linear Regression Slope</span>
                  <span>Window: N={activeSeries.length}</span>
                </div>
              </div>

              <div
                className={`rounded-xl p-4 flex flex-col justify-between border transition-colors ${
                  isCurrentNodeAnomalous
                    ? 'bg-rose-950/30 border-rose-500/50'
                    : 'bg-slate-900/70 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-mono uppercase tracking-wider">Edge Health & State</span>
                  <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1">
                    <Wifi className="w-3 h-3 text-emerald-400" />
                    {latestPoint.rssi || activeNodeCfg.baseRssi} dBm
                  </span>
                </div>
                <div className="flex items-center justify-between my-1">
                  <span
                    className={`text-xl font-bold font-mono tracking-tight flex items-center gap-2 ${
                      isCurrentNodeAnomalous ? 'text-rose-400' : 'text-emerald-400'
                    }`}
                  >
                    {isCurrentNodeAnomalous ? (
                      <>
                        <ShieldAlert className="w-6 h-6 text-rose-400 animate-bounce" />
                        <span>ANOMALY DETECTED</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                        <span>SYSTEM NOMINAL</span>
                      </>
                    )}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span>SRAM Heap: {latestPoint.heapKB || activeNodeCfg.freeHeap} KB</span>
                  <span>Mode: {serialConnected ? 'USB_SERIAL' : activeFault}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 bg-slate-900/70 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-base font-bold text-white">
                          Real-Time Telemetry & Rolling Confidence Envelope
                        </h2>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                          {selectedNodeId}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {activeNodeCfg.name} ({activeNodeCfg.location}) — Hover over chart to inspect sample frames
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg p-0.5 text-xs font-mono">
                        {[
                          { id: 'dual', label: 'Dual-Axis' },
                          { id: 'temp', label: 'Temp Only' },
                          { id: 'power', label: 'Power Only' }
                        ].map((m) => (
                          <button
                            key={m.id}
                            onClick={() => setChartMetric(m.id)}
                            className={`px-2.5 py-1 rounded-md transition-colors ${
                              chartMetric === m.id
                                ? 'bg-slate-800 text-emerald-400 font-semibold'
                                : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            {m.label}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setShowOlsLine((v) => !v)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono border transition-colors ${
                          showOlsLine
                            ? 'bg-amber-500/15 text-amber-300 border-amber-500/40'
                            : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        OLS Trendline
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 py-3 text-xs font-mono border-b border-slate-800/60">
                    <div className="flex flex-wrap items-center gap-4">
                      {chartMetric !== 'power' && (
                        <span className="flex items-center gap-1.5 text-emerald-400">
                          <span className="w-3 h-0.5 bg-emerald-400 inline-block" />
                          Temp (°C)
                        </span>
                      )}
                      {chartMetric !== 'temp' && (
                        <span className="flex items-center gap-1.5 text-cyan-400">
                          <span className="w-3 h-0.5 bg-cyan-400 inline-block" />
                          Power (W)
                        </span>
                      )}
                      {showOlsLine && chartMetric !== 'power' && (
                        <span className="flex items-center gap-1.5 text-amber-400">
                          <span className="w-3 h-0.5 border-b border-dashed border-amber-400 inline-block" />
                          OLS Regression
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <span className="w-3 h-2 bg-emerald-500/15 border border-emerald-500/30 inline-block rounded-xs" />
                        μ ± {zThreshold.toFixed(1)}σ Band
                      </span>
                      <span className="flex items-center gap-1.5 text-rose-400">
                        <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                        |Z| ≥ {zThreshold.toFixed(1)} Anomaly
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <label className="text-slate-400">Z-Threshold:</label>
                      <input
                        type="range"
                        min="1.5"
                        max="3.5"
                        step="0.1"
                        value={zThreshold}
                        onChange={(e) => setZThreshold( parseFloat(e.target.value) )}
                        className="w-24 accent-emerald-500 cursor-pointer"
                      />
                      <span className="text-emerald-400 font-bold">{zThreshold.toFixed(1)}σ</span>
                    </div>
                  </div>

                  <div className="relative mt-3 select-none">
                    <svg
                      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                      className="w-full h-64 sm:h-72 overflow-visible"
                      onMouseLeave={() => setHoverIndex(null)}
                    >
                      {[0, 0.25, 0.5, 0.75, 1].map((step, i) => {
                        const yPos = padTop + step * plotH;
                        const tempLabel = (maxTempY - step * (maxTempY - minTempY)).toFixed(1);
                        const powerLabel = (maxPowerY - step * (maxPowerY - minPowerY)).toFixed(0);
                        return (
                          <g key={i}>
                            <line
                              x1={padLeft}
                              y1={yPos}
                              x2={svgWidth - padRight}
                              y2={yPos}
                              stroke="#1e293b"
                              strokeDasharray="4 4"
                              strokeWidth="1"
                            />
                            {chartMetric !== 'power' && (
                              <text
                                x={padLeft - 8}
                                y={yPos + 4}
                                textAnchor="end"
                                className="fill-emerald-400/80 text-[10px] font-mono"
                              >
                                {tempLabel}°
                              </text>
                            )}
                            {chartMetric !== 'temp' && (
                              <text
                                x={svgWidth - padRight + 8}
                                y={yPos + 4}
                                textAnchor="start"
                                className="fill-cyan-400/80 text-[10px] font-mono"
                              >
                                {powerLabel}W
                              </text>
                            )}
                          </g>
                        );
                      })}

                      {chartMetric !== 'power' && (
                        <>
                          <rect
                            x={padLeft}
                            y={Math.min(bandTopY, bandBottomY)}
                            width={plotW}
                            height={Math.max(2, Math.abs(bandBottomY - bandTopY))}
                            fill="#10b981"
                            fillOpacity="0.09"
                            stroke="#10b981"
                            strokeOpacity="0.25"
                            strokeDasharray="3 3"
                          />
                          <line
                            x1={padLeft}
                            y1={meanLineY}
                            x2={svgWidth - padRight}
                            y2={meanLineY}
                            stroke="#10b981"
                            strokeOpacity="0.35"
                            strokeDasharray="2 4"
                            strokeWidth="1"
                          />
                        </>
                      )}

                      {chartMetric !== 'temp' && activeSeries.length > 1 && (
                        <polyline
                          fill="none"
                          stroke="#22d3ee"
                          strokeWidth="1.8"
                          strokeOpacity="0.85"
                          points={powerPointsStr}
                        />
                      )}

                      {chartMetric !== 'power' && activeSeries.length > 1 && (
                        <polyline
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2.5"
                          points={tempPointsStr}
                        />
                      )}

                      {showOlsLine && chartMetric !== 'power' && tempOls.line.length > 1 && (
                        <polyline
                          fill="none"
                          stroke="#fbbf24"
                          strokeWidth="1.8"
                          strokeDasharray="6 4"
                          points={olsPointsStr}
                        />
                      )}

                      {activeSeries.map((pt, idx) => {
                        const cx = getX(idx, activeSeries.length);
                        const cyTemp = getTempY(pt.temp);
                        const cyPower = getPowerY(pt.power);
                        const isAnom = pt.maxAbsZ >= zThreshold;

                        return (
                          <g key={pt.seq}>
                            {isAnom && (
                              <>
                                <circle
                                  cx={cx}
                                  cy={chartMetric === 'power' ? cyPower : cyTemp}
                                  r="6"
                                  fill="#f43f5e"
                                  fillOpacity="0.25"
                                />
                                <circle
                                  cx={cx}
                                  cy={chartMetric === 'power' ? cyPower : cyTemp}
                                  r="3.5"
                                  fill="#f43f5e"
                                  stroke="#0f172a"
                                  strokeWidth="1.5"
                                />
                              </>
                            )}

                            {hoverIndex === idx && (
                              <>
                                <line
                                  x1={cx}
                                  y1={padTop}
                                  x2={cx}
                                  y2={padTop + plotH}
                                  stroke="#94a3b8"
                                  strokeWidth="1"
                                  strokeDasharray="2 2"
                                />
                                {chartMetric !== 'power' && (
                                  <circle
                                    cx={cx}
                                    cy={cyTemp}
                                    r="4.5"
                                    fill="#10b981"
                                    stroke="#020617"
                                    strokeWidth="2"
                                  />
                                )}
                                {chartMetric !== 'temp' && (
                                  <circle
                                    cx={cx}
                                    cy={cyPower}
                                    r="4"
                                    fill="#22d3ee"
                                    stroke="#020617"
                                    strokeWidth="2"
                                  />
                                )}
                              </>
                            )}

                            <rect
                              x={cx - plotW / Math.max(2, activeSeries.length) / 2}
                              y={padTop}
                              width={plotW / Math.max(2, activeSeries.length)}
                              height={plotH}
                              fill="transparent"
                              className="cursor-crosshair"
                              onMouseEnter={() => setHoverIndex(idx)}
                            />
                          </g>
                        );
                      })}

                      {activeSeries.map((pt, idx) => {
                        if (idx % 8 !== 0 && idx !== activeSeries.length - 1) return null;
                        const xPos = getX(idx, activeSeries.length);
                        return (
                          <text
                            key={`lbl-${pt.seq}`}
                            x={xPos}
                            y={svgHeight - 8}
                            textAnchor="middle"
                            className="fill-slate-500 text-[10px] font-mono"
                          >
                            {pt.timeLabel}
                          </text>
                        );
                      })}
                    </svg>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono bg-slate-950/60 px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">
                      {hoverIndex !== null ? 'INSPECTING SAMPLE:' : 'LATEST PACKET:'}
                    </span>
                    <span className="text-white font-semibold">
                      #{inspectedPoint.seq} ({inspectedPoint.timeLabel})
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-emerald-400">
                      Temp: <strong>{inspectedPoint.temp?.toFixed(2)}°C</strong> (Z={inspectedPoint.tempZ}σ)
                    </span>
                    <span className="text-cyan-400">
                      Power: <strong>{inspectedPoint.power?.toFixed(1)}W</strong> ({inspectedPoint.voltage?.toFixed(1)}V)
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        (inspectedPoint.maxAbsZ || 0) >= zThreshold
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                          : 'bg-emerald-500/15 text-emerald-300'
                      }`}
                    >
                      {inspectedPoint.faultMode || 'NOMINAL'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 sm:p-5">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-emerald-400" />
                      <h3 className="text-sm font-bold text-white">
                        Statistical Anomaly Engine
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">N = {activeSeries.length}</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="bg-slate-950/80 border border-slate-800/80 rounded-lg p-3 font-mono">
                      <div className="text-slate-400 text-[11px] mb-1">
                        Rolling Z-Score Formula:
                      </div>
                      <div className="text-emerald-300 text-sm font-bold">
                        Z = (x_t - μ_window) / σ_window
                      </div>
                      <div className="mt-2 pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[11px]">
                        <div>
                          <span className="text-slate-400">Upper Cutoff:</span>{' '}
                          <span className="text-white font-semibold">{tempBandHigh.toFixed(2)}°C</span>
                        </div>
                        <div>
                          <span className="text-slate-400">Lower Cutoff:</span>{' '}
                          <span className="text-white font-semibold">{tempBandLow.toFixed(2)}°C</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-950/80 border border-slate-800/80 rounded-lg p-3 font-mono">
                      <div className="text-slate-400 text-[11px] mb-1">
                        OLS Linear Drift Projection:
                      </div>
                      <div className="text-amber-300 text-sm font-bold">
                        y(t) = {tempOls.intercept.toFixed(2)} + ({tempOls.slopePerStep.toFixed(3)})·t
                      </div>
                      <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">Fit Quality (R²):</span>
                        <span className="text-white font-semibold">{(tempOls.r2 * 100).toFixed(1)}%</span>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center gap-2">
                      <button
                        onClick={handleExportTelemetryCSV}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors cursor-pointer"
                      >
                        <FileSpreadsheet className="w-3.5 h-3.5" />
                        <span>Export CSV</span>
                      </button>
                      <button
                        onClick={handleExportDatasetJSON}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
                      >
                        <FileJson className="w-3.5 h-3.5" />
                        <span>Export JSON</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-emerald-400" />
                        <h3 className="text-sm font-bold text-white">
                          ESP32 JSON Telemetry Frame
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400">
                        {serialConnected ? 'USB UART' : 'HTTP POST'}
                      </span>
                    </div>

                    <pre className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed">
{JSON.stringify(
  {
    node_id: selectedNodeId,
    mac: activeNodeCfg.mac,
    seq: latestPoint.seq || 1,
    temperature_c: latestPoint.temp,
    voltage_v: latestPoint.voltage,
    current_a: latestPoint.current,
    power_w: latestPoint.power,
    z_score: latestPoint.tempZ,
    is_anomaly: latestPoint.isAnomaly,
    rssi_dbm: latestPoint.rssi
  },
  null,
  2
)}
                    </pre>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>FW: {activeNodeCfg.firmware}</span>
                    <button
                      onClick={() => setActiveTab('firmware')}
                      className="text-emerald-400 hover:underline"
                    >
                      Configure GPIO & Sketch →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'anomalies' && (
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 sm:p-6 space-y-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-rose-400" />
                  <span>Automated Anomaly Audit Log & Dataset Exporter</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Captures every telemetry packet where |Z-Score| crosses the configured threshold ({zThreshold.toFixed(1)}σ).
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleExportTelemetryCSV}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Telemetry (.CSV)</span>
                </button>
                <button
                  onClick={handleExportDatasetJSON}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <FileJson className="w-3.5 h-3.5" />
                  <span>Download Full State (.JSON)</span>
                </button>
                <button
                  onClick={() => setAnomalyLogs([])}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Log</span>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Filter className="w-3.5 h-3.5 text-emerald-400" />
                  Filter Node:
                </span>
                {['ALL', ...Object.keys(NODE_CONFIGS)].map((nodeKey) => (
                  <button
                    key={nodeKey}
                    onClick={() => setLogNodeFilter(nodeKey)}
                    className={`px-2.5 py-1 rounded-md border transition-colors ${
                      logNodeFilter === nodeKey
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-semibold'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {nodeKey}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-slate-400">Severity:</span>
                {['ALL', 'WARNING', 'CRITICAL'].map((sev) => (
                  <button
                    key={sev}
                    onClick={() => setLogSeverityFilter(sev)}
                    className={`px-2.5 py-1 rounded-md border transition-colors ${
                      logSeverityFilter === sev
                        ? 'bg-slate-800 text-white border-slate-600 font-semibold'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {sev}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto border border-slate-800 rounded-xl">
              <table className="w-full text-left border-collapse text-xs font-mono">
                <thead>
                  <tr className="bg-slate-950 text-slate-400 border-b border-slate-800 uppercase">
                    <th className="py-3 px-4">Timestamp</th>
                    <th className="py-3 px-4">Node ID</th>
                    <th className="py-3 px-4">Metric</th>
                    <th className="py-3 px-4">Observed</th>
                    <th className="py-3 px-4">Rolling Mean (μ)</th>
                    <th className="py-3 px-4">Z-Score</th>
                    <th className="py-3 px-4">Fault Mode</th>
                    <th className="py-3 px-4">Severity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70">
                  {filteredAnomalies.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="py-10 text-center text-slate-500">
                        No anomaly events match the current filter. Inject a fault on the top bar to test detection!
                      </td>
                    </tr>
                  ) : (
                    filteredAnomalies.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-2.5 px-4 text-slate-300">{item.timestamp}</td>
                        <td className="py-2.5 px-4 font-bold text-white">{item.nodeId}</td>
                        <td className="py-2.5 px-4 text-slate-300">{item.metric}</td>
                        <td className="py-2.5 px-4 text-white font-semibold">{item.observed}</td>
                        <td className="py-2.5 px-4 text-slate-400">{item.mean}</td>
                        <td className="py-2.5 px-4 text-rose-400 font-bold">
                          {item.zScore >= 0 ? `+${item.zScore}` : item.zScore}σ
                        </td>
                        <td className="py-2.5 px-4">
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                            {item.faultMode}
                          </span>
                        </td>
                        <td className="py-2.5 px-4">
                          <span
                            className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                              item.severity === 'CRITICAL'
                                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                                : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            }`}
                          >
                            {item.severity}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'firmware' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 bg-slate-900/70 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="pb-3 border-b border-slate-800">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>ESP32 Pinout & Firmware Config</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Customize GPIO pins and endpoints to generate ready-to-flash Arduino / ESP-IDF C++ firmware with both USB Web Serial and Wi-Fi telemetry.
                </p>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div>
                  <label className="block text-slate-400 mb-1">Target Node ID</label>
                  <select
                    value={fwConfig.nodeId}
                    onChange={(e) => setFwConfig({ ...fwConfig, nodeId: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  >
                    {Object.keys(NODE_CONFIGS).map((id) => (
                      <option key={id} value={id}>
                        {id} — {NODE_CONFIGS[id].name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Wi-Fi SSID</label>
                  <input
                    type="text"
                    value={fwConfig.wifiSsid}
                    onChange={(e) => setFwConfig({ ...fwConfig, wifiSsid: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Supabase Project URL</label>
                  <input
                    type="text"
                    value={fwConfig.supabaseUrl}
                    onChange={(e) => setFwConfig({ ...fwConfig, supabaseUrl: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-slate-400 mb-1">DHT22 Data Pin</label>
                    <input
                      type="number"
                      value={fwConfig.tempPin}
                      onChange={(e) => setFwConfig({ ...fwConfig, tempPin: Number(e.target.value) })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">ACS712 ADC Pin</label>
                    <input
                      type="number"
                      value={fwConfig.currentPin}
                      onChange={(e) => setFwConfig({ ...fwConfig, currentPin: Number(e.target.value) })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">ZMPT101B ADC Pin</label>
                    <input
                      type="number"
                      value={fwConfig.voltagePin}
                      onChange={(e) => setFwConfig({ ...fwConfig, voltagePin: Number(e.target.value) })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Alert LED GPIO</label>
                    <input
                      type="number"
                      value={fwConfig.statusLedPin}
                      onChange={(e) => setFwConfig({ ...fwConfig, statusLedPin: Number(e.target.value) })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-emerald-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-slate-400 mb-1">Poll Interval (ms)</label>
                    <input
                      type="number"
                      step="250"
                      value={fwConfig.intervalMs}
                      onChange={(e) => setFwConfig({ ...fwConfig, intervalMs: Number(e.target.value) })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Edge Z-Threshold</label>
                    <input
                      type="number"
                      step="0.1"
                      value={fwConfig.zScoreAlertLimit}
                      onChange={(e) =>
                        setFwConfig({ ...fwConfig, zScoreAlertLimit: Number(e.target.value) })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-amber-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 bg-slate-900/70 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800">
                <div>
                  <span className="font-mono text-xs text-emerald-400 font-bold">
                    edgepulse_node.ino
                  </span>
                  <p className="text-xs text-slate-400">
                    Outputs newline-delimited JSON @ 115200 baud for Web Serial + HTTPS POST to Supabase
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyText(generatedFirmwareCode, 'fw')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  >
                    {copiedId === 'fw' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Sketch</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() =>
                      triggerFileDownload(
                        generatedFirmwareCode,
                        `${fwConfig.nodeId.toLowerCase()}_firmware.ino`,
                        'text/plain;charset=utf-8;'
                      )
                    }
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download .ino</span>
                  </button>
                </div>
              </div>

              <pre className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-300 overflow-x-auto max-h-[540px] leading-relaxed">
                {generatedFirmwareCode}
              </pre>
            </div>
          </div>
        )}

        {activeTab === 'schema' && (
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div>
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-400" />
                  <span>Supabase PostgreSQL Schema, BRIN Indexes & Trigger</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Paste directly into the Supabase SQL Editor to provision time-series tables and automatic anomaly auditing.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyText(supabaseSchemaCode, 'sql')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  {copiedId === 'sql' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied SQL!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy SQL</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() =>
                    triggerFileDownload(
                      supabaseSchemaCode,
                      'edgepulse_supabase_schema.sql',
                      'application/sql;charset=utf-8;'
                    )
                  }
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .sql</span>
                </button>
              </div>
            </div>

            <pre className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-300 overflow-x-auto max-h-[560px] leading-relaxed">
              {supabaseSchemaCode}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}