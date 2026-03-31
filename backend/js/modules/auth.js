import { showAuthError, showLoginSuccess } from './modal.js';
import Swal from 'sweetalert2';

/**
 * Authentication Module
 * Handles login validation, smart loading, and transition animations
 */

/**
 * Hybrid engine runtime flag for frontend modules.
 * - true  => [SUPABASE] Cloud mode (PostgreSQL)
 * - false => [LOCALHOST] Laragon mode (MySQL)
 */
export const USE_SUPABASE = String(import.meta.env.VITE_USE_SUPABASE ?? 'true').toLowerCase() === 'true';

/**
 * [HYBRID] Helper to check if current frontend state is Supabase
 */
export function isSupabaseMode() {
    return USE_SUPABASE;
}

/**
 * [HYBRID] Get the base path of the project dynamically (supports subdirectories)
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
 * Supports both Desktop and Mobile (Drawer) forms
 */
export function initLoginHandler() {
    const loginForms = document.querySelectorAll('.login-form-shared');

    loginForms.forEach(form => {
        const usernameInput = form.querySelector('input[name="username"]');
        const passwordInput = form.querySelector('input[name="password"]');
        const rememberMeCheckbox = form.querySelector('input[name="rememberMe"]');

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

        form.addEventListener('submit', async (e) => {
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

                    // Hide the drawer if it's open (Mobile)
                    const drawer = document.getElementById('drawer-login');
                    if (drawer) {
                        // Forcibly hide by adding the translate class
                        drawer.classList.add('translate-y-full');
                        
                        const closeBtn = drawer.querySelector('[data-drawer-hide]');
                        if (closeBtn) closeBtn.click();
                    }

                    // Show Success Modal then Trigger Opening Animation
                    await showLoginSuccess(hasLoggedInBefore);
                    playOpeningAnimation(hasLoggedInBefore);
                } else {
                    // AUTO HIDE FORM BOTTOM DRAWER ON WRONG PASSWORD
                    const drawer = document.getElementById('drawer-login');
                    if (drawer) {
                        // Use class manipulation for the rebound effect
                        drawer.classList.add('translate-y-full');
                        
                        // Wait for drawer to hide before showing error
                        setTimeout(() => {
                            showAuthError();
                            
                            // Re-open after error shows to let user logs again
                            setTimeout(() => {
                                drawer.classList.remove('translate-y-full');
                                passwordInput.value = '';
                                passwordInput.focus();
                            }, 600);
                        }, 400);
                    } else {
                        showAuthError();
                        passwordInput.value = '';
                        passwordInput.focus();
                    }
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
    });
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

/**
 * Initialize Mobile Splash Drawer Transitions
 */
export function initMobileSplash() {
    const splash = document.getElementById('mobile-splash');
    const showBtn = document.getElementById('show-login-btn');
    const backBtn = document.getElementById('back-to-splash');
    const bgContent = document.getElementById('mobile-bg-content');
    const welcomeText = document.getElementById('mobile-welcome-text');
    const reopenBtn = document.getElementById('reopen-login-drawer');
    const notifyBtn = document.getElementById('request-notifications-btn');

    // Handle Notification Permissions immediately on first splash interaction or load
    const requestNotifications = async () => {
        if ('Notification' in window) {
            const permission = await Notification.requestPermission();
            console.log('Notification permission:', permission);
            if (permission === 'granted') {
                if (notifyBtn) notifyBtn.classList.add('hidden');
            }
        }
    };

    if (Notification.permission === 'default' && notifyBtn) {
        notifyBtn.classList.remove('hidden');
        notifyBtn.addEventListener('click', requestNotifications);
    }

    const hideSplash = () => {
        if (splash) {
            splash.style.transform = 'translateY(-100%)';
            // Wait for transition to finish then hide completely
            setTimeout(() => {
                splash.style.visibility = 'hidden';
                splash.style.pointerEvents = 'none';
                splash.style.zIndex = '-1';

                // On first hide (Login click), also ask for notifications if not yet asked
                if (Notification.permission === 'default') requestNotifications();

                // DELAYED DRAWER OPENING: Wait until splash is gone
                const drawer = document.getElementById('drawer-login');
                if (drawer) {
                    drawer.classList.remove('translate-y-full');
                }
            }, 800);
        }
    };

    const showSplash = () => {
        if (splash) {
            splash.style.zIndex = '9999';
            splash.style.pointerEvents = 'auto';
            splash.style.visibility = 'visible';
            splash.style.transform = 'translateY(0)';
        }
    };

    if (showBtn) showBtn.addEventListener('click', hideSplash);

    // If the user clicked Forgot Password link
    const forgotLinks = document.querySelectorAll('.forgot-password-link');
    forgotLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (e.target.closest('#mobile-splash')) {
                hideSplash();
            }
        });
    });

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            // Auto hide LOGIN DRAWER if open
            const drawer = document.getElementById('drawer-login');
            if (drawer) {
                // Forcefully slide the drawer down off-screen
                drawer.classList.add('translate-y-full');
                
                // Fallback: If Flowbite's close button happens to exist, click it
                const closeBtn = drawer.querySelector('[data-drawer-hide]');
                if (closeBtn) closeBtn.click();
            }
            // Animate splash in
            showSplash();
        });
    }

    // --- Drawer Event Listeners for Background Movement ---
    // Note: We use MutationObserver or simple interval as fallback if Flowbite events aren't firing globally
    const drawer = document.getElementById('drawer-login');
    const curvedWelcome = document.getElementById('curved-welcome');
    const peoplesBg = document.getElementById('peoples-bg');

    if (drawer) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isHidden = drawer.classList.contains('translate-y-full');
                    if (!isHidden) {
                        // Drawer is OPEN -> Move background UP & Curve Text
                        if (bgContent) bgContent.style.transform = 'translateY(-35%)';
                        
                        // Hide conventional text
                        if (welcomeText) {
                            welcomeText.style.opacity = '0';
                            welcomeText.style.transform = 'translateY(20px) scale(0.9)';
                        }
                        
                        // Show curved text around circle
                        if (curvedWelcome) {
                            curvedWelcome.style.opacity = '1';
                            curvedWelcome.style.transform = 'scale(1)';
                        }

                        if (reopenBtn) {
                            reopenBtn.style.opacity = '0';
                            reopenBtn.style.transform = 'scale(0)';
                        }

                        // Show Peoples Background
                        if (peoplesBg) {
                            peoplesBg.classList.remove('opacity-0', 'scale-0');
                            peoplesBg.classList.add('opacity-40', 'scale-[1.6]');
                        }
                    } else {
                        // Drawer is CLOSED -> Reset to original design
                        if (bgContent) bgContent.style.transform = 'translateY(0)';
                        
                        // Show conventional text
                        if (welcomeText) {
                            welcomeText.style.opacity = '1';
                            welcomeText.style.transform = 'translateY(0) scale(1)';
                        }
                        
                        // Hide curved text
                        if (curvedWelcome) {
                            curvedWelcome.style.opacity = '0';
                            curvedWelcome.style.transform = 'scale(0.5)';
                        }

                        // Reveal the "Sign In Now" button if splash is gone
                        if (reopenBtn && splash && splash.style.visibility === 'hidden') {
                            reopenBtn.style.opacity = '1';
                            reopenBtn.style.transform = 'scale(1)';
                        }

                        // Hide Peoples Background
                        if (peoplesBg) {
                            peoplesBg.classList.add('opacity-0', 'scale-0');
                            peoplesBg.classList.remove('opacity-40', 'scale-[1.6]');
                        }
                    }
                }
            });
        });

        observer.observe(drawer, { attributes: true });
    }
}