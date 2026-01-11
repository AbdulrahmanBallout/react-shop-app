import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { FiHeart, FiShoppingBag, FiShare2, FiPlus, FiMinus } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import products from '../data/products.json';
import testimonials from '../data/testimonials.json';
import 'swiper/css';
import 'swiper/css/pagination';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id)) || products[0];
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [showShare, setShowShare] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalf key="half" />);
    }
    return stars;
  };

  const currentImages = product.colors?.[selectedColor]?.images || product.images;

  return (
    <>
      <Helmet>
        <title>{product.name} - Premium Nike Shoes | Celtis Australis</title>
        <meta name="description" content={product.description} />
        <meta
          name="keywords"
          content={`${product.name}, ${product.category}, Nike shoes, buy online`}
        />
        <meta property="og:title" content={`${product.name} - Premium Nike Shoes`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={currentImages[0]} />
        <meta property="og:type" content="product" />
        <meta property="product:price:amount" content={product.price} />
        <meta property="product:price:currency" content={product.currency} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.name} - Premium Nike Shoes`} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={currentImages[0]} />
      </Helmet>

      <Header />

      <main className="relative">
        <div className="container">
          <div className="d-flex flex-row flex-column-t justify-between gap-32 secItem padding-section">
            {/* Left - Images */}
            <div className="d-flex flex-column justify-center items-center flex-1">
              <div className="d-flex flex-row justify-start items-center gap-24 w-100 justify-center-t">
                {/* Thumbnails */}
                <div className="d-flex flex-column justify-center items-center itemSec">
                  {currentImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      className="imgItem"
                      loading="lazy"
                      alt=""
                      onMouseEnter={() => setCurrentImage(index)}
                      style={{ cursor: 'pointer' }}
                    />
                  ))}
                </div>

                {/* Big image */}
                <div className="stagSec d-flex justify-center items-center">
                  <div className="bgStagItem"></div>
                  <img
                    src={currentImages[currentImage]}
                    className="imgShowItem"
                    loading="lazy"
                    alt={product.name}
                    style={{ scale: '1.25', transform: 'rotate(-25deg)' }}
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1 d-flex justify-start justify-center-t">
              <div className="d-flex flex-column gap-16 flex-1 secContent max-525">
                <div className="itemSecselect" style={{ background: product.colors?.[selectedColor]?.badgeBg || 'black' }}>
                  <span>{product.category}</span>
                </div>

                <h1 className="font-48">{product.name}</h1>
                <p className="font-16">{product.description}</p>

                <div className="d-flex flex-row items-center gap-16 priceSec">
                  <h2 className="relative">
                    {product.price} <span className="priceNational">{product.currency}</span>
                    {product.discount && <span className="sales main-bold-font">{product.discount}%</span>}
                  </h2>
                  {product.originalPrice && (
                    <span className="beforSales">
                      {product.originalPrice} <span className="priceNational">{product.currency}</span>
                    </span>
                  )}
                </div>

                {/* Colors */}
                {product.colors && product.colors.length > 0 && (
                  <div className="itemColor d-flex flex-column gap-8">
                    <span className="title">Colour:</span>
                    <div className="d-flex flex-row items-center">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className={`colorItem ${color.class} ${selectedColor === index ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedColor(index);
                            setCurrentImage(0);
                          }}
                          style={{ cursor: 'pointer' }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sizes */}
                {product.sizes && (
                  <div className="itemSize d-flex flex-column gap-8">
                    <span className="title">Sizes:</span>
                    <div className="d-flex flex-row flex-wrap items-center">
                      {product.sizes.map((size, index) => (
                        <div
                          key={index}
                          className={`SizeItem ${selectedSize === index ? 'active' : ''}`}
                          onClick={() => setSelectedSize(index)}
                          style={{ cursor: 'pointer' }}
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div className="itemQty d-flex flex-column gap-8">
                  <span className="title">Qty:</span>
                  <div className="quantity">
                    <button type="button" onClick={() => quantity > 0 && setQuantity(quantity - 1)}>
                      <FiMinus />
                    </button>
                    <span className="numQty">{quantity}</span>
                    <button type="button" onClick={() => setQuantity(quantity + 1)}>
                      <FiPlus />
                    </button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="d-flex flex-row items-center gap-12 mt-16">
                  <button type="button" className="btnBag">
                    Add to Bag <FiShoppingBag style={{ marginLeft: '8px' }} />
                  </button>
                  <button type="button" className="btnHeart">
                    <svg 
                      stroke="white" 
                      fill="none" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      height="24" 
                      width="24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>

                {/* Share & Rating */}
                <div className="d-flex flex-row gap-16 items-center">
                  <div className="secShare">
                    <span className="btnShare" onClick={() => setShowShare(!showShare)} style={{ cursor: 'pointer' }}>
                      <FiShare2 style={{ marginRight: '8px' }} /> Share
                    </span>

                    {showShare && (
                      <div className="popShare show">
                        <span className="title">Social Media</span>
                        <div className="d-flex flex-row items-center">
                          <a href="#" className="popover-item"><FaFacebookF /></a>
                          <a href="#" className="popover-item"><FaTwitter /></a>
                          <a href="#" className="popover-item"><FaInstagram /></a>
                          <a href="#" className="popover-item"><FaWhatsapp /></a>
                        </div>
                      </div>
                    )}
                  </div>

                  {product.rating && (
                    <div className="rate">
                      {renderStars(product.rating)}
                      <span className="textRate">{product.rating}</span>
                      <span className="textReviews">({product.reviews} reviews)</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You may also like */}
        <section className="product-section padding-section">
          <div className="d-flex flex-column gap-48 relative overflow-hidden">
            <div className="header-title font-64 secondary-font primary-color-dark center">
              You may also like
            </div>
            <Swiper
              modules={[Pagination]}
              spaceBetween={24}
              slidesPerView={2}
              pagination={{ el: '.products-pagination', clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="product-swiper w-100 overflow-hidden"
            >
              {products.filter(p => p.id !== product.id).map((p) => (
                <SwiperSlide key={p.id}>
                  <ProductCard product={p} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Reviews */}
        <section className="testimonials-sec padding-section">
          <div className="d-flex flex-column gap-48 relative overflow-hidden">
            <img className="travel-bg" src="/img/shoes-bg.svg" alt="Shoes Background" />
            <div className="header-title font-64 secondary-font primary-color-dark center">
              Reviews
            </div>

            <Swiper
              modules={[Pagination]}
              spaceBetween={24}
              slidesPerView={1.1}
              centeredSlides={true}
              loop={true}
              speed={1000}
              pagination={{ el: '.swiper-custom-pagination', clickable: true }}
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
            <div className="swiper-pagination swiper-custom-pagination"></div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductDetail;
