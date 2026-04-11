import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Droplets, Zap, Building2, Flame, Ship } from 'lucide-react';

const Industries = () => {
    const industries = [
        {
            name: 'Oil & Gas Refineries',
            icon: Droplets,
            desc: 'Critical flow control and instrumentation for upstream and downstream operations.',
            image: 'https://images.unsplash.com/photo-1542274368-443d694d79aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'Power Generation',
            icon: Zap,
            desc: 'High-pressure steam valves and automation components for thermal and hydro plants.',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'Chemical & Pharma',
            icon: Flame,
            desc: 'Corrosion-resistant SS valves and hygienic fittings for sensitive process lines.',
            image: 'https://images.unsplash.com/photo-1532187875605-7fe358041cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'Steel & Metallurgy',
            icon: Factory,
            desc: 'Heavy-duty material handling and power transmission for extreme environments.',
            image: 'https://images.unsplash.com/photo-1516937622178-745583720b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'Cement Industry',
            icon: Building2,
            desc: 'Lifting solutions and gearboxes engineered for continuous bulk handling.',
            image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'Marine & Shipbuilding',
            icon: Ship,
            desc: 'Certified marine valves and specialized piping for naval and commercial vessels.',
            image: 'https://images.unsplash.com/photo-1494412574743-0194851782c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
    ];

    return (
        <div className="pt-32 pb-24 bg-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20">
                    <h1 className="text-5xl font-display font-bold text-white mb-6">Industries We Serve</h1>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        Our products form the backbone of several mission-critical sectors across India.
                        We provide specialized engineering solutions tailored to the unique challenges of each industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative rounded-3xl overflow-hidden glass-card border-none h-[400px]"
                        >
                            <img
                                src={ind.image}
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
                                alt={ind.name}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent p-8 flex flex-col justify-end">
                                <div className="w-12 h-12 rounded-2xl bg-primary-500/20 text-primary-500 flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-dark transition-all duration-300">
                                    <ind.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{ind.name}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    {ind.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Industries;
