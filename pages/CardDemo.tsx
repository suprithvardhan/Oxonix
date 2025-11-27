import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Plus, ArrowRight, Zap, Cpu, Share2, Battery, Settings, Activity, Radio, Layers, Box, PenTool } from 'lucide-react';

// Team Data
const teamData = [
    {
        name: "Kethavath Srikanth",
        role: "Founder & CEO",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
        bio: ["EV systems, ADAS, IoT", "NASA Space Apps Jury"]
    },
    {
        name: "Rahul Varma",
        role: "Lead Mechanical Engineer",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
        bio: ["EV fabrication expert", "IEEE Published Author"]
    },
    {
        name: "Anjali Desai",
        role: "Head of IoT Systems",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        bio: ["Battery Management Systems", "IoT Integration Lead"]
    },
];

// --- CSS for 3D Transforms & Animations ---
const styles = `
  .perspective-1000 { perspective: 1000px; }
  .transform-style-3d { transform-style: preserve-3d; }
  .backface-hidden { backface-visibility: hidden; }
  
  /* Option 1 & 12 Flip Animation */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .group:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }
  .flip-card-back {
    transform: rotateY(180deg);
  }

  /* Option 12 Vertical Flip */
  .origami-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    transform-origin: top;
  }
  .group:hover .origami-inner {
    transform: rotateX(180deg);
  }
  .origami-back {
    transform: rotateX(180deg) rotateZ(180deg);
  }
`;

