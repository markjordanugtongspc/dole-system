/**
 * Main JavaScript Entry Point
 * Handles authentication and app initialization
 */
import '../css/main.css';
import 'flowbite';
import { initLoginHandler, initLogoutHandler, initSmartLoader } from './modules/auth.js';
import { initCharts } from './modules/charts.js';
import { initLDNPage } from './modules/ldngip.js';
import { initModalHandler } from './modules/modal.js';
import { initExportPage } from './modules/export.js';

// Initialize Smart Loader immediately
initSmartLoader();

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOLE System initialized');

    const path = window.location.pathname;

    // Initialize modules
    initLoginHandler();
    initLogoutHandler();
    initCharts();
    initLDNPage();
    initModalHandler();
    initAutoYear();

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
 * Initialize password visibility toggle
 */
function initPasswordToggle() {
    const toggleBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    if (toggleBtn && passwordInput) {
        toggleBtn.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Toggle eye icon
            const eyeOpen = toggleBtn.querySelector('.eye-open');
            const eyeClosed = toggleBtn.querySelector('.eye-closed');

            if (eyeOpen && eyeClosed) {
                eyeOpen.classList.toggle('hidden');
                eyeClosed.classList.toggle('hidden');
            }
        });
    }
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

    // Determine path based on project root
    const path = window.location.pathname;
    let basePath = '';

    // Check if we are in the dole-system folder structure
    if (path.includes('/dole-system/')) {
        basePath = path.substring(0, path.indexOf('/dole-system/') + '/dole-system/'.length);
    }



    // Construct absolute path to image
    img.src = `${basePath}frontend/images/logo/doleiligan.png`;
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
