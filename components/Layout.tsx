import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, MessageCircle, Zap, ArrowRight, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS, BRAND_NAME, WHATSAPP_NUMBER, WHATSAPP_MSG } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';

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
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-gray-200/50 dark:border-white/10 py-4 shadow-sm dark:shadow-none'
          : 'bg-transparent border-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <img src="/xonix_logo.png" alt={BRAND_NAME} className="h-10 md:h-12 w-auto object-contain rounded-lg" />
            <div className="flex flex-col justify-center">
              <span className="font-display font-bold text-lg md:text-2xl tracking-tight text-primary leading-none mb-0.5">{BRAND_NAME}</span>
              <span className="text-[0.6rem] md:text-[0.7rem] text-gray-500 dark:text-gray-400 font-medium tracking-[0.15em] uppercase leading-none opacity-80">Where Energy Meets Innovation</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-gray-700 dark:text-gray-300'}`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="hidden lg:flex">
            <button
              onClick={openWhatsApp}
              className="bg-primary hover:bg-green-400 text-black font-bold px-5 py-2 rounded-full text-sm transition-all flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              Enquire Now <ArrowRight size={16} />
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
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
            className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl pt-24 px-6 lg:hidden overflow-y-auto"
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
      <footer className="bg-gray-50 dark:bg-surface border-t border-gray-200 dark:border-white/5 py-16 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-12 mb-12 text-left">
            <div className="col-span-3 md:col-span-1 mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <img src="/xonix_logo.png" alt={BRAND_NAME} className="h-12 md:h-16 w-auto object-contain rounded-lg bg-white p-1 shadow-sm dark:bg-white/5 dark:shadow-none" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                Pioneering the future of sustainable mobility by retrofitting legacy vehicles with cutting-edge electric technology.
              </p>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm md:text-lg">Company</h4>
              <ul className="space-y-2 md:space-y-4 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                <li><NavLink to="/about" className="hover:text-primary transition-colors">About Us</NavLink></li>
                <li><NavLink to="/certifications" className="hover:text-primary transition-colors">Certifications</NavLink></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm md:text-lg">Tech</h4>
              <ul className="space-y-2 md:space-y-4 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                <li><NavLink to="/technology" className="hover:text-primary transition-colors">Retrofit</NavLink></li>
                <li><NavLink to="/products" className="hover:text-primary transition-colors">EV Kits</NavLink></li>
                <li><NavLink to="/faq" className="hover:text-primary transition-colors">FAQs</NavLink></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm md:text-lg">Contact</h4>
              <div className="flex flex-col gap-1 md:gap-2 text-[10px] md:text-sm text-gray-600 dark:text-gray-400 break-words">
                <p>oxonixx99@gmail.com</p>
                <p>+91 738 294 5403</p>
                <p>H NO. 2-4-227, MADULAGADDA THANDA,</p>
                <p>Vikarabad, Hyderabad,</p>
                <p>Telangana, India - 501101</p>
                <button onClick={openWhatsApp} className="text-primary font-bold hover:underline flex items-center gap-1 mt-2">
                  Chat <MessageCircle size={12} />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-12 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} OXONIX PRIVATE LIMITED. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-shadow"
      >
        <MessageCircle size={28} fill="white" />
      </motion.button>
    </div>
  );
};

export default Layout;