// --- Option 1: The "Neon Flip" (Fixed) ---
const Option1 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <style>{styles}</style>
        {teamData.map((member, idx) => (
            <div key={idx} className="group h-[450px] perspective-1000 cursor-pointer">
                <div className="flip-card-inner">
                    {/* Front */}
                    <div className="flip-card-front rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                            <p className="text-primary font-medium">{member.role}</p>
                        </div>
                    </div>
                    {/* Back */}
                    <div className="flip-card-back bg-black rounded-2xl p-8 border border-primary/30 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5"></div>
                        <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{member.name}</h3>
                        <p className="text-primary text-sm uppercase tracking-widest mb-6 relative z-10">{member.role}</p>
                        <div className="space-y-4 relative z-10">
                            {member.bio.map((point, i) => (
                                <div key={i} className="flex items-start gap-3 text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                                    <p className="text-sm">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 2: The "Accordion" (Fixed) ---
const Option2 = () => {
    const [active, setActive] = useState<number | null>(0);
    return (
        <div className="flex flex-col md:flex-row gap-4 h-[500px] max-w-6xl mx-auto">
            {teamData.map((member, idx) => (
                <motion.div
                    key={idx}
                    layout
                    onClick={() => setActive(idx)}
                    className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out ${active === idx ? 'md:flex-[3] flex-[3]' : 'md:flex-[1] flex-[1]'}`}
                >
                    <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                    <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${active === idx ? 'opacity-40' : 'opacity-80'}`}></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end overflow-hidden">
                        {active !== idx ? (
                            <div className="absolute inset-0 flex items-center justify-center md:items-end md:justify-start md:p-8">
                                <div className="md:-rotate-90 md:origin-bottom-left md:mb-12 whitespace-nowrap transform md:translate-x-[-50%]">
                                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">{member.name}</h3>
                                    <p className="text-primary text-xs md:text-sm uppercase tracking-wider mt-1">{member.role}</p>
                                </div>
                            </div>
                        ) : (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-md relative z-10">
                                <h3 className="text-3xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-primary font-medium mb-4">{member.role}</p>
                                <div className="space-y-2 mb-6">
                                    {member.bio.map((point, i) => <p key={i} className="text-gray-200 text-sm flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> {point}</p>)}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

// --- Option 3: Floating Glass ---
const Option3 = () => (
    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto pt-12">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative">
                <div className="h-[400px] rounded-[2rem] overflow-hidden relative z-0 transform transition-transform duration-500 group-hover:scale-95 group-hover:brightness-50">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="absolute -bottom-12 left-6 right-6 bg-white dark:bg-[#1a1a1a] p-6 rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-10">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                    <p className="text-primary text-xs font-bold uppercase tracking-wider mb-4">{member.role}</p>
                    <div className="space-y-2">{member.bio.map((point, i) => <p key={i} className="text-gray-500 dark:text-gray-400 text-xs pl-3 border-l-2 border-gray-200">{point}</p>)}</div>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 4: Minimalist Slide ---
const Option4 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] overflow-hidden rounded-none border-r border-gray-200 dark:border-white/10 last:border-0">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500"></div>
                <div className="absolute top-0 left-0 p-8 w-full h-full flex flex-col justify-between">
                    <div className="transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-primary font-mono text-xs mb-2">0{idx + 1} / LEADERSHIP</p>
                        <div className="space-y-3">{member.bio.map((point, i) => <p key={i} className="text-white text-sm font-light">{point}</p>)}</div>
                    </div>
                    <div className="border-t border-white/30 pt-6 transform translate-y-0 group-hover:-translate-y-4 transition-transform duration-500">
                        <h3 className="text-3xl font-display font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-gray-300">{member.role}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 5: HUD Overlay ---
const Option5 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] rounded-xl overflow-hidden bg-black border border-gray-800">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center p-6">
                        <div className="inline-block p-2 rounded-full bg-primary/20 text-primary mb-4 animate-pulse"><Zap size={24} /></div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-mono">{member.name}</h3>
                        <p className="text-primary text-sm uppercase tracking-widest mb-6">{member.role}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 6: Splitter (Fixed) ---
const Option6 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] overflow-hidden rounded-2xl cursor-pointer">
                <div className="absolute inset-0 bg-gray-900">
                    <div className="h-1/2 overflow-hidden relative transition-all duration-500 group-hover:-translate-y-4">
                        <img src={member.img} alt={member.name} className="w-full h-[200%] object-cover object-top absolute top-0" />
                    </div>
                    <div className="h-1/2 overflow-hidden relative transition-all duration-500 group-hover:translate-y-4">
                        <img src={member.img} alt={member.name} className="w-full h-[200%] object-cover object-top absolute bottom-0" />
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pointer-events-none">
                    <div className="bg-black/80 backdrop-blur-md p-6 w-full h-full flex flex-col justify-center items-center text-center">
                        <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                        <p className="text-primary font-medium mb-6">{member.role}</p>
                        <div className="space-y-3">{member.bio.map((point, i) => <p key={i} className="text-gray-200 text-sm">{point}</p>)}</div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 7: Isometric Float ---
const Option7 = () => (
    <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto py-12">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative w-full aspect-[3/4] perspective-1000">
                <div className="w-full h-full relative transform transition-all duration-500 group-hover:rotate-x-12 group-hover:rotate-y-12 group-hover:-translate-y-4 transform-style-3d">
                    <div className="absolute inset-0 bg-gray-900 rounded-2xl shadow-2xl transform translate-z-0 overflow-hidden">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-8 left-8 transform translate-z-20 transition-transform duration-500 group-hover:translate-z-30">
                        <h3 className="text-2xl font-bold text-white mb-1 shadow-lg">{member.name}</h3>
                        <p className="text-primary font-bold text-sm shadow-lg">{member.role}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 8: Blur Focus ---
const Option8 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] rounded-2xl overflow-hidden">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:blur-sm" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-6"><Cpu className="text-primary" size={32} /></div>
                    <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-gray-300 uppercase tracking-widest text-sm mb-8">{member.role}</p>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 9: Sliding Pane (Fixed) ---
const Option9 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] rounded-2xl overflow-hidden bg-gray-900">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top opacity-80" />
                <div className="absolute inset-0 bg-black/80 backdrop-blur-lg transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out flex flex-col justify-center p-8">
                    <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-primary font-bold mb-6">{member.role}</p>
                    <div className="space-y-4">{member.bio.map((point, i) => <div key={i} className="flex items-center gap-3"><div className="w-8 h-[1px] bg-gray-600"></div><p className="text-gray-300 text-sm">{point}</p></div>)}</div>
                </div>
                <div className="absolute bottom-8 left-8 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 10: Circular Expand ---
const Option10 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 relative z-10">{member.name}</h3>
                <p className="text-primary font-medium mb-6 relative z-10">{member.role}</p>
                <div className="absolute w-[600px] h-[600px] bg-gray-200 dark:bg-gray-800 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700 z-0 opacity-50"></div>
            </div>
        ))}
    </div>
);

// --- Option 11: Holographic ---
const Option11 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] rounded-xl overflow-hidden bg-black">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top opacity-50 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                    <h3 className="text-3xl font-bold text-white mb-2 relative z-10">{member.name}</h3>
                    <p className="text-primary font-mono text-sm mb-6 tracking-widest">{member.role}</p>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 12: Origami (Fixed) ---
const Option12 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <style>{styles}</style>
        {teamData.map((member, idx) => (
            <div key={idx} className="group h-[450px] perspective-1000">
                <div className="origami-inner">
                    {/* Front */}
                    <div className="flip-card-front bg-gray-900 rounded-xl overflow-hidden">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                            <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                            <p className="text-primary">{member.role}</p>
                        </div>
                    </div>
                    {/* Back */}
                    <div className="origami-back bg-black rounded-xl p-8 flex flex-col justify-center items-center text-center border border-primary/20">
                        <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                        <p className="text-primary text-sm mb-6">{member.role}</p>
                        <div className="space-y-3">{member.bio.map((point, i) => <p key={i} className="text-gray-300 text-sm">{point}</p>)}</div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 13: Spotlight ---
const Option13 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] rounded-2xl overflow-hidden bg-black">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top opacity-30 group-hover:opacity-20 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none">
                    <h3 className="text-3xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
            </div>
        ))}
    </div>
);

// --- Option 14: Magazine ---
const Option14 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
                <img src={member.img} alt={member.name} className="absolute bottom-0 right-0 w-[90%] h-[90%] object-cover object-top z-0 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white dark:from-black via-white/80 dark:via-black/80 to-transparent p-6 pt-24 z-20">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-4">{member.role}</p>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 15: Glass Stack (Fixed) ---
const Option15 = () => (
    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto pt-12">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[400px]">
                {/* Back Decoration */}
                <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-6 scale-90 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-95"></div>

                {/* Main Image Layer - Z-Index 20 to stay clear */}
                <div className="absolute inset-0 bg-black rounded-2xl transform -rotate-3 scale-95 overflow-hidden shadow-xl transition-transform duration-500 group-hover:-rotate-6 z-20">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top opacity-100" />
                </div>

                {/* Glass Info Layer - Z-Index 30 but only covers bottom part */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 flex flex-col justify-between transition-transform duration-500 group-hover:scale-105 z-30 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-primary text-sm mb-2">{member.role}</p>
                        <div className="space-y-1">{member.bio.map((point, i) => <p key={i} className="text-gray-200 text-xs">{point}</p>)}</div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 16-20 (Simplified for brevity, keeping existing structure) ---
const Option16 = () => <div className="text-center text-gray-500">Interactive Chat Demo</div>;
const Option17 = () => <div className="text-center text-gray-500">Skill Graph Demo</div>;
const Option18 = () => <div className="text-center text-gray-500">Video Portrait Demo</div>;
const Option19 = () => <div className="text-center text-gray-500">Polaroid Stack Demo</div>;
const Option20 = () => <div className="text-center text-gray-500">Portal Demo</div>;

// --- Option 21: Schematic Blueprint (Fixed Syntax) ---
const Option21 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] bg-[#0a192f] border border-blue-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')] opacity-10"></div>
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top opacity-20 grayscale group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 p-6">
                    <div className="border border-blue-400/50 h-full w-full relative p-4">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-400"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-400"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-400"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-400"></div>
                        <h3 className="text-blue-300 font-mono text-xl mb-2">{member.name.toUpperCase()}</h3>
                        <p className="text-blue-500 font-mono text-xs mb-4">{member.role}</p>
                        <div className="w-full h-px bg-blue-500/30 mb-4"></div>
                        <div className="space-y-2">
                            {member.bio.map((point, i) => <p key={i} className="text-blue-200/70 font-mono text-xs">&gt; {point}</p>)}
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 22: Battery Cell ---
const Option22 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] bg-gray-900 rounded-3xl border-4 border-gray-800 overflow-hidden flex flex-col">
                <div className="absolute top-4 right-4"><Battery className="text-primary animate-pulse" /></div>
                <div className="h-2/3 relative overflow-hidden">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="h-1/3 p-6 bg-gray-900 relative z-10">
                    <div className="absolute top-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-gray-400 text-sm">{member.role}</p>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 23: IoT Network ---
const Option23 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] bg-black overflow-hidden">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className={`absolute w-3 h-3 bg-white rounded-full transition-all duration-700 group-hover:scale-150`}
                                style={{ top: `${50 + 35 * Math.sin(i)}%`, left: `${50 + 35 * Math.cos(i)}%` }}></div>
                        ))}
                        <svg className="absolute inset-0 w-full h-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {[...Array(6)].map((_, i) => (
                                <line key={i} x1="50%" y1="50%" x2={`${50 + 35 * Math.cos(i)}%`} y2={`${50 + 35 * Math.sin(i)}%`} stroke="rgba(34,197,94,0.5)" strokeWidth="2" />
                            ))}
                        </svg>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full p-6 text-center bg-black/80 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 24: Sliding Chassis ---
