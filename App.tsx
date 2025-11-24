import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Technology from './pages/Technology';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Certifications from './pages/Certifications';
import CaseStudies from './pages/CaseStudies';
import FAQ from './pages/FAQ';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;