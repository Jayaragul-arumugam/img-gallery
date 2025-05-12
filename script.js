document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    const images = document.querySelectorAll('.gallery .image');

    images.forEach(img => {
      if (filter === 'all' || img.classList.contains(filter)) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  });
});
