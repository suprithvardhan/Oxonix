import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Wind, Droplets, Gauge, Battery, ArrowRight, Sparkles } from 'lucide-react';

const GreenJourney: React.FC = () => {
    const [stage, setStage] = useState<'petrol' | 'scanning' | 'electric'>('petrol');

    const handleTransform = () => {
        if (stage === 'petrol') {
            setStage('scanning');
            setTimeout(() => setStage('electric'), 2500); // Scan takes 2.5 seconds
        } else if (stage === 'electric') {
            setStage('petrol');
        }
    };

    return (
        <div className="relative w-full min-h-[auto] md:min-h-[600px] bg-gray-100 dark:bg-slate-900 overflow-hidden flex flex-col items-center justify-center py-12 md:py-20 transition-colors duration-1000">

            {/* --- Dynamic Background --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Petrol Ambience: Warm, Dusty, Smoggy */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-orange-100/50 via-gray-100 to-gray-200 dark:from-orange-900/20 dark:via-slate-900 dark:to-black"
                    animate={{ opacity: stage === 'electric' ? 0 : 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                </motion.div>

                {/* Electric Ambience: Cool, Clean, Tech */}
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-100/50 via-gray-100 to-white dark:from-emerald-900/30 dark:via-slate-900 dark:to-black"
                    animate={{ opacity: stage === 'electric' ? 1 : 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-500/10 to-transparent"></div>
                </motion.div>
            </div>

            {/* --- Particles System --- */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {stage !== 'electric' && (
                    // Smog Particles
                    [...Array(15)].map((_, i) => (
                        <motion.div
                            key={`smog-${i}`}
                            className="absolute rounded-full bg-gray-500/20 dark:bg-gray-500/20 blur-xl"
                            style={{
                                width: Math.random() * 100 + 50,
                                height: Math.random() * 100 + 50,
                                left: `${Math.random() * 100}%`,
                                bottom: `-20%`,
                            }}
                            animate={{
                                y: [0, -800],
                                opacity: [0, 0.5, 0],
                                x: [0, Math.random() * 100 - 50]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))
                )}
                {stage === 'electric' && (
                    // Clean Energy Motes
                    [...Array(20)].map((_, i) => (
                        <motion.div
                            key={`sparkle-${i}`}
                            className="absolute rounded-full bg-green-500/40 dark:bg-green-400/60 blur-[1px]"
                            style={{
                                width: Math.random() * 4 + 1,
                                height: Math.random() * 4 + 1,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0]
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                        />
                    ))
                )}
            </div>

            {/* --- Main Content --- */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center">

                {/* Header Text */}
                <motion.div className="text-center mb-8 md:mb-12 relative z-20">
                    <motion.h2
                        layout
                        className="font-display text-3xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-sm dark:drop-shadow-lg"
                    >
                        {stage === 'electric' ? (
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">
                                The Future is Electric
                            </span>
                        ) : (
                            <span className="text-gray-800 dark:text-gray-200">
                                Stuck in the Past?
                            </span>
                        )}
                    </motion.h2>
                    <motion.p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
                        {stage === 'electric'
                            ? "Experience silence, savings, and sustainability. Your ride, upgraded."
                            : "High fuel costs. Noise pollution. Carbon emissions. It's time for a change."
                        }
                    </motion.p>
                </motion.div>

                {/* --- The Scanner Reveal Stage --- */}
                <div className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[2/1] flex items-center justify-center mb-12 md:mb-16">

                    {/* Image Container */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black/50">

                        {/* 1. Base Layer: Petrol Bike (Always visible underneath) */}
                        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
                            <motion.img
                                src="/shine_bike_petrol.png"
                                alt="Petrol Scooter"
                                className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                                animate={stage === 'petrol' ? {
                                    filter: "grayscale(30%) sepia(20%) contrast(1.1)",
                                    x: [-1, 1, -1],
                                    y: [1, -1, 1],
                                } : {
                                    filter: "grayscale(30%) sepia(20%) contrast(1.1)", // Stays same underneath
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 0.2, // Vibration
                                }}
                            />
                        </div>

                        {/* 2. Reveal Layer: Electric Bike (Masked) */}
                        <motion.div
                            className="absolute inset-0 bg-white/50 dark:bg-black/20 backdrop-blur-[2px] z-10" // Slight dimming of background for EV pop
                            initial={{ clipPath: "inset(0 100% 0 0)" }}
                            animate={{
                                clipPath: stage === 'petrol' ? "inset(0 100% 0 0)" :
                                    stage === 'scanning' ? "inset(0 0 0 0)" : "inset(0 0 0 0)"
                            }}
                            transition={{
                                duration: stage === 'scanning' ? 2.5 : 0,
                                ease: "easeInOut"
                            }}
                        >
                            {/* EV Image Container */}
                            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 bg-gradient-to-r from-emerald-100/50 to-transparent dark:from-emerald-900/20">
                                <motion.img
                                    src="/shine_bike_ev.png"
                                    alt="Electric Scooter"
                                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(74,222,128,0.3)] mix-blend-multiply dark:mix-blend-normal"
                                    animate={{
                                        y: [0, -5, 0], // Gentle float
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 4,
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* 3. The Laser Scanner Line */}
                        <AnimatePresence>
                            {stage === 'scanning' && (
                                <motion.div
                                    className="absolute top-0 bottom-0 w-1 bg-green-500 dark:bg-green-400 z-20 shadow-[0_0_40px_#4ade80,0_0_10px_#fff]"
                                    initial={{ left: "0%" }}
                                    animate={{ left: "100%" }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 2.5, ease: "easeInOut" }}
                                >
                                    {/* Laser Glow Gradient */}
                                    <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-green-500/30 to-transparent"></div>
                                    {/* Sparkles at contact point */}
                                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2">
                                        <Sparkles className="text-green-600 dark:text-white w-12 h-12 animate-spin-slow" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Stats Cards - Now Inside the Container for better mobile fit */}
                        <div className="absolute inset-0 pointer-events-none z-30">
                            {/* Top Left Stat */}
                            <StatCard
                                position="top-2 left-2 md:top-6 md:left-6"
                                label="Running Cost"
                                value={stage === 'electric' ? "₹0.25 / km" : "₹2.50 / km"}
                                type={stage === 'electric' ? 'good' : 'bad'}
                                icon={<Droplets size={14} />}
                                delay={0.1}
                            />

                            {/* Bottom Left Stat */}
                            <StatCard
                                position="bottom-2 left-2 md:bottom-6 md:left-6"
                                label="Emissions"
                                value={stage === 'electric' ? "Zero" : "High CO2"}
                                type={stage === 'electric' ? 'good' : 'bad'}
                                icon={<Wind size={14} />}
                                delay={0.2}
                            />

                            {/* Top Right Stat */}
                            <StatCard
                                position="top-2 right-2 md:top-6 md:right-6"
                                label="Maintenance"
                                value={stage === 'electric' ? "Minimal" : "Frequent"}
                                type={stage === 'electric' ? 'good' : 'bad'}
                                icon={<Gauge size={14} />}
                                delay={0.3}
                            />

                            {/* Bottom Right Stat */}
                            <StatCard
                                position="bottom-2 right-2 md:bottom-6 md:right-6"
                                label="Performance"
                                value={stage === 'electric' ? "Instant Torque" : "Laggy"}
                                type={stage === 'electric' ? 'good' : 'bad'}
                                icon={<Zap size={14} />}
                                delay={0.4}
                            />
                        </div>

                    </div>

                </div>

                {/* Action Button */}
                <motion.button
                    onClick={handleTransform}
                    className={`relative z-50 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300 ${stage === 'electric'
                        ? 'bg-white text-green-900 border border-gray-200 hover:bg-gray-50 shadow-lg'
                        : 'bg-green-600 text-white hover:bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)]'
                        }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {stage === 'electric' ? (
                        <>
                            <Battery size={24} />
                            Revert to Petrol (Demo)
                        </>
                    ) : (
                        <>
                            <Zap size={24} />
                            Retrofit My Bike
                            <ArrowRight size={20} />
                        </>
                    )}
                </motion.button>

            </div>
        </div>
    );
};

// --- Helper Components ---

interface StatCardProps {
    position: string;
    label: string;
    value: string;
    type: 'good' | 'bad';
    icon: React.ReactNode;
    delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ position, label, value, type, icon, delay }) => {
    return (
        <motion.div
            className={`absolute ${position} backdrop-blur-md border rounded-xl p-4 w-36 md:w-48 shadow-lg transition-colors duration-500`}
            style={{
                // Light mode: Solid colors with opacity. Dark mode: Glassy
                backgroundColor: type === 'good'
                    ? 'var(--stat-good-bg, rgba(20, 83, 45, 0.6))'
                    : 'var(--stat-bad-bg, rgba(127, 29, 29, 0.6))',
                borderColor: type === 'good'
                    ? 'rgba(74, 222, 128, 0.3)'
                    : 'rgba(248, 113, 113, 0.3)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={value} // Re-animate when value changes
            transition={{ delay, duration: 0.5 }}
        >
            {/* Inline style override for light mode via CSS variables or class logic is tricky with dynamic style prop. 
                Let's use conditional classes for the content instead. 
            */}
            <div className={`flex items-center gap-2 mb-1 text-[10px] md:text-xs font-bold uppercase tracking-wider ${type === 'good' ? 'text-green-200 dark:text-green-300' : 'text-red-200 dark:text-red-300'
                }`}>
                {icon}
                {label}
            </div>
            <div className="text-white font-display font-bold text-base md:text-xl drop-shadow-md">
                {value}
            </div>
        </motion.div>
    );
};

export default GreenJourney;
