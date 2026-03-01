import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, FileText, User, CreditCard } from 'lucide-react';

const Faq = () => {
    const [activeId, setActiveId] = useState(null);

    const categories = [
        {
            title: "Abstract Submission",
            icon: <FileText className="text-primary" size={24} />,
            questions: [
                { q: "How do I submit an abstract for Food Science and Nutrition Conference?", a: "Abstracts are submitted online once the submission site is opened. You can start the abstract submission via our portal." },
                { q: "Will I receive a confirmation email for my submission?", a: "Yes, you will receive an email from foodscience@averconferences.com. Please add this to your safe senders list." },
                { q: "May I submit more than 1 abstract?", a: "Yes, but do not submit multiple abstracts that describe the same data." },
                { q: "What is the word count limit?", a: "The maximum word count for an abstract is typically 300 words." }
            ]
        },
        {
            title: "Registration & Payments",
            icon: <CreditCard className="text-primary" size={24} />,
            questions: [
                { q: "Am I required to pay the registration fee if I am an author?", a: "Unless you have received a scholarship, all authors of accepted abstracts are required to pay the registration fee." },
                { q: "What does the registration fee cover?", a: "It covers access to all sessions, breakfast, snacks, electronic Abstract eBook, and other meeting materials." },
                { q: "May I pay by check or wire transfer?", a: "Payment by credit card (AMEX, MC, or VISA) is preferred, but wire transfers can be selected during the registration process." }
            ]
        },
        {
            title: "Attendance & Presenting",
            icon: <User className="text-primary" size={24} />,
            questions: [
                { q: "How much time is allotted for oral presentations?", a: "Oral presenters are allocated 20 minutes for their presentation and 5 minutes for Q&A." },
                { q: "How many slides are allowed?", a: "Experience indicates up to 10 slides is optimal (1-2 minutes per slide)." },
                { q: "When should I arrive for my presentation?", a: "Please arrive at the assigned room at least 15 minutes in advance of your scheduled time." }
            ]
        }
    ];

    const toggle = (id) => setActiveId(activeId === id ? null : id);

    return (
        <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6">
                <header className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Support Center
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-navy mb-8"
                    >
                        Frequently Asked Questions
                    </motion.h1>
                </header>

                <div className="max-w-4xl mx-auto space-y-12">
                    {categories.map((cat, catIdx) => (
                        <div key={catIdx}>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                                    {cat.icon}
                                </div>
                                <h3 className="text-2xl font-display font-bold text-navy">{cat.title}</h3>
                            </div>

                            <div className="space-y-4">
                                {cat.questions.map((item, qIdx) => {
                                    const id = `${catIdx}-${qIdx}`;
                                    const isOpen = activeId === id;
                                    return (
                                        <div key={qIdx} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all">
                                            <button
                                                onClick={() => toggle(id)}
                                                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                                            >
                                                <span className={`font-bold transition-colors ${isOpen ? 'text-primary' : 'text-navy group-hover:text-primary'}`}>
                                                    {item.q}
                                                </span>
                                                <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-slate-300'}`} />
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-8 pb-8 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-6">
                                                            {item.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Strip */}
                <div className="mt-20 max-w-4xl mx-auto bg-navy rounded-3xl p-8 text-center text-white relative overflow-hidden group">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex items-center gap-4">
                            <HelpCircle className="text-primary" size={48} />
                            <div className="text-left">
                                <h4 className="font-bold text-lg">Still have questions?</h4>
                                <p className="text-white/50 text-xs">We are here to help you 24/7</p>
                            </div>
                        </div>
                        <div className="h-px w-12 bg-white/10 hidden md:block" />
                        <button className="bg-primary text-navy font-bold px-8 py-3 rounded-full hover:scale-105 transition-all">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
