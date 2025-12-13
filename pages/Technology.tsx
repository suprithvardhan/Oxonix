import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Cpu, Battery, Zap, ShieldAlert, Thermometer, Lock, Clock, RefreshCw, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTheme } from '../components/ThemeContext';

const savingsData = [
  { year: 'Year 1', savings: 33000 },
  { year: 'Year 2', savings: 66000 },
  { year: 'Year 3', savings: 99000 },
  { year: 'Year 4', savings: 132000 },
  { year: 'Year 5', savings: 165000 },
];

const maintenanceData = [
  { year: '2021', ICE: 12000, EV: 2000 },
  { year: '2022', ICE: 13000, EV: 2200 },
  { year: '2023', ICE: 15000, EV: 2500 },
  { year: '2024', ICE: 17000, EV: 2800 },
  { year: '2025', ICE: 18000, EV: 3000 },
];

const growthData = [
  { year: '2020', demand: 10 },
  { year: '2021', demand: 18 },
  { year: '2022', demand: 30 },
  { year: '2023', demand: 45 },
  { year: '2024', demand: 70 },
  { year: '2025', demand: 95 },
];

const marketSizeData = [
  { year: '2020', size: 5 },
  { year: '2021', size: 7 },
  { year: '2022', size: 10 },
  { year: '2023', size: 14 },
  { year: '2024', size: 19 },
  { year: '2025', size: 25 },
  { year: '2026', size: 32 },
  { year: '2027', size: 40 },
  { year: '2028', size: 49 },
  { year: '2029', size: 59 },
  { year: '2030', size: 70 },
];

