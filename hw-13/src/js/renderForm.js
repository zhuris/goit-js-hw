import searchForm from '../templates/form.hbs';
import refs from './refs';
renderForm();
function renderForm() {
  refs.form.insertAdjacentHTML('afterbegin', searchForm());
  loadMoreBtn.classList.add('is-hidden');
}
