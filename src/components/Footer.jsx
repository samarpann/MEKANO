import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark-lighter border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-2">
                            <Settings className="w-8 h-8 text-primary-500" />
                            <div className="flex flex-col">
                                <span className="text-xl font-display font-bold text-white uppercase tracking-wider">MEKANO</span>
                                <span className="text-[10px] text-primary-500 font-bold tracking-[0.2em]">ENGINEERING</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Mekano Engineering Pvt. Ltd. is a leading industrial supply company in Delhi,
                            providing precision-engineered valves, automation, and power transmission solutions since 2006.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary-500 hover:text-dark transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Industries We Serve', 'Products', 'Partners', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().split(' ')[0]}`} className="text-gray-400 text-sm hover:text-primary-500 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                            Our Products
                        </h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li>Industrial Valves</li>
                            <li>Pipes & Fittings</li>
                            <li>Pneumatic Solutions</li>
                            <li>Instruments & Meters</li>
                            <li>Electric Motors</li>
                            <li>Lifting Equipment</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                            Contact Info
                        </h4>
                        <div className="space-y-5">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-primary-500 w-5 h-5 shrink-0" />
                                <span className="text-gray-400 text-sm">1st Floor, Raghushree Market, 21, Ajmeri Gate, Chandni Chowk, Delhi - 110006</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-primary-500 w-5 h-5 shrink-0" />
                                <span className="text-gray-400 text-sm">+91 9911221772</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-primary-500 w-5 h-5 shrink-0" />
                                <span className="text-gray-400 text-sm">info@mekanoengineering.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="text-primary-500 w-5 h-5 shrink-0" />
                                <span className="text-gray-400 text-sm">Mon - Sat: 9:30 AM - 7:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs text-center md:text-left">
                        © 2006-2026 Mekano Engineering Pvt. Ltd. All rights reserved. GSTIN: 27AAECM6645Q1Z3
                    </p>
                    <div className="flex gap-8 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                        <a href="#" className="hover:text-primary-500">Privacy Policy</a>
                        <a href="#" className="hover:text-primary-500">Terms of Service</a>
                        <p>Designed for Excellence</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
