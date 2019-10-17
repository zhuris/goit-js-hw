import menu from '../menu.json';
import menuTemplate from '../templates/template.hbs';

const refs = {
  menuList: document.querySelector('#menu'),
};

const foodMenu = menuTemplate(menu);

refs.menuList.insertAdjacentHTML('beforeend', foodMenu);
