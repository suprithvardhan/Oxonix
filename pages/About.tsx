import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Target, Globe, Users, Milestone, Calendar, Linkedin, ArrowUpRight, Twitter, Mail } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MSG } from '../constants';
import SEO from '../components/SEO';

// Counter Component for animated numbers
const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, amount: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Handle decimals if value is not an integer
        const isDecimal = value % 1 !== 0;
        const formatted = isDecimal
          ? latest.toFixed(2)
          : Math.floor(latest).toLocaleString('en-US');
        ref.current.textContent = formatted + suffix;
      }
    });
  }, [springValue, suffix, value]);

  return <span ref={ref} className="tabular-nums" />;
};

const About: React.FC = () => {
  const [active, setActive] = useState<number | null>(0);
  const viewportConfig = { once: true, amount: 0.1, margin: "0px 0px -50px 0px" };

  const timeline = [
    { year: "2023 – 2024", title: "Foundations Built", desc: "In 2023–2024, the founders explored battery technology, satellite power systems, and converted a bicycle into an electric one—laying the early foundation for their EV journey." },
    { year: "Early 2025", title: "Idea of Oxonix Begins", desc: "In early 2025, rising fuel costs and failing old EVs in rural Telangana highlighted the lack of retrofitting services, inspiring the idea for an affordable conversion-focused brand." },
    { year: "Mid–Late 2025", title: "Prototype & Development", desc: "By mid–late 2025, we tested four key EV solutions and developed our own indigenous battery system, covering scooty conversions, hybrid bike kits, and full electric bike conversions." },
    { year: "05/09/2025", title: "Incorporation", desc: "Company incorporated on 05/09/2025 as Oxonix Private Limited." },
    { year: "08/09/2025", title: "MCA Recognition", desc: "Ministry Of Corporate Affairs RECOGNITION on 08/09/2025." },
    { year: "Late 2025", title: "Official Recognition", desc: "We also obtained our Startup India / DPIIT recognition and Udyam (MSME) certificate, strengthening our legitimacy and support as a growing EV retrofit startup." },
    { year: "Future", title: "Pilot Launch", desc: "We plan to launch 50+ vehicles across 3 variants as a pilot project very soon." }
  ];

  interface TeamMember {
    name: string;
    role: string;
    img: string;
    bio: string[];
    imgPos?: string;
  }

  const team: TeamMember[] = [
    {
      name: "Kethavath Srikanth",
      role: "Founder & CEO",
      img: "/Team_Members_images/Srikanth.webp",
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
      img: "/Team_Members_images/Ashraf.webp",
      bio: [
        "Passionate about technology and real-world problem-solving.",
        "At Oxonix, he works closely with battery engineers to develop reliable, high-performance energy solutions for EV and space-grade applications.",
        "His technical mindset and hands-on approach strengthen Oxonix’s innovation and product quality."
      ]
    },
    {
      name: "Sairohit",
      role: "Product Development Lead",
      imgPos: 'object-center',
      img: "/Team_Members_images/Sai_Rohit.webp",
      bio: [
        "Mechanical engineer skilled in CAD design, structural analysis, and rapid prototyping using SolidWorks, Fusion 360, ANSYS, CNC, and 3D printing.",
        "Hands-on experience at American Air Filter (AAF), giving him strong exposure to industrial-quality engineering and manufacturing standards.",
        "Expertise in composites, automation, and embedded systems."
      ]
    },
    {
      name: "Mudavath Anil Kumar",
      role: "Full-stack & Embedded Systems Engineer",
      img: "/Team_Members_images/Anil_Kumar.webp",
      bio: [
        "Skilled full-stack and embedded systems engineer at Oxonix.",
        "With strong expertise in VLSI and embedded hardware, he contributes directly to Oxonix’s EV retrofitting, battery systems, and controller development.",
        "His problem-solving and debugging skills ensure that Oxonix delivers reliable, efficient, and user-focused technology solutions."
      ]
    },
    {
      name: "Eslavath Ramdas",
      role: "Simulation & Software Engineer",
      img: "/Team_Members_images/Ramdas.webp",
      bio: [
        "Skilled in Unity, C#, and real-time system modeling.",
        "He develops EV simulation tools, virtual training modules, and supports software automation.",
        "With experience in AI-driven simulations and full-stack web technologies, he helps enhance Oxonix’s R&D, testing workflow, and digital platforms."
      ]
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen transition-colors duration-300">
      <SEO
        title="About Oxonix | Pioneering Electric Vehicle Conversion Company in India"
        description="Learn about Oxonix, India's leading EV retrofitting startup recognized by DPIIT & Startup India. We transform 2-wheelers into electric vehicles."
        keywords={["electric vehicle conversion company India", "Oxonix story", "EV startup India", "DIPP226380", "EV certification India"]}
        canonicalUrl="https://oxonix.in/about"
      />
      {/* Header */}
      <div className="bg-white dark:bg-surface py-24 border-b border-gray-200 dark:border-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Who We <span className="text-primary">Are</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            { label: "Vehicles Retrofitted", value: 10, suffix: "" },
            { label: "CO2 Saved (Tonnes)", value: 7.88, suffix: "+" },
            { label: "Service Centers", value: 2, suffix: "+" },
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

          {/* CSS for Flip Animation */}
          <style>{`
            .perspective-1000 { perspective: 1000px; }
            .transform-style-3d { transform-style: preserve-3d; }
            .backface-hidden { backface-visibility: hidden; }
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
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
            }
            .flip-card-back {
              transform: rotateY(180deg);
            }
          `}</style>

          {/* Desktop View: Accordion */}
          <div className="hidden md:flex flex-row gap-4 h-[500px] max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                layout
                onClick={() => setActive(idx)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out ${active === idx ? 'flex-[3]' : 'flex-[1]'}`}
              >
                <img src={member.img} alt={member.name} className={`absolute inset-0 w-full h-full object-cover ${member.imgPos || 'object-top'}`} />
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${active === idx ? 'opacity-40' : 'opacity-80'}`}></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end overflow-hidden">
                  {active !== idx ? (
                    <div className="absolute inset-0 flex items-end justify-start p-8">
                      <div className="-rotate-90 origin-bottom-left mb-12 whitespace-nowrap transform translate-x-[-50%]">
                        <h3 className="text-2xl font-bold text-white tracking-wide">{member.name}</h3>
                        <p className="text-primary text-sm uppercase tracking-wider mt-1">{member.role}</p>
                      </div>
                    </div>
                  ) : (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/10 max-w-md relative z-10 w-full">
                      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <div className="space-y-2 mb-3 max-h-[140px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20">
                        {member.bio.map((point, i) => <p key={i} className="text-gray-200 text-sm flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></span> {point}</p>)}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View: Neon Flip Cards */}
          <div className="md:hidden grid grid-cols-1 gap-8 max-w-md mx-auto px-4">
            {team.map((member, idx) => (
              <div key={idx} className="group h-[400px] perspective-1000 cursor-pointer">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back bg-black rounded-2xl p-6 border border-primary/30 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5"></div>
                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">{member.name}</h3>
                    <p className="text-primary text-xs uppercase tracking-widest mb-4 relative z-10">{member.role}</p>
                    <div className="space-y-3 relative z-10 overflow-y-auto max-h-[220px] pr-2 scrollbar-thin scrollbar-thumb-primary/20">
                      {member.bio.map((point, i) => (
                        <div key={i} className="flex items-start gap-2 text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                          <p className="text-sm leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-primary py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-black">Join the Revolution</h2>
          <p className="text-black/80 max-w-2xl mx-auto mb-8 text-lg">Whether you are a vehicle owner looking to retrofit or an investor looking to partner, we want to hear from you.</p>
          <button onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`, '_blank')} className="bg-black text-white font-bold py-4 px-10 rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2 mx-auto shadow-xl">
            Contact Us <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;