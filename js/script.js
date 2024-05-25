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

const swiperProduction = new Swiper(".productionSlider", {
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

const swiperPartners = new Swiper(".partnersSlider", {
  loop: true,
  allowTouchMove: true,
  slidesPerView: "auto"
});

const swiperWorks = new Swiper(".worksSlider", {
  loop: true,
  allowTouchMove: true,
  slidesPerView: "auto",
  spaceBetween: 40,
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

