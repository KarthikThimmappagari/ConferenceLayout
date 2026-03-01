import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <header className="max-w-4xl mx-auto text-center mb-16 px-6">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Get In Touch
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-navy mb-8"
                    >
                        Contact & Support
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg leading-relaxed"
                    >
                        Have questions about Abstract submission, Registration, or Sponsorship?
                        Our dedicated team is here to assist you.
                    </motion.p>
                </header>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Contact Details */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm group hover:border-primary transition-all">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                                    <Mail />
                                </div>
                                <h4 className="font-bold text-navy mb-2">Email Support</h4>
                                <p className="text-slate-500 text-sm mb-4">Official conference emails</p>
                                <a href="mailto:foodscience@averconferences.com" className="text-navy font-bold hover:text-primary transition-colors">
                                    foodscience@averconferences.com
                                </a>
                            </div>

                            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm group hover:border-primary transition-all">
                                <div className="w-12 h-12 bg-navy/10 rounded-2xl flex items-center justify-center text-navy mb-6 transition-colors group-hover:bg-navy group-hover:text-white">
                                    <MessageSquare />
                                </div>
                                <h4 className="font-bold text-navy mb-2">WhatsApp / Text</h4>
                                <p className="text-slate-500 text-sm mb-4">Quick queries & support</p>
                                <p className="text-navy font-bold">+91 91234 56789</p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4">
                                    <Clock className="text-slate-100" size={64} />
                                </div>
                                <h4 className="font-bold text-navy mb-4">Response Time</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Our typical response time is within <strong>24 business hours</strong>.
                                    Support available Monday to Friday, 9AM - 6PM GMT.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-8">
                        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl">
                            <h3 className="text-2xl font-bold text-navy mb-8">Send us a Message</h3>
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">Name</label>
                                        <input type="text" placeholder="Your Name" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">Email</label>
                                        <input type="email" placeholder="email@address.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">Subject</label>
                                    <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                                        <option>General Inquiry</option>
                                        <option>Abstract Submission Portal</option>
                                        <option>Payment & Registration</option>
                                        <option>Visa Invitation Letter</option>
                                        <option>Sponsorship / Exhibition</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">Message</label>
                                    <textarea rows="6" placeholder="How can we help you?" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
                                </div>

                                <button className="w-full bg-navy hover:bg-navy-dark text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-navy/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                                    Send Message <ArrowRight size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
