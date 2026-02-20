/**
 * DOLE GIP System - Dark Mode Manager
 * Handles dark/light theme switching for TailwindCSS + Flowbite (class-based)
 * Persists preference via localStorage AND client-side cookie
 */

const THEME_KEY = 'color-theme';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year in seconds

// ─── Cookie Helpers ───────────────────────────────────────────────────────────

function setCookie(name, value, maxAge) {
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=/; SameSite=Lax`;
}

function getCookie(name) {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
}

// ─── Theme Resolution ─────────────────────────────────────────────────────────

/**
 * Resolve the current theme from localStorage → cookie → system preference
 */
function resolveTheme() {
    const stored = localStorage.getItem(THEME_KEY) || getCookie(THEME_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    // Fallback: default to light instead of OS preference to maintain consistency
    return 'light';
}

// ─── Apply Theme ──────────────────────────────────────────────────────────────

/**
 * Apply a theme ('dark' | 'light') to the document and persist it.
 */
export function applyTheme(theme) {
    const html = document.documentElement;

    if (theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    // Persist in both localStorage and cookie
    localStorage.setItem(THEME_KEY, theme);
    setCookie(THEME_KEY, theme, COOKIE_MAX_AGE);

    // Sync all toggle buttons/checkboxes on the page
    syncToggleUI(theme);

    // Dispatch a custom event for other modules (like charts.js) to react
    document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
}

// ─── Toggle ───────────────────────────────────────────────────────────────────

export function toggleTheme() {
    const theme = resolveTheme();
    applyTheme(theme === 'dark' ? 'light' : 'dark');
}

// ─── UI Sync ─────────────────────────────────────────────────────────────────

/**
 * Update all dark-mode toggle elements on the page to reflect the active theme.
 * Supports: checkboxes (#pref-dark-mode), icon buttons (#theme-toggle-btn),
 * and any element with [data-theme-toggle].
 */
function syncToggleUI(theme) {
    const isDark = theme === 'dark';

    // Checkbox toggle (settings page)
    const checkbox = document.getElementById('pref-dark-mode');
    if (checkbox) checkbox.checked = isDark;

    // Icon-based toggle button
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    if (darkIcon && lightIcon) {
        darkIcon.classList.toggle('hidden', isDark);   // hide moon when dark (already dark)
        lightIcon.classList.toggle('hidden', !isDark); // hide sun when light
    }

    // Sidebar "Theme Toggle" button text (optional label update)
    const sidebarThemeLabel = document.getElementById('sidebar-theme-label');
    if (sidebarThemeLabel) {
        sidebarThemeLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    }
}

// ─── Init ─────────────────────────────────────────────────────────────────────

/**
 * Call this once on page load to apply the saved theme and wire up all toggles.
 * Should be called from main.js or any page entry point.
 */
export function initDarkMode() {
    const theme = resolveTheme();
    applyTheme(theme);

    // Wire up checkbox toggle (settings page: #pref-dark-mode)
    const checkbox = document.getElementById('pref-dark-mode');
    if (checkbox) {
        checkbox.addEventListener('change', () => {
            applyTheme(checkbox.checked ? 'dark' : 'light');
        });
    }

    // Wire up icon button toggle (#theme-toggle-btn) — sidebar / navbar
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
    }

    // Wire up any element with [data-theme-toggle] attribute
    document.querySelectorAll('[data-theme-toggle]').forEach(el => {
        el.addEventListener('click', toggleTheme);
    });

    // Listen for OS theme changes (if no manual preference is set)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if the user hasn't manually set a preference
        const manual = localStorage.getItem(THEME_KEY) || getCookie(THEME_KEY);
        if (!manual) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// ─── Theme Query Helper ──────────────────────────────────────────────────────

/**
 * Returns true if the current theme is dark.
 * Use this in modules that need to build theme-aware HTML at render-time
 * (e.g. modals that generate HTML strings instead of using Tailwind dark: prefix).
 */
export function isDarkMode() {
    return document.documentElement.classList.contains('dark');
}

// Expose globally for inline onclick usage (e.g. sidebar button)
window.toggleTheme = toggleTheme;
window.isDarkMode = isDarkMode;
