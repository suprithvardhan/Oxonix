import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from './components/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Technology = React.lazy(() => import('./pages/Technology'));
const Products = React.lazy(() => import('./pages/Products'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const Certifications = React.lazy(() => import('./pages/Certifications'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const CardDemo = React.lazy(() => import('./pages/CardDemo'));
const RetrofitChecker = React.lazy(() => import('./pages/RetrofitChecker'));

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Suspense fallback={<PageLoader />}>
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
            </Suspense>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;