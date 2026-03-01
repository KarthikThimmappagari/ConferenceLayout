import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ScientificSessions from '../components/ScientificSessions';
import { ArrowRight, CheckCircle, Trophy, Users, Globe, PlayCircle, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            <Hero />

            {/* Quick About Section */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 relative group">
                            <div className="relative z-10 translate-x-4 -translate-y-4">
                                <img
                                    src="/img/Food_Science.jpeg"
                                    alt="Food Science Research"
                                    className="rounded-[40px] shadow-2xl transition-transform duration-700 group-hover:scale-[1.05] w-full h-[500px] object-cover"
                                />
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/20 rounded-[40px] -z-0" />
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0" />

                            <div className="absolute -bottom-6 -right-6 bg-navy p-8 rounded-[32px] shadow-2xl z-20 hidden md:block border border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-navy font-black text-xl">10+</div>
                                    <div className="text-white">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Years of</p>
                                        <p className="font-bold text-lg">Scientific Excellence</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <motion.h4
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-6"
                            >
                                International Summit 2026
                            </motion.h4>
                            <h2 className="text-5xl md:text-7xl font-display font-medium text-navy mb-8 leading-none tracking-tight">
                                Advancing the Future of <br />
                                <span className="text-primary italic font-black underline decoration-navy/10">Food Science</span>
                            </h2>

                            <div className="space-y-8 text-slate-500 mb-12 text-lg leading-relaxed font-medium">
                                <p>
                                    Food Science and Nutrition 2026 aims to spread awareness on proper foods, nutrition,
                                    malnutrition and its impact on health issues. Join a elite global network of experts.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        "Global Network of Experts",
                                        "Innovative Case Studies",
                                        "Scientific Excellence",
                                        "Industry Integration"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4 group">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-navy transition-all">
                                                <CheckCircle size={14} />
                                            </div>
                                            <span className="font-bold text-navy/80">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-6 items-center">
                                <Link to="/about" className="bg-navy hover:bg-primary hover:text-navy text-white font-black px-12 py-5 rounded-full transition-all shadow-2xl shadow-navy/20 active:scale-95 text-sm uppercase tracking-widest">
                                    Learn More
                                </Link>
                                <div className="flex -space-x-4 items-center">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden ring-1 ring-slate-100 shadow-sm">
                                            <img src={`/img/gal${i}.jpg`} alt="Attendee" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="pl-8">
                                        <span className="block text-lg font-black text-navy leading-none">500+</span>
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1 inline-block">Global Experts</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ScientificSessions />

            {/* Featured Speakers Preview Section */}
            <section className="py-32 bg-navy text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-20" />
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                    <div className="absolute top-24 left-10 w-64 h-64 border border-white/10 rounded-full" />
                    <div className="absolute bottom-24 right-10 w-96 h-96 border border-white/10 rounded-full" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <motion.h4
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-6"
                            >
                                Distinguished Faculty
                            </motion.h4>
                            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Previous Speakers</h2>
                            <p className="text-slate-400 text-lg font-medium leading-relaxed">Meet the world-renowned professors and industry leaders who have previously graced our stage.</p>
                        </div>
                        <Link to="/speakers" className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 px-8 py-5 rounded-full font-black transition-all text-xs uppercase tracking-widest text-primary">
                            Explore All Profiles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Anitha C", country: "India", org: "KSOU, Mysore", icon: Globe, img: "/img/Anitha_C.jpg" },
                            { name: "Sanjay Noonan", country: "United Kingdom", org: "Croydon University", icon: Trophy, img: "/img/Sanjay_Noonan.png" },
                            { name: "Huang Wei Ling", country: "Brazil", org: "Medical Acupuncture", icon: Users, img: "/img/Huang.jpg" },
                            { name: "Nina Ortova", country: "Czech Republic", org: "Charles University", icon: Mic, img: "/img/Nina_Ortova.jpg" }
                        ].map((speaker, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative overflow-hidden rounded-[40px] bg-white/5 border border-white/5 p-8 transition-all hover:bg-white/10 hover:-translate-y-2"
                            >
                                <div className="w-full aspect-square bg-slate-800 rounded-[32px] mb-8 overflow-hidden relative border border-white/5">
                                    <img src={speaker.img} alt={speaker.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                                            <PlayCircle size={14} /> View Interview
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{speaker.name}</h3>
                                <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest mb-4">
                                    <Globe size={12} /> {speaker.country}
                                </div>
                                <p className="text-slate-400 text-xs font-semibold leading-relaxed line-clamp-2">{speaker.org}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Preview */}
            <section className="py-32 bg-slate-50 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h4 className="text-navy/40 font-black tracking-[0.4em] uppercase text-[10px] mb-6">Strategic Collaborations</h4>
                        <h2 className="text-4xl font-display font-medium text-navy tracking-tight">Partnered with Industry Leaders</h2>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 grayscale hover:grayscale-0 transition-all">
                        <img src="/img/part1.png" alt="Partner 1" className="h-12 object-contain opacity-50 hover:opacity-100 transition-opacity" />
                        <img src="/img/part5.png" alt="Partner 2" className="h-12 object-contain opacity-50 hover:opacity-100 transition-opacity" />
                        <img src="/img/part6.png" alt="Partner 3" className="h-12 object-contain opacity-50 hover:opacity-100 transition-opacity" />
                        <img src="/img/part9.png" alt="Partner 4" className="h-12 object-contain opacity-50 hover:opacity-100 transition-opacity" />
                        <img src="/img/part11.png" alt="Partner 5" className="h-12 object-contain opacity-50 hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="mt-20 text-center">
                        <Link to="/sponsors" className="text-navy font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:text-primary transition-colors">
                            Become a Partner <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
