import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Award, CheckCircle2, Factory, Zap, Building2, Truck } from 'lucide-react';

const Partners = () => {
    const categories = [
        {
            title: "Authorized Dealerships",
            brands: ["AUDCO", "L&T", "LEADER", "ZOLOTO", "CRI"],
            description: "Direct tie-ups with global leaders ensuring 100% genuine parts."
        },
        {
            title: "Strategic EPC Partners",
            brands: ["BHEL", "NTPC", "LARSEN & TOUBRO", "SIEMENS"],
            description: "Providing mission-critical supply chains for Asia's largest projects."
        }
    ];

    return (
        <div className="bg-white pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER - LIGHT & REFINED */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="badge mb-6">Our Ecosystem</span>
                    <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
                        Global <span className="text-amber-500 italic">Network</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed">
                        Mekano Engineering bridges the gap between the world's finest component
                        manufacturers and the high-tech industrial plants that need them.
                    </p>
                </div>

                {/* TRUST STATS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                    {[
                        { icon: Globe, t: "Global Brands", v: "50+" },
                        { icon: Shield, t: "Certifications", v: "Premium" },
                        { icon: Truck, t: "Supply Chain", v: "Pan-India" },
                        { icon: Award, t: "Trust Rating", v: "A-Class" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-[#FAFAFA] border border-slate-100 p-8 rounded-[40px] text-center hover:bg-white hover:shadow-2xl transition-all duration-500">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-500 mx-auto mb-4 border border-slate-100 shadow-sm">
                                <stat.icon size={24} />
                            </div>
                            <h4 className="text-4xl font-black text-slate-900 leading-none">{stat.v}</h4>
                            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-2">{stat.t}</p>
                        </div>
                    ))}
                </div>

                {/* BRAND SECTIONS */}
                <div className="space-y-16">
                    {categories.map((group, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[60px] border border-slate-100 p-10 md:p-20 shadow-2xl shadow-slate-200/50"
                        >
                            <div className="flex flex-col lg:flex-row gap-20">
                                <div className="lg:w-1/3">
                                    <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-none">{group.title}</h3>
                                    <p className="text-lg text-slate-500 font-medium">{group.description}</p>
                                    <div className="mt-10 flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest flex items-center">Verified OEM Distribution</p>
                                    </div>
                                </div>
                                <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-8">
                                    {group.brands.map((brand, j) => (
                                        <div key={j} className="aspect-video bg-slate-50 rounded-[35px] border border-slate-100 flex items-center justify-center p-8 group hover:bg-white hover:border-amber-500 transition-all duration-500 hover:shadow-xl">
                                            <p className="text-xl font-black text-slate-300 group-hover:text-amber-500 transition-colors tracking-tighter italic uppercase">{brand}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* BECOME A PARTNER CTA */}
                <div className="mt-24 text-center py-20 bg-slate-900 rounded-[60px] relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Expand Our <span className="text-amber-500">Reach</span></h2>
                        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-light">Are you an OEM or manufacturer looking for distribution in the Indian heavy industry market?</p>
                        <button className="primary-button py-5 px-14 text-xl">Join Our Network</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
