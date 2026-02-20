import { showAuthError, showLoginSuccess } from './modal.js';
import Swal from 'sweetalert2';

/**
 * Authentication Module
 * Handles login validation, smart loading, and transition animations
 */

/**
 * Get the base path of the project (e.g., /github/dole-system/)
 */
export function getBasePath() {
    const path = window.location.pathname;
    const searchStr = '/dole-system/';
    const index = path.toLowerCase().indexOf(searchStr.toLowerCase());
    if (index !== -1) {
        return path.substring(0, index + searchStr.length);
    }
    return '/';
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
 * Simple Encryption Utility (XOR-based Obfuscation)
 * Note: Should use HTTPS in production.
 */
const SimpleCrypto = {
    _key: 'DOLE-GIP-SECURE-KEY-2026',
    encrypt: function (text) {
        try {
            const textToChars = text => text.split('').map(c => c.charCodeAt(0));
            const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
            const applySaltToChar = code => textToChars(this._key).reduce((a, b) => a ^ b, code);
            return text.split('')
                .map(textToChars)
                .map(applySaltToChar)
                .map(byteHex)
                .join('');
        } catch (e) {
            console.error('Encryption Failed', e);
            return null;
        }
    },
    decrypt: function (encoded) {
        try {
            const textToChars = text => text.split('').map(c => c.charCodeAt(0));
            const applySaltToChar = code => textToChars(this._key).reduce((a, b) => a ^ b, code);
            return encoded.match(/.{1,2}/g)
                .map(hex => parseInt(hex, 16))
                .map(applySaltToChar)
                .map(charCode => String.fromCharCode(charCode))
                .join('');
        } catch (e) {
            console.error('Decryption Failed', e);
            return null;
        }
    }
};

/**
 * Initialize Login Handler with "Opening" Animation
 */
export function initLoginHandler() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    // Restore "Remember Me" credentials if they exist
    if (usernameInput && passwordInput && rememberMeCheckbox) {
        const storedUser = localStorage.getItem('secure_user');
        const storedPass = localStorage.getItem('secure_pass');

        if (storedUser && storedPass) {
            const decryptedUser = SimpleCrypto.decrypt(storedUser);
            const decryptedPass = SimpleCrypto.decrypt(storedPass);

            if (decryptedUser && decryptedPass) {
                usernameInput.value = decryptedUser;
                passwordInput.value = decryptedPass;
                rememberMeCheckbox.checked = true;
            }
        }
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            try {
                const response = await fetch(`${getBasePath()}api/auth.php`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: usernameInput.value,
                        password: passwordInput.value
                    })
                });

                const result = await response.json();

                if (result.success) {
                    // Handle "Remember Me"
                    if (rememberMeCheckbox.checked) {
                        localStorage.setItem('secure_user', SimpleCrypto.encrypt(usernameInput.value));
                        localStorage.setItem('secure_pass', SimpleCrypto.encrypt(passwordInput.value));
                    } else {
                        localStorage.removeItem('secure_user');
                        localStorage.removeItem('secure_pass');
                    }

                    // Set login flags
                    const hasLoggedInBefore = localStorage.getItem('hasLoggedInBefore') === 'true';
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('hasLoggedInBefore', 'true');
                    localStorage.setItem('user', JSON.stringify(result.user));

                    // Show Success Modal then Trigger Opening Animation
                    await showLoginSuccess(hasLoggedInBefore);
                    playOpeningAnimation(hasLoggedInBefore);
                } else {
                    showAuthError();
                    passwordInput.value = '';
                    passwordInput.focus();
                }
            } catch (error) {
                console.error('Login Error:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Error',
                    text: 'Unable to reach the server. Please check your connection.'
                });
            }
        });
    }
}

/**
 * Play the "Opening" animation on the panels then redirect
 */
function playOpeningAnimation(fast = false) {
    const leftPanel = document.getElementById('left-panel');
    const rightPanel = document.getElementById('right-panel');
    const leftPanelContent = document.getElementById('left-panel-content');
    const rightPanelContent = document.getElementById('right-panel-content');

    // Hide the panel contents (text and login form) smoothly
    if (leftPanelContent) leftPanelContent.style.opacity = '0';
    if (rightPanelContent) rightPanelContent.style.opacity = '0';

    // Create transparent overlay without blue background
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-[100] flex items-center justify-center pointer-events-none';

    // Add transparent rounded logo using Animate.css
    const delayClass = fast ? '' : 'animate__delay-1s';
    const durationStyle = fast ? 'animation-duration: 0.8s;' : 'animation-duration: 2s;';

    overlay.innerHTML = `
        <img src="${getBasePath()}frontend/images/logo/doleiligan.png" class="w-64 h-64 md:w-96 md:h-96 object-contain bg-white/20 backdrop-blur-sm shadow-2xl rounded-full p-4 animate__animated animate__rotateOut ${delayClass}" style="${durationStyle}" alt="DOLE Logo">
    `;

    document.body.appendChild(overlay);

    // Timing constants based on mode
    const rotationWait = fast ? 0 : 1000;
    const slideWait = fast ? 600 : 1500;

    // Wait for logo to rotate, then open panels
    setTimeout(() => {
        if (leftPanel) leftPanel.classList.add('animate-slide-left');
        if (rightPanel) rightPanel.classList.add('animate-slide-right');

        // Wait to let the panels slide and logo finish fading out, then redirect
        setTimeout(() => {
            window.location.href = `${getBasePath()}frontend/dashboard/`;
        }, slideWait);
    }, rotationWait);
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