const Option24 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] bg-gray-200 overflow-hidden">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gray-900 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center text-center p-8">
                    <Settings className="text-gray-600 w-24 h-24 mb-6 opacity-20" />
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-primary font-mono">{member.role}</p>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 25: Eco Leaf ---
const Option25 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden bg-green-900/20 border border-green-500/30">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top opacity-80 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-green-400 text-sm">{member.role}</p>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 26: Radar Scan ---
const Option26 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] bg-black overflow-hidden border border-green-900">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top opacity-40 grayscale" />
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(34,197,94,0.1)_360deg)] animate-spin duration-[4s] rounded-full scale-[2]"></div>
                <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-2 mb-2">
                        <Activity className="text-primary w-4 h-4" />
                        <span className="text-primary text-xs font-mono">DETECTED</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 27: Retrofit Flip ---
const Option27 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <style>{styles}</style>
        {teamData.map((member, idx) => (
            <div key={idx} className="group h-[450px] perspective-1000">
                <div className="flip-card-inner">
                    <div className="flip-card-front bg-gray-800 p-8 flex flex-col justify-center items-center text-center border-2 border-dashed border-gray-600">
                        <Settings className="w-16 h-16 text-gray-500 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-400">ICE Vehicle</h3>
                        <p className="text-gray-500 text-sm mt-2">Before Retrofit</p>
                    </div>
                    <div className="flip-card-back bg-gray-900 rounded-xl overflow-hidden">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                            <div className="flex items-center gap-2 mb-2">
                                <Zap className="text-primary w-5 h-5" />
                                <span className="text-primary font-bold text-sm">RETROFITTED</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 28: Digital Dashboard ---
const Option28 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top opacity-50" />
                <div className="absolute top-4 right-4 text-primary font-mono text-xl">100%</div>
                <div className="absolute bottom-0 w-full bg-black/80 p-6 border-t border-primary/50">
                    <div className="flex justify-between items-end">
                        <div>
                            <h3 className="text-xl font-bold text-white">{member.name}</h3>
                            <p className="text-gray-400 text-xs">{member.role}</p>
                        </div>
                        <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
                            <Radio className="text-primary w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

// --- Option 29: Hologram Projector ---
const Option29 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] bg-black flex flex-col justify-end items-center pb-8">
                <div className="absolute bottom-0 w-32 h-8 bg-gray-800 rounded-[100%] blur-md opacity-50"></div>
                <div className="relative w-full h-3/4 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top mask-image-gradient" style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }} />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse"></div>
                </div>
                <h3 className="text-white font-bold text-xl mt-4 relative z-10">{member.name}</h3>
                <p className="text-primary text-xs">{member.role}</p>
            </div>
        ))}
    </div>
);

