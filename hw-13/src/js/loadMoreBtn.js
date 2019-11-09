import refs from './refs';
import renderCards from './renderCards';
refs.loadMoreBtn.addEventListener('click', async () => {
  await renderCards();
  window.scrollTo({
    top: 999999,
    behavior: 'smooth',
  });
});
