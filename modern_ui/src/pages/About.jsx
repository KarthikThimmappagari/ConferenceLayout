import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, BookOpen } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-32 pb-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <header className="max-w-4xl mx-auto text-center mb-16 px-6">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        About Food Science 2026
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-navy mb-8"
                    >
                        Scientific Excellence & Innovation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg leading-relaxed"
                    >
                        The International Conference on Food, Nutrition & Processing Technologies is a premier event
                        gathering the world's leading academic scientists, researchers, and research scholars.
                    </motion.p>
                </header>

                <div className="max-w-7xl mx-auto">
                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-display font-bold text-navy mb-6">Conference Objectives</h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    Food Science and Nutrition 2026 aims to spread awareness on proper foods, nutrition,
                                    malnutrition and its impact on health issues, the importance of energy balance in
                                    patients and major nutrients like fibers, proteins, minerals and vitamins and more.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { icon: Globe, label: "Global Network", text: "Experts from across the world." },
                                        { icon: BookOpen, label: "Knowledge Exchange", text: "Broad spectrum of research thoughts." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-primary transition-all">
                                            <item.icon className="text-primary mb-4" size={32} />
                                            <h4 className="font-bold text-navy mb-2">{item.label}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h3 className="text-2xl font-display font-bold text-navy mb-4">Why Attend?</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Attendee will learn more about how leading technologies and techniques affect food science
                                    researchers and how to establish workflows & protocols to obtain the best results in your lab.
                                </p>
                            </section>
                        </div>

                        <div className="relative">
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/img/gal15.jpg"
                                    alt="Conference Interaction"
                                    className="w-full h-full object-cover aspect-[4/3]"
                                />
                                <div className="absolute inset-0 bg-navy/20" />
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute top-10 -left-10 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 animate-bounce-slow">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-bold text-xl">5+</div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Years of</p>
                                        <p className="font-bold text-navy">Excellence</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-10 -right-10 z-20 bg-navy p-6 rounded-3xl shadow-2xl animate-bounce-slow-delayed">
                                <div className="flex items-center gap-4">
                                    <Users className="text-primary" size={32} />
                                    <div className="text-white">
                                        <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Scientific</p>
                                        <p className="font-bold">Committees</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-0 border-2 border-primary rounded-[40px] -m-6 -z-0 opacity-20" />
                        </div>
                    </div>

                    {/* Core Values / Pillar Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { icon: Award, title: "Scientific Integrity", desc: "Rigorous peer review and methodology." },
                            { icon: Globe, title: "Global Perspective", desc: "Inclusive representation of all nations." },
                            { icon: Users, title: "Collaborative Spirit", desc: "Fostering long-term research partnerships." }
                        ].map((pillar, idx) => (
                            <div key={idx} className="p-12 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                <div className="w-20 h-20 bg-slate-50 group-hover:bg-primary/10 rounded-3xl flex items-center justify-center text-slate-300 group-hover:text-primary transition-all mx-auto mb-8">
                                    <pillar.icon size={40} />
                                </div>
                                <h4 className="text-xl font-bold text-navy mb-4">{pillar.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
