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
  slidesPerView: "auto",
});

const swiperWorks = new Swiper(".worksSlider", {
  loop: true,
  allowTouchMove: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  breakpoints: {
    1362: {
      spaceBetween: 30,
    },
    1920: {
      spaceBetween: 40,
    },
  },
});

// Модальное окно
const btns = document.querySelectorAll(".startModal"),
  modal = document.querySelector(".modal");
btns.forEach((btn) => btn.addEventListener("click", () => openModal(modal)));

function openModal(modal) {
  modal.classList.add("open");
  modal.addEventListener("click", function (e) {
    if (e.target == modal || e.target.closest(".modal__close")) modal.classList.remove("open");
  });
}

// Бургерное меню
// const burger = document.querySelector(".burger"),
//   contacts = document.querySelector(".header__contacts"),
//   menu = document.querySelector(".header__menu");

// burger.addEventListener("click", () => {
//   contacts.classList.toggle("open");
//   menu.classList.toggle("open");
//   burger.classList.toggle("active");
// });
