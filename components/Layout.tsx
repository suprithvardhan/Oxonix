import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, MessageCircle, Zap, ArrowRight, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS, BRAND_NAME, WHATSAPP_NUMBER, WHATSAPP_MSG } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';
import ChatBot from './ChatBot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
          ? 'bg-white/90 dark:bg-black/80 backdrop-blur-lg border-gray-200 dark:border-white/10 py-4 shadow-sm dark:shadow-none'
          : 'bg-transparent border-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <img src="/xonix_logo.jpg" alt={BRAND_NAME} className="h-10 w-auto object-contain rounded-lg" />
            <span className="font-display font-bold text-2xl tracking-tight text-primary">{BRAND_NAME}</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button
              onClick={openWhatsApp}
              className="bg-primary hover:bg-green-400 text-black font-bold px-5 py-2 rounded-full text-sm transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              Enquire Now <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-900 dark:text-white"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-gray-900 dark:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-black pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold text-gray-800 dark:text-gray-300 hover:text-primary"
                >
                  {item.label}
                </NavLink>
              ))}
              <button
                onClick={openWhatsApp}
                className="mt-8 w-full bg-primary text-black font-bold py-4 rounded-lg text-lg shadow-lg"
              >
                Enquire via WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-surface border-t border-gray-200 dark:border-white/5 py-16 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img src="/xonix_logo_with_tagline.jpg" alt={BRAND_NAME} className="h-16 w-auto object-contain rounded-lg bg-white/5 p-1" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Pioneering the future of sustainable mobility by retrofitting legacy vehicles with cutting-edge electric technology.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                <li><NavLink to="/about" className="hover:text-primary">About Us</NavLink></li>
                <li><NavLink to="/certifications" className="hover:text-primary">Certifications</NavLink></li>
                <li><NavLink to="/case-studies" className="hover:text-primary">Case Studies</NavLink></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-6">Technology</h4>
              <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                <li><NavLink to="/technology" className="hover:text-primary">Retrofit Process</NavLink></li>
                <li><NavLink to="/products" className="hover:text-primary">EV Kits</NavLink></li>
                <li><NavLink to="/faq" className="hover:text-primary">FAQs</NavLink></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-6">Contact</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">srikanthkethavth99@gmail.com</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">+91 961 840 2450</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Hyderabad, Telangana</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">9 AM – 7 PM</p>
              <button onClick={openWhatsApp} className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
                Chat on WhatsApp <MessageCircle size={14} />
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-600">
            <p>© 2025 Oxonix Mobility LLP</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating AI Chatbot */}
      <ChatBot />

      {/* Floating WhatsApp (Shifted slightly left to accommodate ChatBot stack) */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={openWhatsApp}
        className="fixed bottom-8 right-24 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-shadow"
      >
        <MessageCircle size={28} fill="white" />
      </motion.button>
    </div>
  );
};

export default Layout;
