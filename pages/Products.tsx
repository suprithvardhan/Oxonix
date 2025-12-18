import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Battery, Timer, Gauge, CheckCircle2, Star, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '../constants';
import SEO from '../components/SEO';

// Product Data
const PRODUCT_TIERS = [
    {
        id: 'ride_plus',
        name: 'RIDE +',
        badge: 'Standard Edition',
        badgeColor: 'blue',
        icon: Zap,
        description: 'Optimized for efficiency and daily urban mobility.',
        price: '₹35,000',
        features: [
            { icon: Battery, text: "1.8 kW Smart Battery", desc: "High-density Li-ion cells" },
            { icon: Gauge, text: "60+ km Range", desc: "Real-world city conditions" },
            { icon: Timer, text: "3 Hour Fast Charge", desc: "0-80% rapid charging" },
            { icon: CheckCircle2, text: "3 Year Warranty", desc: "Comprehensive coverage" }
        ],
        theme: {
            border: 'border-gray-200 dark:border-white/10',
            bg: 'bg-white dark:bg-[#0c0c0c]',
            shadow: 'shadow-blue-500/5',
            hoverShadow: 'hover:shadow-blue-500/10',
            badgeBg: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border-blue-100 dark:border-blue-500/20',
            iconBg: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
            btn: 'bg-gray-900 dark:bg-white text-white dark:text-black hover:shadow-blue-500/20',
            glow: 'bg-blue-500/5',
            text: 'text-gray-900 dark:text-white',
            subtext: 'text-gray-500 dark:text-gray-400'
        }
    },
    {
        id: 'hybrid',
        name: 'HYBRID',
        badge: 'Dual Power System',
        badgeColor: 'purple',
        icon: RefreshCw,
        description: 'Best of both worlds. Electric economy + Petrol backup.',
        price: '₹45,000+',
        features: [
            { icon: Battery, text: "1.8 - 2.4 kW Battery", desc: "Flexible capacity options" },
            { icon: Gauge, text: "140km+ Range", desc: "Combined IC + Battery range" },
            { icon: Gauge, text: "25kmph+ Speed", desc: "Optimized electric cruising" },
            { icon: CheckCircle2, text: "3 Year Warranty", desc: "Comprehensive coverage" }
        ],
        theme: {
            border: 'border-purple-200 dark:border-purple-500/20',
            bg: 'bg-white dark:bg-[#0c0c0c]',
            shadow: 'shadow-purple-500/5',
            hoverShadow: 'hover:shadow-purple-500/10',
            badgeBg: 'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 border-purple-100 dark:border-purple-500/20',
            iconBg: 'bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
            btn: 'bg-gray-900 dark:bg-white text-white dark:text-black hover:shadow-purple-500/20',
            glow: 'bg-purple-500/5',
            text: 'text-gray-900 dark:text-white',
            subtext: 'text-gray-500 dark:text-gray-400'
        }
    },
    {
        id: 'ride_square',
        name: 'RIDE ²',
        badge: 'Pro Performance',
        badgeColor: 'emerald',
        icon: Zap,
        description: 'Enhanced torque and range for the true enthusiast.',
        price: '₹47,000',
        features: [
            { icon: Battery, text: "2.4 kW Max Battery", desc: "Extended range architecture" },
            { icon: Gauge, text: "90+ km Range", desc: "Superior long-distance capability" },
            { icon: Zap, text: "High Torque Motor", desc: "Instant acceleration boost" },
            { icon: CheckCircle2, text: "5 Year Warranty", desc: "Extended complete protection" }
        ],
        theme: {
            border: 'border-gray-800 dark:border-white/10 ring-1 ring-white/10',
            bg: 'bg-[#111] dark:bg-black',
            shadow: 'shadow-emerald-500/5',
            hoverShadow: 'hover:shadow-emerald-500/20',
            badgeBg: 'bg-gradient-to-r from-emerald-900/60 to-emerald-800/60 text-emerald-400 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]',
            iconBg: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
            btn: 'bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]',
            glow: 'bg-emerald-500/10',
            text: 'text-white',
            subtext: 'text-gray-400'
        }
    }
];

