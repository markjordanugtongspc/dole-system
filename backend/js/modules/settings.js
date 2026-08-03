import { getBasePath, initSmartLoader, initLogoutHandler } from './auth.js';
import { updateUIProfile } from './modal.js';
import Swal from 'sweetalert2';

document.addEventListener('DOMContentLoaded', () => {
    initSmartLoader();
    initLogoutHandler();
    initSettings();
});

async function initSettings() {
    const basePath = getBasePath();
    const settingsForm = document.getElementById('settings-form');
    const passwordForm = document.getElementById('password-form');
    const updatePasswordBtn = document.getElementById('update-password-btn');
    const tabButtons = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const avatarInput = document.getElementById('settings-pic-input');
    const avatarPreview = document.getElementById('settings-avatar-preview');
    const saveStatus = document.getElementById('save-status');

    initBottomScrollControl();
    initGenderPicker();
    initProfileDropdownOnSettings();

    // 1. Fetch Current Data
    // Resolve user_id for Vercel serverless (no PHP sessions)
    let userId = '';
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.id) userId = `?user_id=${user.id}`;
    } catch (e) { /* ignore */ }

    try {
        const response = await fetch(`${basePath}api/profile.php${userId}`);
        const result = await response.json();

        if (result.success) {
            populateSettings(result.profile);
        } else {
            console.error('Failed to load settings:', result.error);
        }
    } catch (error) {
        console.error('Error fetching settings:', error);
    }

    // 2. Tab Switching Logic
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab-target');

            // Update Tab Links
            tabButtons.forEach(b => {
                b.classList.remove('active');
            });
            btn.classList.add('active');

            // Update Panels with animation
            tabContents.forEach(panel => {
                panel.classList.add('hidden');
                panel.classList.remove('animate-slide-in');
            });
            const targetPanel = document.getElementById(`tab-${target}`);
            targetPanel.classList.remove('hidden');
            setTimeout(() => targetPanel.classList.add('animate-slide-in'), 10);
        });
    });

    // 3. Avatar Preview
    if (avatarInput) avatarInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                avatarPreview.innerHTML = `<img src="${e.target.result}" class="w-full h-full object-cover" />`;
            };
            reader.readAsDataURL(file);
        }
    });

    // 4. Submit Profile Updates
    if (settingsForm) settingsForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        saveStatus.classList.remove('hidden');

        const formData = new FormData(settingsForm);
        const file = avatarInput.files[0];
        if (file) {
            formData.append('profile_pic', file);
        }

        // Add notifications state
        const notifEnabled = document.getElementById('pref-notifications').checked ? 1 : 0;
        formData.append('notifications_enabled', notifEnabled);

        // Inject user_id for Vercel serverless
        try { const u = JSON.parse(localStorage.getItem('user')); if (u && u.id) formData.append('user_id', u.id); } catch(e) {}

        try {
            const response = await fetch(`${basePath}api/profile.php`, {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                // Update global UI
                if (result.profile) {
                    updateUIProfile(result.profile);
                    localStorage.setItem('user', JSON.stringify(result.profile));
                }

                Swal.fire({
                    toast: true,
                    position: window.innerWidth < 768 ? 'top-end' : 'bottom-end',
                    icon: 'success',
                    title: 'System Synced',
                    text: 'Your profile has been updated.',
                    timer: 3000,
                    showConfirmButton: false,
                    customClass: {
                        popup: 'rounded-xl !bg-emerald-600 !text-white dark:!bg-emerald-700 border border-emerald-500 dark:border-emerald-600'
                    }
                });
            } else {
                Swal.fire({
                    toast: true,
                    position: window.innerWidth < 768 ? 'top-end' : 'bottom-end',
                    icon: 'error',
                    title: 'Update Interrupted',
                    text: result.error || 'Something went wrong during the update.',
                    timer: 3000,
                    showConfirmButton: false
                });
            }
        } catch (error) {
            console.error('Error saving settings:', error);
        } finally {
            saveStatus.classList.add('hidden');
        }
    });

    // 5. Submit Preferences (purely local/localStorage)
    const prefBtn = document.getElementById('save-pref-btn');
    if (prefBtn) {
        prefBtn.addEventListener('click', () => {
            // Dispatch a custom event so other modules (like textsize.js) know to save their state
            document.dispatchEvent(new CustomEvent('preferencesSaved'));
            
            Swal.fire({
                toast: true,
                position: window.innerWidth < 768 ? 'top-end' : 'bottom-end',
                icon: 'success',
                title: 'Preferences Saved',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            });
        });
    }

    const saveSettingsBtn = document.getElementById('save-settings-btn');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('preferencesSaved'));
            if (settingsForm) settingsForm.requestSubmit();
        });
    }

    // 6. Submit Password Change
    if (updatePasswordBtn) updatePasswordBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        const currentPass = document.getElementById('current_password').value;
        const newPass = document.getElementById('new_password').value;
        const confirmPass = document.getElementById('confirm_password').value;

        if (!currentPass || !newPass || !confirmPass) {
            return Swal.fire({
                toast: true,
                position: window.innerWidth < 768 ? 'top-end' : 'bottom-end',
                icon: 'warning',
                title: 'Missing Fields',
                text: 'All password fields are required.',
                timer: 3000,
                showConfirmButton: false
            });
        }

        if (newPass !== confirmPass) {
            return Swal.fire({
                toast: true,
                position: window.innerWidth < 768 ? 'top-end' : 'bottom-end',
                icon: 'error',
                title: 'Mismatch Detected',
                text: 'New passwords do not match.',
                timer: 3000,
                showConfirmButton: false
            });
        }

        try {
            const pwParams = {
                    action: 'change_password',
                    current_password: currentPass,
                    new_password: newPass,
                    confirm_password: confirmPass
                };
                // Inject user_id for Vercel serverless
                try { const u = JSON.parse(localStorage.getItem('user')); if (u && u.id) pwParams.user_id = u.id; } catch(e) {}

                const response = await fetch(`${basePath}api/profile.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(pwParams)
            });

            const result = await response.json();

            if (result.success) {
                ['current_password', 'new_password', 'confirm_password'].forEach((id) => { document.getElementById(id).value = ''; });
                Swal.fire({
                    toast: true,
                    position: window.innerWidth < 768 ? 'top-end' : 'bottom-end',
                    icon: 'success',
                    title: 'Security Updated',
                    text: 'Your password has been changed.',
                    timer: 3000,
                    showConfirmButton: false
                });
            } else {
                Swal.fire({
                    toast: true,
                    position: window.innerWidth < 768 ? 'top-end' : 'bottom-end',
                    icon: 'error',
                    title: 'Authentication Error',
                    text: result.error || 'Incorrect current password.',
                    timer: 3000,
                    showConfirmButton: false
                });
            }
        } catch (error) {
            console.error('Error changing password:', error);
        }
    });
}



// START: Settings profile dropdown activation
function initProfileDropdownOnSettings() {
    if (!window.location.pathname.includes('/frontend/user/settings')) return;
    const profileButton = document.getElementById('profileDropdownButton');
    const profileDropdown = document.getElementById('profileDropdown');
    if (!profileButton || !profileDropdown) return;

    window.setTimeout(() => {
        if (!profileDropdown.classList.contains('hidden')) return;
        profileButton.click();
    }, 0);
}
// END: Settings profile dropdown activation
// START: Bottom-of-page scroll control
function initBottomScrollControl() {
    const control = document.createElement('button');
    const defaultIcon = `<svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 14-4-4-4 4"/></svg>`;
    const hoverIcon = `<svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 17-4-4-4 4m8-6-4-4-4 4"/></svg>`;

    control.type = 'button';
    control.id = 'settings-scroll-top';
    control.setAttribute('aria-label', 'Scroll to top');
    control.className = 'fixed bottom-5 left-1/2 z-40 flex h-11 w-11 -translate-x-1/2 translate-y-2 items-center justify-center rounded-full bg-royal-blue text-white opacity-0 pointer-events-none shadow-lg transition-all duration-300 ease-out hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800 cursor-pointer touch-manipulation sm:bottom-6 sm:left-auto sm:right-4 sm:translate-x-0';
    control.innerHTML = defaultIcon;
    document.body.appendChild(control);

    const updateVisibility = () => {
        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
        control.classList.toggle('opacity-100', atBottom);
        control.classList.toggle('opacity-0', !atBottom);
        control.classList.toggle('pointer-events-auto', atBottom);
        control.classList.toggle('pointer-events-none', !atBottom);
        control.classList.toggle('translate-y-0', atBottom);
        control.classList.toggle('translate-y-2', !atBottom);
    };

    control.addEventListener('mouseenter', () => { control.innerHTML = hoverIcon; });
    control.addEventListener('mouseleave', () => { control.innerHTML = defaultIcon; });
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    control.addEventListener('click', scrollToTop);
    control.addEventListener('touchend', scrollToTop, { passive: true });
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);
    updateVisibility();
}
// END: Bottom-of-page scroll control

