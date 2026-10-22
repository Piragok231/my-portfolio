const themeToggleBtn = document.getElementById('themeToggle');

themeToggleBtn.addEventListener('click', () => {
    // Проверяем текущую тему на теге html
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Переключаем на светлую
        document.documentElement.removeAttribute('data-theme');
        themeToggleBtn.textContent = 'Тёмная тема';
    } else {
        // Переключаем на тёмную
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = 'Светлая тема';
    }
});
