import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List as ListIcon, ChevronRight, ArrowUpRight, SlidersHorizontal, MessageSquare } from 'lucide-react';
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
        <div className="pt-32 pb-24 bg-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-display font-bold text-white mb-4 uppercase tracking-wider">Industrial Portfolio</h1>
                        <p className="text-gray-500 uppercase text-xs font-bold tracking-[0.2em]">Explore our professional grade product range</p>
                    </div>
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-dark-lighter border border-white/10 rounded-xl py-3 pl-12 pr-6 text-white focus:outline-none focus:border-primary-500/50 transition-all shadow-xl"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Horizontal Sub-Filter Bar */}
                {activeCategory !== 'all' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap items-center gap-3 mb-12 bg-white/5 p-4 rounded-2xl border border-white/10"
                    >
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-4">Filter:</span>
                        {subCategories.map((sub) => (
                            <button
                                key={sub}
                                onClick={() => setActiveSubCategory(sub)}
                                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${activeSubCategory === sub ? 'bg-primary-500 text-dark shadow-lg shadow-primary-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                            >
                                {sub}
                            </button>
                        ))}
                    </motion.div>
                )}

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-64 shrink-0">
                        <div className="sticky top-28 bg-dark-lighter border border-white/10 p-6 rounded-2xl shadow-2xl">
                            <div className="flex items-center gap-2 mb-6">
                                <SlidersHorizontal className="text-primary-500 w-5 h-5" />
                                <h3 className="text-white font-bold uppercase tracking-wider text-sm">Main Sectors</h3>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <button
                                    onClick={() => toggleMainCategory('all')}
                                    className={`w-full text-left px-4 py-3 rounded-xl transition-all text-sm font-semibold ${activeCategory === 'all' ? 'bg-primary-500 text-dark' : 'text-gray-400 hover:bg-white/5'}`}
                                >
                                    View All
                                </button>
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => toggleMainCategory(cat.id)}
                                        className={`w-full text-left px-4 py-3 rounded-xl transition-all text-sm font-semibold ${activeCategory === cat.id ? 'bg-primary-500 text-dark' : 'text-gray-400 hover:bg-white/5'}`}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-grow">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                {activeCategory === 'all' ? 'All Industrial Products' : `${currentCategoryData?.name} > ${activeSubCategory}`}
                                <span className="text-sm font-normal text-gray-500">[{filteredProducts.length} items]</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            <AnimatePresence mode='popLayout'>
                                {filteredProducts.map((product, i) => (
                                    <motion.div
                                        layout
                                        key={`${product.id}-${i}`}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="group"
                                    >
                                        <div className="glass-card overflow-hidden hover:border-primary-500/20 transition-all duration-300">
                                            <Link to={`/products/${product.id}`} className="block aspect-square bg-dark relative overflow-hidden">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                                    <span className="text-primary-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                                        View Details <ArrowUpRight size={14} />
                                                    </span>
                                                </div>
                                            </Link>
                                            <div className="p-6">
                                                <Link to={`/products/${product.id}`}>
                                                    <h4 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors mb-4 line-clamp-1">{product.name}</h4>
                                                </Link>
                                                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                                    <span className="text-[10px] text-gray-400 uppercase tracking-tighter italic">{product.sub}</span>
                                                    <a
                                                        href={`https://wa.me/${whatsappNumber}?text=Quote for ${product.name}`}
                                                        target="_blank" rel="noreferrer"
                                                        className="w-10 h-10 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
                                                    >
                                                        <MessageSquare size={18} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-32 bg-dark-lighter rounded-3xl border border-dashed border-white/10">
                                <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-400">No products match this filter</h3>
                                <p className="text-gray-500">Try selecting 'All' or adjusting your search.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
