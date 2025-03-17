const checkbox = document.getElementById('agreement');
const callbackButton = document.getElementById('callback-link');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        callbackButton.style.pointerEvents = 'auto'; // Разрешить переход по ссылке
    } else {
        callbackButton.style.pointerEvents = 'none'; // Заблокировать переход по ссылке
    }
});

