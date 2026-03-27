/**
 * Centralized debug logger.
 * Controlled by Vite env: VITE_DEBUG=true/false
 */

const isDebug = () => String(import.meta.env.VITE_DEBUG ?? 'false').toLowerCase() === 'true';

function safeStringify(value) {
    try {
        return JSON.stringify(value);
    } catch {
        return '[unserializable]';
    }
}

export const logger = {
    debug(...args) {
        if (!isDebug()) return;
        console.debug(...args);
    },
    info(...args) {
        if (!isDebug()) return;
        console.info(...args);
    },
    warn(...args) {
        if (!isDebug()) return;
        console.warn(...args);
    },
    error(...args) {
        // keep errors always visible
        console.error(...args);
    },
    table(obj) {
        if (!isDebug()) return;
        // eslint-disable-next-line no-console
        console.table(obj);
    },
    json(label, obj) {
        if (!isDebug()) return;
        console.debug(label, safeStringify(obj));
    }
};

