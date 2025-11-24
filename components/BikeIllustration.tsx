import React from 'react';
import { motion } from 'framer-motion';

interface BikeIllustrationProps {
    mode: 'petrol' | 'scanning' | 'electric';
}

const BikeIllustration: React.FC<BikeIllustrationProps> = ({ mode }) => {
    const isElectric = mode === 'electric';

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 400 250" className="w-full h-full drop-shadow-2xl">
                {/* --- Common Body Parts --- */}

                {/* Wheels */}
                <g className="text-gray-800">
                    <circle cx="80" cy="190" r="35" fill="currentColor" />
                    <circle cx="80" cy="190" r="20" fill="#333" />
                    <circle cx="320" cy="190" r="35" fill="currentColor" />
                    <circle cx="320" cy="190" r="20" fill="#333" />
                </g>

                {/* Main Body Chassis */}
                <motion.path
                    d="M110,190 L300,190 L340,140 L320,100 L100,100 L60,140 Z"
                    fill={isElectric ? "#ffffff" : "#64748b"} // White vs Slate-500
                    stroke={isElectric ? "#4ade80" : "#475569"}
                    strokeWidth="2"
                    animate={{ fill: isElectric ? "#ffffff" : "#64748b" }}
                />

                {/* Front Shield / Handlebar Area */}
                <motion.path
                    d="M280,100 L300,40 L240,40 L260,100 Z"
                    fill={isElectric ? "#f0fdf4" : "#94a3b8"}
                    animate={{ fill: isElectric ? "#f0fdf4" : "#94a3b8" }}
                />

                {/* Seat */}
                <path d="M100,100 L220,100 L230,90 L110,90 Z" fill="#1e293b" />

                {/* Handlebars */}
                <path d="M290,40 L320,30" stroke="#333" strokeWidth="4" strokeLinecap="round" />

                {/* --- Petrol Specifics --- */}
                {!isElectric && (
                    <motion.g initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        {/* Exhaust Pipe */}
                        <path d="M100,190 L40,190 L35,180 L100,180 Z" fill="#475569" />
                        {/* Engine Block */}
                        <rect x="120" y="140" width="60" height="40" fill="#334155" rx="5" />
                        {/* Smoke Particles */}
                        <motion.circle cx="30" cy="185" r="5" fill="#94a3b8" animate={{ x: -20, y: -10, opacity: 0 }} transition={{ repeat: Infinity, duration: 1 }} />
                        <motion.circle cx="30" cy="185" r="8" fill="#64748b" animate={{ x: -30, y: -20, opacity: 0 }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} />
                    </motion.g>
                )}

                {/* --- Electric Specifics --- */}
                {isElectric && (
                    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {/* Battery Pack Glow */}
                        <rect x="130" y="140" width="80" height="40" fill="#22c55e" rx="5" className="blur-sm" />
                        <rect x="130" y="140" width="80" height="40" fill="url(#batteryGradient)" rx="5" stroke="#4ade80" strokeWidth="2" />

                        {/* Circuit Lines */}
                        <path d="M170,140 L170,120 L280,120 L280,100" fill="none" stroke="#4ade80" strokeWidth="2" strokeDasharray="4 2" />

                        {/* Hub Motor Glow */}
                        <circle cx="80" cy="190" r="15" fill="#4ade80" className="blur-md" />
                    </motion.g>
                )}

                {/* Definitions */}
                <defs>
                    <linearGradient id="batteryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#15803d" />
                        <stop offset="50%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#15803d" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default BikeIllustration;
