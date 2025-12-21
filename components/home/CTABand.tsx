import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MSG } from '../../constants';

const CTABand = ({ openWhatsApp }: { openWhatsApp: () => void }) => {
    return (
        <section className="py-20 bg-primary text-black text-center">
            <div className="container mx-auto px-6">
                <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto">Ready to Electrify Your Ride?</h2>
                <p className="text-black/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
                    Be a satisfied customer by saving money and the planet. Get a free quote for your vehicle today.
                </p>
                <button
                    onClick={openWhatsApp}
                    className="bg-black text-white font-bold px-10 py-5 rounded-full text-lg hover:scale-105 transition-transform shadow-xl"
                >
                    Talk to Oxonix Team
                </button>
            </div>
        </section>
    );
};

export default CTABand;
