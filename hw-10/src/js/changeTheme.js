const refs = {
  radio: document.querySelector('.switch__input'),
  body: document.querySelector('body'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let localThemeKey = 'theme';
const localThemeValue = localStorage.getItem(localThemeKey);
if (localThemeValue === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.radio.checked = true;
}
const changeTheme = e => {
  if (e.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
  }
};

refs.radio.addEventListener('change', changeTheme);
