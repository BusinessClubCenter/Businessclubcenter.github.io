// Анимация текста
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.text')?.classList.add('fade-in');
});

// Изменение цвета ссылок при наведении
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('mouseover', () => link.style.color = '#48D1CC');
    link.addEventListener('mouseout', () => link.style.color = 'white');
});
