import React from 'react';
import { ArrowRight } from 'lucide-react';

const VisitHQ = () => {
    return (
        <section className="py-20 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
                <img
                    src="/city_bg.webp"
                    alt="City Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                            <span className="text-primary text-sm font-bold tracking-widest uppercase">Visit Us</span>
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                            Experience Innovation <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">At Our HQ</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
                            Come see where the revolution happens. Meet our engineers, see the retrofitting process, and test drive our electric beasts.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Oxonix Mobility LLP</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        H NO. 2-4-227, MADULAGADDA THANDA,<br />
                                        Vikarabad, Hyderabad,<br />
                                        Telangana, India - 501101
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Working Hours</h4>
                                    <p className="text-gray-400">Mon - Sat: 9:00 AM - 7:00 PM</p>
                                    <p className="text-gray-500 text-sm">Sunday: By Appointment</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">

                            <iframe
                                src="https://maps.google.com/maps?q=Oxonix+India+Private+Limited+01&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                className="transition-all duration-700"
                            ></iframe>

                            <div className="absolute bottom-6 right-6 z-20">
                                <a
                                    href="https://www.google.com/maps/dir//Oxonix+India+Private+Limited+01"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-white text-black font-bold px-6 py-3 rounded-full shadow-lg hover:bg-primary transition-colors flex items-center gap-2"
                                >
                                    Get Directions <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisitHQ;
