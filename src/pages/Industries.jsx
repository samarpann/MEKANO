import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle2, Factory, Globe, Zap, Building2, FlaskConical } from 'lucide-react';

const Industries = () => {
    const sectors = [
        {
            title: "Cement & Mining",
            icon: Factory,
            description: "High-abrasion resistant valves, specialized gearboxes, and heavy-duty induction motors designed for 24/7 quarry operations.",
            image: "https://images.unsplash.com/photo-1541888941295-94ed3da5139a?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Steel & Metallurgy",
            icon: Building2,
            description: "Precision components for cooling towers and high-temperature blast furnace environments, ensuring melt-integrity.",
            image: "https://images.unsplash.com/photo-1534067783941-51c9c23eccfd?q=80&w=2069&auto=format&fit=crop"
        },
        {
            title: "Oil, Gas & Energy",
            icon: Zap,
            description: "IBR certified valves and pressure instruments for refinery automation and hazardous chemical transport.",
            image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Pharmaceuticals",
            icon: FlaskConical,
            description: "Sanitary grade stainless steel fittings and precision flow meters for sterile processing environments.",
            image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=2069&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-white pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER - LIGHT & MODERN */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <span className="badge mb-6">Vertical specializations</span>
                    <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
                        Sectors We <span className="text-amber-500 italic">Power</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-medium">Providing mission-critical engineering assets across the world's most demanding industrial sectors.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {sectors.map((sector, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="bg-[#FAFAFA] rounded-[50px] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500">
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={sector.image}
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                        alt={sector.title}
                                    />
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                                    <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-xl">
                                        <sector.icon className="text-amber-500" size={32} />
                                    </div>
                                </div>
                                <div className="p-10 md:p-14">
                                    <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">{sector.title}</h3>
                                    <p className="text-slate-500 text-lg mb-10 font-medium leading-relaxed">{sector.description}</p>
                                    <div className="flex items-center gap-4 py-6 border-t border-slate-200">
                                        <CheckCircle2 className="text-amber-500" size={20} />
                                        <span className="text-xs font-black text-slate-800 uppercase tracking-widest">Industry standard certified</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Industries;
