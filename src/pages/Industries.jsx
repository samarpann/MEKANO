import React from 'react';
import { motion } from 'framer-motion';
import { 
    Factory, 
    FlaskConical, 
    FileText, 
    Construction, 
    Settings, 
    Workflow,
    ArrowRight,
    MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Industries = () => {
    const sectors = [
        {
            title: "Sugar Industry",
            icon: Factory,
            description: "Providing high-performance Boiler Mountings, Sluice Valves, and heavy-duty Induction Motors specifically designed for sugar mill crushing and process house operations.",
            image: "https://images.unsplash.com/photo-1613145005891-953da13f8f17?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Chemical Industry",
            icon: FlaskConical,
            description: "Corrosion-resistant Stainless Steel valves, Specialized Gland Packings, and Gaskets designed to handle hazardous and aggressive media with zero-leak integrity.",
            image: "https://images.unsplash.com/photo-1532187875605-1838d737003f?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Paper Industry",
            icon: FileText,
            description: "Offering premium Steam Traps, Flexible Pipes, and P.U. Fittings that ensure optimal utility management and zero downtime in continuous paper production lines.",
            image: "https://images.unsplash.com/photo-1605646194248-158fbb086036?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Steel & Metallurgy",
            icon: Construction,
            description: "Serving integrated steel plants with robust IBR-certified Gate Valves, Industrial Gears, and high-temperature jointing materials for extreme thermal environments.",
            image: "https://images.unsplash.com/photo-1544027993-37dbfe43552e?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Cement Plants",
            icon: Workflow,
            description: "Supplying rugged Helical Gearboxes, Three-Phase Electric Motors, and wear-resistant ball valves engineered for dusty and high-vibration quarry environments.",
            image: "https://images.unsplash.com/photo-1533100641151-6df7976e530c?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Engineering & Projects",
            icon: Settings,
            description: "One-stop sourcing solution for Project Consultants and EPC contractors, offering a comprehensive pipeline of MRO supplies for diverse industrial infrastructure projects.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const extraCategories = [
        { name: "Valves", count: 27, path: "/products?category=industrial-valves", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070" },
        { name: "Pipes & Fittings", count: 7, path: "/products?category=pipes-fittings", img: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&w=2070" },
        { name: "Pneumatics", count: 4, path: "/products", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2070" }
    ];

    return (
        <div className="bg-[#FAFBFD] min-h-screen">
            {/* HERO SECTION */}
            <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-[#001C3D]">
                <div className="absolute inset-0 opacity-20">
                    <img 
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
                        className="w-full h-full object-cover"
                        alt="Background"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001C3D]" />
                <div className="relative text-center z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter"
                    >
                        APPLICATIONS
                    </motion.h1>
                    <div className="flex items-center justify-center gap-2 text-white/60 font-black uppercase text-[10px] tracking-[0.3em]">
                        <Link to="/" className="hover:text-[#FFB302] transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-[#FFB302]">Applications</span>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                
                {/* INTRO HEADER */}
                <div className="mb-20">
                    <span className="text-[10px] font-black text-[#FFB302] uppercase tracking-[0.4em] mb-4 block">Industries Served</span>
                    <h2 className="text-4xl md:text-6xl font-black text-[#001C3D] tracking-tighter leading-[0.9]">
                        WHERE OUR <br />
                        <span className="text-[#001C3D]/40">PRODUCTS WORK.</span>
                    </h2>
                </div>

                {/* 3-COLUMN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {sectors.map((sector, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="w-16 h-16 bg-[#001C3D] rounded-2xl flex items-center justify-center text-[#FFB302] mb-8 group-hover:scale-110 transition-transform duration-500">
                                <sector.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-[#001C3D] uppercase tracking-tighter mb-4">{sector.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed mb-4 flex-grow">
                                {sector.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CATEGORY GRID */}
                <div className="mb-20">
                    <span className="text-[10px] font-black text-[#FFB302] uppercase tracking-[0.4em] mb-4 block">By Category</span>
                    <h2 className="text-4xl font-black text-[#001C3D] tracking-tighter uppercase">Application Mapping</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                    {extraCategories.map((cat, i) => (
                        <Link 
                            to={cat.path}
                            key={i}
                            className="relative h-96 group rounded-3xl overflow-hidden shadow-xl"
                        >
                            <img 
                                src={cat.img} 
                                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" 
                                alt={cat.name}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#001C3D] via-[#001C3D]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="h-[2px] w-8 bg-[#FFB302]" />
                                    <span className="text-[10px] font-black text-[#FFB302] uppercase tracking-widest">{cat.count} Products</span>
                                </div>
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">{cat.name}</h3>
                                <div className="flex items-center gap-2 text-white/0 group-hover:text-white transition-all duration-500 uppercase text-[10px] font-black tracking-widest">
                                    Explore Application <ArrowRight size={14} className="text-[#FFB302]" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CALL TO ACTION */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-[#001C3D] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB302]/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32" />
                    
                    <div className="relative z-10">
                        <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-[#FFB302] text-[10px] font-black uppercase tracking-[0.2em] mb-8">Got a specific requirement?</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-none">
                            TELL US YOUR <br />
                            <span className="text-[#FFB302]">APPLICATION.</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12 font-medium">
                            Share your media, Size and Pressure requirements with us and we will find the perfect engineering solution for your facility.
                        </p>
                        <Link to="/contact" className="bg-[#FFB302] text-[#001C3D] font-black px-12 py-5 rounded-2xl inline-flex items-center gap-3 hover:bg-white hover:scale-105 transition-all active:scale-95 group">
                            Request Expert Consultation
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Industries;
