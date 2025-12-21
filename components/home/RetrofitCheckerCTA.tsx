import React from 'react';
import { Scan, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RetrofitCheckerCTA = () => {
    const navigate = useNavigate();
    return (
        <section className="py-12 bg-white dark:bg-surface border-y border-gray-100 dark:border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 md:p-12">
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 text-green-700 dark:text-primary font-bold mb-4 bg-green-100 dark:bg-primary/10 px-4 py-1.5 rounded-full text-sm">
                            <Scan size={18} /> Instant Compatibility Check
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Is Your Vehicle <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">Retrofit Ready?</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
                            Find out if your bike or scooter can be converted to electric in seconds. Get an instant quote and timeline.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => navigate('/retrofitchecker')}
                            className="bg-primary hover:bg-green-400 text-black font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center gap-3 transform hover:-translate-y-1"
                        >
                            Check Eligibility Now <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RetrofitCheckerCTA;
