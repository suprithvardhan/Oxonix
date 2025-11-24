import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Settings, ShieldCheck, Zap, Truck, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import GreenJourney from '../components/GreenJourney';
import { PRODUCTS, WHATSAPP_NUMBER, WHATSAPP_MSG } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`, '_blank');
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-300">
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block border border-primary/30 rounded-full px-4 py-1 mb-6 bg-primary/10 text-primary text-sm font-semibold tracking-wider">
              ENGINEERED FOR THE FUTURE
            </motion.div>
            <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
              Convert Your Vehicle <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600 dark:to-accent">To Electric</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              Oxonix retrofits legacy petrol & diesel vehicles into high-performance electric machines. Save costs, zero emissions, zero compromise.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8 flex items-center gap-4">
              <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                <img src="/startup-india-logo.png" alt="#StartupIndia" className="h-12" />
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Recognized by<br />DPIIT, Govt. of India
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/technology')}
                className="bg-primary text-black font-bold px-8 py-4 rounded-full hover:bg-green-400 transition-colors flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                Explore Technology <ArrowRight size={18} />
              </button>
              <button
                onClick={openWhatsApp}
                className="border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white font-bold px-8 py-4 rounded-full transition-colors"
              >
                Enquire on WhatsApp
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Before/After Slider in Hero */}
            <div className="relative z-10 w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl shadow-gray-300 dark:shadow-primary/10 group">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
                afterImage="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80"
                className="aspect-[4/3] md:aspect-video"
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

      {/* DIPP Recognition Section */}
      <section className="bg-white dark:bg-black text-gray-900 dark:text-white py-20 border-y border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <img src="/make-in-india-new.png" alt="Make in India" className="h-12 object-contain opacity-90" />
                <span className="text-green-600 dark:text-green-500 font-bold tracking-widest text-sm uppercase border-l border-gray-300 dark:border-white/20 pl-4">Government Recognized</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">DIPP Recognized Startup</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                Oxonix Private Limited is officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT) as a Startup working in the 'Automotive' and 'Electric Vehicles' sector.
              </p>

              <div className="flex items-center gap-6">
                <button
                  onClick={() => navigate('/certifications')}
                  className="text-primary border-b-2 border-primary pb-1 font-bold hover:text-green-600 dark:hover:text-primary transition-colors"
                >
                  View Certificate Details
                </button>
                <div className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded text-xs font-mono text-gray-500 dark:text-gray-400">
                  DIPP226380
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 bg-white dark:bg-[#111] p-2 rounded-xl shadow-2xl border border-gray-200 dark:border-white/10"
              >
                <img src="/certificate.png" alt="DPIIT Certificate" className="w-full rounded-lg" />

                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-[#1e293b] p-4 rounded-lg shadow-xl border border-gray-200 dark:border-white/10 flex items-center gap-3">
                  <img src="/startup-india-logo.png" alt="Startup India" className="h-8 bg-gray-50 dark:bg-white rounded p-1" />
                  <div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider">Verified</div>
                    <div className="text-gray-900 dark:text-white font-bold text-sm">Startup India</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Vehicles Section */}
      <section className="py-32 bg-gray-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-300">
        {/* Ambient Background */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none opacity-50 dark:opacity-100"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none opacity-50 dark:opacity-100"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm"
            >
              <span className="text-primary text-sm font-bold tracking-widest uppercase">Compatibility</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Transformation</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Our advanced retrofitting kits are precision-engineered for India's most iconic two-wheelers.
              Experience the future without changing your ride.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { brand: "/brand-tvs.png", model: "Jupiter", image: "/bike-jupiter.png", type: "Scooter", color: "from-blue-500/20 to-purple-500/20" },
              { brand: "/brand-hero.png", model: "Splendor+", image: "/bike-splendor.png", type: "Motorcycle", color: "from-red-500/20 to-orange-500/20" },
              { brand: "/brand-hero.png", model: "Passion Pro", image: "/bike-passion.png", type: "Motorcycle", color: "from-red-500/20 to-pink-500/20" },
              { brand: "/brand-tvs.png", model: "XL 100", image: "/bike-xl100.png", type: "Moped", color: "from-blue-500/20 to-cyan-500/20" },
            ].map((bike, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 dark:from-white/5 to-white/0 rounded-3xl -z-10 transition-all duration-500 group-hover:scale-105 group-hover:from-white/10"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${bike.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-20`}></div>

                <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-3xl p-6 h-full backdrop-blur-xl hover:border-primary/50 dark:hover:border-white/20 transition-colors overflow-hidden shadow-sm dark:shadow-none">
                  <div className="flex justify-between items-start mb-8">
                    <div className="h-8 bg-gray-100 dark:bg-white/5 rounded px-2 py-1">
                      <img src={bike.brand} alt="Brand" className="h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-white/40 border border-gray-200 dark:border-white/10 px-2 py-1 rounded-full group-hover:text-gray-900 dark:group-hover:text-white group-hover:border-gray-400 dark:group-hover:border-white/30 transition-all">
                      {bike.type}
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] mb-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-black/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src={bike.image}
                      alt={bike.model}
                      className="w-full h-full object-contain relative z-10 transform group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-500 ease-out mix-blend-multiply dark:mix-blend-screen"
                    />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{bike.model}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                      Kit Available
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products#supported-models')}
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors border border-primary/30 hover:border-primary px-8 py-3 rounded-full hover:bg-primary/10"
            >
              View All Supported Models <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Improved Process Section */}
      <section className="py-24 bg-white dark:bg-surface transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">How Retrofitting Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">A seamless engineering process to give your vehicle a new life.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-white/10 md:-translate-x-1/2"></div>

            {[
              { icon: Settings, title: "Vehicle Inspection", desc: "Comprehensive 50-point check of chassis & mechanical health to ensure retrofit compatibility." },
              { icon: Zap, title: "Kit Integration", desc: "Precision removal of IC engine and installation of Motor, Controller & Battery Pack." },
              { icon: ShieldCheck, title: "Testing & Certification", desc: "Rigorous testing on dyno and road, followed by RTO endorsement and green number plate." },
              { icon: Truck, title: "Delivery & Care", desc: "Handover with warranty documents, charging kit, and lifetime service support." }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                className={`relative flex md:items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Icon Marker */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white dark:border-surface z-10 shadow-lg"></div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 w-full md:w-[45%] p-6 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-black/40 hover:border-primary/50 transition-all shadow-sm hover:shadow-md ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <step.icon size={24} />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Retrofit? */}
      <section className="py-24 bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Why Choose <span className="text-primary">Retrofit?</span></h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Don't scrap your valuable vehicle. Upgrade it. Retrofitting is cost-effective, sustainable, and extends the life of your asset by 10+ years.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Save up to 70% on fuel costs immediately.",
                "Fraction of the cost compared to buying a new EV.",
                "Govt. approved kits with RTO endorsement.",
                "Silent, vibration-free driving experience."
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white dark:bg-surface p-4 rounded-lg border border-gray-200 dark:border-white/5 shadow-sm">
                  <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#5CFF6F]"></div>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80"
              className="shadow-2xl"
            />
            <p className="text-center text-xs text-gray-500 mt-4 tracking-widest uppercase">Drag slider to compare Mechanics</p>
          </div>
        </div>
      </section>

      {/* Products Teaser */}
      <section className="py-24 bg-white dark:bg-surface overflow-hidden transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">Our Solutions</h2>
              <p className="text-gray-600 dark:text-gray-400">Engineered kits for every vehicle type.</p>
            </div>
            <button onClick={() => navigate('/products')} className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              View Catalog <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                onClick={() => navigate(`/products/${product.id}`)}
                className="group cursor-pointer"
              >
                <div className="bg-gray-100 dark:bg-black border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden relative h-96">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{product.category}</div>
                    <h3 className="font-display text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{product.name}</h3>
                    <div className="flex justify-between items-center border-t border-white/20 pt-4">
                      <div>
                        <p className="text-xs text-gray-300 uppercase">Range</p>
                        <p className="font-mono font-bold text-white">{product.specs.range}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-300 uppercase">Speed</p>
                        <p className="font-mono font-bold text-white">{product.specs.speed}</p>
                      </div>
                      <div className="bg-white/10 p-2 rounded-full text-white">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <button onClick={() => navigate('/products')} className="text-primary font-bold flex items-center gap-2 mx-auto">
              View All Products <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Green Journey Animation */}
      <GreenJourney />

      {/* CTA Band */}
      <section className="py-20 bg-primary text-black text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto">Ready to Electrify Your Ride?</h2>
          <p className="text-black/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
            Join thousands of satisfied customers saving money and the planet. Get a free quote for your vehicle today.
          </p>
          <button
            onClick={openWhatsApp}
            className="bg-black text-white font-bold px-10 py-5 rounded-full text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Talk to Oxonix Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;