import React from 'react';
import { motion } from 'framer-motion';
import { 
    Award, 
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
    const brands = [
        { 
            name: "Shenco", 
            logo: "https://mekanoengineers.netlify.app/assets/partener-logo/authorised-channel-partener/shenco.png",
            description: "Authorised Specialist for flow control solutions" 
        },
        { 
            name: "Havells", 
            logo: "https://mekanoengineers.netlify.app/assets/partener-logo/authorised-channel-partener/havells.png",
            description: "Industrial motors and electrical components" 
        },
        { 
            name: "Spitmaan", 
            logo: "https://mekanoengineers.netlify.app/assets/partener-logo/authorised-channel-partener/spitmaan.png",
            description: "High-performance jointing and packing materials" 
        },
        { 
            name: "Shanthi Gears", 
            logo: "https://mekanoengineers.netlify.app/assets/partener-logo/authorised-channel-partener/shanti-gears.gif",
            description: "Premium industrial gearboxes and helical gears" 
        },
        { 
            name: "Sant", 
            logo: "https://mekanoengineers.netlify.app/assets/partener-logo/authorised-channel-partener/sant.png",
            description: "Trusted name in industrial valves and fittings" 
        },
        { 
            name: "Diamond", 
            logo: "https://mekanoengineers.netlify.app/assets/partener-logo/authorised-channel-partener/diamond.jpg",
            description: "Superior industrial chains and transmission parts" 
        },
        { 
            name: "Sap", 
            logo: "https://mekanoengineers.netlify.app/assets/partener-logo/authorised-channel-partener/sap.png",
            description: "Specialized engineering components" 
        },
        { 
            name: "Jindal Hisar", 
            logo: "https://mekanoengineers.netlify.app/assets/partener-logo/authorised-channel-partener/jindal-hisar.png",
            description: "Premium GI and CS pipes manufacturer" 
        },
        { 
            name: "Casco", 
            logo: "https://mekanoengineers.netlify.app/assets/partener-logo/authorised-channel-partener/casco.png",
            description: "Material handling and lifting equipment" 
        }
    ];

    return (
        <div className="bg-[#FAFBFD] min-h-screen">
            {/* HERO SECTION */}
            <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-[#001C3D]">
                <div className="absolute inset-0 opacity-20">
                    <img 
                        src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop" 
                        className="w-full h-full object-cover"
                        alt="Partners Background"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001C3D]" />
                <div className="relative text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter"
                    >
                        OUR PARTNERS
                    </motion.h1>
                    <div className="flex items-center justify-center gap-2 text-white/60 font-black uppercase text-[10px] tracking-[0.3em]">
                        <Link to="/" className="hover:text-[#FFB302] transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-[#FFB302]">Our Partners</span>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                
                {/* SECTION HEADER */}
                <div className="text-center mb-20">
                    <div className="inline-flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-black text-[#001C3D] uppercase tracking-tighter mb-2">
                            Authorized Dealers
                        </h2>
                        <div className="h-1.5 w-32 bg-[#FFB302] rounded-full" />
                    </div>
                    <p className="text-slate-500 font-medium text-lg mt-8 max-w-2xl mx-auto">
                        We represent the world’s leading engineering brands, providing you direct access to 
                        genuine, high-performance industrial components.
                    </p>
                </div>

                {/* LOGO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {brands.map((brand, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 text-center group flex flex-col items-center"
                        >
                            <div className="h-24 w-full flex items-center justify-center mb-6">
                                <img 
                                    src={brand.logo} 
                                    alt={brand.name}
                                    className="max-h-full max-w-[200px] object-contain group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                                />
                            </div>
                            <h4 className="text-[#001C3D] font-black uppercase text-[13px] tracking-widest mb-3">
                                {brand.name}
                            </h4>
                            <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                {brand.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* ORANGE CTA BAR */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-[#FFB302] rounded-[30px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-[#FFB302]/20"
                >
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl font-black text-[#001C3D] tracking-tighter leading-none mb-2">
                            NEED OFFICIAL PRICING & AVAILABILITY?
                        </h2>
                        <p className="text-white font-black text-sm uppercase tracking-widest opacity-80">
                            Get direct access to our authorized dealership quotes
                        </p>
                    </div>
                    <Link to="/contact" className="bg-[#001C3D] text-[#FFB302] font-black px-10 py-5 rounded-2xl flex items-center gap-3 hover:bg-white hover:scale-105 transition-all group">
                        CONTACT US NOW
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Partners;
