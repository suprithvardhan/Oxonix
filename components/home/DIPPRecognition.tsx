import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const DIPPRecognition = () => {
    const navigate = useNavigate();
    return (
        <section className="min-h-[50vh] flex items-center bg-white dark:bg-black text-gray-900 dark:text-white py-12 md:py-20 border-y border-gray-200 dark:border-white/10 transition-colors duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gray-50/50 dark:bg-transparent pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center gap-4 mb-6">
                            <img src="/make-in-india-new.webp" alt="Make in India" className="h-10 md:h-12 w-auto object-contain opacity-90" width="840" height="859" />
                            <span className="text-green-600 dark:text-green-500 font-bold tracking-widest text-xs md:text-sm uppercase border-l border-gray-300 dark:border-white/20 pl-4">Government Recognized</span>
                        </div>

                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">DIPP Recognized Startup</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
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
                            viewport={{ once: true, amount: 0 }}
                            className="relative z-10 bg-white dark:bg-[#111] p-2 rounded-xl shadow-2xl border border-gray-200 dark:border-white/10"
                        >
                            <img src="/certificate.webp" alt="DPIIT Certificate" className="w-full rounded-lg" width="1024" height="725" />

                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-[#1e293b] p-4 rounded-lg shadow-xl border border-gray-200 dark:border-white/10 flex items-center gap-3">
                                <img src="/startup-india-logo.webp" alt="Startup India" className="h-8 w-auto bg-gray-50 dark:bg-white rounded p-1" width="768" height="201" />
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
    );
};

export default DIPPRecognition;
