import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageSquare, ShieldCheck, Truck, Scale, ChevronRight, Package, CheckCircle2 } from 'lucide-react';
import { categories } from '../data/products';

const ProductDetail = () => {
    const { id } = useParams();

    // Find product in data
    const product = categories
        .flatMap(cat => cat.products)
        .find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="pt-40 pb-24 text-center bg-white min-h-screen">
                <h2 className="text-3xl font-black text-slate-900 mb-6">Component Not Indexed</h2>
                <Link to="/products" className="primary-button inline-block">Return to Portfolio</Link>
            </div>
        );
    }

    const whatsappNumber = "919911221772";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello Mekano Engineering, I am interested in ${product.name}. Please provide a quote and technical details.`;

    return (
        <div className="pt-32 pb-24 bg-[#FAFAFA] min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* BREADCRUMB - CLEAN LIGHT */}
                <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] mb-12 text-slate-400">
                    <Link to="/products" className="hover:text-amber-500 transition-colors">Portfolio</Link>
                    <ChevronRight size={12} />
                    <span className="text-slate-900 truncate max-w-[200px]">{product.name}</span>
                </div>

                <div className="bg-white rounded-[50px] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden">
                    <div className="flex flex-col lg:flex-row min-h-[600px]">

                        {/* LEFT - IMAGE VIEWER */}
                        <div className="lg:w-1/2 bg-slate-50 p-12 border-r border-slate-50">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="aspect-square bg-white rounded-[40px] border border-slate-200 shadow-xl overflow-hidden p-8"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain mix-blend-multiply"
                                />
                            </motion.div>
                            <div className="mt-12 grid grid-cols-3 gap-6 opacity-40">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="aspect-square bg-white border border-slate-200 rounded-2xl animate-pulse" />
                                ))}
                            </div>
                        </div>

                        {/* RIGHT - TECHNICAL DETAILS */}
                        <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <span className="badge mb-6">Industrial Grade Asset</span>
                                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-none">
                                    {product.name}
                                </h1>
                                <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                                    {product.description || "Premium industrial component engineered for high-performance applications and extreme operational conditions."}
                                </p>

                                <div className="space-y-4 mb-12">
                                    {[
                                        { icon: ShieldCheck, text: "Authorized Distributor Warranty", color: "text-amber-500" },
                                        { icon: CheckCircle2, text: "Compliant with ISO & ASTM Standards", color: "text-green-500" },
                                        { icon: Truck, text: "Global Logistics & Transit Support", color: "text-blue-500" }
                                    ].map((feat, i) => (
                                        <div key={i} className="flex items-center gap-4 text-sm font-bold text-slate-700">
                                            <feat.icon className={`${feat.color} w-5 h-5`} />
                                            <span>{feat.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 mb-12">
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-green-500 hover:bg-green-600 text-white font-black py-5 px-10 rounded-3xl transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-4 group flex-grow text-sm uppercase tracking-widest"
                                    >
                                        <MessageSquare size={20} />
                                        Request Quotation
                                    </a>
                                    <button className="bg-slate-900 hover:bg-slate-800 text-white font-black py-5 px-10 rounded-3xl transition-all flex items-center justify-center gap-4 text-sm uppercase tracking-widest">
                                        Specifications
                                    </button>
                                </div>

                                <div className="pt-10 border-t border-slate-100 grid grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Category Sector</p>
                                        <p className="text-sm font-bold text-slate-800">{product.sub}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Delivery Status</p>
                                        <p className="text-sm font-bold text-green-600 uppercase tracking-tighter">In Ready Stock</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* ADDITIONAL INFO - CLEAN LIGHT */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { t: "Engineering Precision", d: "Designed to meet the tightest industrial tolerances for seamless plant integration." },
                        { t: "Material Integrity", d: "Cast from high-grade industrial metals verified through non-destructive testing." },
                        { t: "Scalable Orders", d: "We support both urgent breakdown requirements and large-scale project supply." }
                    ].map((info, i) => (
                        <div key={i} className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/40">
                            <h4 className="text-lg font-black text-slate-900 mb-4">{info.t}</h4>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">{info.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
