import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, History, Globe, Shield, CheckCircle2, Factory, Zap, Building2 } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* INDUSTRIAL NAVY HEADER */}
            <section className="bg-[#001C3D] pt-40 pb-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-[#FFB302] font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Our History</span>
                        <h1 className="text-5xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
                            Established <span className="text-[#FFB302]">1998</span>
                        </h1>
                        <p className="text-white/50 text-xl font-medium max-w-2xl mx-auto leading-relaxed uppercase tracking-widest">
                            Built on the pillars of engineering integrity and supply chain precision.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-32">
                <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
                    <div className="lg:w-1/2">
                        <span className="badge mb-6">Mekano Engineering</span>
                        <h2 className="text-5xl md:text-7xl font-black text-[#001C3D] mb-8 tracking-tighter uppercase">
                            Providing <span className="text-[#FFB302] italic">Structural</span> Power
                        </h2>
                        <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                            With over two decades of uncompromising excellence, we have become the most trusted name in the distribution of industrial valves, pipes, and electrical machinery for India's heavy industry.
                        </p>
                        <Link to="/contact" className="primary-button inline-block">Work with us</Link>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="aspect-square bg-slate-50 rounded-[60px] overflow-hidden border-8 border-slate-50 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="p-16 bg-[#001C3D] rounded-[60px] shadow-2xl">
                        <Target className="text-[#FFB302] mb-8" size={56} />
                        <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">Mission</h3>
                        <p className="text-white/50 text-lg leading-relaxed font-light italic">To bridge the gap between global manufacturers and India's growing infrastructure needs.</p>
                    </div>
                    <div className="p-16 bg-[#FAFAFA] rounded-[60px] border border-slate-100">
                        <History className="text-[#001C3D] mb-8" size={56} />
                        <h3 className="text-4xl font-black text-[#001C3D] mb-6 uppercase tracking-tighter">Vision</h3>
                        <p className="text-slate-400 text-lg leading-relaxed font-medium">Leading the supply chain through ISO-standardized logistics and authorized dealerships.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
