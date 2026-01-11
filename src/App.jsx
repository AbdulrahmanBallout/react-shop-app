import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import BrandsListing from './pages/BrandsListing';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/brands" element={<BrandsListing />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
