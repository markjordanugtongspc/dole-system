/**
 * Main JavaScript Entry Point
 * Handles authentication and app initialization
 */
import '../css/main.css';
import 'animate.css';
import 'flowbite';
import { initFlowbite } from 'flowbite';
import { initLoginHandler, initLogoutHandler, initSmartLoader, initMobileSplash } from './modules/auth.js';
import { initCharts } from './modules/charts.js';
import { initLDNPage } from './modules/ldngip.js';
import { initModalHandler, updateUIProfile } from './modules/modal.js';
import { initExportPage } from './modules/export.js';
import { getBasePath } from './modules/auth.js';
import { initNotifications } from './modules/notifications.js';
import { initDarkMode } from './modules/darkmode.js';
import { initSyncIndicator, startSyncWorker } from './modules/sync-manager.js';

// [HYBRID] Initialize Smart Loader immediately (handles FOUC & pre-loading state)
initSmartLoader();

// [HYBRID] Apply theme before initial paint to prevent flash of white/black
initDarkMode();

// [HYBRID] Make Flowbite globally available for AJAX re-initialization
window.initFlowbite = initFlowbite;

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // [HYBRID] Log current mode for easier debugging
    console.log(`DOLE System initialized. Mode: ${import.meta.env.VITE_USE_SUPABASE === 'true' ? '[SUPABASE]' : '[LOCALHOST]'}`);

    const path = window.location.pathname;

    // Initialize modules
    initLoginHandler();
    initLogoutHandler();
    initMobileSplash();
    initCharts();
    initLDNPage();
    initModalHandler();
    initAutoYear();
    loadUserProfile();
    initNotifications();

    // Offline-First: Initialize sync indicator pill and start background worker
    initSyncIndicator();
    startSyncWorker();

    // Page specific initialization
    if (path.includes('/export/')) {
        initExportPage();
    }

    // Add password toggle functionality
    initPasswordToggle();

    // Inject Circular Favicon
    injectFavicon();
});

/**
 * Initialize password visibility toggle for all forms
 */
function initPasswordToggle() {
    const toggleBtns = document.querySelectorAll('.togglePassword');

    toggleBtns.forEach(btn => {
        // Find the input in the same form/container
        const passwordInput = btn.closest('.relative').querySelector('input');

        if (btn && passwordInput) {
            btn.addEventListener('click', () => {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);

                // Toggle eye icon
                const eyeOpen = btn.querySelector('.eye-open');
                const eyeClosed = btn.querySelector('.eye-closed');

                if (eyeOpen && eyeClosed) {
                    eyeOpen.classList.toggle('hidden');
                    eyeClosed.classList.toggle('hidden');
                }
            });
        }
    });
}

/**
 * Inject the Circular Favicon using Canvas
 */
function injectFavicon() {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Handle specific cross-origin rules if served differently

    img.onload = function () {
        const canvas = document.createElement('canvas');
        const size = 64; // Standard icon size
        canvas.width = size;
        canvas.height = size;

        const ctx = canvas.getContext('2d');

        // Draw circle clipping path
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.clip();

        // Draw image
        ctx.drawImage(img, 0, 0, size, size);

        // Create link tag
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }

        link.type = 'image/png';
        link.href = canvas.toDataURL();
    };

    // Use centralized base-path resolver so Render subpaths do not break favicon URL.
    img.src = `${getBasePath()}frontend/images/logo/doleiligan.png`;
}

/**
 * Initialize Auto Year Detector
 * Finds elements with class 'auto-year' and sets text to current year
 */
export function initAutoYear() {
    const yearElements = document.querySelectorAll('.auto-year');
    const currentYear = new Date().getFullYear();

    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
}

/**
 * Fetch current user profile and update UI
 */
async function loadUserProfile() {
    try {
        // Pass user_id for Vercel serverless (no PHP sessions)
        let userId = '';
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.id) userId = `?user_id=${user.id}`;
        } catch (e) { /* ignore */ }

        const fetchWithRetry = async (url, options = {}, retries = 1, delayMs = 1200) => {
            try {
                return await fetch(url, options);
            } catch (error) {
                if (retries <= 0) throw error;
                await new Promise(resolve => setTimeout(resolve, delayMs));
                return fetchWithRetry(url, options, retries - 1, delayMs);
            }
        };

        const response = await fetchWithRetry(`${getBasePath()}api/profile.php${userId}`);
        const result = await response.json();
        if (result.success) {
            updateUIProfile(result.profile);
        }
    } catch (error) {
        console.error('Error loading user profile:', error);
    }
}
