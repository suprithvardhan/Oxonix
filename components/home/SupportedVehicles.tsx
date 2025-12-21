import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SupportedVehicles = () => {
    const navigate = useNavigate();
    return (
        <section className="min-h-screen flex items-center py-12 md:py-24 bg-gray-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-300">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 blur-[100px] md:blur-[150px] rounded-full pointer-events-none opacity-50 dark:opacity-100"></div>
            <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none opacity-50 dark:opacity-100"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0 }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm dark:shadow-none"
                    >
                        <span className="text-primary text-xs md:text-sm font-bold tracking-widest uppercase">Compatibility</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white"
                    >
                        Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Transformation</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
                    >
                        Our advanced retrofitting kits are precision-engineered for India's most iconic two-wheelers.
                        Experience the future without changing your ride.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                    {[
                        { brand: "/Brands_supported/tvs_logo.webp", brandW: 400, brandH: 400, model: "Jupiter", image: "/Brands_supported/jupiter_scooty.webp", imgW: 614, imgH: 406, type: "Scooter", color: "from-blue-500/20 to-purple-500/20" },
                        { brand: "/Brands_supported/hero_logo.webp", brandW: 3000, brandH: 2000, model: "Splendor+", image: "/Brands_supported/splendor_bike.webp", imgW: 494, imgH: 505, type: "Motorcycle", color: "from-red-500/20 to-orange-500/20" },
                        { brand: "/Brands_supported/hero_logo.webp", brandW: 3000, brandH: 2000, model: "Passion Pro", image: "/Brands_supported/passion_pro_bike.webp", imgW: 534, imgH: 467, type: "Motorcycle", color: "from-red-500/20 to-pink-500/20" },
                        { brand: "/Brands_supported/tvs_logo.webp", brandW: 400, brandH: 400, model: "XL 100", image: "/Brands_supported/xl100_bike.webp", imgW: 624, imgH: 400, type: "Moped", color: "from-blue-500/20 to-cyan-500/20" },
                    ].map((bike, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/80 dark:from-white/5 to-white/40 dark:to-transparent rounded-3xl -z-10 transition-all duration-500 group-hover:scale-105 shadow-sm group-hover:shadow-xl dark:shadow-none"></div>
                            <div className={`absolute inset-0 bg-gradient-to-br ${bike.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-20`}></div>

                            <div className="bg-white/60 dark:bg-[#111] border border-gray-200/60 dark:border-white/10 rounded-[1.5rem] md:rounded-3xl p-3 md:p-6 h-full backdrop-blur-md hover:border-primary/50 dark:hover:border-white/20 transition-colors overflow-hidden shadow-sm hover:shadow-lg dark:shadow-none">
                                <div className="flex justify-between items-start mb-3 md:mb-8">
                                    <div className="h-8 md:h-10 bg-gray-100 dark:bg-white/5 rounded px-2 py-1 flex items-center justify-center">
                                        <img src={bike.brand} alt={bike.model} className="h-full w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity" width={bike.brandW} height={bike.brandH} />
                                    </div>
                                    <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-white/40 border border-gray-200 dark:border-white/10 px-2 py-1 rounded-full group-hover:text-gray-900 dark:group-hover:text-white group-hover:border-gray-400 dark:group-hover:border-white/30 transition-all">
                                        {bike.type}
                                    </div>
                                </div>

                                <div className="relative aspect-[4/3] mb-3 md:mb-8 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-black/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img
                                        src={bike.image}
                                        alt={bike.model}
                                        className="w-full h-full object-contain relative z-10 transform group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-500 ease-out mix-blend-multiply dark:mix-blend-screen"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-display text-sm md:text-2xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2 group-hover:text-primary transition-colors">{bike.model}</h3>
                                    <div className="flex items-center gap-1 md:gap-2 text-[10px] md:text-sm text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
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
                        className="inline-flex items-center gap-2 text-primary font-bold hover:text-black transition-colors border border-primary/30 hover:border-primary px-8 py-3 rounded-full hover:bg-primary"
                    >
                        View All Supported Models <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SupportedVehicles;
