import { showAuthError, showLoginSuccess } from './modal.js';
import Swal from 'sweetalert2';

/**
 * Authentication Module
 * Handles login validation, smart loading, and transition animations
 */

/**
 * Get the base path of the project (e.g., /Github/dole-system)
 */
function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/dole-system/')) {
        return path.substring(0, path.indexOf('/dole-system/') + '/dole-system/'.length);
    }
    return '';
}

/**
 * Smart Loader Logic
 * checking if user visited before to skip or show loader
 */
export function initSmartLoader() {
    // Immediate check (runs when module loads)
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    const loader = document.getElementById('page-loader');

    if (hasVisited) {
        document.documentElement.classList.add('loaded');
        if (loader) loader.style.display = 'none';
    }

    // Window load fallback/setter
    window.addEventListener('load', () => {
        // Add fade-in animation to main content
        const mainContent = document.querySelector('body > *:not(.page-loader)');
        if (mainContent) {
            mainContent.classList.add('content-fade-in');
        }

        setTimeout(() => {
            document.documentElement.classList.add('loaded');
            if (loader) loader.classList.add('hidden');
            document.body.style.overflow = 'auto';
            localStorage.setItem('hasVisitedBefore', 'true');
        }, 300);
    });
}

/**
 * Initialize Login Handler with "Opening" Animation
 */
export function initLoginHandler() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');

            const correctUsername = import.meta.env.VITE_AUTH_USERNAME;
            const correctPassword = import.meta.env.VITE_AUTH_PASSWORD;

            if (usernameInput.value === correctUsername && passwordInput.value === correctPassword) {
                // Set login flags
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('hasLoggedInBefore', 'true');

                // Show Success Modal then Trigger Opening Animation
                await showLoginSuccess();
                playOpeningAnimation();
            } else {
                showAuthError();
                passwordInput.value = '';
                passwordInput.focus();
            }
        });
    }
}

/**
 * Play the "Opening" animation on the panels then redirect
 */
function playOpeningAnimation() {
    const leftPanel = document.getElementById('left-panel');
    const rightPanel = document.getElementById('right-panel');

    // Add animation classes
    if (leftPanel) leftPanel.classList.add('animate-slide-left');
    if (rightPanel) rightPanel.classList.add('animate-slide-right');

    // Wait for animation to finish (800ms matches CSS)
    setTimeout(() => {
        window.location.href = `${getBasePath()}frontend/dashboard/`;
    }, 800);
}

export function initLogoutHandler() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            window.location.href = `${getBasePath()}`;
        });
    }
}
