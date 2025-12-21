import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Battery, Gauge } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductsTeaser = () => {
    const navigate = useNavigate();
    return (
        <section className="py-24 bg-white dark:bg-surface overflow-hidden transition-colors duration-300 relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">Solutions</span></h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl">Engineered conversion kits for every terrain and rider. Discover the perfect power for your journey.</p>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        onClick={() => navigate('/products')}
                        className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-white/10 hover:border-primary/50 text-gray-900 dark:text-white font-bold transition-all hover:bg-primary/5"
                    >
                        View Full Catalog <ArrowRight size={18} className="text-primary" />
                    </motion.button>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                    {/* RIDE + Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0, duration: 0.6 }}
                        viewport={{ once: true, amount: 0 }}
                        onClick={() => navigate('/products')}
                        className="group cursor-pointer h-[350px] md:h-[400px] lg:h-[500px] relative rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-[#0c0c0c]"
                    >
                        {/* Image Background */}
                        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10 opacity-90 transition-opacity duration-500 group-hover:opacity-80"></div>
                            <img
                                src="/products/oxonix_scooty.webp"
                                width="287"
                                height="322"
                                alt="Ride +"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80"
                            />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-8 md:p-8 lg:p-10 z-20 flex flex-col justify-end h-full">
                            <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                                <div className="inline-block px-3 py-1 mb-4 rounded-lg bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
                                    Standard Edition
                                </div>

                                <h3 className="font-display text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">RIDE +</h3>
                                <p className="text-gray-300 text-base line-clamp-2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto font-light">
                                    The perfect balance for your daily commute. Optimized for city traffic and efficiency.
                                </p>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 group-hover:bg-white/10 transition-colors">
                                        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1"><Battery size={10} /> Battery</p>
                                        <p className="font-display font-bold text-white text-xl">1.8 kW</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 group-hover:bg-white/10 transition-colors">
                                        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1"><Gauge size={10} /> Range</p>
                                        <p className="font-display font-bold text-white text-xl">60+ km</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-white font-bold text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                                    <span>View Configuration</span>
                                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIDE 2 Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        viewport={{ once: true, amount: 0 }}
                        onClick={() => navigate('/products')}
                        className="group cursor-pointer h-[350px] md:h-[400px] lg:h-[500px] relative rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-[#050505]"
                    >
                        {/* Image Background */}
                        <div className="absolute inset-0 bg-black overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-90 transition-opacity duration-500 group-hover:opacity-80"></div>
                            <img
                                src="/products/oxonix_motorbike.webp"
                                width="434"
                                height="322"
                                alt="Ride 2"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80"
                            />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-8 md:p-8 lg:p-10 z-20 flex flex-col justify-end h-full">
                            <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                                <div className="inline-block px-3 py-1 mb-4 rounded-lg bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                                    Pro Performance
                                </div>

                                <h3 className="font-display text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">RIDE ²</h3>
                                <p className="text-gray-300 text-base line-clamp-2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto font-light">
                                    Unleash maximum power and extended range for the ultimate electric experience.
                                </p>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 group-hover:bg-emerald-500/20 transition-colors">
                                        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1"><Battery size={10} /> Battery</p>
                                        <p className="font-display font-bold text-white text-xl">2.4 kW</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 group-hover:bg-emerald-500/20 transition-colors">
                                        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1"><Gauge size={10} /> Range</p>
                                        <p className="font-display font-bold text-white text-xl">90+ km</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-white font-bold text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                                    <span>View Configuration</span>
                                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button onClick={() => navigate('/products')} className="px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-bold flex items-center gap-2 mx-auto shadow-lg hover:transform hover:-translate-y-1 transition-all">
                        View All Products <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductsTeaser;
