const nav = document.querySelector(".nav");
const nav__list = document.querySelector(".nav__list");
const nav__button = document.querySelector(".nav__button");
const header__inner = document.querySelector(".header__inner");

  nav.classList.remove("is-open");

  nav__button.addEventListener("click", () => {
    nav__button.classList.toggle("nav__button-close");
    nav__button.classList.toggle("nav__button");
    nav.classList.toggle("is-open");
    header__inner.classList.toggle("header__active");
  });
