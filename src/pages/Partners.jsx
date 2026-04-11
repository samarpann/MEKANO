import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Partners = () => {
    const partners = [
        { name: 'Shenco Valves', type: 'Authorized Dealer', highlight: 'Industrial & Marine Valves' },
        { name: 'Indef', type: 'Stockist', highlight: 'Lifting & Material Handling' },
        { name: 'FESTO', type: 'Channel Partner', highlight: 'Pneumatic & Automation' },
        { name: 'L&T', type: 'Authorized Partner', highlight: 'Switchgears & Valves' },
        { name: 'Audco', type: 'Key Distributor', highlight: 'API Valves' },
        { name: 'Sant Valves', type: 'Stockist', highlight: 'Boiler Mountings' },
        { name: 'Diamond', type: 'Channel Partner', highlight: 'Transmission Chains' },
        { name: 'Havells', type: 'Associate Dealer', highlight: 'IE2 & IE3 Motors' },
    ];

    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h1 className="text-5xl font-display font-bold text-white mb-6 uppercase tracking-wider">Authorized Brand Partnerships</h1>
                    <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Our reputation is built on the brands we represent. We maintain long-standing relationships
                        with global engineering leaders to provide you with authentic, warranty-backed products.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {partners.map((partner, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8 }}
                            className="p-8 glass-card text-center border-white/5 bg-white/5"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto mb-6 text-primary-500">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                            <p className="text-primary-500 text-[10px] font-bold uppercase tracking-widest mb-4">{partner.type}</p>
                            <p className="text-gray-500 text-sm italic">Focus: {partner.highlight}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 p-12 bg-dark-lighter rounded-[3rem] border border-white/5">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-white mb-6">Why Partner with Mekano?</h2>
                            <div className="space-y-6">
                                {[
                                    { title: '100% Genuine Inventory', desc: 'Direct sourcing from manufacturers ensures zero counterfeits.' },
                                    { title: 'Full Technical Support', desc: 'Our engineers are factory-trained on the products we sell.' },
                                    { title: 'Project Compliance', desc: 'Full certification documentation provided for all IBR and project orders.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="shrink-0 w-6 h-6 rounded-full bg-primary-500/20 text-primary-500 flex items-center justify-center mt-1">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">{item.title}</h4>
                                            <p className="text-gray-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden hover:scale-105 transition-transform">
                                <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=400" className="w-full h-full object-cover opacity-50" alt="Engine" />
                            </div>
                            <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden translate-y-8 hover:scale-105 transition-transform">
                                <img src="https://images.unsplash.com/photo-1542315260-8488e146740f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=400" className="w-full h-full object-cover opacity-50" alt="Valve" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
