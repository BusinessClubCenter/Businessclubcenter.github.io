// Получаем параметр из URL
const urlParams = new URLSearchParams(window.location.search);
const ref = urlParams.get('ref');
// Карта ссылок
const redirectMap = {
    'timeweb': 'https://craftum.com/?i=122719',
    'taxcom': 'https://taxcom.ru/partner-form/?refLinkId=74349',
    'hosting': 'https://timeweb.com/ru/?i=122719',
    'sprinthost': 'https://sprinthost.ru/s42646/?bid=193' // Добавлен Sprinthost
};
// Устанавливаем редирект
const redirectUrl = redirectMap[ref] || '#';
if (redirectUrl !== '#') window.location.href = redirectUrl;

// Обновляем ссылку на случай, если редирект не сработал
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('redirect-link').href = redirectUrl;
});
