import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, Battery, Timer, Gauge } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Products: React.FC = () => {
    const navigate = useNavigate();
    const [activeKit, setActiveKit] = useState<'ride-plus' | 'ride-sq'>('ride-plus');

    return (
        <div className="bg-white dark:bg-black min-h-screen py-24 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* HERO HEADING */}
                <div className="text-center mb-32 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-display text-5xl md:text-8xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Pricing</span>
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-xl font-light">
                            Transparent costs for the future of urban mobility.
                        </p>
                    </motion.div>
                </div>

                {/* 1. CINEMATIC VEHICLE SHOWCASE */}
                <div className="mb-40 space-y-40">

                    {/* SCOOTY SECTION */}
                    <div className="relative group">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="order-2 md:order-1 relative z-10"
                            >
                                <div className="mb-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="py-1.5 px-4 border border-blue-500/30 rounded-full text-blue-500 text-xs font-bold uppercase tracking-widest bg-blue-500/5">City Commuter</span>
                                        <div className="h-px bg-gray-200 dark:bg-white/10 flex-grow"></div>
                                    </div>
                                    <h3 className="font-display text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter leading-none">OXONIX SCOOTY</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md">
                                        Agile, efficient, and built for the concrete jungle. The perfect balance of power and practicality for your daily ride.
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-8 mb-12 py-8 border-t border-b border-gray-100 dark:border-white/5">
                                    <div>
                                        <span className="block text-3xl md:text-4xl font-mono font-bold text-gray-900 dark:text-white mb-1">60<span className="text-sm md:text-lg text-gray-500 ml-1">km</span></span>
                                        <div className="flex items-center gap-1 text-xs text-gray-500 uppercase font-bold tracking-wider">
                                            <Gauge size={12} /> Range
                                        </div>
                                    </div>
                                    <div>
                                        <span className="block text-3xl md:text-4xl font-mono font-bold text-gray-900 dark:text-white mb-1">3<span className="text-sm md:text-lg text-gray-500 ml-1">hrs</span></span>
                                        <div className="flex items-center gap-1 text-xs text-gray-500 uppercase font-bold tracking-wider">
                                            <Timer size={12} /> Charge
                                        </div>
                                    </div>
                                    <div>
                                        <span className="block text-3xl md:text-4xl font-mono font-bold text-gray-900 dark:text-white mb-1">2.0<span className="text-sm md:text-lg text-gray-500 ml-1">kW</span></span>
                                        <div className="flex items-center gap-1 text-xs text-gray-500 uppercase font-bold tracking-wider">
                                            <Zap size={12} /> Power
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="flex items-baseline gap-4">
                                        <span className="text-5xl font-bold text-gray-900 dark:text-white">₹45,000</span>
                                        <span className="text-gray-500 font-medium text-lg">Conversion Cost</span>
                                    </div>
                                    <button onClick={() => navigate('/contact')} className="w-full md:w-auto group/btn relative overflow-hidden bg-gray-900 dark:bg-white text-white dark:text-black px-10 py-5 rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-blue-500/25">
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Enquire Now <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                                        </span>
                                        <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                    </button>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="order-1 md:order-2 relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
                                <img src="/products/oxonix_scooty.png" alt="Scooty" className="relative z-10 w-full max-w-[420px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out" />
                            </motion.div>
                        </div>
                    </div>

                    {/* BIKE SECTION */}
                    <div className="relative group">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, x: -50 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tl from-red-500/20 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
                                <img src="/products/oxonix_motorbike.png" alt="Motorbike" className="relative z-10 w-full max-w-[520px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10 md:text-right flex flex-col items-start md:items-end"
                            >
                                <div className="mb-8">
                                    <div className="flex items-center gap-4 mb-6 flex-row-reverse">
                                        <span className="py-1.5 px-4 border border-red-500/30 rounded-full text-red-500 text-xs font-bold uppercase tracking-widest bg-red-500/5">Performance Beast</span>
                                        <div className="h-px bg-gray-200 dark:bg-white/10 flex-grow"></div>
                                    </div>
                                    <h3 className="font-display text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter leading-none">OXONIX MOTORBIKE</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md md:ml-auto">
                                        Dominate the streets with enhanced power and range. A retrofitting masterpiece for the true enthusiast.
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-8 mb-12 py-8 border-t border-b border-gray-100 dark:border-white/5 w-full md:w-auto">
                                    <div className="md:text-right">
                                        <span className="block text-3xl md:text-4xl font-mono font-bold text-gray-900 dark:text-white mb-1">86<span className="text-sm md:text-lg text-gray-500 ml-1">km</span></span>
                                        <div className="flex items-center gap-1 text-xs text-gray-500 uppercase font-bold tracking-wider justify-end">
                                            Range <Gauge size={12} />
                                        </div>
                                    </div>
                                    <div className="md:text-right">
                                        <span className="block text-3xl md:text-4xl font-mono font-bold text-gray-900 dark:text-white mb-1">3<span className="text-sm md:text-lg text-gray-500 ml-1">hrs</span></span>
                                        <div className="flex items-center gap-1 text-xs text-gray-500 uppercase font-bold tracking-wider justify-end">
                                            Charge <Timer size={12} />
                                        </div>
                                    </div>
                                    <div className="md:text-right">
                                        <span className="block text-3xl md:text-4xl font-mono font-bold text-gray-900 dark:text-white mb-1">2.4<span className="text-sm md:text-lg text-gray-500 ml-1">kW</span></span>
                                        <div className="flex items-center gap-1 text-xs text-gray-500 uppercase font-bold tracking-wider justify-end">
                                            Power <Zap size={12} />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6 md:items-end">
                                    <div className="flex items-baseline gap-4 md:flex-row-reverse">
                                        <span className="text-5xl font-bold text-gray-900 dark:text-white">₹50,000</span>
                                        <span className="text-gray-500 font-medium text-lg">Conversion Cost</span>
                                    </div>
                                    <button onClick={() => navigate('/contact')} className="w-full md:w-auto group/btn relative overflow-hidden bg-gray-900 dark:bg-white text-white dark:text-black px-10 py-5 rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-red-500/25">
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Enquire Now <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                                        </span>
                                        <div className="absolute inset-0 bg-red-600 dark:bg-red-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* 2. INTERACTIVE KIT CONFIGURATOR (Tabs) */}
                <div className="mb-40">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Select Your <span className="text-primary">Power</span>
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-lg">
                            Customize your retrofitting experience with our tailored kits.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="flex justify-center mb-12">
                            <div className="bg-gray-100 dark:bg-white/5 p-2 rounded-full inline-flex relative">
                                <div className={`absolute top-2 bottom-2 w-[calc(50%-8px)] bg-white dark:bg-[#222] rounded-full shadow-md transition-all duration-300 ${activeKit === 'ride-plus' ? 'left-2' : 'left-[calc(50%+4px)]'}`}></div>
                                <button
                                    onClick={() => setActiveKit('ride-plus')}
                                    className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-colors duration-300 ${activeKit === 'ride-plus' ? 'text-black dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'}`}
                                >
                                    Ride +
                                </button>
                                <button
                                    onClick={() => setActiveKit('ride-sq')}
                                    className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-colors duration-300 ${activeKit === 'ride-sq' ? 'text-black dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'}`}
                                >
                                    Ride ²
                                </button>
                            </div>
                        </div>

                        <div className="bg-gray-50/50 dark:bg-[#111] rounded-[3rem] p-6 md:p-16 border border-gray-200 dark:border-white/5 relative overflow-hidden transition-all duration-500">
                            {/* Background Glow based on active kit */}
                            <div className={`absolute top-0 right-0 w-[500px] h-[500px] blur-[120px] rounded-full transition-colors duration-700 opacity-20 pointer-events-none ${activeKit === 'ride-plus' ? 'bg-blue-500' : 'bg-green-500'}`}></div>

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
                                    <div>
                                        <motion.div
                                            key={activeKit}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <h3 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                                                {activeKit === 'ride-plus' ? 'RIDE +' : 'RIDE ²'}
                                            </h3>
                                            <span className={`inline-block py-1 px-3 rounded text-xs font-bold uppercase tracking-widest ${activeKit === 'ride-plus' ? 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400' : 'bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400'}`}>
                                                {activeKit === 'ride-plus' ? 'Standard Edition' : 'Pro Performance'}
                                            </span>
                                        </motion.div>
                                    </div>
                                    <div className="text-right">
                                        <motion.div
                                            key={`${activeKit}-price`}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <span className="block text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-1">
                                                {activeKit === 'ride-plus' ? '₹35k' : '₹47k'}
                                            </span>
                                            <span className="text-gray-500 text-sm font-medium">Full Kit + Installation</span>
                                        </motion.div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6 mb-12">
                                    {[
                                        {
                                            label: "Battery Capacity",
                                            icon: Battery,
                                            val: activeKit === 'ride-plus' ? '1.8 kW' : '2.4 kW',
                                            desc: activeKit === 'ride-plus' ? 'Perfect for city use' : 'Extended capacity'
                                        },
                                        {
                                            label: "Estimated Range",
                                            icon: Gauge,
                                            val: activeKit === 'ride-plus' ? '60+ km' : '90+ km',
                                            desc: activeKit === 'ride-plus' ? 'Reliable daily range' : 'Long distance ready'
                                        },
                                        {
                                            label: "Top Speed",
                                            icon: Zap,
                                            val: activeKit === 'ride-plus' ? '25 kmph' : '25+ kmph',
                                            desc: activeKit === 'ride-plus' ? 'Safe city cruising' : 'Enhanced torque'
                                        }
                                    ].map((feature, idx) => (
                                        <motion.div
                                            key={`${activeKit}-${idx}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                                            className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center mb-4 text-gray-900 dark:text-white">
                                                <feature.icon size={20} />
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{feature.val}</h4>
                                            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{feature.label}</div>
                                            <p className="text-sm text-gray-500 dark:text-gray-500">{feature.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="text-center">
                                    <button onClick={() => navigate('/contact')} className={`w-full md:w-auto px-12 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 ${activeKit === 'ride-plus' ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20' : 'bg-primary hover:bg-green-400 text-black shadow-green-500/20'}`}>
                                        Enquire for {activeKit === 'ride-plus' ? 'Ride +' : 'Ride ²'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Supported Vehicles Section */}
                <div id="supported-models" className="mt-16 md:mt-32 relative py-12 md:py-20">
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

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 relative z-10 px-2 md:px-4">
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
        </div>
    );
};

export default Products;