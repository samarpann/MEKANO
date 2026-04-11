import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, ShieldCheck, Zap, Globe, HardHat, Warehouse, BarChart3, Settings } from 'lucide-react';
import { categories } from '../data/products';

const Home = () => {
    const stats = [
        { label: 'Years of Experience', value: '18+' },
        { label: 'Products in Range', value: '500+' },
        { label: 'Industrial Clients', value: '2500+' },
        { label: 'Authorized Brands', value: '10+' },
    ];

    const industries = [
        { name: 'Oil & Gas', icon: Globe },
        { name: 'Power Plants', icon: Zap },
        { name: 'Chemical Processing', icon: ShieldCheck },
        { name: 'Steel & Metallurgy', icon: HardHat },
        { name: 'Cement & Mining', icon: Warehouse },
        { name: 'Water Engineering', icon: BarChart3 },
    ];

    return (
        <div className="relative overflow-hidden bg-dark">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 hero-gradient">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 bg-fixed grayscale"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold text-primary-500 uppercase tracking-widest leading-none">Engineering Excellence Since 2006</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6 leading-[1.1]">
                            Precision Engineering for <span className="text-primary-500">Industry Leaders</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
                            Specializing in high-performance valves, automation, and power transmission products.
                            Delivering authorized industrial solutions from world-class brands across India.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/products" className="glass-button">
                                Explore Product Range
                            </Link>
                            <Link to="/contact" className="px-8 py-3 rounded-lg border border-white/10 text-white font-bold hover:bg-white/5 transition-all flex items-center gap-2">
                                Request a Quote <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-y border-white/5 bg-dark-lighter">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <h3 className="text-4xl md:text-5xl font-display font-extrabold text-primary-500 mb-2">{stat.value}</h3>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Overview */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-xs font-bold text-primary-500 uppercase tracking-[0.3em] mb-4">The Mekano Advantage</h2>
                            <h3 className="text-4xl font-display font-bold text-white mb-6 leading-tight">
                                Your Trusted Partner in <br />
                                <span className="text-primary-500">Industrial Supply Chain</span>
                            </h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                We bridge the gap between world-class engineering brands and the specialized needs of Indian industries.
                                As authorized dealers, we ensure 100% genuine products, competitive factory-pricing, and
                                technical expertise that helps you select the right solution for every application.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Authorized Dealer of Shenco, Indef, FESTO & L&T',
                                    'Verified IndiaMART Seller with 4.6+ Rating',
                                    'Technical Consultation & Project Support',
                                    'Ex-Stock Availability & Pan-India Logistics'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
                                            <ChevronRight size={14} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/about" className="text-primary-500 font-bold hover:underline flex items-center gap-2">
                                Learn More About Us <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden glass-card border-white/5 relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Industrial Excellence"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-500/10 blur-[100px] rounded-full"></div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-500/10 blur-[100px] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories Preview */}
            <section className="py-24 bg-dark-lighter">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-xs font-bold text-primary-500 uppercase tracking-[0.3em] mb-4">Core Range</h2>
                        <h3 className="text-4xl font-display font-bold text-white">Engineered Solutions</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories?.map((cat, i) => (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group glass-card overflow-hidden hover:border-primary-500/30 transition-all duration-500"
                            >
                                <div className="aspect-[16/9] overflow-hidden bg-dark">
                                    <img
                                        src={cat.products?.[0]?.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                                    />
                                </div>
                                <div className="p-8">
                                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">{cat.name}</h4>
                                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">{cat.description}</p>
                                    <Link
                                        to={`/products?category=${cat.id}`}
                                        className="inline-flex items-center gap-2 text-xs font-bold text-primary-500 uppercase tracking-widest group-hover:gap-3 transition-all"
                                    >
                                        Explore Category <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-xs font-bold text-primary-500 uppercase tracking-[0.3em] mb-12">Industries We Serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {industries.map((ind, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="group flex flex-col items-center gap-4"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500 group-hover:bg-primary-500 group-hover:text-dark transition-all duration-300">
                                    <ind.icon size={32} />
                                </div>
                                <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{ind.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
