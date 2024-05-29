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
  document.querySelector("body").classList.add("fixed");
  modal.addEventListener("click", function (e) {
    if (e.target == modal || e.target.closest(".close")) {
      document.querySelector("body").classList.remove("fixed");
      modal.classList.remove("open");
    }
  });
}

// Бургерное меню
const mobuleMenu = document.querySelector(".mobuleMenu"),
  headerMobule = document.querySelector(".headerMobule"),
  nav = headerMobule.querySelector('.nav');

mobuleMenu.addEventListener("click", () => {
  headerMobule.classList.toggle("open");
  mobuleMenu.classList.toggle("open");
  openModal(headerMobule);
  nav.addEventListener('click', function(e) {
    if (e.target.closest('a')) {
      document.querySelector("body").classList.remove("fixed");
      headerMobule.classList.remove("open");
    }
  })
});
