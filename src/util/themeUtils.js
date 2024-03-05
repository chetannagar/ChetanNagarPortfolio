// themeUtils.js

export const RootElement = {
    html: document.querySelector('html'),
    initialTheme: localStorage.getItem('theme') || 'light',
}

export function toggleIcons(lightIcon, darkIcon, theme) {
    const showLight = theme === 'light';
    lightIcon.classList.toggle('hidden', showLight);
    darkIcon.classList.toggle('hidden', !showLight);
}

export function initializeThemeObserver(html, lightIcon, darkIcon) {
    // Function to toggle images based on the theme
    function toggleIconsCallback(mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-mode') {
                // Toggle images when data-mode changes
                toggleIcons(lightIcon, darkIcon, mutation.target.getAttribute('data-mode'));
            }
        }
    }

    // Initial toggle based on the current theme
    toggleIcons(lightIcon, darkIcon, html.getAttribute('data-mode'));

    // Create a MutationObserver to watch for changes in the data-mode attribute
    const observer = new MutationObserver(toggleIconsCallback);

    // Observe changes in the data-mode attribute
    observer.observe(html, { attributes: true });

    // Return the observer, in case you need to disconnect it later
    return observer;
}
