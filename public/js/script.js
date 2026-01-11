document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     HERO SLIDER
  ========================= */
  const heroEl = document.querySelector("#heroSlide1");
  if (heroEl) {
    const heroSlider = new Swiper(heroEl, {
      direction: "vertical",
      loop: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      speed: 1000,

      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".hero-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      on: {
        init(swiper) {
          adjustControlHeight();
          resetTextAnimation();
          requestAnimationFrame(() => {
            requestAnimationFrame(() => runTextAnimation(swiper));
          });
        },
        slideChangeTransitionStart() {
          resetTextAnimation();
        },
        slideChangeTransitionEnd(swiper) {
          runTextAnimation(swiper);
        },
      },
    });
  }

  /* =========================
     PRODUCT SWIPER (SAFE)
  ========================= */
  const productEl = document.querySelector(".product-swiper");
  if (productEl) {
    const productSwiper = new Swiper(productEl, {
      slidesPerView: "auto",
      spaceBetween: 10,

      pagination: {
        el: ".products-pagination",
        clickable: true,
      },

      breakpoints: {
        0: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
    });
  }

  /* =========================
     BRANDS SWIPER (SAFE)
  ========================= */
  const brandsEl = document.querySelector(".Brands-swiper");
  if (brandsEl) {
    const expertsSwiper = new Swiper(brandsEl, {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      speed: 1000,
      centeredSlides: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      breakpoints: {
        0: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1200: { slidesPerView: 5 },
      },
    });
  }

});

/* =========================
   HELPERS
========================= */
function adjustControlHeight() {
  const pagination = document.querySelector(".hero-slider .swiper-pagination");
  const controlSwiper = document.querySelector(".control-swiper");
  if (!pagination || !controlSwiper) return;
  controlSwiper.style.height = `${70 + pagination.children.length * 40}px`;
}

function resetTextAnimation() {
  document.querySelectorAll("#heroSlide1 .animated-text").forEach(el => {
    el.classList.remove("is-visible");
    el.style.transitionDelay = "0s";
  });
}

function runTextAnimation(swiper) {
  const slide = swiper.slides[swiper.activeIndex];
  if (!slide) return;
  const items = slide.querySelectorAll(".animated-text");
  items.forEach(el => el.getBoundingClientRect());
  items.forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.2}s`;
    el.classList.add("is-visible");
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const hasTopBanner = document.querySelector("animation");

  if (!navbar) return;

  if (hasTopBanner) {
    function toggleNavbarBg() {
      if (window.scrollY > window.innerHeight * 0.01) {
        navbar.classList.add("white-bg");
      } else {
        navbar.classList.remove("white-bg");
      }
    }

    window.addEventListener("scroll", toggleNavbarBg);
    window.addEventListener("load", toggleNavbarBg);
  }

  else {
    // No banner → force white-bg always
    navbar.classList.add("white-bg");
  }
});