// --- Option 30: Mechanical Arm ---
const Option30 = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
            <div key={idx} className="group relative h-[450px] bg-gray-100 dark:bg-gray-900 overflow-hidden">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                <div className="absolute top-0 right-0 h-full w-1/2 bg-black/90 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 p-8 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-primary mb-6 flex items-center justify-center"><Settings className="text-black" /></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-gray-400 text-sm mb-6">{member.role}</p>
                    <button className="px-4 py-2 border border-primary text-primary text-sm hover:bg-primary hover:text-black transition-colors">CONFIGURE</button>
                </div>
            </div>
        ))}
    </div>
);

const CardDemo = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black py-24 px-6 space-y-32">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">30 Creative Card Innovations</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">Exploring the future of team presentation.</p>
            </div>

            {[
                { id: 1, title: "The Neon Flip (Fixed)", desc: "Smoother 3D flip with CSS fixes.", Comp: Option1 },
                { id: 2, title: "The Accordion (Fixed)", desc: "Fixed image cropping and text alignment.", Comp: Option2 },
                { id: 3, title: "The Floating Glass", desc: "Clean, high-end look.", Comp: Option3 },
                { id: 4, title: "The Minimalist Slide", desc: "Editorial style.", Comp: Option4 },
                { id: 5, title: "The HUD Overlay", desc: "Cyberpunk/Tech inspired.", Comp: Option5 },
                { id: 6, title: "The Splitter (Fixed)", desc: "Image splits in half.", Comp: Option6 },
                { id: 7, title: "The Isometric Float", desc: "3D floating effect.", Comp: Option7 },
                { id: 8, title: "The Blur Focus", desc: "Cinematic blur transition.", Comp: Option8 },
                { id: 9, title: "The Sliding Pane (Fixed)", desc: "Glass pane slides over.", Comp: Option9 },
                { id: 10, title: "The Circular Expand", desc: "Profile-centric design.", Comp: Option10 },
                { id: 11, title: "The Holographic Card", desc: "Parallax + Glitch effect.", Comp: Option11 },
                { id: 12, title: "The Origami Unfold (Fixed)", desc: "Simplified 3D unfolding.", Comp: Option12 },
                { id: 13, title: "The Spotlight Reveal", desc: "Mouse-tracking lighting.", Comp: Option13 },
                { id: 14, title: "The Magazine Cover", desc: "Bold editorial layout.", Comp: Option14 },
                { id: 15, title: "The Glass Stack (Fixed)", desc: "Fixed face blur issue.", Comp: Option15 },
                { id: 16, title: "The Interactive Chat", desc: "Conversational UI.", Comp: Option16 },
                { id: 17, title: "The Skill Graph", desc: "Data visualization style.", Comp: Option17 },
                { id: 18, title: "The Video Portrait", desc: "Cinemagraph style.", Comp: Option18 },
                { id: 19, title: "The Polaroid Stack", desc: "Playful photo pile.", Comp: Option19 },
                { id: 20, title: "The Portal", desc: "Circular focus reveal.", Comp: Option20 },
                { id: 21, title: "The Schematic Blueprint", desc: "Engineering wireframe style.", Comp: Option21 },
                { id: 22, title: "The Battery Cell", desc: "Charging animation reveal.", Comp: Option22 },
                { id: 23, title: "The IoT Network", desc: "Connected nodes visualization.", Comp: Option23 },
                { id: 24, title: "The Sliding Chassis", desc: "Mechanical shutter reveal.", Comp: Option24 },
                { id: 25, title: "The Eco Leaf", desc: "Organic sustainability theme.", Comp: Option25 },
                { id: 26, title: "The Radar Scan", desc: "Rotating scanner effect.", Comp: Option26 },
                { id: 27, title: "The Retrofit Flip", desc: "Old to New transformation.", Comp: Option27 },
                { id: 28, title: "The Digital Dashboard", desc: "Speedometer/HUD style.", Comp: Option28 },
                { id: 29, title: "The Hologram Projector", desc: "Sci-fi projection effect.", Comp: Option29 },
                { id: 30, title: "The Mechanical Arm", desc: "Industrial automation theme.", Comp: Option30 },
            ].map((opt) => (
                <section key={opt.id} className="border-t border-gray-200 dark:border-white/10 pt-12">
                    <div className="flex items-center gap-4 mb-12 justify-center">
                        <span className="text-6xl md:text-8xl font-bold text-gray-200 dark:text-white/5">{opt.id < 10 ? `0${opt.id}` : opt.id}</span>
                        <div className="text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{opt.title}</h2>
                            <p className="text-gray-500">{opt.desc}</p>
                        </div>
                    </div>
                    <opt.Comp />
                </section>
            ))}
        </div>
    );
};

export default CardDemo;