const SharedProductSection = () => {
    const [activeTab, setActiveTab] = useState('hybrid');
    const navigate = useNavigate();

    const openWhatsApp = (tierName: string) => {
        const message = `I am interested in the ${tierName} kit.`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="w-full">
            {/* Desktop Tabs */}
            <div className="hidden lg:flex justify-center mb-12">
                <div className="bg-gray-100 dark:bg-white/5 p-2 rounded-full border border-gray-200 dark:border-white/10 flex gap-2">
                    {PRODUCT_TIERS.map((tier) => (
                        <button
                            key={tier.id}
                            onClick={() => setActiveTab(tier.id)}
                            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === tier.id
                                ? 'bg-white dark:bg-[#222] text-gray-900 dark:text-white shadow-lg scale-105'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            {tier.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Desktop View - Single Active Card */}
            <div className="hidden lg:block max-w-4xl mx-auto">
                <AnimatePresence mode="wait">
                    {PRODUCT_TIERS.map((tier) => (
                        tier.id === activeTab && (
                            <motion.div
                                key={tier.id}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className={`border-2 rounded-[2.5rem] p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 shadow-xl ${tier.theme.border} ${tier.theme.bg} ${tier.theme.shadow} ${tier.theme.hoverShadow}`}
                            >
                                <div className={`absolute top-0 right-0 w-[400px] h-[400px] blur-[100px] rounded-full pointer-events-none transition-colors duration-500 ${tier.theme.glow}`}></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-8">
                                        <div className="flex justify-between items-start mb-6">
                                            <span className={`inline-block py-2 px-6 rounded-xl text-xs font-bold uppercase tracking-widest border ${tier.theme.badgeBg}`}>
                                                {tier.badge}
                                            </span>
                                            <div className={`p-3 rounded-full ${tier.theme.iconBg}`}>
                                                <tier.icon size={24} />
                                            </div>
                                        </div>
                                        <h3 className={`font-display text-5xl font-bold mb-3 tracking-tight ${tier.theme.text}`}>{tier.name}</h3>
                                        <p className={`text-lg ${tier.theme.subtext}`}>{tier.description}</p>
                                    </div>

                                    <div className="mb-8 pb-8 border-b border-gray-100 dark:border-white/5">
                                        <div className="flex items-baseline gap-2">
                                            <span className={`text-5xl font-bold tracking-tighter ${tier.theme.text}`}>{tier.price}</span>
                                            <span className={`font-medium text-lg ${tier.theme.subtext}`}>/ Kit + Install</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6 mb-10">
                                        {tier.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-4">
                                                <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl text-gray-900 dark:text-white flex-shrink-0 mt-1.5 border border-gray-100 dark:border-white/5">
                                                    <feature.icon size={20} />
                                                </div>
                                                <div>
                                                    <h4 className={`font-bold text-lg ${tier.theme.text}`}>{feature.text}</h4>
                                                    <p className={`text-sm ${tier.theme.subtext}`}>{feature.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button onClick={() => openWhatsApp(tier.name)} className={`w-full py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group/btn hover:scale-[1.01] active:scale-[0.99] ${tier.theme.btn}`}>
                                        Enquire {tier.name} <ArrowRight size={22} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
            </div>

            {/* Mobile View - Vertical Stack */}
            <div className="flex flex-col gap-8 lg:hidden">
                {PRODUCT_TIERS.map((tier) => (
                    <motion.div
                        key={tier.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`border-2 rounded-[2.5rem] p-8 relative overflow-hidden shadow-lg ${tier.theme.border} ${tier.theme.bg} ${tier.theme.shadow}`}
                    >
                        <div className={`absolute top-0 right-0 w-[300px] h-[300px] blur-[80px] rounded-full pointer-events-none opacity-50 ${tier.theme.glow}`}></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <span className={`inline-block py-1.5 px-4 rounded-xl text-[10px] font-bold uppercase tracking-widest border ${tier.theme.badgeBg}`}>
                                    {tier.badge}
                                </span>
                                <div className={`p-2.5 rounded-full ${tier.theme.iconBg}`}>
                                    <tier.icon size={20} />
                                </div>
                            </div>

                            <h3 className={`font-display text-4xl font-bold mb-2 ${tier.theme.text}`}>{tier.name}</h3>
                            <p className={`text-sm mb-6 ${tier.theme.subtext}`}>{tier.description}</p>

                            <div className="mb-8 pb-8 border-b border-gray-100 dark:border-white/5">
                                <div className="flex items-baseline gap-2">
                                    <span className={`text-5xl font-bold tracking-tighter ${tier.theme.text}`}>{tier.price}</span>
                                    <span className={`font-medium text-xs ${tier.theme.subtext}`}>/ Kit</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                {tier.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="bg-gray-50 dark:bg-white/5 p-2 rounded-lg text-gray-900 dark:text-white flex-shrink-0 mt-1 border border-gray-100 dark:border-white/5">
                                            <feature.icon size={16} />
                                        </div>
                                        <div>
                                            <h4 className={`font-bold text-sm ${tier.theme.text}`}>{feature.text}</h4>
                                            <p className={`text-xs ${tier.theme.subtext}`}>{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button onClick={() => openWhatsApp(tier.name)} className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${tier.theme.btn}`}>
                                Enquire Now <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const Products: React.FC = () => {
    const navigate = useNavigate();

    const openWhatsApp = (plan: string) => {
        const message = `I am interested in the ${plan} plan.`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="bg-white dark:bg-black min-h-screen py-24 transition-colors duration-300 overflow-hidden relative">
            <SEO
                title="EV Conversion Kits Price & Products | Scooter & Bike Retrofitting"
                description="Check Oxonix's affordable EV conversion kit prices for Scooty and Motorbikes. Starting from ₹35,000. Get the best electric vehicle conversion cost in India."
                keywords={["electric car conversion cost India", "EV conversion kit price", "scooter electric kit price", "electric bike kit India", "affordable EV retrofitting"]}
                canonicalUrl="https://oxonix.in/products"
            />
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* 1. SELECT YOUR POWER (New Top Section) */}
                <div className="mb-40">
                    <div className="text-center mb-20 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="inline-block py-1.5 px-4 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 text-sm font-bold uppercase tracking-widest border border-gray-200 dark:border-white/10 mb-6 backdrop-blur-md">
                                Intelligent Conversion Kits
                            </span>
                            <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight leading-tight">
                                Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500">Power</span>
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                                Choose the performance tier that matches your lifestyle. From daily commuting to high-speed thrills.
                            </p>
                        </motion.div>
                    </div>

                    {/* NEW CARD DESIGN - RESPONSIVE (Tabs on Desktop, Stack on Mobile) */}
                    <SharedProductSection />
                </div>
            </div>

            {/* 2. VEHICLE PRICING (Moved Below) */}
            <div className="mb-40 space-y-32">
                <div className="text-center mb-24">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Complete <span className="underline decoration-primary/30 decoration-4 underline-offset-8">Retrofitting</span> Cost
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-xl font-light">Transparent pricing tailored to your vehicle type.</p>
                </div>

                {/* SCOOTY SECTION */}
                <div className="relative group max-w-7xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent blur-3xl opacity-50 rounded-[3rem] -z-10"></div>
                    <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-50/50 dark:bg-[#0a0a0a]/80 backdrop-blur-sm rounded-[3rem] p-8 md:p-10 lg:p-16 border border-gray-200 dark:border-white/10 hover:border-blue-500/20 transition-colors duration-500">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 md:order-1 relative z-10"
                        >
                            <div className="mb-10">
                                <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2 block">City Commuter</span>
                                <h3 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-none">OXONIX SCOOTY</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed font-light">
                                    Transform your daily commuter into a silent, efficient electric machine. Experience smooth acceleration and zero vibrations.
                                </p>
                            </div>

                            <div className="flex flex-col items-start gap-8">
                                <div className="flex flex-col">
                                    <span className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-1">Starting From</span>
                                    <div className="flex items-baseline gap-4">
                                        <span className="text-6xl font-bold text-gray-900 dark:text-white tracking-tight">₹45,000</span>
                                        {/* Tag removed by user request */}
                                    </div>
                                </div>
                                <button onClick={() => openWhatsApp("Oxonix Scooty")} className="px-10 py-5 rounded-full font-bold text-lg bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                    Enquire Scooty Plan
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
                            <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none"></div>
                            <img src="/products/oxonix_scooty.png" alt="Scooty" className="relative z-10 w-full max-w-[480px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out" />
                        </motion.div>
                    </div>
                </div>

                {/* BIKE SECTION */}
                <div className="relative group max-w-7xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-l from-red-500/5 to-transparent blur-3xl opacity-50 rounded-[3rem] -z-10"></div>
                    <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-50/50 dark:bg-[#0a0a0a]/80 backdrop-blur-sm rounded-[3rem] p-8 md:p-10 lg:p-16 border border-gray-200 dark:border-white/10 hover:border-red-500/20 transition-colors duration-500">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: -50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-red-500/10 blur-[60px] rounded-full pointer-events-none"></div>
                            <img src="/products/oxonix_motorbike.png" alt="Motorbike" className="relative z-10 w-full max-w-[550px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 md:text-right flex flex-col items-start md:items-end"
                        >
                            <div className="mb-10">
                                <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2 block">Performance Beast</span>
                                <h3 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-none">OXONIX MOTORBIKE</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed font-light md:ml-auto">
                                    Upgrade your bike for superior range and torque. Keep the classic look, but drive the future.
                                </p>
                            </div>

                            <div className="flex flex-col items-start md:items-end gap-8">
                                <div className="flex flex-col md:items-end">
                                    <span className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-1">Starting From</span>
                                    <div className="flex items-baseline gap-4 md:flex-row-reverse">
                                        <span className="text-6xl font-bold text-gray-900 dark:text-white tracking-tight">₹50,000</span>
                                        {/* Tag removed by user request */}
                                    </div>
                                </div>
                                <button onClick={() => openWhatsApp("Oxonix Motorbike")} className="px-10 py-5 rounded-full font-bold text-lg bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-red-600 dark:hover:bg-red-500 hover:text-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                    Enquire Bike Plan
                                </button>
                            </div>
                        </motion.div>
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
                        className="inline-block mb-6 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-widest uppercase text-sm backdrop-blur-xl"
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

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative z-10 px-2 md:px-4 max-w-7xl mx-auto">
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

                            <div className="bg-white/50 dark:bg-[#111]/90 border border-gray-200 dark:border-white/10 rounded-[2rem] p-4 md:p-6 h-full backdrop-blur-md hover:border-primary/50 dark:hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col group-hover:-translate-y-2">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="h-8 bg-gray-100 dark:bg-white/5 rounded-lg px-2 py-1 flex items-center justify-center">
                                        <img src={bike.brand} alt="Brand" className="h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-white/40 border border-gray-200 dark:border-white/10 px-2 py-1 rounded-full group-hover:text-gray-900 dark:group-hover:text-white group-hover:border-gray-400 dark:group-hover:border-white/30 transition-all">
                                        {bike.type}
                                    </div>
                                </div>

                                <div className="aspect-[4/3] mb-6 flex items-center justify-center bg-gray-100 dark:bg-black/40 rounded-xl p-4 group-hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden">
                                    <img
                                        src={bike.image}
                                        alt={bike.model}
                                        className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-screen relative z-10 drop-shadow-lg"
                                    />
                                </div>

                                <div className="mt-auto">
                                    <h3 className="font-display text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-2">{bike.model}</h3>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-white/10">
                                        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                                            Compatible
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                                            <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
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