import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle2, AlertCircle, Calendar, IndianRupee, ChevronDown, ChevronUp, Zap, Settings, Scan, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SUPPORTED_VEHICLES = [
    { name: 'Hero Splendor', type: 'Motorcycle', image: '/Brands_supported/splendor_bike.png' },
    { name: 'Honda Activa', type: 'Scooter', image: '/Brands_supported/activa_scooty.png' },
    { name: 'TVS Jupiter', type: 'Scooter', image: '/Brands_supported/jupiter_scooty.png' },
    { name: 'Hero Passion', type: 'Motorcycle', image: '/Brands_supported/passion_pro_bike.png' },
    { name: 'Honda Shine', type: 'Motorcycle', image: '/Brands_supported/shine_bike.png' },
    { name: 'Suzuki Access', type: 'Scooter', image: '' },
    { name: 'Honda Dio', type: 'Scooter', image: '' },
    { name: 'Hero HF Deluxe', type: 'Motorcycle', image: '/Brands_supported/Hf_deluxe_bike.png' },
    { name: 'Bajaj Platina', type: 'Motorcycle', image: '' },
    { name: 'TVS XL 100', type: 'Moped', image: '/Brands_supported/xl100_bike.png' },
    { name: 'Royal Enfield Classic', type: 'Motorcycle', image: '' }
];

