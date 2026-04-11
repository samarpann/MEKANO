import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Package, Shield, Truck, Phone, Settings } from 'lucide-react';
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
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 relative"> {/* Added 'relative' here */}
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2">
                        <Settings className="w-8 h-8 text-primary-500" />
                        <div className="flex flex-col">
                            <span className="text-xl font-display font-bold text-white leading-none">MEKANO</span>
                            <span className="text-[10px] text-primary-500 font-bold tracking-widest leading-none">ENGINEERING</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.slice(0, 3).map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'text-primary-500' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div
                            className="group h-full flex items-center"
                            onMouseEnter={() => setIsMegaMenuOpen(true)}
                            onMouseLeave={() => setIsMegaMenuOpen(false)}
                        >
                            <button className="flex items-center space-x-1 nav-link group cursor-pointer py-4">
                                <span>Products</span>
                                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                            </button>

                            {/* MEGA MENU - Now anchored to the navbar container */}
                            <AnimatePresence>
                                {isMegaMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 15 }}
                                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[900px] bg-dark-lighter border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                                    >
                                        <div className="flex h-[480px]">
                                            {/* Left Sidebar */}
                                            <div className="w-1/3 bg-white/5 p-6 border-r border-white/10">
                                                <p className="text-[10px] font-bold text-primary-500 uppercase tracking-[0.2em] mb-6 px-2 opacity-60">Catalogue Categories</p>
                                                <div className="space-y-1">
                                                    {categories.map((cat) => (
                                                        <button
                                                            key={cat.id}
                                                            onMouseEnter={() => setActiveCategory(cat)}
                                                            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${activeCategory?.id === cat.id ? 'bg-primary-500 text-dark' : 'text-gray-400 hover:bg-white/5'
                                                                }`}
                                                        >
                                                            <span className="text-sm font-bold">{cat.name}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right Content */}
                                            <div className="w-2/3 p-8 bg-dark-lighter overflow-y-auto custom-scrollbar">
                                                {activeCategory && (
                                                    <div key={activeCategory.id}>
                                                        <div className="flex items-center justify-between mb-8">
                                                            <div>
                                                                <h3 className="text-2xl font-bold text-white mb-1">{activeCategory.name}</h3>
                                                                <p className="text-gray-500 text-xs">{activeCategory.description}</p>
                                                            </div>
                                                            <Link
                                                                to={`/products?category=${activeCategory.id}`}
                                                                className="px-4 py-2 rounded-full border border-primary-500/20 text-primary-500 text-[10px] font-bold hover:bg-primary-500 hover:text-dark transition-all uppercase tracking-widest"
                                                            >
                                                                View All
                                                            </Link>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-6">
                                                            {activeCategory.products.slice(0, 4).map((product) => (
                                                                <Link
                                                                    key={product.id}
                                                                    to={`/products/${product.id}`}
                                                                    className="group p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary-500/30 transition-all flex flex-col"
                                                                >
                                                                    <div className="aspect-[4/3] rounded-xl bg-dark overflow-hidden mb-4">
                                                                        <img
                                                                            src={product.image}
                                                                            alt={product.name}
                                                                            className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                                                        />
                                                                    </div>
                                                                    <h4 className="text-sm font-bold text-white group-hover:text-primary-500 transition-colors uppercase tracking-tight">{product.name}</h4>
                                                                    <span className="text-[10px] text-gray-500 mt-1 uppercase font-semibold">Authorized Dealer</span>
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
                                className={`nav-link ${location.pathname === link.path ? 'text-primary-500' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link to="/contact" className="glass-button py-2 px-5 text-sm">
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 bg-dark z-50 lg:hidden flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <Link to="/" className="flex items-center space-x-2">
                                <Settings className="w-8 h-8 text-primary-500" />
                                <span className="text-xl font-bold">MEKANO</span>
                            </Link>
                            <button onClick={() => setIsOpen(false)}><X size={32} /></button>
                        </div>

                        <div className="flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-2xl font-bold text-gray-400 hover:text-primary-500"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/products"
                                className="text-2xl font-bold text-gray-400 hover:text-primary-500"
                            >
                                Products
                            </Link>
                        </div>

                        <div className="mt-auto pt-10 border-t border-white/10">
                            <p className="text-sm text-gray-500 mb-4">Urgent Requirement?</p>
                            <a href="tel:+919911221772" className="text-xl font-bold text-primary-500">+91 9911221772</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
