const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (const card of cards) {
  card.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('img').src = card.querySelector('img').src;
    modalOverlay.querySelector('img').alt = card.querySelector('img').alt;
    modalOverlay.querySelector(
      '.modal-content-title p'
    ).innerHTML = card.querySelector('.card__content-title p').textContent;
    modalOverlay.querySelector(
      '.modal-content-author p'
    ).innerHTML = card.querySelector('.card__content-author p').textContent;
  });
}

document.querySelector('.modal-content-close').addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});
