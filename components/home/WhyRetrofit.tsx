import React from 'react';
import BeforeAfterSlider from '../BeforeAfterSlider';

const WhyRetrofit = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-black transition-colors duration-300">
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
    );
};

export default WhyRetrofit;
