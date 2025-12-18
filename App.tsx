import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Technology from './pages/Technology';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Certifications from './pages/Certifications';
import FAQ from './pages/FAQ';
import CardDemo from './pages/CardDemo';
import RetrofitChecker from './pages/RetrofitChecker';
import { ThemeProvider } from './components/ThemeContext';

import ScrollToTop from './components/ScrollToTop';

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/cardDemo" element={<CardDemo />} />
              <Route path="/retrofitchecker" element={<RetrofitChecker />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;