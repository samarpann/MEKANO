import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/assets/hero/hero-1.png.jpg",
            title: "Cement & Heavy Process Industries",
            subtitle: "Authorized supply of high-abrasion resistant valves & motors.",
        },
        {
            image: "/assets/hero/hero-2.png.jpg",
            title: "Steel & Metallurgy Sector",
            subtitle: "High-integrity components for extreme furnace operations.",
        },
        {
            image: "/assets/hero/hero-3.png.jpg",
            title: "Oil, Gas & Energy Plants",
            subtitle: "Precision instrumentation and safety valve distributions.",
        },
        {
            image: "/assets/hero/hero-4.png.jpg",
            title: "Power Transmission",
            subtitle: "Industrial gearboxes and high-efficiency induction systems.",
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="bg-white min-h-screen">
            {/* POWERFUL HERO AREA */}
            <section className="relative h-screen min-h-[700px] overflow-hidden flex items-center bg-[#001C3D]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                    >
                        <img
                            src={slides[currentSlide].image}
                            alt="Mekano Industrial"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[12s] scale-105 opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#001C3D] via-[#001C3D]/60 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#001C3D] to-transparent opacity-80" />
                    </motion.div>
                </AnimatePresence>

                {/* MANUAL NAVIGATION ARROWS */}
                <button
                    onClick={prevSlide}
                    className="absolute left-8 z-50 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#FFB302] hover:text-[#001C3D] transition-all hidden md:block"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-8 z-50 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#FFB302] hover:text-[#001C3D] transition-all hidden md:block"
                >
                    <ChevronRight size={24} />
                </button>

                <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center z-20 w-full">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <motion.span className="bg-[#FFB302] text-[#001C3D] font-black uppercase tracking-[0.4em] text-[8px] px-5 py-2 rounded-full mb-8 inline-block shadow-2xl">
                            Engineering Desk since 1998
                        </motion.span>
                        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.95]">
                            {slides[currentSlide].title}
                        </h1>
                        <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-lg font-bold uppercase tracking-widest text-[11px]">
                            {slides[currentSlide].subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/products" className="bg-[#FFB302] text-[#001C3D] font-black py-4 px-10 text-[10px] uppercase tracking-[0.3em] rounded-xl flex items-center gap-3 hover:bg-white hover:scale-105 transition-all shadow-2xl group">
                                Open Portfolio
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* SLIDE INDICATORS */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0 flex items-center space-x-12 z-30">
                    <div className="flex space-x-3">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className={`h-1 rounded-full transition-all duration-700 ${currentSlide === i ? 'w-24 bg-[#FFB302]' : 'w-4 bg-white/20'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* NAVY STATS STRIP */}
            <section className="relative -mt-20 z-40 max-w-7xl mx-auto px-6">
                <div className="bg-[#001C3D] rounded-[40px] shadow-2xl border border-white/5 p-10 md:p-16 grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {[
                        { val: "25+", label: "Years Experience" },
                        { val: "500+", label: "Industry Partners" },
                        { val: "10k+", label: "Assets Indexed" },
                        { val: "24/7", label: "Consultation" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center lg:text-left border-r last:border-0 border-white/5 pr-8">
                            <h3 className="text-4xl font-black text-white mb-2 leading-none">{stat.val}</h3>
                            <p className="text-[#FFB302] uppercase text-[9px] font-black tracking-[0.3em]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
