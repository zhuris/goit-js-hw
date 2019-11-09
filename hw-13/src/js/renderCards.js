import apiService from './apiService';
import photoCards from '../templates/photoCards.hbs';
import spinner from './spinner';
import refs from './refs';
async function renderCards(query) {
  spinner.show();
  const fetchAnswer = await apiService.fetchPhoto(query);
  const markup = photoCards(fetchAnswer);
  refs.gallery.insertAdjacentHTML('beforeEnd', markup);
  spinner.hide();
  loadMoreBtn.classList.remove('is-hidden');
}
export default renderCards;
