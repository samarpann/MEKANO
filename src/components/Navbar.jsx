import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, MapPin, Clock, Phone, Settings, Mail } from 'lucide-react';
import { categories } from '../data/products';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(categories?.[0] || null);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [navBottom, setNavBottom] = useState(80);
    const totalProducts = categories.reduce((acc, cat) => acc + cat.products.length, 0);
    const location = useLocation();
    const closeTimer = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track navbar height so the fixed dropdown aligns directly below it
    useEffect(() => {
        const updateNavBottom = () => {
            if (navRef.current) {
                setNavBottom(navRef.current.getBoundingClientRect().bottom);
            }
        };
        updateNavBottom();
        window.addEventListener('scroll', updateNavBottom);
        window.addEventListener('resize', updateNavBottom);
        return () => {
            window.removeEventListener('scroll', updateNavBottom);
            window.removeEventListener('resize', updateNavBottom);
        };
    }, [scrolled]);

    useEffect(() => {
        setIsOpen(false);
        setIsMegaMenuOpen(false);
    }, [location]);

    const handleMouseEnterProducts = () => {
        clearTimeout(closeTimer.current);
        setIsMegaMenuOpen(true);
    };

    const handleMouseLeaveAll = () => {
        closeTimer.current = setTimeout(() => setIsMegaMenuOpen(false), 200);
    };

    const handleMouseEnterMenu = () => {
        clearTimeout(closeTimer.current);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Industries', path: '/industries' },
        { name: 'Partners', path: '/partners' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav ref={navRef} className="fixed w-full z-50 transition-all duration-500">
            {/* TOP BAR */}
            <div className={`hidden lg:block bg-[#001C3D] py-2 border-b border-white/5 transition-all duration-500 ${scrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold text-white/70 uppercase tracking-widest">
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center gap-2">
                            <MapPin size={12} className="text-[#FFB302]" />
                            <span>1st Floor, Ajmeri Gate, New Delhi - 110006</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={12} className="text-[#FFB302]" />
                            <span>Mon - Sat: 9:00 AM - 5:00 PM</span>
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
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center group">
                            <div className="bg-white p-2 rounded-xl shadow-lg border border-slate-100 h-20 w-56 flex items-center justify-center">
                                <img 
                                    src="https://mekanoengineers.netlify.app/assets/mekano-wihout-bg.png" 
                                    alt="MEKANO Logo"
                                    className="h-16 w-auto object-contain transform scale-[1.35]"
                                />
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

                            {/* Products trigger */}
                            <div
                                onMouseEnter={handleMouseEnterProducts}
                                onMouseLeave={handleMouseLeaveAll}
                            >
                                <button className={`flex items-center space-x-1 text-[11px] font-black uppercase tracking-widest cursor-pointer py-4 transition-colors ${isMegaMenuOpen ? 'text-[#FFB302]' : 'text-white/80 hover:text-[#FFB302]'}`}>
                                    <span>Products</span>
                                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                                </button>
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

            {/*
                MEGA MENU — uses position:fixed so it is ALWAYS centered
                relative to the viewport, never affected by parent containers.
                Top is measured from the actual bottom of the navbar via useRef.
            */}
            <AnimatePresence>
                {isMegaMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        onMouseEnter={null}
                        onMouseLeave={null}
                        style={{
                            position: 'fixed',
                            top: navBottom,
                            left: 0,
                            right: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '0 16px',
                            zIndex: 9999,
                            pointerEvents: 'none' // Key: outer wrapper is invisible to mouse
                        }}
                    >
                        <div 
                            onMouseEnter={handleMouseEnterMenu}
                            onMouseLeave={handleMouseLeaveAll}
                            className="w-[860px] max-w-[calc(100vw-32px)] bg-white border border-slate-100 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,20,0.25)] overflow-hidden pointer-events-auto"
                        >
                            <div className="flex h-[480px]">
                                {/* Left: Category list */}
                                <div className="w-[280px] flex-shrink-0 bg-[#001C3D] p-8 flex flex-col justify-center">
                                    <div className="flex items-center justify-between mb-6">
                                        <p className="text-[10px] font-black text-[#FFB302] uppercase tracking-[0.3em]">Supply Catalog</p>
                                        <span className="bg-white/10 text-white/50 text-[9px] px-2 py-0.5 rounded-full font-bold">{totalProducts} Total</span>
                                    </div>
                                    <div className="space-y-1">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat.id}
                                                onMouseEnter={() => setActiveCategory(cat)}
                                                className={`w-full text-left px-5 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group/btn ${
                                                    activeCategory?.id === cat.id
                                                        ? 'bg-[#FFB302] text-[#001C3D] shadow-lg'
                                                        : 'text-white/60 hover:text-white hover:bg-white/10'
                                                }`}
                                            >
                                                <span className="text-[11px] font-black uppercase tracking-tight">{cat.name}</span>
                                                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${
                                                    activeCategory?.id === cat.id ? 'bg-[#001C3D]/10' : 'bg-white/5 text-white/40'
                                                }`}>
                                                    {cat.products.length}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: Product grid — vertically + horizontally centered */}
                                <div className="flex-1 flex items-center justify-center p-8 bg-white">
                                    <AnimatePresence mode="wait">
                                        {activeCategory && (
                                            <motion.div
                                                key={activeCategory.id}
                                                initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                transition={{ duration: 0.15 }}
                                                className="w-full"
                                            >
                                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                                                    <h3 className="text-xl font-black text-[#001C3D]">{activeCategory.name}</h3>
                                                    <Link
                                                        to={`/products?category=${activeCategory.id}`}
                                                        className="text-[#FFB302] text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
                                                    >
                                                        View All →
                                                    </Link>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {activeCategory.products.slice(0, 6).map((product) => (
                                                        <Link
                                                            key={product.id}
                                                            to={`/products/${product.id}`}
                                                            className="group flex gap-4 items-center p-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200"
                                                        >
                                                            <div className="h-14 w-14 rounded-xl bg-slate-50 border border-slate-100 overflow-hidden flex-shrink-0">
                                                                <img
                                                                    src={product.image}
                                                                    alt={product.name}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                />
                                                            </div>
                                                            <h4 className="text-[11px] font-black text-[#001C3D] uppercase tracking-tight leading-tight line-clamp-2">{product.name}</h4>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

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
