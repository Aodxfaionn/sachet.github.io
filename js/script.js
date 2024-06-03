// Инициализация и настройка слайдеров
const productSlider = new Swiper(".productsSlider", {
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
  nav = headerMobule.querySelector(".nav");

mobuleMenu.addEventListener("click", () => {
  headerMobule.classList.toggle("open");
  mobuleMenu.classList.toggle("open");
  openModal(headerMobule);
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) {
      document.querySelector("body").classList.remove("fixed");
      headerMobule.classList.remove("open");
    }
  });
});

// Анимация
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: '.wrapper__main',
  content: '.content__scroll',
  smooth: 1.7,
  effects: true
 })

gsap.from(".main__texts h1", {
  x: -200,
  y: 50,
  opacity: 0,
  duration: 1.1,
});
gsap.from(".main__texts-black", {
  x: -200,
  opacity: 0,
  duration: 1,
});
gsap.from(".main__texts-light", {
  y: -200,
  opacity: 0,
  duration: 1,
});
gsap.from(".ellipse", {
  rotate: 205,
  duration: 1.2,
});
gsap.from(".main__substract", {
  rotate: -20,
  x: 100,
  opacity: 0,
  duration: 1,
});
gsap.from(".main__sc", {
  y: 50,
  duration: 0.9,
});
gsap.from(".socials", {
  x: -50,
  duration: 0.9,
});
gsap.from(".nav", {
  y: -50,
  opacity: 0,
  duration: 0.9,
});
gsap.from(".header__tel", {
  x: 50,
  opacity: 0.5,
  duration: 0.9,
});
gsap.from(".square", {
  x: -30,
  opacity: 0.5,
  duration: 0.8,
});
gsap.from(".header__name p", {
  x: -30,
  duration: 0.9,
});
gsap.from(".info__img-right", {
  y: 200,
  x: 200,
  duration: 1,
});
gsap.from(".info__img-left", {
  y: 200,
  x: -200,
  duration: 1,
});
gsap.from(".info .container img", {
  scrollTrigger: {
    trigger: ".main",
    // markers: true,
    start: "top - 400px",
  },
  opacity: 0,
  y: 100,
  duration: 0.6,
});
gsap.from(".info__text", {
  scrollTrigger: {
    trigger: ".main",
    // markers: true,
    start: "400px top",
    end: "400px top",
  },
  opacity: 0,
  y: -100,
  duration: 0.8,
});
gsap.from(".info__text-white", {
  scrollTrigger: {
    trigger: ".main",
    // markers: true,
    start: "400px top",
    end: "400px top",
  },
  opacity: 0,
  y: -150,
  duration: 0.8,
});
gsap.from(".info__img-rightbottom", {
  scrollTrigger: {
    trigger: ".main",
    // markers: true,
    start: "top - 400px",
  },
  y: 200,
  x: 200,
  duration: 0.8,
});
gsap.from(".slide__img", {
  scrollTrigger: {
    trigger: ".info",
    // markers: true,
    start: "bottom center",
  },
  y: -200,
  x: -200,
  scale: 0.1,
  opacity: 0,
  duration: 1.2,
});
gsap.from(".circle", {
  scrollTrigger: {
    trigger: ".info",
    // markers: true,
    start: "bottom center",
  },
  y: -200,
  x: -200,
  scale: 0.5,
  duration: 1.2,
});
gsap.from(".productSlider .slide__title", {
  scrollTrigger: {
    trigger: ".info",
    // markers: true,
    start: "bottom center",
  },
  x: -100,
  opacity: 0,
  duration: 1.4,
});
gsap.from(".slide__text p", {
  scrollTrigger: {
    trigger: ".info",
    // markers: true,
    start: "bottom center",
  },
  x: -30,
  opacity: 0,
  duration: 1.4,
});
gsap.from(".productSlider .swiper-button-prev", {
  scrollTrigger: {
    trigger: ".info",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  duration: 0.7,
});
gsap.from(".productSlider .swiper-button-next", {
  scrollTrigger: {
    trigger: ".info",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: -90,
  duration: 0.9,
});
gsap.from(".property .tableline__img", {
  scrollTrigger: {
    trigger: ".productSlider",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: -50,
  scaleX: 1.2,
  duration: 0.9,
});
gsap.from(".property h3.tableline__text-noborder", {
  scrollTrigger: {
    trigger: ".productSlider",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: -50,
  duration: 0.9,
});
gsap.from(".property h3.tableline__text-border", {
  scrollTrigger: {
    trigger: ".productSlider",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: -50,
  duration: 0.9,
});
gsap.from(".property .tableline p", {
  scrollTrigger: {
    trigger: ".productSlider",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: -30,
  y: -30,
  duration: 0.9,
});
gsap.from(".propertySize__title", {
  scrollTrigger: {
    trigger: ".tableline",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  y: -50,
  duration: 0.7,
});
gsap.from(".propertySize__num p:first-of-type", {
  scrollTrigger: {
    trigger: ".tableline",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: -50,
  duration: 0.8,
});
gsap.from(".propertySize__num-bold", {
  scrollTrigger: {
    trigger: ".tableline",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: -50,
  y: -50,
  duration: 0.8,
});
gsap.from(".propertySize__star img", {
  scrollTrigger: {
    trigger: ".tableline",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: 200,
  rotate: -360,
  transformOrigin: "center",
  duration: 0.9,
});
gsap.from(".propertySize__img-back", {
  scrollTrigger: {
    trigger: ".tableline",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: 150,
  y: -50,
  duration: 0.9,
});
gsap.from(".propertySize__img-up", {
  scrollTrigger: {
    trigger: ".tableline",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: 75,
  y: -50,
  duration: 0.9,
});
gsap.from(".application__sachet", {
  scrollTrigger: {
    trigger: ".propertySize",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: -300,
  duration: 0.9,
});
gsap.from(".application .table__item p", {
  scrollTrigger: {
    trigger: ".propertySize",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: -60,
  duration: 0.9,
});
gsap.from(".application .table__item svg", {
  scrollTrigger: {
    trigger: ".propertySize",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: -20,
  duration: 0.9,
});
gsap.from(".application__circle", {
  scrollTrigger: {
    trigger: ".propertySize",
    // markers: true,
    start: "bottom center",
  },
  y: 100,
  x: 100,
  duration: 0.9,
});
gsap.from(".application__sub", {
  scrollTrigger: {
    trigger: ".propertySize",
    // markers: true,
    start: "bottom center",
  },
  y: 100,
  x: -100,
  duration: 0.9,
});
gsap.from(".application__shadow", {
  scrollTrigger: {
    trigger: ".propertySize",
    // markers: true,
    start: "bottom center",
  },
  y: 100,
  x: -100,
  duration: 0.9,
});
gsap.from(".application__btn", {
  scrollTrigger: {
    trigger: ".propertySize",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  y: -100,
  duration: 0.9,
});
gsap.from(".packing .table__item p", {
  scrollTrigger: {
    trigger: ".application",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: -60,
  duration: 0.9,
});
gsap.from(".packing .table__item svg", {
  scrollTrigger: {
    trigger: ".application",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: -20,
  duration: 0.9,
});
gsap.from(".fasovka__data p", {
  scrollTrigger: {
    trigger: ".packing",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  y: -50,
  duration: 0.9,
});
gsap.from(".fasovka__data svg:first-of-type", {
  scrollTrigger: {
    trigger: ".packing",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: 100,
  duration: 0.9,
});
gsap.from(".fasovka__data svg:last-of-type", {
  scrollTrigger: {
    trigger: ".packing",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: -100,
  duration: 0.9,
});
gsap.from(".fasovka__bigText", {
  scrollTrigger: {
    trigger: ".packing",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  y: 200,
  duration: 0.9,
});
var rule = CSSRulePlugin.getRule(".fasovka__bigText::before");
gsap.fromTo(
  rule,
  { scale: 0.7 },
  {
    scale: 1,
    duration: 0.7,
    scrollTrigger: {
      trigger: ".fasovka",
      // markers: true,
      start: "top top",
    },
  }
);
gsap.from(".fasovka__img-leftmain", {
  scrollTrigger: {
    trigger: ".fasovka",
    // markers: true,
    start: "top top",
  },
  opacity: 0,
  x: 100,
  duration: 0.9,
});
gsap.from(".fasovka__img-left", {
  scrollTrigger: {
    trigger: ".fasovka",
    // markers: true,
    start: "top top",
  },
  opacity: 0,
  rotate: "45deg",
  duration: 0.9,
});
gsap.from(".fasovka__left .fasovka__circle-top", {
  scrollTrigger: {
    trigger: ".fasovka",
    // markers: true,
    start: "top top",
  },
  opacity: 0,
  x: 50,
  y: 80,
  duration: 0.9,
});
gsap.from(".fasovka__left .fasovka__circle-bottom", {
  scrollTrigger: {
    trigger: ".fasovka",
    // markers: true,
    start: "top top",
  },
  opacity: 0,
  x: 50,
  y: -80,
  duration: 0.9,
});
gsap.from(".fasovka__right .fasovka__img:first-of-type", {
  scrollTrigger: {
    trigger: ".fasovka",
    // markers: true,
    start: "top top",
  },
  opacity: 0,
  x: -100,
  duration: 0.9,
});
gsap.from(".fasovka__right .fasovka__circle-top", {
  scrollTrigger: {
    trigger: ".fasovka",
    // markers: true,
    start: "top top",
  },
  opacity: 0,
  x: -50,
  y: 80,
  duration: 0.9,
});
gsap.from(".fasovka__left .fasovka__info", {
  scrollTrigger: {
    trigger: ".fasovka",
    // markers: true,
    start: "top top",
  },
  opacity: 0,
  x: 150,
  duration: 0.9,
});
gsap.from(".fasovka__right .fasovka__info", {
  scrollTrigger: {
    trigger: ".fasovka",
    // markers: true,
    start: "top top",
  },
  opacity: 0,
  x: -150,
  duration: 0.9,
});
gsap.from(".fasovka__right .fasovka__circle-bottom", {
  scrollTrigger: {
    trigger: ".fasovka",
    // markers: true,
    start: "top top",
  },
  opacity: 0,
  x: -50,
  y: -80,
  duration: 0.9,
});
gsap.from(".fasovka__img-right", {
  scrollTrigger: {
    trigger: ".fasovka",
    // markers: true,
    start: "top top",
  },
  opacity: 0,
  x: -100,
  y: 100,
  duration: 0.9,
});
gsap.to(".fasovka__data p", {
  scrollTrigger: {
    trigger: ".fasovka",
    // markers: true,
    start: "top top",
  },
  // opacity: 0,
  y: -50,
  duration: 0.9,
});
gsap.to(".fasovka__data svg:first-of-type", {
  scrollTrigger: {
    trigger: ".fasovka",
    // markers: true,
    start: "top top",
  },
  x: -127,
  y: 443,
  duration: 0.9,
});
gsap.to(".fasovka__data svg:last-of-type", {
  scrollTrigger: {
    trigger: ".fasovka",
    // markers: true,
    start: "top top",
  },
  x: 160,
  y: 443,
  duration: 0.9,
});
gsap.from(".tableline__text p", {
  scrollTrigger: {
    trigger: ".fasovka",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  y: -50,
  duration: 0.9,
});
gsap.from(".fasovka + .tableline .tableline__img", {
  scrollTrigger: {
    trigger: ".fasovka",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: -50,
  scaleX: 1.2,
  duration: 0.9,
});
gsap.from(".fasovka + .tableline h3.tableline__text-noborder", {
  scrollTrigger: {
    trigger: ".productSlider",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: -50,
  duration: 0.9,
});
gsap.from(".fasovka + .tableline h3.tableline__text-border", {
  scrollTrigger: {
    trigger: ".productSlider",
    // markers: true,
    start: "bottom center",
  },
  opacity: 0,
  x: -50,
  duration: 0.9,
});
gsap.from(".napkin__hand-right", {
  scrollTrigger: {
    trigger: ".fasovka + .tableline",
    // markers: true,
    start: "bottom center",
  },
  rotate: "-15deg",
  scale: 1.1,
  duration: 0.9,
});
gsap.from(".napkin__hand-left", {
  scrollTrigger: {
    trigger: ".fasovka + .tableline",
    // markers: true,
    start: "bottom center",
  },
  rotate: "-20deg",
  scale: 1.1,
  duration: 0.9,
});
gsap.from(".napkin__title", {
  scrollTrigger: {
    trigger: ".fasovka + .tableline",
    // markers: true,
    start: "bottom center",
  },
  x: -100,
  opacity: 0,
  duration: 0.9,
});
gsap.from(".napkin__btn", {
  scrollTrigger: {
    trigger: ".fasovka + .tableline",
    // markers: true,
    start: "bottom center",
  },
  y: -200,
  opacity: 0,
  duration: 0.9,
});
gsap.from(".napkin__text p", {
  scrollTrigger: {
    trigger: ".fasovka + .tableline",
    // markers: true,
    start: "bottom center",
  },
  y: -70,
  x: -70,
  opacity: 0,
  duration: 0.9,
});
gsap.from(".seam__img-left", {
  scrollTrigger: {
    trigger: ".napkin",
    // markers: true,
    start: "bottom center",
  },
  y: 100,
  x: 100,
  duration: 0.9,
});
gsap.from(".seam__img-right", {
  scrollTrigger: {
    trigger: ".napkin",
    // markers: true,
    start: "bottom center",
  },
  y: 80,
  x: -80,
  duration: 0.9,
});
gsap.from(".seam__img-rightbottom", {
  scrollTrigger: {
    trigger: ".napkin",
    // markers: true,
    start: "bottom center",
  },
  y: 30,
  x: -100,
  duration: 0.9,
});
gsap.from(".seam__num-one", {
  scrollTrigger: {
    trigger: ".napkin",
    // markers: true,
    start: "bottom top",
  },
  y: 70,
  duration: 0.9,
});
gsap.from(".seam__num-two", {
  scrollTrigger: {
    trigger: ".napkin",
    // markers: true,
    start: "bottom top",
  },
  x: 70,
  duration: 0.9,
});
gsap.from(".seam__num-three", {
  scrollTrigger: {
    trigger: ".napkin",
    // markers: true,
    start: "bottom top",
  },
  x: -70,
  duration: 0.9,
});
gsap.from(".seam__num-four", {
  scrollTrigger: {
    trigger: ".napkin",
    // markers: true,
    start: "bottom top",
  },
  y: -70,
  duration: 0.9,
});
gsap.from(".seam__info > p:first-of-type", {
  scrollTrigger: {
    trigger: ".napkin",
    // markers: true,
    start: "bottom top",
  },
  x: 100,
  opacity: 0,
  duration: 0.9,
});
gsap.from(".seam__info > p:last-of-type", {
  scrollTrigger: {
    trigger: ".napkin",
    // markers: true,
    start: "bottom top",
  },
  x: -100,
  opacity: 0,
  duration: 0.9,
});
var ruleSeam = CSSRulePlugin.getRule(".seam:before");
gsap.fromTo(
  ruleSeam,
  { rotate: "-90deg" },
  {
    rotate: "-39deg",
    duration: 0.7,
    scrollTrigger: {
      trigger: ".napkin",
      // markers: true,
      start: "bottom top",
    },
  }
);
gsap.from(".seam__title", {
  scrollTrigger: {
    trigger: ".napkin",
    // markers: true,
    start: "bottom top",
  },
  y: 120,
  opacity: 0,
  duration: 0.9,
});
gsap.from(".view__img-first", {
  scrollTrigger: {
    trigger: ".seam",
    // markers: true,
    start: "bottom top",
  },
  y: 50,
  duration: 0.9,
});
gsap.from(".view__img-second", {
  scrollTrigger: {
    trigger: ".seam",
    // markers: true,
    start: "bottom top",
  },
  x: 150,
  rotate: "7deg",
  duration: 0.9,
});
gsap.from(".view__img-third", {
  scrollTrigger: {
    trigger: ".seam",
    // markers: true,
    start: "bottom top",
  },
  x: -175,
  y: 50,
  rotate: "25deg",
  duration: 0.9,
});
gsap.from(".view__bigText-first", {
  scrollTrigger: {
    trigger: ".seam",
    // markers: true,
    start: "bottom top",
  },
  y: 200,
  duration: 0.9,
});
gsap.from(".view__text-first", {
  scrollTrigger: {
    trigger: ".seam",
    // markers: true,
    start: "bottom top",
  },
  y: 150,
  opacity: 0,
  duration: 0.9,
});
// var ruleLeft = CSSRulePlugin.getRule(".view__content-side:before");
// gsap.to(
//   ruleLeft,
//   { x: -30, opacity: 0 },
//   {
//     x: 0,
//     opacity: 1,
//     duration: 0.9,
//     scrollTrigger: {
//       trigger: ".seam",
//       // markers: true,
//       start: "bottom top",
//     },
//   }
// );
// var ruleRight = CSSRulePlugin.getRule(".view__content-side:after");
// gsap.fromTo(
//   ruleRight,
//   { x: 30, opacity: 0 },
//   {
//     x: 0,
//     opacity: 1,
//     duration: 0.9,
//     scrollTrigger: {
//       trigger: ".seam",
//       // markers: true,
//       start: "bottom top",
//     },
//   }
// );
gsap.from(".view__circle", {
  scrollTrigger: {
    trigger: ".seam",
    // markers: true,
    start: "bottom top",
  },
  y: -100,
  duration: 0.7,
});
gsap.from(".view__img-gor", {
  scrollTrigger: {
    trigger: ".view__img",
    markers: true,
    start: "bottom - 300px",
  },
  y: -100,
  duration: 0.7,
});
gsap.from(".view__bigText-second", {
  scrollTrigger: {
    trigger: ".view__img",
    // markers: true,
    start: "bottom - 300px",
  },
  x: 150,
  duration: 0.7,
});
gsap.from(".view__text-second", {
  scrollTrigger: {
    trigger: ".view__img",
    // markers: true,
    start: "bottom - 300px",
  },
  y: 100,
  opacity: 0,
  duration: 0.7,
});
var ruleBottom = CSSRulePlugin.getRule(".view__content-down:before");
gsap.fromTo(
  ruleBottom,
  { y: 30, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.9,
    scrollTrigger: {
      trigger: ".view__img",
      // markers: true,
      start: "bottom - 300px",
    },
  }
);