import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Cpu, Battery, Zap, ShieldAlert, Thermometer, Lock, Clock } from 'lucide-react';
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

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen pt-12 transition-colors duration-300">
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white"
          >
            Engineering <span className="text-primary">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Our retrofit kits are not off-the-shelf parts. They are integrated systems designed for thermal stability, efficiency, and longevity.
          </motion.p>
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
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
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
                viewport={{ once: true }}
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

        {/* Installation Timeline */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Installation Timeline</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { time: "Day 0", action: "Vehicle Drop-off" },
              { time: "Day 1", action: "Engine Removal" },
              { time: "Day 2", action: "Kit Integration" },
              { time: "Day 3-5", action: "Testing & RTO" },
            ].map((t, i) => (
              <div key={i} className="bg-gray-100 dark:bg-surface p-6 rounded-lg border border-gray-200 dark:border-white/10">
                <Clock className="mx-auto mb-2 text-primary" size={24} />
                <div className="font-bold text-xl text-gray-900 dark:text-white mb-1">{t.time}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t.action}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-surface rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/5 shadow-lg"
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