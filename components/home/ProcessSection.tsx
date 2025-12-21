import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap, ShieldCheck, Truck } from 'lucide-react';

const ProcessSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white dark:bg-surface transition-colors duration-300">
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
                            viewport={{ once: true, amount: 0 }}
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
    );
};

export default ProcessSection;
