const popup = document.querySelector('.backdrop');
const openPopupButton = document.querySelector('.header__menu-icon');
const closePopupButton = document.querySelector('.popup-icon');

openPopupButton?.addEventListener('click', () => {
    popup.classList.add('visible');
    requestAnimationFrame(() => {
        popup.classList.add('animated');
    });
});

function removeAnimation(p) {
    p.classList.remove('visible');
}

closePopupButton?.addEventListener('click', () => {
    popup.classList.remove('animated');
    popup.addEventListener('transitionend', () => removeAnimation(popup), { once: true });
});