let isDark = false;

function toggleTheme() {
    isDark = !isDark;
    document.documentElement.style.setProperty('--bg-color', isDark ? '#121212' : '#ffffff');
    document.documentElement.style.setProperty('--text-color', isDark ? '#ffffff' : '#000000');
    document.documentElement.style.setProperty('--sidebar-color', isDark ? '#1e1e1e' : '#f5f5f5');
}