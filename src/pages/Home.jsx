import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import heroSlides from '../data/heroSlides.json';
import categories from '../data/categories.json';
import featuredProducts from '../data/featuredProducts.json';
import testimonials from '../data/testimonials.json';
import brands from '../data/brands.json';
import products from '../data/products.json';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Nike Shoes - Premium Footwear Collection | Celtis Australis</title>
        <meta
          name="description"
          content="Discover premium Nike shoes and sneakers for men, women, and kids. Shop the latest Air Force, Free Metcon, and exclusive collections with worldwide delivery."
        />
        <meta
          name="keywords"
          content="Nike shoes, sneakers, Air Force, athletic footwear, men's shoes, women's shoes, kids shoes"
        />
        <meta property="og:title" content="Nike Shoes - Premium Footwear Collection" />
        <meta
          property="og:description"
          content="Discover premium Nike shoes and sneakers for men, women, and kids."
        />
        <meta property="og:image" content="/img/topbar-1.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nike Shoes - Premium Footwear Collection" />
        <meta
          name="twitter:description"
          content="Discover premium Nike shoes and sneakers for men, women, and kids."
        />
        <meta name="twitter:image" content="/img/topbar-1.png" />
      </Helmet>

      <Header />

      <HeroSlider slides={heroSlides} />

      <main className="relative">
        <img src="/img/main-bg.png" className="main-bg" alt="background" title="background" />

        {/* What Sets Us Apart */}
        <section className="what-sets-us-apart padding-section">
          <div className="container d-flex flex-column gap-48">
            <div className="header-title font-64 secondary-font primary-color-dark center">
              Step Into the Difference
            </div>
            <div className="d-flex gap-48 flex-column-m">
              <div className="d-flex flex-column gap-12 center flex-1">
                <img src="/img/like.svg" alt="like" title="like" height="50" />
                <span className="title-nike font-24 white main-bold-font mt-12">
                  Unlimited Flexibility
                </span>
                <span className="font-16 primary-color-darker main-font">
                  Footwear tailored to your style and lifestyle. Designed to fit your everyday
                  needs effortlessly.
                </span>
              </div>
              <div className="d-flex flex-column gap-12 center flex-1">
                <img src="/img/tag.svg" alt="tag" title="tag" height="50" />
                <span className="title-nike font-24 white main-bold-font mt-12">
                  Exclusive Offers
                </span>
                <span className="font-16 primary-color-darker main-font">
                  Carefully curated shoes at exceptional value. Quality and style without
                  compromise.
                </span>
              </div>
              <div className="d-flex flex-column gap-12 center flex-1">
                <img src="/img/root.svg" alt="root" title="root" height="50" />
                <span className="title-nike font-24 white main-bold-font mt-12">
                  Worldwide delivery available
                </span>
                <span className="font-16 primary-color-darker main-font">
                  Global shipping with trusted partners. Your favorite shoes, delivered anywhere.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Sneakers Categories */}
        <section className="sneakers padding-section">
          <div className="container">
            <div className="d-flex gap-24 flex-wrap justify-center">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={category.link}
                  className="sneakers__category d-flex flex-column gap-8"
                >
                  <div className="sneakers__imgWrap global-img">
                    <img src={category.image} alt={category.title} className="sneakers__img" />
                  </div>
                  <div className="sneakers__info">
                    <p className="sneakers__title main-bold-font font-14">{category.title}</p>
                    <span className="sneakers__link font-14 underline">SHOP NOW</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Slider */}
        <section className="our-services padding-section relative">
          <div>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1.3}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ el: '#experts-pagination', clickable: true }}
              watchSlidesProgress={true}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
                1280: { slidesPerView: 5, spaceBetween: 50 },
              }}
              onInit={(swiper) => {
                swiper.slides.forEach((slide) => {
                  const el = slide.firstElementChild || slide;
                  el.style.transition = 'transform 400ms ease';
                });
              }}
              onProgress={(swiper) => {
                const isRTL = document.documentElement.dir === 'rtl';
                swiper.slides.forEach((slide) => {
                  const p = Math.min(Math.max(slide.progress, -2), 2); // clamp
                  const abs = Math.abs(p);

                  // Rotation direction depends on RTL
                  const rotate = (isRTL ? 1 : -1) * p * 3.47;

                  // TranslateY curve
                  const translateY = (abs * abs * 16.25) - (abs * 14.72);

                  // Transform origin depends on RTL and progress direction
                  let origin;
                  if (isRTL) {
                    origin = p < 0 ? 'right top' : 'left top';
                  } else {
                    origin = p < 0 ? 'left top' : 'right top';
                  }

                  const el = slide.firstElementChild || slide;
                  el.style.transformOrigin = origin;
                  el.style.transform = `translate(0px, ${translateY}px) rotate(${rotate}deg)`;

                  slide.style.zIndex = String(100 - Math.round(abs * 10));
                });
              }}
              onSetTransition={(swiper, duration) => {
                swiper.slides.forEach((slide) => {
                  const el = slide.firstElementChild || slide;
                  el.style.transitionDuration = duration + 'ms';
                });
              }}
              className="local-experts-swiper w-100"
            >
              {featuredProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <Link to={product.number} className="local-experts-card relative">
                    <div className="global-img">
                      <img className="img-object-fit" src={product.image} alt={product.name} />
                      <span className="title-nike font-24 white main-bold-font mt-12">
                        {product.name}
                      </span>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* pagination */}
            <div id="experts-pagination" className="swiper-pagination swiper-custom-pagination"></div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-sec padding-section">
          <div className="d-flex flex-column gap-48 relative overflow-hidden">
            <img className="travel-bg" src="/img/shoes-bg.svg" alt="Shoes Background" />

            <div className="container d-flex flex-column gap-24">
              <div className="header-title font-64 secondary-font primary-color-dark center">
                What Our Customers Say
              </div>
              <div className="sub-title font-20 main-medium-font primary-color-dark center">
                Real experiences with footwear brands that combine comfort, quality, and timeless
                design.
              </div>
            </div>

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1.1}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              speed={1000}
              pagination={{ el: '#travelers-pagination', clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1.3 },
                1024: { slidesPerView: 2.6 },
              }}
              className="travelers-swiper w-100 overflow-hidden"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Pagination */}
            <div id="travelers-pagination" className="swiper-pagination swiper-custom-pagination"></div>
          </div>
        </section>

        {/* Brands */}
        <section className="destinations-sec padding-section">
          <div className="d-flex flex-column gap-48">
            <div className="container d-flex flex-column gap-24">
              <div className="header-title font-64 secondary-font primary-color-dark center">
                Brands
              </div>
              <div className="sub-title font-20 main-medium-font primary-color-dark center">
                Wherever your style takes you, the world's leading footwear and apparel brands are
                always within reach.
              </div>
            </div>

            <Swiper
              modules={[Autoplay]}
              loop={true}
              slidesPerView="auto"
              spaceBetween={10}
              speed={1000}
              centeredSlides={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 5 },
              }}
              className="Brands-swiper w-100 overflow-hidden"
            >
              {brands.map((brand) => (
                <SwiperSlide key={brand.id} className="brand-card d-flex items-center justify-center relative">
                    <img className="brand-img" src={brand.logo} alt={brand.name} title={brand.name} />
                  
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
