import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHeart, FiShoppingBag, FiPhone } from 'react-icons/fi';
import navigationData from '../data/navigation.json';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let cleanup = null;

    // Check for hero slider after a small delay to ensure it's rendered
    const checkForBanner = () => {
      const hasTopBanner = document.querySelector('.top-banner');

      if (hasTopBanner) {
        const toggleNavbarBg = () => {
          if (window.scrollY > window.innerHeight * 0.01) {
            navbar.classList.add('white-bg');
          } else {
            navbar.classList.remove('white-bg');
          }
        };

        window.addEventListener('scroll', toggleNavbarBg);
        window.addEventListener('load', toggleNavbarBg);
        // Check on mount
        toggleNavbarBg();

        cleanup = () => {
          window.removeEventListener('scroll', toggleNavbarBg);
          window.removeEventListener('load', toggleNavbarBg);
        };
      } else {
        // No banner → force white-bg always
        navbar.classList.add('white-bg');
        const header = document.querySelector('header');
        if (header) {
          header.style.paddingBottom = '72px';
        }
      }
    };

    // Check immediately and after a short delay
    checkForBanner();
    const timeoutId = setTimeout(checkForBanner, 100);

    return () => {
      clearTimeout(timeoutId);
      if (cleanup) cleanup();
    };
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header>
      <div className={`navbar top-header animation ${isMobileMenuOpen ? 'burger-active' : ''}`}>
        <div className="container">
          <div className="header-overlay"></div>

          <div className="header-content d-flex items-center justify-between-t">
            <Link to="/" className="logo">
              <img className="top-logo" src="/img/logo.svg" alt="logo" />
              <img className="top-logo" src="/img/logo-blue.svg" alt="logo" />
            </Link>

            <div className="d-flex items-center gap-12">
              <div 
                className={`burger-menu-lines ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{ cursor: 'pointer' }}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <nav className={` d-flex gap-32 justify-between flex-1 items-center items-start-t ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
              <div className="d-flex gap-32 mobile-nav">
              {navigationData.mainMenu.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              </div>
              <div className="nav-actions d-flex items-center gap-12">
              <button className="contact-btn d-flex gap-8 items-center">
                <FiPhone size={20} />
                <span>Contact Us</span>
              </button>
              <a
                className="nav-favorites"
                href="#"
                title="Favorites"
              >
                <FiHeart size={24} />
              </a>
              <a className="nav-favorites" href="#" title="Cart">
                <FiShoppingBag size={24} />
              </a>
            </div>
            </nav>

            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
