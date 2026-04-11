import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../data/products';
import { ShieldCheck, Truck, Clock, ArrowLeft, Download, MessageSquare, Phone } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();

    const product = categories.flatMap(c => c.products).find(p => p.id === parseInt(id));
    const category = categories.find(c => c.products.some(p => p.id === parseInt(id)));

    if (!product) return (
        <div className="pt-40 text-center">
            <h2 className="text-2xl text-white">Product not found</h2>
            <Link to="/products" className="text-primary-500 underline mt-4 inline-block">Back to products</Link>
        </div>
    );

    const whatsappNumber = "919911221772";
    const whatsappMessage = encodeURIComponent(`Hello Mekano Engineering, I am interested in ${product.name}. Please provide a quote and technical details.`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <div className="pt-32 pb-24 bg-dark">
            <div className="max-w-7xl mx-auto px-6">
                <Link to="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-500 mb-12 transition-colors">
                    <ArrowLeft size={16} /> Back to Products
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="aspect-square bg-dark-lighter rounded-3xl border border-white/10 overflow-hidden"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    <div>
                        <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                            {category?.name}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tight">{product.name}</h1>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            {product.description} Specialized components engineered for professional industrial applications.
                            High-quality mechanical performance for demanding industrial environments.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-white/5 border border-white/5">
                                <ShieldCheck className="text-primary-500 w-6 h-6" />
                                <span className="text-white text-xs font-bold uppercase">Certified</span>
                                <span className="text-gray-500 text-[10px]">IBR & ISO Approved</span>
                            </div>
                            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-white/5 border border-white/5">
                                <Truck className="text-primary-500 w-6 h-6" />
                                <span className="text-white text-xs font-bold uppercase">Delivery</span>
                                <span className="text-gray-500 text-[10px]">Pan-India Logistics</span>
                            </div>
                            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-white/5 border border-white/5">
                                <Clock className="text-primary-500 w-6 h-6" />
                                <span className="text-white text-xs font-bold uppercase">Lead Time</span>
                                <span className="text-green-500 text-[10px]">In-Stock Ready</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-12">
                            <h3 className="text-white font-bold opacity-50 uppercase tracking-widest text-xs mb-4">Key Specifications</h3>
                            <div className="grid grid-cols-2 gap-y-4">
                                {[
                                    { label: 'Material', value: 'Carbon Steel / CI / SS' },
                                    { label: 'Pressure Rating', value: 'PN10, PN16, Class 150-1500' },
                                    { label: 'Sizes', value: '15mm to 600mm' },
                                    { label: 'Standard', value: 'API / BS / DIN / IS' },
                                ].map((spec, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter">{spec.label}</span>
                                        <span className="text-gray-300 text-sm">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-10 border-t border-white/5">
                            <a
                                href={whatsappLink}
                                target="_blank" rel="noreferrer"
                                className="glass-button flex items-center gap-2 group"
                            >
                                <MessageSquare size={18} className="transition-transform group-hover:scale-125" />
                                Get Quote on WhatsApp
                            </a>
                            <button className="px-8 py-3 rounded-lg border border-white/10 text-white font-bold hover:bg-white/5 transition-all flex items-center gap-2">
                                <Download size={18} /> Datasheet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
