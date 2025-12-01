import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu } from 'lucide-react';

// Team Data
const teamData = [
    {
        name: "Kethavath Srikanth",
        role: "Founder & CEO",
        img: "/Team/Srikanth.jpg",
        bio: [
            "B.Tech graduate in Electronics and Communication Engineering.",
            "Skilled firmware developer with deep experience in CubeSat systems and electric vehicle technologies.",
            "Strong expertise in embedded systems.",
            "Published papers in IEEE & ICICI on can sized satellite and ADC using CNTFET Ternary in September 2023, November 2024."
        ]
    },
    {
        name: "Mohammad Ashraf ul Hussain",
        role: "Lead Battery Engineer",
        img: "/Team/Ashraf.jpg",
        bio: [
            "Passionate about technology and real-world problem-solving.",
            "At Oxonix, he works closely with battery engineers to develop reliable, high-performance energy solutions for EV and space-grade applications.",
            "His technical mindset and hands-on approach strengthen Oxonix’s innovation and product quality."
        ]
    },
    {
        name: "Sairohit",
        role: "Product Development Lead",
        img: "/Team/Rohith.jpg",
        bio: [
            "Mechanical engineer skilled in CAD design, structural analysis, and rapid prototyping using SolidWorks, Fusion 360, ANSYS, CNC, and 3D printing.",
            "Hands-on experience at American Air Filter (AAF), giving him strong exposure to industrial-quality engineering and manufacturing standards.",
            "Expertise in composites, automation, and embedded systems."
        ]
    },
    {
        name: "Mudavath Anil Kumar",
        role: "Full-stack & Embedded Systems Engineer",
        img: "/Team/Anil.jpg",
        bio: [
            "Skilled full-stack and embedded systems engineer at Oxonix.",
            "With strong expertise in VLSI and embedded hardware, he contributes directly to Oxonix’s EV retrofitting, battery systems, and controller development.",
            "His problem-solving and debugging skills ensure that Oxonix delivers reliable, efficient, and user-focused technology solutions."
        ]
    },
    {
        name: "Eslavath Ramdas",
        role: "Simulation & Software Engineer",
        img: "/Team/Ramdas.jpg",
        bio: [
            "Skilled in Unity, C#, and real-time system modeling.",
            "He develops EV simulation tools, virtual training modules, and supports software automation.",
            "With experience in AI-driven simulations and full-stack web technologies, he helps enhance Oxonix’s R&D, testing workflow, and digital platforms."
        ]
    }
];

// --- CSS for 3D Transforms & Animations ---
const styles = `
  .perspective-1000 { perspective: 1000px; }
  .transform-style-3d { transform-style: preserve-3d; }
  .backface-hidden { backface-visibility: hidden; }
  
  /* Option 1 Flip Animation */
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
                        <div className="space-y-4 relative z-10 overflow-y-auto max-h-[250px] pr-2 scrollbar-thin scrollbar-thumb-primary/20">
                            {member.bio.map((point, i) => (
                                <div key={i} className="flex items-start gap-3 text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
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
        <div className="flex flex-row gap-2 md:gap-4 h-[500px] max-w-6xl mx-auto">
            {teamData.map((member, idx) => (
                <motion.div
                    key={idx}
                    layout
                    onClick={() => setActive(idx)}
                    className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out ${active === idx ? 'flex-[3]' : 'flex-[1]'}`}
                >
                    <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                    <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${active === idx ? 'opacity-40' : 'opacity-80'}`}></div>
                    <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end overflow-hidden">
                        {active !== idx ? (
                            <div className="absolute inset-0 flex items-end justify-start p-4 md:p-8">
                                <div className="-rotate-90 origin-bottom-left mb-8 md:mb-12 whitespace-nowrap transform translate-x-[-50%]">
                                    <h3 className="text-lg md:text-2xl font-bold text-white tracking-wide">{member.name}</h3>
                                    <p className="text-primary text-[10px] md:text-sm uppercase tracking-wider mt-1">{member.role}</p>
                                </div>
                            </div>
                        ) : (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-black/60 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/10 max-w-md relative z-10 w-full">
                                <h3 className="text-xl md:text-3xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-primary text-xs md:text-base font-medium mb-2 md:mb-4">{member.role}</p>
                                <div className="space-y-2 mb-2 md:mb-6 max-h-[150px] md:max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20">
                                    {member.bio.map((point, i) => <p key={i} className="text-gray-200 text-xs md:text-sm flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></span> {point}</p>)}
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
                    <div className="space-y-2 max-h-[150px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20">{member.bio.map((point, i) => <p key={i} className="text-gray-500 dark:text-gray-400 text-xs pl-3 border-l-2 border-gray-200">{point}</p>)}</div>
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
                        <div className="space-y-3 max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20">{member.bio.map((point, i) => <p key={i} className="text-white text-sm font-light">{point}</p>)}</div>
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

// --- Option 6: The Hybrid (Responsive) ---
const Option6 = () => (
    <div>
        <div className="hidden md:block">
            <Option2 />
        </div>
        <div className="block md:hidden">
            <Option1 />
        </div>
    </div>
);

const CardDemo = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black py-24 px-6 space-y-32">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Team Presentation Styles</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">Top 6 creative layouts for showcasing the Oxonix team.</p>
            </div>

            {[
                { id: 1, title: "The Neon Flip", desc: "Smoother 3D flip with CSS fixes.", Comp: Option1 },
                { id: 2, title: "The Accordion", desc: "Interactive expandable cards.", Comp: Option2 },
                { id: 3, title: "The Floating Glass", desc: "Clean, high-end look.", Comp: Option3 },
                { id: 4, title: "The Minimalist Slide", desc: "Editorial style.", Comp: Option4 },
                { id: 5, title: "The HUD Overlay", desc: "Cyberpunk/Tech inspired.", Comp: Option5 },
                { id: 6, title: "The Hybrid (Responsive)", desc: "Accordion on Desktop, Neon Flip on Mobile.", Comp: Option6 },
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
