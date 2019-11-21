const cards = document.querySelectorAll('.card');
for (const card of cards) {
  card.addEventListener('click', () => {
    const cardId = card.getAttribute('id');
    window.location.href = `/recipe?id=${cardId}`;
  });
}
