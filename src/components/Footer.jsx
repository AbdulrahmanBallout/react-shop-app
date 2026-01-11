import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import navigationData from '../data/navigation.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* TOP */}
        <div className="d-flex justify-between items-start flex-wrap gap-64 footer-top">
          {/* Column 1: About + Social */}
          <div className="footer-col footer-about d-flex flex-column gap-16">
            <div className="footer-brand d-flex items-center gap-12">
              <img className="footer-logo" src="/img/logo.svg" alt="Logo" />
            </div>

            <p className="footer-text">{navigationData.footer.about}</p>

            <div className="d-flex flex-column gap-12">
              <div className="footer-title mt-15">Follow Us</div>
              <div className="d-flex items-center gap-16 footer-social">
                <a
                  href={navigationData.footer.social[0].url}
                  className="social-btn"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={navigationData.footer.social[1].url}
                  className="social-btn"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={navigationData.footer.social[2].url}
                  className="social-btn"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Brands */}
          <div className="footer-col d-flex flex-column gap-16">
            <div className="footer-title">Brands</div>
            <ul className="footer-links d-flex flex-column gap-8">
              {navigationData.footer.brands.map((brand, index) => (
                <li key={index}>
                  <a href={brand.link}>{brand.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-col d-flex flex-column gap-16">
            <div className="footer-title">Contact US</div>
            <ul className="footer-links d-flex flex-column gap-8">
              <li>
                <a href={`mailto:${navigationData.footer.contact.email}`}>
                  {navigationData.footer.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${navigationData.footer.contact.phone}`} dir="ltr">
                  {navigationData.footer.contact.phone}
                </a>
              </li>
              <li>{navigationData.footer.contact.location}</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="d-flex justify-between items-center flex-wrap gap-16 footer-bottom">
          <div className="footer-copy">
            All rights reserved © Ballout <span>{currentYear}</span>
          </div>

          <div className="d-flex items-center gap-10">
            <a href="#" className="footer-bottom-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-bottom-link">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
