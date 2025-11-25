import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Award, Shield, Globe, CheckCircle2 } from 'lucide-react';

const Certifications: React.FC = () => {
  const viewportConfig = { once: true, margin: "-100px 0px -50px 0px", amount: 0.2 };

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen py-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Certified & <span className="text-primary">Compliant</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We don't compromise on safety. All Oxonix kits are rigorously tested and approved by India's top automotive agencies.
          </motion.p>
        </div>



        {/* Certificate Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="mb-20"
        >
          <div className="bg-white dark:bg-[#111] rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden relative transition-colors duration-300">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left Content */}
              <div>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#4ade80] bg-transparent text-[#4ade80] text-sm font-medium tracking-wide">
                    <Award size={18} strokeWidth={2} /> DPIIT RECOGNIZED
                  </div>
                  <div className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#60a5fa] bg-transparent text-[#60a5fa] text-sm font-medium tracking-wide">
                    <Globe size={18} strokeWidth={2} /> #STARTUPINDIA
                  </div>
                </div>

                <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-6">Recognition & Credibility</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                  Oxonix Private Limited is officially certified by the Government of India under the Startup India initiative. This recognition is a testament to our commitment to innovation in the EV sector.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    { label: "Certificate No", value: "DIPP226380" },
                    { label: "Entity", value: "Oxonix Private Limited" },
                    { label: "Sector", value: "Automotive & Electric Vehicles" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="text-green-600 dark:text-green-500 w-5 h-5 flex-shrink-0" />
                      <span className="font-bold text-gray-900 dark:text-white">{item.label}:</span>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 flex items-center gap-6">
                  <img src="/make-in-india-new.png" alt="Make in India" className="h-16 object-contain opacity-90" />
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic border-l border-gray-300 dark:border-white/10 pl-6 leading-relaxed">
                    "Proudly manufacturing in India, for India. Supporting the vision of a self-reliant nation."
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="bg-white p-2 rounded-xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-gray-100 dark:border-transparent">
                  <img
                    src="/certificate.png"
                    alt="DPIIT Certificate"
                    className="w-full rounded-lg border border-gray-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">Official Registrations</h2>
            <p className="text-gray-600 dark:text-gray-400">Recognized by leading government bodies.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ministry of Corporate Affairs",
                logo: "/minisrtry-of-corporaate-affairs.png",
                desc: "Registered Entity",
                bg: "bg-white"
              },
              {
                name: "Startup India",
                logo: "/startup-india-logo.png",
                desc: "DPIIT Recognized",
                bg: "bg-white"
              },
              {
                name: "Make in India",
                logo: "/make-in-india-new.png",
                desc: "Indigenous Manufacturing",
                bg: "bg-white"
              }
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-32 h-32 mb-6 rounded-full ${cert.bg} flex items-center justify-center p-4 shadow-inner`}>
                  <img src={cert.logo} alt={cert.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{cert.name}</h3>
                <p className="text-sm text-primary font-medium">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default Certifications;