const darkIcon = document.querySelector('.bxs-moon');
const lightIcon = document.querySelector('.bx-sun');

function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')){
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'inline';
        localStorage.setItem('themeMode', 'dark');
    }
    else {
        darkIcon.style.display = 'inline';
        lightIcon.style.display = 'none';
        localStorage.setItem('themeMode', 'light');
    }
}

function setTheme() {
    const saveTheme = localStorage.getItem('themeMode');
    if (saveTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'inline';
    }
    else {
        document.body.classList.remove('dark-mode');
        darkIcon.style.display = 'inline';
        lightIcon.style.display = 'none';
    }
}

document.getElementById('toggle-mode').addEventListener('click', toggleMode);

setTheme();