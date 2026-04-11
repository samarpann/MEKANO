import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Eye, Award, History, Users, Settings } from 'lucide-react';

const About = () => {
    const values = [
        { title: 'Quality Assurance', icon: Shield, desc: 'We only supply audited, certified products from world-leading engineering manufacturers.' },
        { title: 'Technical Expertise', icon: Settings, desc: 'Our engineering team provides end-to-end technical support for complex industrial applications.' },
        { title: 'Reliability', icon: History, desc: 'Nearly two decades of consistent excellence in the Indian industrial supply landscape.' },
        { title: 'Customer Centric', icon: Users, desc: 'Tailored solutions and priority logistics to meet demanding project timelines.' },
    ];

    return (
        <div className="pt-32 pb-24 bg-dark">
            <div className="max-w-7xl mx-auto px-6">
                {/* Intro */}
                <div className="max-w-3xl mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-display font-extrabold text-white mb-8"
                    >
                        Engineering Excellence <br />
                        <span className="text-primary-500">Since 2006</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-400 leading-relaxed"
                    >
                        Mekano Engineering Pvt. Ltd. was founded with a singular vision: to empower India's growing industrial
                        sectors with world-class engineering components. From our headquarters in Delhi, we have
                        grown into a trusted partner for some of the nation's largest manufacturing plants,
                        refineries, and construction projects.
                    </motion.p>
                </div>

                {/* Vision & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-10 glass-card bg-primary-500/5 border-primary-500/10"
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary-500 text-dark flex items-center justify-center mb-6">
                            <Eye size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            To be the most reliable and technologically advanced industrial solution provider in the region,
                            benchmarked against global standards of service and operational excellence.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-10 glass-card"
                    >
                        <div className="w-12 h-12 rounded-xl bg-gray-100 text-dark flex items-center justify-center mb-6">
                            <Target size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            To deliver precision-engineered products that enhance the efficiency, safety, and longevity
                            of industrial operations, while building long-term value through authorized brand partnerships.
                        </p>
                    </motion.div>
                </div>

                {/* History / Values */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-white mb-4">The Pillars of Our Success</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-dark-lighter rounded-2xl border border-white/5 hover:border-primary-500/20 transition-all text-center group"
                        >
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 text-primary-500 group-hover:bg-primary-500 group-hover:text-dark transition-all duration-300">
                                <v.icon size={30} />
                            </div>
                            <h4 className="text-white font-bold mb-3">{v.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Brand Partnerships */}
                <div className="mt-32 p-12 glass-card border-none relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="lg:max-w-xl">
                            <h3 className="text-3xl font-bold text-white mb-6">Authorized Channel Partner</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Our legacy is built on the trust of global leaders. We are official stockists for
                                Shenco Valves, Indef Lifting Equipment, FESTO Pneumatics, and L&T Industrial Products,
                                ensuring you receive factory-fresh inventory with full manufacturer warranties.
                            </p>
                            <div className="flex flex-wrap gap-6 filter grayscale opacity-50 contrast-125">
                                {['Shenco', 'Indef', 'FESTO', 'L&T', 'Audco', 'Siemens'].map(brand => (
                                    <span key={brand} className="text-xl font-bold text-white tracking-tighter">{brand}</span>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 aspect-video bg-dark rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Authorized Partnership"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