const RetrofitChecker = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [status, setStatus] = useState<'idle' | 'analyzing' | 'result' | 'not-found'>('idle');
    const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
    const [showBreakdown, setShowBreakdown] = useState(false);

    const handleSearch = () => {
        if (!searchTerm.trim()) return;
        setStatus('analyzing');

        // Simulate API/Analysis delay
        setTimeout(() => {
            const found = SUPPORTED_VEHICLES.find(v =>
                v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                searchTerm.toLowerCase().includes(v.name.toLowerCase())
            );

            if (found) {
                setSelectedVehicle(found);
                setStatus('result');
            } else {
                setStatus('not-found');
            }
        }, 2500);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSearch();
    };

    // Cost calculation mock
    const baseCost = selectedVehicle?.type === 'Scooter' ? 25000 : 35000;
    const batteryCost = 30000; // 2kWh
    const installation = 2500;
    const gst = (baseCost + batteryCost + installation) * 0.05;
    const totalCost = baseCost + batteryCost + installation + gst;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black pt-24 pb-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Retrofit Compatibility <span className="text-primary">Checker</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 dark:text-gray-400 text-lg"
                    >
                        Check if your vehicle is ready for the electric revolution.
                    </motion.p>
                </div>

                {/* Search Box */}
                <motion.div
                    className="relative max-w-2xl mx-auto mb-16"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500"></div>
                        <div className="relative bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-full p-2 flex items-center shadow-2xl">
                            <div className="pl-6 pr-4">
                                <Search className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Enter your bike name..."
                                className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white text-lg placeholder:text-gray-400"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <button
                                onClick={handleSearch}
                                className="bg-primary hover:bg-green-400 text-black font-bold px-8 py-3 rounded-full transition-all flex items-center gap-2 transform active:scale-95"
                            >
                                Check Now
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Content Area */}
                <div className="min-h-[400px] relative">
                    <AnimatePresence mode="wait">

                        {/* IDLE STATE */}
                        {status === 'idle' && (
                            <motion.div
                                key="idle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center text-gray-500 dark:text-gray-500"
                            >
                                <div className="inline-block p-6 rounded-full bg-gray-100 dark:bg-white/5 mb-4">
                                    <Scan size={48} className="opacity-50" />
                                </div>
                                <p>Waiting to analyze your vehicle...</p>
                            </motion.div>
                        )}

                        {/* ANALYZING STATE */}
                        {status === 'analyzing' && (
                            <motion.div
                                key="analyzing"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center pt-8"
                            >
                                <div className="relative w-32 h-32 mb-8">
                                    <div className="absolute inset-0 border-4 border-gray-200 dark:border-white/10 rounded-full"></div>
                                    <motion.div
                                        className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    ></motion.div>
                                    <motion.div
                                        className="absolute inset-4 bg-primary/20 rounded-full flex items-center justify-center"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <Search className="text-primary" size={32} />
                                    </motion.div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Analyzing Vehicle Compatibility...</h3>
                                <div className="flex gap-2 text-gray-500 text-sm">
                                    {[0, 1, 2].map(i => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0.2 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.2 }}
                                        >Scanning chassis...</motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* NOT FOUND STATE */}
                        {status === 'not-found' && (
                            <motion.div
                                key="not-found"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center max-w-md mx-auto pt-8"
                            >
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full mb-6 text-red-500">
                                    <AlertCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Verification Pending</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8">
                                    We verify manually for vehicles not in our database to ensure safety and compatibility.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-primary font-bold hover:underline"
                                >
                                    Try another vehicle
                                </button>
                            </motion.div>
                        )}

                        {/* RESULT STATE */}
                        {status === 'result' && selectedVehicle && (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="grid md:grid-cols-2 gap-8"
                            >
                                {/* Left Col: Vehicle Info */}
                                <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl">
                                    <div className="flex items-start justify-between mb-8">
                                        <div>
                                            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                                                <CheckCircle2 size={14} /> Compatible
                                            </div>
                                            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white">{selectedVehicle.name}</h2>
                                            <p className="text-gray-500">{selectedVehicle.type}</p>
                                        </div>
                                        {selectedVehicle.image && (
                                            <div className="w-24 h-24 bg-white rounded-xl p-2 shadow-sm">
                                                <img src={selectedVehicle.image} className="w-full h-full object-contain" alt={selectedVehicle.name} />
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl">
                                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                                <Calendar size={24} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase font-bold">Estimated Timeline</p>
                                                <p className="text-xl font-bold text-gray-900 dark:text-white">3 Days <span className="text-sm font-normal text-gray-500">to complete</span></p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl">
                                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500">
                                                <Settings size={24} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase font-bold">Retrofit Type</p>
                                                <p className="text-xl font-bold text-gray-900 dark:text-white">Full Electric / Hybrid</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Col: Cost Analysis */}
                                <div className="bg-primary text-black rounded-3xl p-8 shadow-xl shadow-primary/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                                    <h3 className="text-lg font-bold opacity-80 mb-1">Total Estimated Cost</h3>
                                    <div className="flex items-baseline gap-1 mb-8">
                                        <span className="text-5xl font-display font-bold">₹{totalCost.toLocaleString()}</span>
                                        <span className="text-sm opacity-60">*approx</span>
                                    </div>

                                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 mb-6">
                                        <button
                                            onClick={() => setShowBreakdown(!showBreakdown)}
                                            className="w-full flex items-center justify-between font-bold text-lg"
                                        >
                                            <span>Cost Breakdown</span>
                                            {showBreakdown ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </button>

                                        <AnimatePresence>
                                            {showBreakdown && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-4 space-y-3 text-sm font-medium opacity-80">
                                                        <div className="flex justify-between">
                                                            <span>Base Kit (Motor + Controller)</span>
                                                            <span>₹{baseCost.toLocaleString()}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span>Lithium-Ion Battery (2kWh)</span>
                                                            <span>₹{batteryCost.toLocaleString()}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span>Professional Installation</span>
                                                            <span>₹{installation.toLocaleString()}</span>
                                                        </div>
                                                        <div className="h-px bg-black/10 my-2"></div>
                                                        <div className="flex justify-between">
                                                            <span>GST (5%)</span>
                                                            <span>₹{gst.toLocaleString()}</span>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <p className="text-xs opacity-60 text-center mb-6">
                                        EMI Options available starting from ₹2,500/month.
                                    </p>

                                    <button className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
                                        Book Transformation <ArrowRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
};

export default RetrofitChecker;
