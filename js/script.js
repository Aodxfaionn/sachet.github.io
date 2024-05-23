// Инициализация и настройка слайдеров
const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  allowTouchMove: true,
  breakpoints: {
    768: {
      allowTouchMove: false,
    },
  },
});

// Бургерное меню
// const burger = document.querySelector(".burger"),
//   contacts = document.querySelector(".header__contacts"),
//   menu = document.querySelector(".header__menu");

// burger.addEventListener("click", () => {
//   contacts.classList.toggle("open");
//   menu.classList.toggle("open");
//   burger.classList.toggle("active");
// });

