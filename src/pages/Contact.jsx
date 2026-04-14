import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Globe } from 'lucide-react';

const Contact = () => {
    const [result, setResult] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const whatsappLink = "https://wa.me/919911221772?text=Hello MEKANO, I need a technical quote.";

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");
        const formData = new FormData(event.target);

        // Access Key for Web3Forms (User should replace this with their actual key)
        formData.append("access_key", "c911737e-6f81-4f81-8b43-2394541f6e24"); 

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Inquiry Sent Successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
        setIsSubmitting(false);
    };

    return (
        <div className="bg-[#FAFAFA] min-h-screen">
            {/* INDUSTRIAL NAVY HEADER */}
            <section className="bg-[#001C3D] pt-40 pb-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <span className="text-[#FFB302] font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Worldwide Desk</span>
                        <h1 className="text-5xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
                            Talk To <span className="text-[#FFB302]">Sales</span>
                        </h1>
                        <p className="text-white/50 text-xl font-medium max-w-xl mx-auto uppercase tracking-widest">
                            Official support for tender submissions and project supply.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-5 gap-10 -mt-32 relative z-20">
                    {/* CONTACT INFO CARDS */}
                    <div className="lg:col-span-2 space-y-6">
                        {[
                            { icon: Phone, title: "Sales Hotline", detail: "+91 9911221772" },
                            { icon: Mail, title: "Official Email", detail: "info@mekanoengineering.com" },
                            { icon: MapPin, title: "Office Location", detail: "Ajmeri Gate, New Delhi" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-50 group hover:border-[#FFB302]/20 transition-all">
                                <item.icon className="text-[#FFB302] mb-6" size={32} />
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{item.title}</p>
                                <h4 className="text-2xl font-black text-[#001C3D]">{item.detail}</h4>
                            </div>
                        ))}
                    </div>

                    {/* INQUIRY FORM */}
                    <div className="lg:col-span-3 bg-white p-12 md:p-20 rounded-[60px] shadow-2xl border border-slate-50">
                        <h3 className="text-3xl font-black text-[#001C3D] mb-12 uppercase tracking-tighter flex items-center gap-4">
                            Direct Quote
                            <span className="h-1 flex-grow bg-slate-50" />
                        </h3>
                        <form onSubmit={onSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <input type="text" name="name" required placeholder="Full Name" className="w-full bg-slate-50 border-none rounded-2xl py-5 px-8 text-[#001C3D] focus:ring-2 focus:ring-[#FFB302] font-bold" />
                                <input type="text" name="phone" required placeholder="Contact Number" className="w-full bg-slate-50 border-none rounded-2xl py-5 px-8 text-[#001C3D] focus:ring-2 focus:ring-[#FFB302] font-bold" />
                            </div>
                            <textarea name="message" required placeholder="Technical requirements..." className="w-full bg-slate-50 border-none rounded-3xl py-5 px-8 text-[#001C3D] focus:ring-2 focus:ring-[#FFB302] h-40 font-bold" />
                            <button 
                                disabled={isSubmitting}
                                className={`primary-button w-full py-6 text-xl flex items-center justify-center gap-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Sending...' : result || 'Submit Inquiry'} 
                                {!isSubmitting && <Send size={24} />}
                            </button>
                        </form>
                    </div>
                </div>

                {/* WHATSAPP ACTION */}
                <div className="mt-24 bg-[#25D366] p-16 md:p-24 rounded-[70px] text-center shadow-2xl shadow-green-500/30 group">
                    <MessageSquare size={80} className="text-white/30 mx-auto mb-10 group-hover:scale-110 transition-transform" />
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none">Instant <span className="text-[#001C3D]">24/7</span> WhatsApp Chat</h2>
                    <p className="text-white/80 text-xl font-medium mb-12 max-w-xl mx-auto">Get technical drawings and current stock status within minutes.</p>
                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 bg-[#001C3D] text-[#FFB302] font-black py-6 px-16 rounded-full text-xl hover:scale-110 transition-all shadow-2xl">
                        Start Chat Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
