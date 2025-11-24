import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen py-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
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
            Everything you need to know about converting your vehicle to electric.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <div 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`cursor-pointer bg-white dark:bg-surface border rounded-lg overflow-hidden transition-all ${activeIndex === index ? 'border-primary shadow-lg shadow-primary/10' : 'border-gray-200 dark:border-white/10'}`}
              >
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">{faq.category}</span>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{faq.question}</h3>
                  </div>
                  {activeIndex === index ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
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

        <div className="mt-12 text-center">
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