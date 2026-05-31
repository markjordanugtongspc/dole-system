/**
 * START TEXT SIZE FUNCTIONALITY
 * Adjusts the global text size base on user preference in local storage.
 * It dynamically updates the font-size of the root HTML element, which 
 * seamlessly scales all tailwind text sizes (h1, h2, span, p) preserving proportions.
 */

export function initTextSize() {
    const applyTextSize = (size, isPreview = false) => {
        const root = document.documentElement;

        // Tailwind text sizes are based on rems (root element font-size).
        // By scaling the root font-size, we proportionally scale all headings, 
        // paragraphs, and spans that use Tailwind's text utilities.
        switch(size) {
            case 'small':
                root.style.fontSize = '85%';
                break;
            case 'medium':
                root.style.fontSize = '115%';
                break;
            case 'large':
                root.style.fontSize = '130%';
                break;
            case 'extra-large':
                root.style.fontSize = '150%';
                break;
            case 'normal':
            default:
                root.style.fontSize = '100%';
                break;
        }
    };

    // Retrieve saved size from localStorage or default to 'normal'
    const savedSize = localStorage.getItem('text-size') || 'normal';
    
    // Apply size immediately on page load
    applyTextSize(savedSize);

    // If we are on the Settings page, attach an event listener to the dropdown
    const sizeSelect = document.getElementById('pref-text-size');
    const settingsForm = document.getElementById('settings-form');

    if (sizeSelect) {
        sizeSelect.value = savedSize;
        
        // Listen for change events to preview the size WITHOUT saving
        sizeSelect.addEventListener('change', (e) => {
            const previewSize = e.target.value;
            applyTextSize(previewSize, true);
        });

        // Listen for actual settings save to commit to localStorage
        document.addEventListener('preferencesSaved', () => {
            const finalSize = sizeSelect.value;
            localStorage.setItem('text-size', finalSize);
        });
    }
}

/**
 * END TEXT SIZE FUNCTIONALITY
 */
