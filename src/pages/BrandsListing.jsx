import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

const BrandsListing = () => {
  const [sortBy, setSortBy] = useState('Recommended');

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return a.price - b.price;
      case 'Price: High to Low':
        return b.price - a.price;
      case 'Newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <>
      <Helmet>
        <title>Shop All Brands - Nike, Adidas, Puma & More | Celtis Australis</title>
        <meta
          name="description"
          content="Browse our complete collection of premium footwear from top brands including Nike, Adidas, Puma, and more. Find the perfect shoes for every occasion."
        />
        <meta
          name="keywords"
          content="Nike shoes, Adidas sneakers, Puma footwear, brand shoes, athletic shoes, buy sneakers online"
        />
        <meta property="og:title" content="Shop All Brands - Premium Footwear Collection" />
        <meta
          property="og:description"
          content="Browse our complete collection of premium footwear from top brands."
        />
        <meta property="og:image" content="/img/topbar-1.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shop All Brands - Premium Footwear Collection" />
        <meta
          name="twitter:description"
          content="Browse our complete collection of premium footwear from top brands."
        />
        <meta name="twitter:image" content="/img/topbar-1.png" />
      </Helmet>

      <Header />

      <header>
        <div className="topbar-img relative overflow-hidden top-banner">
          <img className="img-object-fit" src="/img/topbar-1.png" alt="topbar" title="topbar" />
        </div>
      </header>

      <main className="relative">
        <section className="container padding-block-32 main-font">
          {/* Top bar */}
          <div className="d-flex justify-between items-center mb-20">
            <div></div>

            <div className="d-flex items-center gap-10 sort-by-sec">
              <p className="main-regular-font font-14 primary-color-darker">Sort by</p>
              <div className="select-sort relative">
                <select
                  className="main-regular-font font-14"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="d-flex flex-wrap gap-32">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BrandsListing;
