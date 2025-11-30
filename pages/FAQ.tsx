import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "Can I convert my old petrol scooter into an electric scooter?",
    answer: "Yes. Oxonix's retrofit kit supports Honda Activa, TVS Jupiter, Suzuki Access, and similar scooters."
  },
  {
    question: "How long does the retrofit process take?",
    answer: "Approximately 3–4 hours depending on condition."
  },
  {
    question: "Do I need special documents for conversion?",
    answer: "Non-RTO kits require none. RTO kits require RC, insurance, and ID."
  },
  {
    question: "What range can I expect?",
    answer: "60 km real-world range; Hybrid kits: 70+ km combined."
  },
  {
    question: "What is the top speed?",
    answer: "Scooty/Retrofit: 40 km/h; RTO kits: 55+ km/h."
  },
  {
    question: "How safe are the batteries?",
    answer: "LFP/NMC cells with BMS protections, thermal cutoff, short-circuit safety, IP67 waterproofing."
  },
  {
    question: "Battery lifespan?",
    answer: "1200–1500 cycles (~3–4 years)."
  },
  {
    question: "Can I charge at home?",
    answer: "Yes, using any 5A domestic socket."
  },
  {
    question: "Is it safe in rain?",
    answer: "Yes, components are IP67 waterproof-rated."
  },
  {
    question: "Running cost?",
    answer: "Around 0.20 per km."
  },
  {
    question: "Will the scooter look different after conversion?",
    answer: "No structural cuts; the exterior remains same."
  },
  {
    question: "Does retrofit reduce durability?",
    answer: "No. EV systems reduce vibration and wear."
  },
  {
    question: "Warranty?",
    answer: "Battery: 1 year; Motor/Controller: 1 year."
  },
  {
    question: "Maintenance needed?",
    answer: "Minimal—tyres, brakes, battery health checks."
  },
  {
    question: "Is the retrofit reversible?",
    answer: "Yes, but most customers prefer EV mode."
  },
  {
    question: "Do you offer test rides?",
    answer: "Yes, bookable via website."
  },
  {
    question: "Are EVs suitable for rural areas?",
    answer: "Yes. Hybrid kit is ideal for long rural rides."
  },
  {
    question: "Charging time?",
    answer: "3–4 hours standard."
  },
  {
    question: "After-sales support?",
    answer: "Yes—service, spares, and field support."
  },
  {
    question: "Bulk purchase or dealership?",
    answer: "Yes, Oxonix supports fleet and dealership partnerships."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen py-12 md:py-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Everything you need to know about converting your vehicle to electric with Oxonix.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="mb-4"
            >
              <div
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`cursor-pointer bg-white dark:bg-surface border rounded-lg overflow-hidden transition-all ${activeIndex === index ? 'border-primary shadow-lg shadow-primary/10' : 'border-gray-200 dark:border-white/10'}`}
              >
                <div className="p-6 flex justify-between items-center">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white pr-8">{faq.question}</h3>
                  {activeIndex === index ? <ChevronUp className="text-primary flex-shrink-0" /> : <ChevronDown className="text-gray-400 flex-shrink-0" />}
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <button
            onClick={() => window.open('https://wa.me/919876543210', '_blank')}
            className="text-primary font-bold hover:underline flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} /> Chat with our expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;