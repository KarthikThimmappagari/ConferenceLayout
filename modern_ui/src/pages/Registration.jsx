import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Info } from 'lucide-react';

const Registration = () => {
    const tiers = [
        {
            name: "Speaker",
            price: "699",
            description: "For active presenters and researchers.",
            features: [
                "Full access to all sessions",
                "Presentation slot",
                "Certificate of Contribution",
                "Conference Proceeding publication",
                "Lunches & Coffee breaks"
            ],
            cta: "Register as Speaker",
            highlight: true
        },
        {
            name: "Delegate",
            price: "599",
            description: "For attendees looking to learn and network.",
            features: [
                "Full access to all sessions",
                "Certificate of Attendance",
                "Conference Program Kit",
                "Networking lunches",
                "Industry exhibit access"
            ],
            cta: "Register as Delegate",
            highlight: false
        },
        {
            name: "Student",
            price: "349",
            description: "Discounted rate for active PhD/MSc students.",
            features: [
                "Full access to all sessions",
                "Certificate of Attendance",
                "Poster presentation slot",
                "Networking lunches",
                "Valid Student ID required"
            ],
            cta: "Register as Student",
            highlight: false
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <header className="max-w-4xl mx-auto text-center mb-16 px-6">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Join the Gathering
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-navy mb-8"
                    >
                        Registration Packages
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg leading-relaxed"
                    >
                        Secure your spot at the International Conference on Food Science 2026.
                        Early bird registration discount is available until <strong>March 09, 2026</strong>.
                    </motion.p>
                </header>

                {/* Pricing Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
                    {tiers.map((tier, idx) => (
                        <div
                            key={idx}
                            className={`relative bg-white rounded-[40px] p-10 border shadow-sm transition-all hover:shadow-2xl hover:scale-[1.02] ${tier.highlight ? 'border-primary ring-4 ring-primary/5' : 'border-slate-100'
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-navy font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-10 text-center">
                                <h3 className="text-2xl font-bold text-navy mb-4">{tier.name}</h3>
                                <div className="flex items-center justify-center gap-1">
                                    <span className="text-2xl font-bold text-slate-400">$</span>
                                    <span className="text-6xl font-display font-bold text-navy">{tier.price}</span>
                                </div>
                                <p className="text-slate-500 text-sm mt-4 leading-relaxed">{tier.description}</p>
                            </div>

                            <ul className="space-y-4 mb-10 min-h-[220px]">
                                {tier.features.map((feat, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-4 text-sm text-slate-600">
                                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary mt-0.5 shrink-0">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full font-bold py-5 rounded-3xl transition-all shadow-lg active:scale-95 ${tier.highlight ? 'bg-navy text-white hover:bg-navy-dark' : 'bg-slate-100 text-navy hover:bg-slate-200'
                                }`}>
                                {tier.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Informational Section */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-navy rounded-[50px] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-primary mb-6">
                            <Shield size={14} /> Secure Payment
                        </div>
                        <h2 className="text-3xl font-display font-bold mb-6">Safe & Reliable <br />Registration Process</h2>
                        <div className="space-y-6">
                            {[
                                { icon: Zap, title: "Instant Confirmation", text: "Receive your PDF registration receipt and confirmation via email immediately." },
                                { icon: Info, title: "Flexible Policy", text: "Registration can be transferred to a colleague if you're unable to attend." }
                            ].map((box, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <box.icon className="text-primary shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold text-sm mb-1">{box.title}</h4>
                                        <p className="text-white/60 text-xs leading-relaxed">{box.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center p-8 bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-sm">
                        <p className="text-center text-sm text-white/70 mb-8 italic">
                            "Accepted Payment Methods 2026"
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 opacity-80">
                            {/* Placeholder for payment icons */}
                            <div className="h-10 w-24 bg-white/10 rounded-lg flex items-center justify-center font-bold text-[10px] tracking-widest">RAZORPAY</div>
                            <div className="h-10 w-24 bg-white/10 rounded-lg flex items-center justify-center font-bold text-[10px] tracking-widest">PAYPAL</div>
                            <div className="h-10 w-24 bg-white/10 rounded-lg flex items-center justify-center font-bold text-[10px] tracking-widest">STRIPE</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
