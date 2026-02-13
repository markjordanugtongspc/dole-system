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
    const tabButtons = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const avatarInput = document.getElementById('settings-pic-input');
    const avatarPreview = document.getElementById('settings-avatar-preview');
    const saveStatus = document.getElementById('save-status');

    // 1. Fetch Current Data
    try {
        const response = await fetch(`${basePath}api/profile.php`);
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
    avatarInput.addEventListener('change', (e) => {
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
    settingsForm.addEventListener('submit', async (e) => {
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
                    icon: 'success',
                    title: 'System Synced',
                    text: 'Your profile information has been updated successfully.',
                    timer: 2000,
                    showConfirmButton: false,
                    customClass: {
                        popup: 'rounded-3xl border border-blue-50'
                    }
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Update Interrupted',
                    text: result.error || 'Something went wrong during the update.'
                });
            }
        } catch (error) {
            console.error('Error saving settings:', error);
        } finally {
            saveStatus.classList.add('hidden');
        }
    });

    // 5. Submit Preferences (reusing profile logic)
    const prefBtn = document.getElementById('save-pref-btn');
    if (prefBtn) {
        prefBtn.addEventListener('click', () => {
            settingsForm.requestSubmit();
        });
    }

    // 6. Submit Password Change
    passwordForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const currentPass = document.getElementById('current_password').value;
        const newPass = document.getElementById('new_password').value;
        const confirmPass = document.getElementById('confirm_password').value;

        if (!currentPass || !newPass || !confirmPass) {
            return Swal.fire({ icon: 'warning', title: 'Missing Fields', text: 'All password fields are required.' });
        }

        if (newPass !== confirmPass) {
            return Swal.fire({ icon: 'error', title: 'ismatch Detected', text: 'New passwords do not match.' });
        }

        try {
            const response = await fetch(`${basePath}api/profile.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    action: 'change_password',
                    current_password: currentPass,
                    new_password: newPass,
                    confirm_password: confirmPass
                })
            });

            const result = await response.json();

            if (result.success) {
                passwordForm.reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Security Updated',
                    text: 'Your password has been changed successfully.',
                    timer: 2000,
                    showConfirmButton: false
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Authentication Error',
                    text: result.error || 'Incorrect current password.'
                });
            }
        } catch (error) {
            console.error('Error changing password:', error);
        }
    });
}

function populateSettings(profile) {
    const basePath = getBasePath();

    // UI Headers
    document.querySelectorAll('.sidebar-user-name').forEach(el => el.textContent = profile.full_name);
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
    document.getElementById('set-gender').value = profile.gender || 'Male';
    document.getElementById('set-religion').value = profile.religion || '';

    // Preferences
    document.getElementById('pref-notifications').checked = parseInt(profile.notifications_enabled) === 1;
}
