import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Cpu, Battery, Zap, ShieldAlert, Thermometer, Lock, Clock, RefreshCw, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTheme } from '../components/ThemeContext';

const data = [
  { name: 'Year 1', Petrol: 120000, Electric: 25000 },
  { name: 'Year 2', Petrol: 130000, Electric: 26000 },
  { name: 'Year 3', Petrol: 140000, Electric: 27000 },
  { name: 'Year 4', Petrol: 150000, Electric: 28000 },
  { name: 'Year 5', Petrol: 160000, Electric: 29000 },
];

const Technology: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState<'full' | 'dual'>('full');

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen pt-12 transition-colors duration-300">
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white"
          >
            Engineering <span className="text-primary">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Our retrofit kits are not off-the-shelf parts. They are integrated systems designed for thermal stability, efficiency, and longevity.
          </motion.p>
        </div>

        {/* Retrofit Solutions Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Choose Your Transformation</h2>
            <p className="text-gray-600 dark:text-gray-400">Two paths to electric freedom. One uncompromising standard of quality.</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-white/5 p-1 rounded-full border border-gray-200 dark:border-white/10 inline-flex relative">
              <div
                className={`absolute top-1 bottom-1 rounded-full bg-primary transition-all duration-300 ease-out ${activeTab === 'full' ? 'left-1 w-[140px]' : 'left-[148px] w-[140px]'}`}
              ></div>
              <button
                onClick={() => setActiveTab('full')}
                className={`relative z-10 px-8 py-3 rounded-full font-bold transition-colors duration-300 ${activeTab === 'full' ? 'text-black' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
              >
                Full Electric
              </button>
              <button
                onClick={() => setActiveTab('dual')}
                className={`relative z-10 px-8 py-3 rounded-full font-bold transition-colors duration-300 ${activeTab === 'dual' ? 'text-black' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
              >
                Dual Power
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            >
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 text-primary mb-4 font-bold uppercase tracking-wider text-sm">
                  {activeTab === 'full' ? <Zap size={18} /> : <RefreshCw size={18} />}
                  {activeTab === 'full' ? 'Pure EV Experience' : 'Hybrid Flexibility'}
                </div>
                <h3 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {activeTab === 'full' ? 'Full Electric Conversion' : 'Dual-Mode Conversion'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                  {activeTab === 'full'
                    ? "Complete transformation of your vehicle. We strip the ICE components to create a lightweight, high-efficiency pure electric machine."
                    : "The best of both worlds. Keep your engine for backup while enjoying the economy of electric drive for your daily commute."}
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    activeTab === 'full' ? "Remove Engine, Fuel Tank, Exhaust & Drivetrain" : "Keep ICE components intact",
                    activeTab === 'full' ? "Install Motor + Battery Pack + Controller" : "Add Electric Hub Motor + Battery",
                    activeTab === 'full' ? "Modify Wiring & Electronics" : "Switchable Drive Modes (Petrol/Electric)",
                    "ARAI Approved Kit",
                    "RTO Re-registration as EV"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl"></div>
                <div className="relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-2 shadow-2xl overflow-hidden">
                  <img
                    src={activeTab === 'full'
                      ? "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80"
                      : "https://images.unsplash.com/photo-1623079400394-f07955b7b09d?auto=format&fit=crop&w=800&q=80"}
                    alt={activeTab === 'full' ? "Full Electric" : "Dual Power"}
                    className="rounded-2xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold">Efficiency</span>
                      <span className="text-primary font-bold">{activeTab === 'full' ? '100%' : '85%'}</span>
                    </div>
                    <div className="w-full bg-white/20 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className={`h-full bg-primary rounded-full ${activeTab === 'full' ? 'w-full' : 'w-[85%]'}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3D Component Breakdown Simulation */}
        <div className="flex flex-col gap-16 md:gap-24 mb-16 md:mb-24">
          {[
            {
              icon: Battery,
              title: "Battery Systems",
              subtitle: "LFP / NMC Chemistry",
              desc: "High-density LFP/NMC cells with BMS featuring 15+ protections and IP67 waterproof rating.",
              image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80"
            },
            {
              icon: Cpu,
              title: "Smart IoT – SmartIO™",
              subtitle: "Connected Intelligence",
              desc: "Real-time Live GPS tracking, detailed ride analytics, and predictive maintenance alerts.",
              image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80"
            },
            {
              icon: Zap,
              title: "Lightweight Engineering",
              subtitle: "Precision Fabrication",
              desc: "Advanced aluminium frames and CNC fabrication for optimal strength-to-weight ratio.",
              image: "https://images.unsplash.com/photo-1531297461136-82lw9f3e7991?auto=format&fit=crop&w=800&q=80"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 aspect-video group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <item.icon size={32} />
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-primary font-mono mb-6 text-lg">{item.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safety Layers */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Safety Architecture</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Thermometer, title: "Thermal Tests", desc: "Rigorous thermal testing to ensure stability under extreme conditions." },
              { icon: Lock, title: "Vibration Tests", desc: "Structural integrity verified through extensive vibration testing." },
              { icon: ShieldAlert, title: "Circuit Protection", desc: "Comprehensive overcurrent and short-circuit protection mechanisms." }
            ].map((safe, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10"
              >
                <div className="bg-primary/20 p-2 rounded-lg text-primary">
                  <safe.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{safe.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{safe.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Conversion Process */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Step-by-Step Conversion</h2>
            <p className="text-gray-600 dark:text-gray-400">A systematic process ensuring safety and compliance.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-white/10 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Strip & Prep",
                  desc: "For Full-Electric, we remove the engine, fuel tank, and exhaust. For Dual-Mode, we prepare the wheel hub integration.",
                  icon: RefreshCw
                },
                {
                  step: "02",
                  title: "Core Installation",
                  desc: "Installation of the high-torque Motor, Battery Pack, and Intelligent Controller unit.",
                  icon: Zap
                },
                {
                  step: "03",
                  title: "System Integration",
                  desc: "Wiring harness modification, dashboard integration, and recharge system setup.",
                  icon: Cpu
                },
                {
                  step: "04",
                  title: "Certification",
                  desc: "Final testing against ARAI standards and RTO re-registration as an Electric Vehicle.",
                  icon: FileCheck
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`w-full md:w-1/2 ${idx % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="hidden md:block">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-black border-4 border-primary shadow-xl">
                    <item.icon className="text-primary" size={24} />
                    <div className="absolute -top-10 text-4xl font-bold text-gray-200 dark:text-white/5 select-none">{item.step}</div>
                  </div>

                  <div className={`w-full md:w-1/2 ${idx % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="md:hidden text-center">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                    {/* Placeholder for visual or extra info if needed */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-surface rounded-3xl p-6 md:p-12 border border-gray-200 dark:border-white/5 shadow-lg"
        >
          <div className="md:flex justify-between items-center mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold mb-2 text-gray-900 dark:text-white">Running Cost Comparison</h2>
              <p className="text-gray-600 dark:text-gray-400">Cumulative operational cost (Fuel/Electricity + Maintenance) in INR</p>
            </div>
          </div>

          <div className="h-[300px] md:h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#e5e7eb"} />
                <XAxis dataKey="name" stroke={isDark ? "#888" : "#4b5563"} />
                <YAxis stroke={isDark ? "#888" : "#4b5563"} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? '#000' : '#fff',
                    borderColor: isDark ? '#333' : '#e5e7eb',
                    color: isDark ? '#fff' : '#000'
                  }}
                  itemStyle={{ color: isDark ? '#fff' : '#000' }}
                />
                <Legend wrapperStyle={{ color: isDark ? '#fff' : '#000' }} />
                <Bar dataKey="Petrol" fill="#ef4444" name="Petrol Vehicle Cost" />
                <Bar dataKey="Electric" fill="#5CFF6F" name="Oxonix Retrofit Cost" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 text-center bg-primary/10 border border-primary/20 p-4 rounded-lg">
            <p className="text-primary font-bold">Insight: You recover the cost of retrofitting within 18-24 months of usage.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;