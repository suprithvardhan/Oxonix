import React from 'react';
import { motion } from 'framer-motion';
import { CASE_STUDIES } from '../constants';
import { Quote } from 'lucide-react';

const CaseStudies: React.FC = () => {
  // Using a margin that accounts for the fixed navbar (-100px from top) to prevent animations from triggering while covered.
  const viewportConfig = { once: true, margin: "-100px 0px -50px 0px", amount: 0.2 };

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen py-12 md:py-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Success <span className="text-primary">Stories</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Real people, real savings. See how Oxonix is transforming daily commutes and fleet operations.
          </motion.p>
        </div>

        <div className="space-y-20">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
                <img src={study.afterImage} alt={study.title} className="relative rounded-2xl w-full shadow-2xl" />
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur px-4 py-2 rounded text-primary text-sm font-bold border border-primary/20">
                  Saved {study.savingsPerMonth}/mo
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="inline-block bg-gray-200 dark:bg-white/10 px-3 py-1 rounded-full text-xs font-mono text-gray-800 dark:text-gray-300 mb-4 border border-gray-300 dark:border-transparent">
                  {study.vehicleType}
                </div>
                <h2 className="font-display text-3xl font-bold mb-2 text-gray-900 dark:text-white">{study.title}</h2>
                <p className="text-green-600 dark:text-primary font-medium mb-6">Owner: {study.owner}</p>

                <div className="relative pl-8 border-l-2 border-gray-300 dark:border-white/20 italic text-gray-700 dark:text-gray-300 text-lg mb-8">
                  <Quote className="absolute -top-2 -left-3 bg-gray-50 dark:bg-black text-gray-400 w-6 h-6 p-1" />
                  "{study.quote}"
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-surface p-4 rounded-lg border border-gray-200 dark:border-white/5 shadow-sm">
                    <p className="text-xs text-gray-500 uppercase">Monthly Savings</p>
                    <p className="font-bold text-xl text-gray-900 dark:text-white">{study.savingsPerMonth}</p>
                  </div>
                  <div className="bg-white dark:bg-surface p-4 rounded-lg border border-gray-200 dark:border-white/5 shadow-sm">
                    <p className="text-xs text-gray-500 uppercase">Performance</p>
                    <p className="font-bold text-xl text-gray-900 dark:text-white">Better than stock</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;