// START: Gender button picker
function initGenderPicker() {
    const picker = document.getElementById('gender-picker');
    if (!picker) return;
    picker.querySelectorAll('.gender-option').forEach((button) => {
        button.addEventListener('click', () => setGenderValue(button.dataset.gender));
    });
    setGenderValue(document.getElementById('set-gender')?.value || 'Male');
}

function setGenderValue(value) {
    const hiddenInput = document.getElementById('set-gender');
    const picker = document.getElementById('gender-picker');
    if (!hiddenInput || !picker) return;

    const styles = {
        Male: ['bg-blue-600', 'text-white', 'border-blue-600', 'hover:bg-blue-700', 'dark:bg-blue-600', 'dark:text-white', 'dark:hover:bg-blue-500'],
        Female: ['bg-pink-600', 'text-white', 'border-pink-600', 'hover:bg-pink-700', 'dark:bg-pink-600', 'dark:text-white', 'dark:hover:bg-pink-500'],
        Other: ['bg-gray-600', 'text-white', 'border-gray-600', 'hover:bg-gray-700', 'dark:bg-gray-600', 'dark:text-white', 'dark:hover:bg-gray-500']
    };
    const selected = styles[value] ? value : 'Male';
    hiddenInput.value = selected;

    picker.querySelectorAll('.gender-option').forEach((button) => {
        const isSelected = button.dataset.gender === selected;
        const colorClasses = styles[button.dataset.gender] || styles.Other;
        const selectedTextClasses = { Male: ['text-blue-700', 'dark:text-blue-300'], Female: ['text-pink-700', 'dark:text-pink-300'], Other: ['text-gray-700', 'dark:text-gray-300'] }[button.dataset.gender] || [];
        button.classList.toggle('ring-2', isSelected);
        button.classList.toggle('ring-current', isSelected);
        button.classList.toggle('ring-offset-1', isSelected);
        button.classList.toggle('bg-transparent', isSelected);
        button.setAttribute('aria-pressed', String(isSelected));
        colorClasses.forEach((className) => button.classList.toggle(className, !isSelected));
        selectedTextClasses.forEach((className) => button.classList.toggle(className, isSelected));
    });
}
// END: Gender button picker
function populateSettings(profile) {
    const basePath = getBasePath();

    // UI Headers
    document.querySelectorAll('.sidebar-user-name').forEach(el => el.textContent = profile.full_name);
    document.querySelectorAll('.sidebar-user-email').forEach(el => el.textContent = profile.email || 'No email set');
    document.getElementById('settings-user-email').textContent = profile.email || 'no-email@dole.gov.ph';

    // Role Display
    const profileRole = profile.role ? profile.role.toUpperCase() + ' ACCOUNT' : 'SYSTEM USER';
    document.getElementById('settings-user-role').textContent = profileRole;

    // Avatar
    const avatarPreview = document.getElementById('settings-avatar-preview');
    if (profile.profile_picture_path) {
        avatarPreview.innerHTML = `<img src="${basePath}${profile.profile_picture_path}" class="w-full h-full object-cover" />`;
    } else {
        const initials = profile.full_name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        avatarPreview.textContent = initials;
    }

    // Form Fields
    document.getElementById('set-full-name').value = profile.full_name || '';
    document.getElementById('set-email').value = profile.email || '';
    document.getElementById('set-bio').value = profile.bio_graphy || '';
    document.getElementById('set-address').value = profile.home_address || '';
    document.getElementById('set-phone').value = profile.phone_number || '';
    document.getElementById('set-languages').value = profile.languages || '';
    document.getElementById('set-dob').value = profile.date_of_birth || '';
    setGenderValue(profile.gender || 'Male');
    document.getElementById('set-religion').value = profile.religion || '';

    // Preferences
    document.getElementById('pref-notifications').checked = parseInt(profile.notifications_enabled) === 1;
}
