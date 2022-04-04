const nav = document.querySelector('.nav');
const headerNavList = document.querySelector('.nav-list');
const navButton = document.querySelector('.nav__button');
const headerInner = document.querySelector('.header__inner');
const headerOverlay = document.querySelector('.header');

const navOpen = () => {
  headerNavList.classList.add('nav-list--closed');
  nav.classList.remove('is-open');

  document.addEventListener('click', (evt) => {
    if (navButton.classList.contains('nav__button-close')) {
      if (!nav.contains(evt.target)) {
        nav.classList.remove('is-open');
        headerNavList.classList.toggle('nav-list--open');
        headerNavList.classList.toggle('nav-list--closed');
        headerOverlay.classList.remove('header__opasity');
        headerInner.classList.toggle('header__active');
        navButton.classList.toggle('nav__button-close');
        navButton.classList.toggle('nav__button');
      }
    }
  });

  navButton.addEventListener('click', () => {
    navButton.classList.toggle('nav__button-close');
    navButton.classList.toggle('nav__button');
    headerNavList.classList.toggle('nav-list--closed');
    headerNavList.classList.toggle('nav-list--open');
    nav.classList.toggle('is-open');
    headerInner.classList.toggle('header__active');
    headerOverlay.classList.toggle('header__opasity');
  });
};

export {navOpen};
