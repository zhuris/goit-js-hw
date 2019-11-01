import refs from './refs.js';
import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js';
import  searchCountries from './fetchCountries.js';
import countryRes from '../templates/countryRes.hbs';
import countryList from '../templates/countryList.hbs';

const search = e => {
  e.preventDefault();
  clearMarkup();
  PNotify.closeAll();
  const searchQuery = e.target.value;
  if (searchQuery.length >= 1) {
    searchCountries.fetchCountries(searchQuery).then(data => {
      clearMarkup();
      PNotify.closeAll();
      markup(data);
    });
  }
};

const insertListItems = items =>
  refs.articleList.insertAdjacentHTML("beforeend", items);

const clearMarkup = () => (refs.articleList.innerHTML = "");

const markup = data => {
  if (data.length === 1) {
    const markup = countryRes(data[0]);
    insertListItems(markup);
  } else if (data.length <= 10) {
    const markup = countryList(data);
    insertListItems(markup);
  } else if (data.length > 10) {
    PNotify.error("необходимо сделать запрос более специфичным!");
  }
};


refs.searchInput.addEventListener("input", _.debounce(search, 500));

 
