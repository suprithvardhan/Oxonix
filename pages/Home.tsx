import React, { Suspense } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import GreenJourney from '../components/GreenJourney'; // Keep GreenJourney static if it's near/above fold on larger screens, or lazy load? It's relatively high up. Let's lazy load it too to be safe, or keeps it if it's critical. It's the animation, might be heavy.
import { WHATSAPP_NUMBER, WHATSAPP_MSG } from '../constants';
import SEO from '../components/SEO';

// Lazy Load Below-Fold Components
const ProcessSection = React.lazy(() => import('../components/home/ProcessSection'));
const RetrofitCheckerCTA = React.lazy(() => import('../components/home/RetrofitCheckerCTA'));
const SupportedVehicles = React.lazy(() => import('../components/home/SupportedVehicles'));
const WhyRetrofit = React.lazy(() => import('../components/home/WhyRetrofit'));
const ProductsTeaser = React.lazy(() => import('../components/home/ProductsTeaser'));
const DIPPRecognition = React.lazy(() => import('../components/home/DIPPRecognition'));
const VisitHQ = React.lazy(() => import('../components/home/VisitHQ'));
const CTABand = React.lazy(() => import('../components/home/CTABand'));

const SectionLoader = () => <div className="min-h-[50vh] flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div></div>;

const Home: React.FC = () => {
  const navigate = useNavigate();

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`, '_blank');
  };

  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Best EV Conversion Kit & Retrofitting Company in India"
        description="Transform your petrol scooter/bike into electric with Oxonix's government-approved EV conversion kits. Affordable, reliable, and made in India."
        keywords={["EV conversion kit India", "petrol to electric", "electric bike conversion", "scooter retrofitting"]}
        canonicalUrl="https://oxonix.in/"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-10 md:pt-20 overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent dark:from-primary/20 dark:via-black dark:to-black opacity-40"></div>

        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-20" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        {/* Dark mode grid override */}
        <div className="absolute inset-0 opacity-0 dark:opacity-20" style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">

          <div
            className="flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block border border-green-600/30 dark:border-primary/30 rounded-full px-4 py-1 mb-6 bg-green-600/10 dark:bg-primary/10 text-green-700 dark:text-primary text-sm font-bold tracking-wider w-max"
            >
              ENGINEERED FOR THE FUTURE
            </motion.div>

            {/* H1 - LCP Element: Render Immediately (No Animation) */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6 text-gray-900 dark:text-white drop-shadow-sm dark:drop-shadow-none">
              Convert Your Vehicle <br className="block md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600 dark:to-accent">To Electric</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 text-sm md:text-lg mb-6 md:mb-8 max-w-lg leading-relaxed font-medium"
            >
              Oxonix retrofits legacy petrol 2-wheelers & 3-wheelers into high-performance electric machines. Save costs, zero emissions, zero compromise.
            </motion.p>

            {/* Mobile Only Slider - LCP Element: Render Immediately */}
            <div className="block md:hidden mb-8 relative">
              <div className="relative z-10 w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl shadow-gray-300 dark:shadow-primary/10 group">
                <BeforeAfterSlider
                  beforeImage="/BeforeAfter/Before_Petrol.webp"
                  afterImage="/BeforeAfter/After_Electric.webp"
                  beforeImageSrcSet="/BeforeAfter/Before_Petrol_mobile.webp 600w, /BeforeAfter/Before_Petrol.webp 1200w"
                  afterImageSrcSet="/BeforeAfter/After_Electric_mobile.webp 600w, /BeforeAfter/After_Electric.webp 1200w"
                  className="aspect-[4/3]"
                  priority={true}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent pointer-events-none flex items-end justify-between gap-2">
                  <div className="bg-black/60 backdrop-blur-md border border-primary/30 p-2 rounded-lg text-center">
                    <p className="text-primary font-bold text-sm">70%</p>
                    <p className="text-[8px] text-gray-300 uppercase tracking-wider">Savings</p>
                  </div>
                  <div className="bg-black/60 backdrop-blur-md border border-primary/30 p-2 rounded-lg text-center">
                    <p className="text-accent font-bold text-sm">0g</p>
                    <p className="text-[8px] text-gray-300 uppercase tracking-wider">CO2</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 flex items-center gap-4"
            >
              <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                <img src="/startup-india-logo.webp" alt="#StartupIndia" className="h-12 w-auto" width="768" height="201" />
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Recognized by<br />DPIIT, Govt. of India
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => navigate('/technology')}
                className="bg-primary text-black font-bold px-8 py-4 rounded-full hover:bg-green-400 transition-colors flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40"
              >
                Explore Technology <ArrowRight size={18} />
              </button>
              <button
                onClick={openWhatsApp}
                className="border border-gray-300 dark:border-white/20 bg-white/50 dark:bg-transparent hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white font-bold px-8 py-4 rounded-full transition-colors backdrop-blur-sm"
              >
                Enquire on WhatsApp
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden md:block"
          >
            {/* Before/After Slider in Hero */}
            <div className="relative z-10 w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl shadow-gray-300 dark:shadow-primary/10 group">
              <BeforeAfterSlider
                beforeImage="/BeforeAfter/Before_Petrol.webp"
                afterImage="/BeforeAfter/After_Electric.webp"
                beforeImageSrcSet="/BeforeAfter/Before_Petrol_mobile.webp 600w, /BeforeAfter/Before_Petrol.webp 1200w"
                afterImageSrcSet="/BeforeAfter/After_Electric_mobile.webp 600w, /BeforeAfter/After_Electric.webp 1200w"
                className="aspect-[4/3] md:aspect-video"
                priority={true}
              />

              {/* Overlay Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent pointer-events-none flex items-end justify-start gap-4">
                <div className="bg-black/60 backdrop-blur-md border border-primary/30 p-3 rounded-lg text-center">
                  <p className="text-primary font-bold text-xl">70%</p>
                  <p className="text-[10px] text-gray-300 uppercase tracking-wider">Fuel Savings</p>
                </div>
                <div className="bg-black/60 backdrop-blur-md border border-primary/30 p-3 rounded-lg text-center">
                  <p className="text-accent font-bold text-xl">0g</p>
                  <p className="text-[10px] text-gray-300 uppercase tracking-wider">Emissions</p>
                </div>
                <div className="ml-auto hidden md:flex items-center gap-2 text-xs text-gray-400">
                  <span>Drag to Compare</span>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      <GreenJourney />

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<SectionLoader />}>
        <ProcessSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <RetrofitCheckerCTA />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <SupportedVehicles />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <WhyRetrofit />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ProductsTeaser />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <DIPPRecognition />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <VisitHQ />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <CTABand openWhatsApp={openWhatsApp} />
      </Suspense>

    </div>
  );
};

export default Home;