const nav = document.querySelector('.nav');
const headerNavList = document.querySelector('.nav-list');
const navButton = document.querySelector('.nav__button');
const headerInner = document.querySelector('.header__inner');


const navOpen = () => {
  nav.classList.remove('is-open');

  navButton.addEventListener('click', () => {
    navButton.classList.toggle('nav__button-close');
    navButton.classList.toggle('nav__button');
    headerNavList.classList.toggle('nav-list--closed');
    headerNavList.classList.toggle('nav-list--open');
    nav.classList.toggle('is-open');
    headerInner.classList.toggle('header__active');
  });
};

export {navOpen};
