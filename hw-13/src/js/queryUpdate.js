import apiService from './apiService';
import refs from './refs';
import renderCards from './renderCards';
refs.queryButton.addEventListener('click', queryUpdate);
function queryUpdate() {
  apiService.resetPage();
  refs.gallery.innerHTML = '';
  const newQuery = document.querySelector('input[name="query"]').value;
  apiService.searchQuery = newQuery;
  renderCards(newQuery);
}
