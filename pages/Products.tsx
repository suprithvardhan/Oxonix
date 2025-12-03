import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { VehicleType, Product } from '../types';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Products: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const navigate = useNavigate();

  const filteredProducts = filter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen py-12 md:py-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Our <span className="text-primary">Catalog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Explore our range of certified conversion kits. Select your vehicle type to find the perfect match.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setFilter('All')}
            className={`px-6 py-2 rounded-full border text-sm font-bold transition-all ${filter === 'All' ? 'bg-primary border-primary text-black' : 'bg-transparent border-gray-300 dark:border-white/20 text-gray-600 dark:text-white hover:border-primary'}`}
          >
            All Kits
          </button>
          {Object.values(VehicleType).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full border text-sm font-bold transition-all ${filter === type ? 'bg-primary border-primary text-black' : 'bg-transparent border-gray-300 dark:border-white/20 text-gray-600 dark:text-white hover:border-primary'}`}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product: Product, index: number) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="bg-white dark:bg-surface rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 group flex flex-col shadow-sm hover:shadow-lg"
            >
              <div className="relative h-48 md:h-64 overflow-hidden cursor-pointer" onClick={() => navigate(`/products/${product.id}`)}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur px-3 py-1 rounded text-xs font-mono text-primary border border-primary/20">
                  {product.category}
                </div>
              </div>
              <div className="p-4 md:p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
                  <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Approx. {product.priceEstimate}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 md:gap-4 mb-6 md:mb-8">
                  <div className="bg-gray-50 dark:bg-black p-2 md:p-3 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase mb-1">Range</p>
                    <p className="font-mono text-gray-900 dark:text-white font-bold">{product.specs.range}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-black p-2 md:p-3 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase mb-1">Top Speed</p>
                    <p className="font-mono text-gray-900 dark:text-white font-bold">{product.specs.speed}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-black p-2 md:p-3 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase mb-1">Power</p>
                    <p className="font-mono text-gray-900 dark:text-white font-bold">{product.specs.motorPower}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-black p-2 md:p-3 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase mb-1">Charge Time</p>
                    <p className="font-mono text-gray-900 dark:text-white font-bold">{product.specs.chargingTime}</p>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/products/${product.id}`)}
                  className="mt-auto w-full bg-black dark:bg-white text-white dark:text-black font-bold py-2 md:py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-primary transition-colors flex items-center justify-center gap-2"
                >
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Supported Vehicles Section */}
      <div id="supported-models" className="mt-16 md:mt-32 relative py-12 md:py-20">
        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-transparent via-primary/5 to-transparent blur-3xl pointer-events-none"></div>

        <div className="text-center mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "-50px" }}
            className="inline-block mb-6 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-widest uppercase text-sm"
          >
            Compatibility Check
          </motion.div>
          <h2 className="font-display text-3xl md:text-6xl font-bold mb-6 md:mb-8 text-gray-900 dark:text-white">
            Supported <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">Models</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We support a wide range of popular two-wheelers. Don't see yours? <a href="#" className="text-primary hover:underline font-bold">Contact us</a> for a custom assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10 px-2 md:px-4">
          {[
            { brand: "/Brands_supported/tvs_logo.png", model: "Jupiter", image: "/Brands_supported/jupiter_scooty.png", type: "Scooter", color: "from-blue-500/20 to-purple-500/20" },
            { brand: "/Brands_supported/hero_logo.png", model: "Splendor+", image: "/Brands_supported/splendor_bike.png", type: "Motorcycle", color: "from-red-500/20 to-orange-500/20" },
            { brand: "/Brands_supported/hero_logo.png", model: "Passion Pro", image: "/Brands_supported/passion_pro_bike.png", type: "Motorcycle", color: "from-red-500/20 to-pink-500/20" },
            { brand: "/Brands_supported/tvs_logo.png", model: "XL 100", image: "/Brands_supported/xl100_bike.png", type: "Moped", color: "from-blue-500/20 to-cyan-500/20" },
            { brand: "/Brands_supported/honda_logo.png", model: "Activa", image: "/Brands_supported/activa_scooty.png", type: "Scooter", color: "from-yellow-500/20 to-orange-500/20" },
            { brand: "/Brands_supported/honda_logo.png", model: "Shine", image: "/Brands_supported/shine_bike.png", type: "Motorcycle", color: "from-red-500/20 to-red-800/20" },
            { brand: "/Brands_supported/hero_logo.png", model: "HF Deluxe", image: "/Brands_supported/Hf_deluxe_bike.png", type: "Motorcycle", color: "from-gray-500/20 to-gray-700/20" },
          ].map((bike, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-50px" }}
              transition={{ delay: idx * 0.05 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 dark:from-white/5 to-white/40 dark:to-transparent rounded-[2rem] -z-10 transition-all duration-500 group-hover:scale-105 shadow-sm group-hover:shadow-2xl dark:shadow-none"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${bike.color} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-20`}></div>

              <div className="bg-white/50 dark:bg-[#111]/90 border border-gray-200 dark:border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-3 md:p-8 h-full backdrop-blur-md hover:border-primary/50 dark:hover:border-white/20 transition-colors overflow-hidden flex flex-col">
                <div className="flex justify-between items-start mb-3 md:mb-8">
                  <div className="h-6 md:h-10 bg-gray-100 dark:bg-white/5 rounded-lg px-2 md:px-3 py-1 md:py-1.5 flex items-center justify-center">
                    <img src={bike.brand} alt="Brand" className="h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-white/40 border border-gray-200 dark:border-white/10 px-2 md:px-3 py-1 md:py-1.5 rounded-full group-hover:text-gray-900 dark:group-hover:text-white group-hover:border-gray-400 dark:group-hover:border-white/30 transition-all bg-white/50 dark:bg-transparent">
                    {bike.type}
                  </div>
                </div>

                <div className="aspect-[4/3] mb-3 md:mb-8 flex items-center justify-center bg-gray-100 dark:bg-black/40 rounded-xl md:rounded-2xl p-2 md:p-6 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src={bike.image}
                    alt={bike.model}
                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-screen relative z-10 drop-shadow-xl"
                  />
                </div>

                <div className="mt-auto">
                  <h3 className="font-display text-sm md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-2 md:mb-3">{bike.model}</h3>
                  <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-200 dark:border-white/10">
                    <div className="flex items-center gap-1 md:gap-2 text-[10px] md:text-xs font-medium text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                      Compatible
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                      <ArrowRight size={12} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300 md:w-[14px] md:h-[14px]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;