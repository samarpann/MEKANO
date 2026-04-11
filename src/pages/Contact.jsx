import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Info */}
                    <div>
                        <h1 className="text-5xl font-display font-bold text-white mb-8">Let's Discuss Your <span className="text-primary-500">Project</span></h1>
                        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                            Have a technical requirement or need a bulk quotation? Our engineering team is ready to assist you
                            with the right specs and competitive pricing. Reach out to us through any channel below.
                        </p>

                        <div className="space-y-10">
                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary-500 border border-white/5">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Head Office</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">1st Floor, Raghushree Market, 21, Ajmeri Gate,<br />Chandni Chowk, Delhi - 110006</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary-500 border border-white/5">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Contact Numbers</h4>
                                    <p className="text-gray-400 text-sm">+91 9911221772</p>
                                    <p className="text-gray-400 text-sm">+91 11 23214567</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary-500 border border-white/5">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Email Addresses</h4>
                                    <p className="text-gray-400 text-sm">info@mekanoengineering.com</p>
                                    <p className="text-gray-400 text-sm">sales@mekanoengineering.com</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary-500 border border-white/5">
                                    <Clock size={28} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Business Hours</h4>
                                    <p className="text-gray-400 text-sm italic">Monday - Saturday</p>
                                    <p className="text-gray-400 text-sm">9:30 AM to 7:00 PM (Sunday Closed)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-10 glass-card bg-white/5 border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-3xl rounded-full"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <MessageSquare className="text-primary-500" /> Send a Message
                            </h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-2">Full Name</label>
                                        <input type="text" className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-2">Company</label>
                                        <input type="text" className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-all" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-2">Work Email</label>
                                    <input type="email" className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-all" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-2">Product Interest</label>
                                    <select className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-all cursor-pointer">
                                        <option>Industrial Valves</option>
                                        <option>Automation & Pneumatics</option>
                                        <option>Pipes & Fittings</option>
                                        <option>Lifting Equipment</option>
                                        <option>Other / Bulk Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-2">Requirements</label>
                                    <textarea rows="4" className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-all"></textarea>
                                </div>

                                <button type="button" className="w-full glass-button flex items-center justify-center gap-2 mt-4">
                                    Send Inquiry <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-32 aspect-[21/9] bg-dark-lighter rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center relative grayscale opacity-50 contrast-125">
                    <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=40" className="w-full h-full object-cover" alt="Delhi Location" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-dark animate-bounce">
                            <MapPin size={24} />
                        </div>
                        <div className="mt-4 px-4 py-2 bg-dark rounded-lg border border-white/10 text-white font-bold">Ajmeri Gate, Delhi</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
