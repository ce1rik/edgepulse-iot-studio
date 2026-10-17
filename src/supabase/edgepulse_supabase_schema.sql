-- ============================================================================
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
    IF ABS(NEW.z_score) >= 2.20 THEN
        NEW.is_anomaly := TRUE;
        v_severity := CASE WHEN ABS(NEW.z_score) >= 3.00 THEN 'CRITICAL' ELSE 'WARNING' END;

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
ALTER PUBLICATION supabase_realtime ADD TABLE public.anomaly_events;