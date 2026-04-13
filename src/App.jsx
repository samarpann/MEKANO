import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Industries from './pages/Industries';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const WhatsAppFloating = () => (
    <motion.a
        href="https://wa.me/919911221772"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/30 cursor-pointer"
    >
        <MessageSquare size={30} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
    </motion.a>
);

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-dark">
                <ScrollToTop />
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/industries" element={<Industries />} />
                        <Route path="/applications" element={<Industries />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:id" element={<ProductDetail />} />
                        <Route path="/partners" element={<Partners />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
                <WhatsAppFloating />
            </div>
        </Router>
    );
}

export default App;
