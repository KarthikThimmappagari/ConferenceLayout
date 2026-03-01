import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Info, ArrowRight, Heart, Star, Award, ShieldCheck, Mail, Building } from 'lucide-react';

const Sponsors = () => {
    const sponsorshipLevels = [
        { name: "Diamond", price: "11999", color: "text-slate-400 font-bold", tickets: "6 Tickets", ad: "2 pages", presentation: "20 mins", highlight: true },
        { name: "Gold", price: "9999", color: "text-primary font-bold", tickets: "4 Tickets", ad: "1 page", presentation: "15 mins", highlight: false },
        { name: "Registration", price: "6999", color: "text-navy font-bold", tickets: "3 Tickets", ad: "1 page", presentation: "10 mins", highlight: false },
        { name: "Silver", price: "5999", color: "text-slate-500 font-bold", tickets: "3 Tickets", ad: "1 page", presentation: "10 mins", highlight: false },
        { name: "Bronze", price: "3999", color: "text-orange-800 font-bold", tickets: "2 Tickets", ad: "1/2 page", presentation: "10 mins", highlight: false }
    ];

    return (
        <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6">
                <header className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Partnerships & Branding
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-navy mb-8"
                    >
                        Sponsors & Exhibitors
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        Branding, capturing potential clients, and taking the lead in the industry.
                        Connect with key decision makers in the global Food Science community.
                    </motion.p>
                </header>

                {/* Benefits Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-7xl mx-auto">
                    {[
                        { icon: Award, title: "Brand Exposure", text: "Place your logo in front of a targeted expert audience." },
                        { icon: Star, title: "Industry Lead", text: "Position your brand as a market leader in Food Tech." },
                        { icon: Heart, title: "Networking", text: "Create high-value business relationships face-to-face." }
                    ].map((benefit, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm text-center group hover:bg-navy transition-all duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-white group-hover:text-primary transition-colors">
                                <benefit.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-white transition-colors">{benefit.title}</h3>
                            <p className="text-slate-500 text-sm group-hover:text-slate-400 transition-colors">{benefit.text}</p>
                        </div>
                    ))}
                </div>

                {/* Pricing Tiers (Small Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-24">
                    {sponsorshipLevels.map((tier, idx) => (
                        <div key={idx} className={`bg-white rounded-[32px] p-8 border hover:shadow-xl transition-all h-full flex flex-col ${tier.highlight ? 'border-primary ring-4 ring-primary/5' : 'border-slate-100'}`}>
                            <div className="mb-6 flex-grow">
                                <h4 className={`mb-4 text-xs font-black uppercase tracking-widest ${tier.color}`}>{tier.name}</h4>
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-xl font-bold text-slate-400">$</span>
                                    <span className="text-4xl font-display font-bold text-navy">{tier.price}</span>
                                </div>
                                <ul className="space-y-4 text-xs font-semibold text-slate-500">
                                    <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-primary" /> {tier.tickets} Tickets</li>
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-primary" /> {tier.presentation} PPT</li>
                                    <li className="flex items-center gap-2"><Star size={14} className="text-primary" /> {tier.ad} Ad page</li>
                                </ul>
                            </div>
                            <button className={`w-full py-4 rounded-2xl text-xs font-bold transition-all shadow-lg active:scale-95 ${tier.highlight ? 'bg-navy text-white' : 'bg-slate-50 text-navy hover:bg-slate-100'}`}>
                                Select {tier.name}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Feature Comparison / Table */}
                <div className="max-w-7xl mx-auto mb-24 bg-white rounded-[40px] shadow-2xl border border-slate-100 overflow-hidden hidden lg:block">
                    <div className="p-12 text-center bg-navy">
                        <h3 className="text-2xl font-display font-bold text-white">Advanced Benefits Comparison</h3>
                        <p className="text-white/50 text-xs uppercase tracking-widest mt-2">Full Sponsorship Privileges Matrix</p>
                    </div>
                    <div className="p-12">
                        <table className="w-full text-sm">
                            <thead className="border-b border-slate-100">
                                <tr className="text-navy">
                                    <th className="py-6 text-left">Sponsorship Benefit</th>
                                    <th className="py-6 font-bold text-slate-400">Diamond</th>
                                    <th className="py-6 font-bold text-primary">Gold</th>
                                    <th className="py-6 font-bold text-slate-500">Silver</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {[
                                    { perk: "Logo on Conference Backdrop", d: "Yes", g: "Yes", s: "Yes" },
                                    { perk: "Logo on Delegate Certificates", d: "Yes", g: "Yes", s: "Yes" },
                                    { perk: "Email Marketing Promotion", d: "Yes", g: "Yes", s: "No" },
                                    { perk: "Social Media Promotions", d: "All Materials", g: "Yes", s: "Yes" },
                                    { perk: "Booth Space Provided", d: "Shell Scheme", g: "Shell Scheme", s: "Tabletop" },
                                    { perk: "Delegate Database Access", d: "Priority", g: "Yes", s: "Limited" }
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 font-medium">
                                        <td className="py-5 text-navy">{row.perk}</td>
                                        <td className="py-5 text-slate-500">{row.d}</td>
                                        <td className="py-5 text-slate-500">{row.g}</td>
                                        <td className="py-5 text-slate-500">{row.s}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Hybrid Package Banner */}
                <div className="max-w-7xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="bg-primary/10 rounded-[40px] p-12 lg:p-16 border border-primary/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 transform group-hover:rotate-12 transition-transform opacity-10">
                            <ShieldCheck size={200} />
                        </div>
                        <h4 className="text-primary font-black uppercase text-xs tracking-widest mb-4">Special Offer</h4>
                        <h2 className="text-3xl font-display font-bold text-navy mb-4">Hybrid Conference Bundle</h2>
                        <p className="text-slate-700 text-sm mb-8 max-w-md leading-relaxed">
                            Connect with our virtual and physical attendees simultaneously for $1,999. Includes website logo,
                            social media mentions, and 1 page ad on the digital program.
                        </p>
                        <button className="bg-navy text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-navy/20 hover:translate-x-1 transition-all">
                            Learn about Hybrid
                        </button>
                    </div>

                    <div className="bg-white rounded-[40px] p-12 lg:p-16 border border-slate-100 shadow-sm">
                        <h3 className="text-2xl font-bold text-navy mb-8">Become a Sponsor</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black tracking-widest uppercase text-slate-400 pl-1">Full Name</label>
                                    <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black tracking-widest uppercase text-slate-400 pl-1">Work Email</label>
                                    <input type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black tracking-widest uppercase text-slate-400 pl-1">Company / Organization</label>
                                <div className="relative">
                                    <Building size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" />
                                    <input type="text" className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black tracking-widest uppercase text-slate-400 pl-1">Package of Interest</label>
                                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none">
                                    <option>Diamond ($11,999)</option>
                                    <option>Gold ($9,999)</option>
                                    <option>Silver ($5,999)</option>
                                    <option>Bronze ($3,999)</option>
                                </select>
                            </div>
                            <button className="w-full bg-navy text-white py-5 rounded-2xl font-bold shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all">
                                Request Information <Mail size={18} />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-32">
                    <div className="text-center mb-16">
                        <h4 className="text-primary font-black tracking-[0.3em] uppercase text-[10px] mb-4">Ecosystem</h4>
                        <h2 className="text-3xl font-display font-medium text-navy tracking-tight">Current Strategic Partners</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                        <img src="/img/part1.png" alt="Partner 1" className="h-10 object-contain" />
                        <img src="/img/part2.jpg" alt="Partner 2" className="h-10 object-contain" />
                        <img src="/img/part5.png" alt="Partner 3" className="h-10 object-contain" />
                        <img src="/img/part6.png" alt="Partner 4" className="h-10 object-contain" />
                        <img src="/img/part7.jpg" alt="Partner 5" className="h-10 object-contain" />
                        <img src="/img/part9.png" alt="Partner 6" className="h-10 object-contain" />
                        <img src="/img/part11.png" alt="Partner 7" className="h-10 object-contain" />
                        <img src="/img/AIC.jpg" alt="Partner 8" className="h-10 object-contain" />
                        <img src="/img/allevents.in.png" alt="Partner 9" className="h-10 object-contain" />
                        <img src="/img/conference2go.png" alt="Partner 10" className="h-10 object-contain" />
                        <img src="/img/researchbib.png" alt="Partner 11" className="h-10 object-contain" />
                        <img src="/img/townscript.png" alt="Partner 12" className="h-10 object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
