const nav = document.querySelector('.nav');
const headerNavList = document.querySelector('.nav-list');
const navButton = document.querySelector('.nav__button');
const headerInner = document.querySelector('.header__inner');
const mainOverlay = document.querySelector('.main');
const navLi = document.querySelectorAll('.header__nav-item');
const buttonsInCard = document.querySelectorAll(".cruise-catalog__item a")

const navOpen = () => {
  headerNavList.classList.add('nav-list--closed');
  nav.classList.remove('is-open');
  nav.classList.remove('nav-list--no-js');

Object.keys(buttonsInCard).forEach((index)=> {
  buttonsInCard[index].addEventListener("click", (e)=>{
      e.preventDefault()
  });
})

  document.addEventListener('click', (evt) => {
    if (navButton.classList.contains('nav__button-close')) {
      document.body.style.overflow = 'hidden';
      if (!nav.contains(evt.target)) {
        nav.classList.remove('is-open');
        headerNavList.classList.toggle('nav-list--open');
        headerNavList.classList.toggle('nav-list--closed');
        mainOverlay.classList.remove('main__opasity');
        headerInner.classList.toggle('header__active');
        navButton.classList.toggle('nav__button-close');
        navButton.classList.toggle('nav__button');
        document.body.style.overflow = 'auto';
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
    mainOverlay.classList.toggle('main__opasity');
    document.body.style.overflow = 'auto';
    nav.style.overflow = 'auto';
  });

  for(let navLiItem of navLi) {
    navLiItem.addEventListener('click', () => {
      headerInner.classList.toggle('header__active');
      nav.classList.remove('is-open');
      navButton.classList.remove('nav__button-close');
      navButton.classList.add('nav__button');
      headerNavList.classList.add('nav-list--closed');
      headerNavList.classList.remove('nav-list--open');
      mainOverlay.classList.toggle('main__opasity');
      document.body.style.overflow = 'auto';
    });
  }
};

export {navOpen};
