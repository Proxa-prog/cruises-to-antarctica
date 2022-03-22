const nav = document.querySelector('.nav');
const headerNavList = document.querySelector('.nav-list');
const navButton = document.querySelector('.nav__button');
const headerInner = document.querySelector('.header__inner');
const mediaQuery = window.matchMedia('(max-width: 768px)');

nav.classList.remove('is-open');

if (mediaQuery.matches) {
  headerNavList.classList.add('visually-hidden');
} else {
  headerNavList.classList.remove('visually-hidden');
}

navButton.addEventListener('click', () => {
  navButton.classList.toggle('nav__button-close');
  navButton.classList.toggle('nav__button');
  headerNavList.classList.toggle('visually-hidden');
  nav.classList.toggle('is-open');
  headerInner.classList.toggle('header__active');
});
