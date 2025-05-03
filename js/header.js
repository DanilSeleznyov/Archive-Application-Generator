const settingsButton = document.querySelector('.app_settings_button');
const settingsDropdown = document.querySelector('.app_settings_dropdown');

settingsButton.addEventListener('click', () => {
    const isHidden = settingsDropdown.style.display === 'none';
    settingsDropdown.style.display = isHidden ? 'block' : 'none';
});
document.addEventListener('click', (event) => {
    if (!settingsButton.contains(event.target) && !settingsDropdown.contains(event.target)) {
        settingsDropdown.style.display = 'none';
    }
});