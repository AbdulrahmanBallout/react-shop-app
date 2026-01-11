document.addEventListener("DOMContentLoaded", function () {
  sliders();
});

function generateID() {
  return Math.random().toString(36).substr(2, 9);
}

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

function sliders() {
  var dynamicSliders = document.querySelectorAll("[dynamic-slider]");
  if (!dynamicSliders.length) return;

  dynamicSliders.forEach(function (slider) {
    var root = slider.closest("[slider-section]") || slider;

    const slides = slider.querySelectorAll(".swiper-slide");
    if (!slides.length) return;

    var id = generateID();

    var options = {
      slidesPerView: 1,
      spaceBetween: 0,
      observer: true,
      observeParents: true,
      watchSlidesProgress: true, // ✅ IMPORTANT for progress-based transforms
    };

    // SPEED (smooth transition)
    var speed = slider.getAttribute("speed");
    if (speed !== null) {
        options.speed = +speed; // convert to number
    } else {
        options.speed = 800; // default smooth speed
    }

    // NAVIGATION
    var arrowLeft = root.querySelector("[arrow-left]");
    var arrowRight = root.querySelector("[arrow-right]");

    if (arrowLeft && arrowRight) {
      arrowLeft.id = `left_arr_${id}`;
      arrowRight.id = `right_arr_${id}`;

      options.navigation = {
        prevEl: `#left_arr_${id}`,
        nextEl: `#right_arr_${id}`,
      };
    }

    // PAGINATION
    var paginationEl =
      root.querySelector(".swiper-pagination") ||
      root.querySelector(".swiper-custom-pagination");

    if (paginationEl) {
      options.pagination = {
        el: paginationEl,
        clickable: true,
      };
    }

    // SPACE BETWEEN
    var spaceBetween = slider.getAttribute("space-between");
    if (spaceBetween !== null) options.spaceBetween = +spaceBetween;

    // SLIDES PER VIEW
    var perView = slider.getAttribute("per-view");
    if (perView !== null) {
      options.slidesPerView = perView === "auto" ? "auto" : +perView;
    }

    // CENTERED
    if (slider.hasAttribute("is-centered")) {
      options.centeredSlides = true;
    }

    // LOOP
    if (slider.hasAttribute("loop")) {
        options.loop = true;
    }


    // AUTOPLAY
    var autoplayDelay = slider.getAttribute("auto-play");
    if (autoplayDelay) {
      options.autoplay = {
        delay: +autoplayDelay,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      };
    }

    // RESPONSIVE
    var responsive = slider.getAttribute("responsive");
    if (responsive) {
      var breakpoints = [];
      try {
        breakpoints = JSON.parse("[" + responsive.replace(/'/g, '"') + "]");
      } catch (e) {
        breakpoints = [];
      }

      var widths = [320, 576, 768, 992, 1200, 1400, 1920];
      var breakpointsConfig = {};

      breakpoints.forEach(function (bp, index) {
        var w = widths[Math.min(index, widths.length - 1)];
        breakpointsConfig[w] = {
          slidesPerView: bp[0] === "auto" ? "auto" : bp[0],
          spaceBetween: bp[1],
        };
      });

      options.breakpoints = breakpointsConfig;
    }

    /* ======================================================
       ✅ STACKED / ROTATED CARDS EFFECT (like your example)
       Enable by adding: stacked-cards
       Applies transform to the first child (your card wrapper)
    ====================================================== */
    const isRTL = document.documentElement.dir === "rtl";

    if (slider.hasAttribute("stacked-cards")) {
      options.watchSlidesProgress = true;

      options.on = {
        init(swiper) {
          swiper.slides.forEach((slide) => {
            const el = slide.firstElementChild || slide;
            el.style.transition = "transform 400ms ease";
          });
        },

        progress(swiper) {
          swiper.slides.forEach((slide) => {
            const p = clamp(slide.progress, -2, 2);
            const abs = Math.abs(p);

            // 🔄 Rotation direction depends on dir
            const rotate = (isRTL ? 1 : -1) * p * 3.47;

            // Same translateY curve
            const translateY = (abs * abs * 16.25) - (abs * 14.72);

            // 🔄 Transform origin depends on dir
            let origin;
            if (isRTL) {
              origin = p < 0 ? "right top" : "left top";
            } else {
              origin = p < 0 ? "left top" : "right top";
            }

            const el = slide.firstElementChild || slide;
            el.style.transformOrigin = origin;
            el.style.transform = `translate(0px, ${translateY}px) rotate(${rotate}deg)`;

            slide.style.zIndex = String(100 - Math.round(abs * 10));
          });
        },

        setTransition(swiper, duration) {
          swiper.slides.forEach((slide) => {
            const el = slide.firstElementChild || slide;
            el.style.transitionDuration = duration + "ms";
          });
        },
      };
    }



    // INIT SWIPER
    new Swiper(slider, options);
  });

  // EQUAL HEIGHT SLIDES (your existing logic)
  document.querySelectorAll("[equal-height]").forEach(function (container) {
    var maxHeight = 0;

    container.querySelectorAll(".swiper-slide").forEach(function (slide) {
      slide.style.height = "auto";
      maxHeight = Math.max(maxHeight, slide.offsetHeight);
    });

    container.querySelectorAll(".swiper-slide").forEach(function (slide) {
      slide.style.height = maxHeight + "px";
    });
  });
}
