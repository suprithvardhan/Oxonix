import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Target, Globe, Users, Milestone, Calendar, Linkedin, ArrowUpRight } from 'lucide-react';

// Counter Component for animated numbers
const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px 0px -50px 0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString('en-US') + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="tabular-nums" />;
};

const About: React.FC = () => {
  const viewportConfig = { once: true, margin: "-100px 0px -50px 0px", amount: 0.2 };

  const timeline = [
    { year: "2021", title: "Inception", desc: "Started in a garage with a mission to retrofit a single bike." },
    { year: "2022", title: "First Prototype", desc: "Developed the X1 Kit and successfully ran pilot tests in Bangalore." },
    { year: "2023", title: "Certification", desc: "Achieved ARAI & AIS-123 certification for our 2-wheeler and 3-wheeler kits." },
    { year: "2024", title: "Expansion", desc: "Crossed 1000+ retrofits and opened 25+ partner service centers." }
  ];

  const team = [
    { name: "Arjun Mehta", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
    { name: "Dr. Priya Singh", role: "CTO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
    { name: "Vikram Das", role: "Head of Operations", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
    { name: "Sarah Jen", role: "Lead Engineer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen transition-colors duration-300">
      {/* Header */}
      <div className="bg-white dark:bg-surface py-24 border-b border-gray-200 dark:border-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Who We <span className="text-primary">Are</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Oxonix is an emerging EV innovation company committed to creating practical, affordable, and intelligent electric mobility solutions for the Indian two-wheeler market.
          </motion.p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 py-12 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Target size={20} className="text-blue-600 dark:text-accent" />
            <span className="font-bold uppercase tracking-wider text-sm text-blue-600 dark:text-accent">Our Purpose</span>
          </div>
          <h2 className="font-display text-4xl font-bold mb-6 text-gray-900 dark:text-white">Transforming Mobility</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg">
            India has 23+ crore petrol two-wheelers. Oxonix aims to convert them into smart, low-cost EVs.
          </p>

          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Mission</h3>
            <p className="text-gray-600 dark:text-gray-400">Build a low-cost, smart electric mobility nation.</p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Vision</h3>
            <p className="text-gray-600 dark:text-gray-400">A future where every Indian two-wheeler rides cleaner and smarter.</p>
          </div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary blur-[100px] opacity-20"></div>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
            alt="R&D Facility"
            className="relative z-10 rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Animated Stats Section */}
      <div className="container mx-auto px-6 pb-24 pt-0">
        <div className="grid md:grid-cols-3 gap-8 border border-gray-200 dark:border-white/10 rounded-2xl p-8 bg-white dark:bg-white/5 backdrop-blur relative overflow-hidden shadow-lg">
          {/* Shine effect */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>

          {[
            { label: "Vehicles Retrofitted", value: 1200, suffix: "+" },
            { label: "CO2 Saved (Tonnes)", value: 5400, suffix: "+" },
            { label: "Service Centers", value: 25, suffix: "+" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="text-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/10 last:border-0 pb-6 md:pb-0 last:pb-0"
            >
              <div className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2 flex justify-center">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-green-600 dark:text-primary font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline / Journey */}
      <div className="py-24 bg-white dark:bg-surface transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Journey</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">From a concept to a movement.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-white/10 md:-translate-x-1/2"></div>
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative flex items-center gap-8 mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 bg-white dark:bg-black rounded-full border-4 border-primary z-10"></div>
                <div className={`ml-20 md:ml-0 w-full md:w-[45%] p-6 rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/5 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex items-center gap-2 mb-2 font-bold text-primary text-xl ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar size={18} /> {item.year}
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 dark:bg-black py-12 md:py-24 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Globe, title: "Innovation with Purpose", desc: "We innovate to solve real-world problems and improve lives." },
              { icon: Target, title: "Safety First", desc: "We adhere to the strictest automotive safety standards (AIS-123) for peace of mind." },
              { icon: Users, title: "Quality Engineering", desc: "Every kit is engineered to millimeter perfection for specific vehicle models." },
              { icon: Users, title: "Customer Affordability", desc: "Making electric mobility accessible to everyone." },
              { icon: Globe, title: "Environmental Responsibility", desc: "We believe in circular economy. Reusing chassis reduces manufacturing carbon footprint." }
            ].slice(0, 3).map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="bg-white dark:bg-surface p-8 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all"
              >
                <val.icon className="text-primary w-10 h-10 mb-6" />
                <h3 className="font-display text-xl font-bold mb-4 text-gray-900 dark:text-white">{val.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white dark:bg-surface py-12 md:py-24 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Leadership Team</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">The minds behind the machine.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 bg-gray-100 dark:bg-black">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-primary py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-black">Join the Revolution</h2>
          <p className="text-black/80 max-w-2xl mx-auto mb-8 text-lg">Whether you are a vehicle owner looking to retrofit or an investor looking to partner, we want to hear from you.</p>
          <button className="bg-black text-white font-bold py-4 px-10 rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2 mx-auto shadow-xl">
            Contact Us <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;