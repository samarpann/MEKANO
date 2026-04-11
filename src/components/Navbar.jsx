import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, MapPin, Clock, Phone, Settings, Mail } from 'lucide-react';
import { categories } from '../data/products';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(categories?.[0] || null);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setIsMegaMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Industries', path: '/industries' },
        { name: 'Partners', path: '/partners' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 transition-all duration-500">
            {/* TOP BAR - INSPIRED BY REF SCREENSHOT */}
            <div className={`hidden lg:block bg-[#001C3D] py-2 border-b border-white/5 transition-all duration-500 ${scrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold text-white/70 uppercase tracking-widest">
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center gap-2">
                            <MapPin size={12} className="text-[#FFB302]" />
                            <span>1st Floor, Ajmeri Gate, New Delhi - 110006</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={12} className="text-[#FFB302]" />
                            <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a href="mailto:info@mekano.in" className="flex items-center gap-2 hover:text-[#FFB302] transition-colors">
                            <Mail size={12} className="text-[#FFB302]" />
                            <span>info@mekano.in</span>
                        </a>
                        <div className="flex items-center gap-2">
                            <Phone size={12} className="text-[#FFB302]" />
                            <span>+91 9911221772</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN NAV */}
            <div className={`transition-all duration-500 ${scrolled ? 'bg-[#001C3D] shadow-2xl py-3' : 'bg-[#001C3D]/95 backdrop-blur-md py-5'}`}>
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center space-x-3 group bg-white p-2 px-4 rounded-xl shadow-lg">
                            <div className="w-8 h-8 bg-[#001C3D] rounded-lg flex items-center justify-center text-[#FFB302]">
                                <Settings size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black text-[#001C3D] leading-none tracking-tighter">MEKANO</span>
                                <span className="text-[8px] text-[#001C3D]/60 font-black tracking-widest leading-none">ENGINEERING</span>
                            </div>
                        </Link>

                        {/* Desktop Nav Links */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.slice(0, 3).map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-white/80 hover:text-[#FFB302] text-[11px] font-black uppercase tracking-widest transition-all ${location.pathname === link.path ? 'text-[#FFB302]' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div
                                className="group h-full flex items-center"
                                onMouseEnter={() => setIsMegaMenuOpen(true)}
                                onMouseLeave={() => setIsMegaMenuOpen(false)}
                            >
                                <button className="flex items-center space-x-1 text-white/80 hover:text-[#FFB302] text-[11px] font-black uppercase tracking-widest cursor-pointer py-4">
                                    <span>Products</span>
                                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                                </button>

                                {/* MEGA MENU - CUSTOM FOR NEW NAVY THEME */}
                                <AnimatePresence>
                                    {isMegaMenuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 15 }}
                                            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[1000px] bg-white border border-slate-100 rounded-[32px] shadow-[0_40px_80px_-15px_rgba(0,0,10,0.2)] overflow-hidden"
                                        >
                                            <div className="flex h-[520px]">
                                                <div className="w-1/3 bg-[#001C3D] p-10">
                                                    <p className="text-[10px] font-black text-[#FFB302] uppercase tracking-[0.3em] mb-8">Supply Catalog</p>
                                                    <div className="space-y-2">
                                                        {categories.map((cat) => (
                                                            <button
                                                                key={cat.id}
                                                                onMouseEnter={() => setActiveCategory(cat)}
                                                                className={`w-full text-left px-6 py-4 rounded-2xl transition-all duration-300 ${activeCategory?.id === cat.id ? 'bg-[#FFB302] text-[#001C3D] shadow-xl' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                                                            >
                                                                <span className="text-xs font-black uppercase tracking-tighter">{cat.name}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="w-2/3 p-12 bg-white overflow-y-auto custom-scrollbar">
                                                    {activeCategory && (
                                                        <div key={activeCategory.id}>
                                                            <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-50">
                                                                <h3 className="text-3xl font-black text-[#001C3D]">{activeCategory.name}</h3>
                                                                <Link to={`/products?category=${activeCategory.id}`} className="text-[#FFB302] text-[10px] font-black uppercase tracking-[0.2em] hover:scale-110 transition-transform">View All</Link>
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-8">
                                                                {activeCategory.products.slice(0, 4).map((product) => (
                                                                    <Link key={product.id} to={`/products/${product.id}`} className="group flex gap-5 items-center p-4 rounded-3xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                                                                        <div className="h-16 w-16 rounded-2xl bg-white border border-slate-100 overflow-hidden flex-shrink-0">
                                                                            <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                                                        </div>
                                                                        <h4 className="text-[11px] font-black text-[#001C3D] uppercase tracking-tighter line-clamp-2">{product.name}</h4>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {navLinks.slice(3).map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-white/80 hover:text-[#FFB302] text-[11px] font-black uppercase tracking-widest transition-all ${location.pathname === link.path ? 'text-[#FFB302]' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <Link to="/contact" className="bg-[#FFB302] text-[#001C3D] font-black py-3 px-8 rounded-xl text-[11px] uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-lg active:scale-95">
                                Get a Quote
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 bg-[#001C3D] z-50 lg:hidden flex flex-col p-10"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <span className="text-3xl font-black text-white italic">MEKANO</span>
                            <button onClick={() => setIsOpen(false)} className="text-white"><X size={32} /></button>
                        </div>
                        <div className="flex flex-col space-y-8">
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.path} className="text-4xl font-black text-white/40 hover:text-[#FFB302] transition-colors">{link.name}</Link>
                            ))}
                        </div>
                        <div className="mt-auto">
                            <p className="text-[#FFB302] font-black text-sm uppercase tracking-widest mb-4">Urgent Supply?</p>
                            <a href="tel:+919911221772" className="text-3xl font-black text-white">+91 9911221772</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
