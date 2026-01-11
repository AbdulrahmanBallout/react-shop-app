import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = ({ slides }) => {
  const swiperRef = useRef(null);

  // Adjust control height based on pagination bullets
  const adjustControlHeight = () => {
    const pagination = document.querySelector('.hero-slider .swiper-pagination');
    const controlSwiper = document.querySelector('.control-swiper');
    if (!pagination || !controlSwiper) return;
    controlSwiper.style.height = `${70 + pagination.children.length * 40}px`;
  };

  // Reset text animation
  const resetTextAnimation = () => {
    document.querySelectorAll('#heroSlide1 .animated-text').forEach(el => {
      el.classList.remove('is-visible');
      el.style.transitionDelay = '0s';
    });
  };

  // Run text animation with staggered delays
  const runTextAnimation = (swiper) => {
    const slide = swiper.slides[swiper.activeIndex];
    if (!slide) return;
    const items = slide.querySelectorAll('.animated-text');
    // Force reflow
    items.forEach(el => el.getBoundingClientRect());
    // Apply staggered animation
    items.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.2}s`;
      el.classList.add('is-visible');
    });
  };

  return (
    <div className="swiper hero-slider top-banner" id="heroSlide1">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        direction="vertical"
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.hero-pagination',
          clickable: true,
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onInit={(swiper) => {
          adjustControlHeight();
          resetTextAnimation();
          requestAnimationFrame(() => {
            requestAnimationFrame(() => runTextAnimation(swiper));
          });
        }}
        onSlideChangeTransitionStart={() => {
          resetTextAnimation();
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          runTextAnimation(swiper);
        }}
        className="swiper-wrapper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.title} className="slide-img" />
            <div className="container">
              <div className="hero-content d-flex flex-column gap-16">
                <h1 className="animated-text font-64">{slide.title}</h1>
                <span className="animated-text font-20">{slide.description}</span>
                <div className="btn-group animated-text">
                  <Link to={slide.link} className="th-btn style2 th-icon">
                    Shop now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="control-swiper container">
        <div className="swiper-pagination hero-pagination"></div>
        <div className="swiper-button-next">
          <img src="/img/Arrow-topbar.svg" alt="arrow icon" title="arrow icon" />
        </div>
        <div className="swiper-button-prev">
          <img src="/img/Arrow-topbar.svg" alt="arrow icon" title="arrow icon" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