const batteryPriceData = [
  { year: '2018', price: 140 },
  { year: '2019', price: 132 },
  { year: '2020', price: 120 },
  { year: '2021', price: 110 },
  { year: '2022', price: 102 },
  { year: '2023', price: 96 },
  { year: '2024', price: 90 },
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
            <div className="bg-white dark:bg-white/5 p-1 rounded-full border border-gray-200 dark:border-white/10 grid grid-cols-2 relative w-[300px] mx-auto">
              <div
                className={`absolute top-1 bottom-1 rounded-full bg-primary transition-all duration-300 ease-out w-[calc(50%-4px)] ${activeTab === 'full' ? 'left-1' : 'left-1/2'}`}
              ></div>
              <button
                onClick={() => setActiveTab('full')}
                className={`relative z-10 py-3 rounded-full font-bold transition-colors duration-300 text-center ${activeTab === 'full' ? 'text-black' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
              >
                Full Electric
              </button>
              <button
                onClick={() => setActiveTab('dual')}
                className={`relative z-10 py-3 rounded-full font-bold transition-colors duration-300 text-center ${activeTab === 'dual' ? 'text-black' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
              >
                Hybrid Model
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
                  {activeTab === 'full' ? 'Full Electric Conversion' : 'HYBRID Model'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                  {activeTab === 'full'
                    ? "Complete transformation of your vehicle. We strip the ICE components to create a lightweight, high-efficiency pure electric machine. Go Electric with Oxonix — Premium EV Kits from ₹35,000 Onwards."
                    : "The best of both worlds. Keep your engine for backup while enjoying the economy of electric drive for your daily commute."}
                </p>

                {activeTab === 'full' ? (
                  <ul className="space-y-4 mb-8">
                    {[
                      "Remove Engine, Fuel Tank, Exhaust & Drivetrain",
                      "Install Motor + Battery Pack + Controller",
                      "Modify Wiring & Electronics",
                      "ARAI Approved Kit",
                      "RTO Re-registration as EV"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden mb-8">
                    <div className="grid grid-cols-2 bg-primary/10 border-b border-gray-200 dark:border-white/10">
                      <div className="p-3 font-bold text-primary text-sm uppercase tracking-wider">Name</div>
                      <div className="p-3 font-bold text-primary text-sm uppercase tracking-wider border-l border-gray-200 dark:border-white/10">Value</div>
                    </div>
                    {[
                      { name: "PRICE", value: "45K+" },
                      { name: "BATTERY", value: "1.8KW – 2.4KW" },
                      { name: "TOP SPEED", value: "25kmph +" },
                      { name: "RANGE", value: "140km+ (IC + battery)" }
                    ].map((stat, i) => (
                      <div key={i} className="grid grid-cols-2 border-b last:border-0 border-gray-200 dark:border-white/10">
                        <div className="p-3 font-medium text-gray-700 dark:text-gray-300">{stat.name}</div>
                        <div className="p-3 font-bold text-gray-900 dark:text-white border-l border-gray-200 dark:border-white/10">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl"></div>
                <div className="relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-2 shadow-2xl overflow-hidden">
                  <img
                    src={activeTab === 'full'
                      ? "/Full_Electric_Conversion.png"
                      : "/Dual_Conversion.png"}
                    alt={activeTab === 'full' ? "Full Electric" : "Hybrid Model"}
                    className="rounded-2xl w-full h-[400px] object-contain"
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
              icon: Cpu,
              title: "IoT SMART BMS",
              subtitle: "Intelligent Battery Management",
              desc: "OXONIX’S IoT Smart BMS provides real-time monitoring, safety protection, and cloud connectivity. It manages battery health, protects against faults, and offers app-based tracking.",
              specs: [
                "Communication: Bluetooth + WiFi / LoRa",
                "Monitoring: Cell voltage, temperature, SOC, SOH",
                "Protection: OV/UV, short circuit, thermal cutoff",
                "Supported Voltages: 48V / 60V / 72V"
              ],
              image: "/Technology/IotSmartDevice.png"
            },
            {
              icon: Zap,
              title: "CONTROLLER",
              subtitle: "FOC Intelligent Control",
              desc: "Oxonix FOC controllers ensure smooth throttle response, better torque control, and efficient power delivery. They integrate seamlessly with our hub motors and Smart BMS.",
              specs: [
                "Type: FOC Intelligent Controller",
                "Voltage: 48V / 60V / 72V",
                "Rated Current: 20A–40A",
                "Peak Current: Up to 60A",
                "Modes: Eco / Normal / Power"
              ],
              image: "/Technology/Controller.png"
            },
            {
              icon: RefreshCw,
              title: "HUB MOTORS",
              subtitle: "High-Efficiency BLDC",
              desc: "Oxonix hub motors are high-efficiency BLDC motors designed for smooth, reliable performance in EV scooties and retrofitted vehicles. Built with sealed construction and high-grade windings, they provide strong torque, low noise, and excellent durability.",
              specs: [
                "Rated Power: 250W–2000W",
                "Torque: 18–40 Nm",
                "Efficiency: >85%",
                "Wheel Size: 10”, 12”, 17”",
                "Features: Regen braking, weather-sealed"
              ],
              image: "/Technology/HubMotors.png"
            },
            {
              icon: Battery,
              title: "LiFePO₄ BATTERIES",
              subtitle: "Superior Safety & Life",
              desc: "OXONIX LiFePO₄ batteries offer superior safety, long life, and stable performance. Ideal for heavy-duty EV usage, they deliver consistent voltage and high thermal stability suitable for Indian weather.",
              specs: [
                "Chemistry: LiFePO₄",
                "Cycle Life: 3000–8000 cycles",
                "Energy Density: 90–160 Wh/kg",
                "Pack Options: 48V / 60V / 72V",
                "Safety: High thermal stability, low fire risk"
              ],
              image: "/Technology/Battery.png"
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
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 aspect-video group bg-white dark:bg-white/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <item.icon size={32} />
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-primary font-mono mb-6 text-lg">{item.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">{item.desc}</p>

                <div className="bg-gray-100 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Key Specifications</h4>
                  <ul className="space-y-2">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
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

        {/* Data-Driven Insights Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Data-Driven Performance</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We don't just claim performance; we prove it. Explore the data behind the retrofitting revolution.
            </p>
          </div>

          <div className="space-y-20">
            {/* Category 1: The Economic Advantage */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-gray-200 dark:bg-white/10 flex-grow"></div>
                <h3 className="font-display text-2xl font-bold text-primary uppercase tracking-widest">The Economic Advantage</h3>
                <div className="h-px bg-gray-200 dark:bg-white/10 flex-grow"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Graph 1: 5-Year Savings */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="bg-white dark:bg-surface rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-white/5 shadow-lg"
                >
                  <h4 className="font-display text-xl font-bold mb-2 text-gray-900 dark:text-white">Illustrative 5-Year Savings</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Cumulative savings in INR after retrofitting.</p>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={savingsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#e5e7eb"} />
                        <XAxis dataKey="year" stroke={isDark ? "#888" : "#4b5563"} />
                        <YAxis stroke={isDark ? "#888" : "#4b5563"} />
                        <Tooltip contentStyle={{ backgroundColor: isDark ? '#000' : '#fff', borderColor: isDark ? '#333' : '#e5e7eb', color: isDark ? '#fff' : '#000' }} />
                        <Legend />
                        <Line type="monotone" dataKey="savings" name="Total Savings (₹)" stroke="#fbbf24" strokeWidth={3} dot={{ r: 6, fill: "#fbbf24" }} activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/10 rounded-xl border border-yellow-100 dark:border-yellow-900/20">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">
                      <span className="font-bold">Insight:</span> By Year 5, your savings (₹1.6L+) can exceed the cost of a new vehicle.
                    </p>
                  </div>
                </motion.div>

                {/* Graph 2: Maintenance Cost Comparison */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="bg-white dark:bg-surface rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-white/5 shadow-lg"
                >
                  <h4 className="font-display text-xl font-bold mb-2 text-gray-900 dark:text-white">ICE vs EV Maintenance</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Annual maintenance cost comparison (₹).</p>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={maintenanceData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#e5e7eb"} />
                        <XAxis dataKey="year" stroke={isDark ? "#888" : "#4b5563"} />
                        <YAxis stroke={isDark ? "#888" : "#4b5563"} />
                        <Tooltip contentStyle={{ backgroundColor: isDark ? '#000' : '#fff', borderColor: isDark ? '#333' : '#e5e7eb', color: isDark ? '#fff' : '#000' }} />
                        <Legend />
                        <Line type="monotone" dataKey="ICE" name="ICE Vehicle" stroke="#fbbf24" strokeWidth={2} dot={{ r: 4 }} />
                        <Line type="monotone" dataKey="EV" name="Retrofitted EV" stroke="#f97316" strokeWidth={2} dot={{ r: 4 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/20">
                    <p className="text-sm text-orange-800 dark:text-orange-200 font-medium">
                      <span className="font-bold">Insight:</span> EV maintenance is ~80% cheaper because there are fewer moving parts to fail.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Category 2: Market Momentum */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-gray-200 dark:bg-white/10 flex-grow"></div>
                <h3 className="font-display text-2xl font-bold text-primary uppercase tracking-widest">Market Momentum</h3>
                <div className="h-px bg-gray-200 dark:bg-white/10 flex-grow"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Graph 3: Growth Trend */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="bg-white dark:bg-surface rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-white/5 shadow-lg"
                >
                  <h4 className="font-display text-xl font-bold mb-2 text-gray-900 dark:text-white">Retrofitting Demand</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Growth trend index of EV retrofitting in India.</p>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={growthData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#e5e7eb"} />
                        <XAxis dataKey="year" stroke={isDark ? "#888" : "#4b5563"} />
                        <YAxis stroke={isDark ? "#888" : "#4b5563"} />
                        <Tooltip contentStyle={{ backgroundColor: isDark ? '#000' : '#fff', borderColor: isDark ? '#333' : '#e5e7eb', color: isDark ? '#fff' : '#000' }} />
                        <Legend />
                        <Line type="monotone" dataKey="demand" name="Demand Index" stroke="#fbbf24" strokeWidth={2} dot={{ r: 4 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>

                {/* Graph 4: Market Size Growth */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="bg-white dark:bg-surface rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-white/5 shadow-lg"
                >
                  <h4 className="font-display text-xl font-bold mb-2 text-gray-900 dark:text-white">Market Size Growth (2020-2030)</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Projected growth of the EV retrofitting market index.</p>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={marketSizeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#e5e7eb"} />
                        <XAxis dataKey="year" stroke={isDark ? "#888" : "#4b5563"} />
                        <YAxis stroke={isDark ? "#888" : "#4b5563"} />
                        <Tooltip contentStyle={{ backgroundColor: isDark ? '#000' : '#fff', borderColor: isDark ? '#333' : '#e5e7eb', color: isDark ? '#fff' : '#000' }} />
                        <Legend />
                        <Line type="monotone" dataKey="size" name="Market Size Index" stroke="#f97316" strokeWidth={3} dot={{ r: 6, fill: "#f97316" }} activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Category 3: Technology Trends */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-gray-200 dark:bg-white/10 flex-grow"></div>
                <h3 className="font-display text-2xl font-bold text-primary uppercase tracking-widest">Technology Trends</h3>
                <div className="h-px bg-gray-200 dark:bg-white/10 flex-grow"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Graph 5: Battery Price Drop */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="bg-white dark:bg-surface rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-white/5 shadow-lg lg:col-span-2"
                >
                  <h4 className="font-display text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">Illustrative Battery Price Drop Trend</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Global battery price trend ($/kWh) showing increasing affordability.</p>
                  <div className="h-[300px] md:h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={batteryPriceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#e5e7eb"} />
                        <XAxis dataKey="year" stroke={isDark ? "#888" : "#4b5563"} />
                        <YAxis stroke={isDark ? "#888" : "#4b5563"} />
                        <Tooltip contentStyle={{ backgroundColor: isDark ? '#000' : '#fff', borderColor: isDark ? '#333' : '#e5e7eb', color: isDark ? '#fff' : '#000' }} />
                        <Legend />
                        <Line type="monotone" dataKey="price" name="Battery Price ($/kWh)" stroke="#fbbf24" strokeWidth={3} dot={{ r: 6, fill: "#fbbf24" }} activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/20">
                    <p className="text-sm text-green-800 dark:text-green-200 font-medium">
                      <span className="font-bold">Insight:</span> As battery technology matures, prices are dropping, making EV conversion more affordable than ever.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;