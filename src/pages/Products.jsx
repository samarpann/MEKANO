import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, MessageSquare, PackageSearch, LayoutGrid, List } from 'lucide-react';
import { categories } from '../data/products';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryId = searchParams.get('category');

    const [activeCategory, setActiveCategory] = useState(categoryId || 'all');
    const [activeSubCategory, setActiveSubCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (categoryId) {
            setActiveCategory(categoryId);
            setActiveSubCategory('All');
        }
    }, [categoryId]);

    const currentCategoryData = categories.find(c => c.id === activeCategory);
    const subCategories = currentCategoryData?.subCategories || ["All"];

    const filteredProducts = categories
        .filter(cat => activeCategory === 'all' || cat.id === activeCategory)
        .flatMap(cat => cat.products)
        .filter(prod => activeSubCategory === 'All' || prod.sub === activeSubCategory)
        .filter(prod => prod.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const toggleMainCategory = (id) => {
        setActiveCategory(id);
        setActiveSubCategory('All');
        setSearchParams({ category: id });
    };

    const whatsappNumber = "919911221772";

    return (
        <div className="bg-[#FAFAFA] min-h-screen">
            {/* INDUSTRIAL NAVY HEADER - AS PER REF SCREENSHOT */}
            <section className="bg-[#001C3D] pt-40 pb-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-2xl"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-1 bg-[#FFB302]" />
                                <span className="text-[#FFB302] font-black uppercase tracking-[0.4em] text-[10px]">Supply Portfolio</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
                                {activeCategory === 'all' ? 'All Inventory' : currentCategoryData?.name}
                            </h1>
                            <p className="text-white/60 text-lg font-medium max-w-lg">
                                ISI-marked industrial components and high-integrity engineering assets.
                            </p>
                        </motion.div>

                        <div className="relative w-full md:w-[450px]">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5 focus-within:text-[#FFB302] transition-colors" />
                            <input
                                type="text"
                                placeholder="Search inventory..."
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-8 text-white focus:outline-none focus:ring-4 focus:ring-[#FFB302]/20 focus:border-[#FFB302]/50 transition-all font-bold placeholder:text-white/20"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 border-[40px] border-white/5 rounded-full" />
            </section>

            {/* FILTER BAR - INSPIRED BY REF */}
            <div className="sticky top-20 z-30 bg-white border-b border-slate-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center gap-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-4">Select Group:</span>
                    <button
                        onClick={() => toggleMainCategory('all')}
                        className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${activeCategory === 'all' ? 'bg-[#001C3D] text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                    >
                        All
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => toggleMainCategory(cat.id)}
                            className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${activeCategory === cat.id ? 'bg-[#001C3D] text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* SIDEBAR SUB-FILTERS */}
                    <aside className="lg:w-72 shrink-0">
                        <div className="bg-white border border-slate-100 p-8 rounded-[40px] shadow-2xl shadow-slate-200/40">
                            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-10 pb-4 border-b border-slate-50 flex items-center justify-between">
                                Specific Types
                                <SlidersHorizontal size={14} className="text-[#FFB302]" />
                            </h4>
                            <div className="space-y-2">
                                {subCategories.map((sub) => (
                                    <button
                                        key={sub}
                                        onClick={() => setActiveSubCategory(sub)}
                                        className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 text-[11px] font-bold uppercase tracking-tight ${activeSubCategory === sub ? 'bg-[#FFB302] text-[#001C3D]' : 'text-slate-500 hover:bg-slate-50 hover:text-[#001C3D]'}`}
                                    >
                                        {sub}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* PRODUCT LISTING */}
                    <div className="flex-grow">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                            <AnimatePresence mode='popLayout'>
                                {filteredProducts.map((product) => (
                                    <motion.div
                                        layout
                                        key={product.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="group"
                                    >
                                        <div className="bg-white rounded-[40px] border border-slate-100 p-4 hover:shadow-2xl hover:border-[#FFB302]/20 transition-all duration-500">
                                            <Link to={`/products/${product.id}`} className="block aspect-[4/3] bg-slate-50 rounded-[30px] overflow-hidden relative mb-6">
                                                <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[8px] font-black text-[#001C3D] uppercase tracking-widest border border-slate-100">
                                                    ISI Certified
                                                </div>
                                            </Link>
                                            <div className="px-4 pb-4">
                                                <h4 className="text-lg font-black text-[#001C3D] leading-tight mb-2 group-hover:text-[#FFB302] transition-colors">{product.name}</h4>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">{product.sub}</p>
                                                <div className="flex items-center justify-between">
                                                    <a
                                                        href={`https://wa.me/${whatsappNumber}?text=Quote for ${product.name}`}
                                                        className="flex-grow bg-[#25D366] text-white py-4 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-lg active:scale-95"
                                                    >
                                                        <MessageSquare size={16} /> Get Quote
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
