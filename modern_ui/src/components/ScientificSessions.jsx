import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Beaker, FlaskConical, Apple, ShieldCheck, Cog, HeartPulse, Scale, Lightbulb, Stethoscope, Baby, Ghost, Leaf, ArrowRight } from 'lucide-react';

const sessions = [
    { name: 'Food science and technology', icon: Cog },
    { name: 'Food chemistry and Microbiology', icon: Beaker },
    { name: 'Food Nutrition and Dietary supplement', icon: Apple },
    { name: 'Food Fraud and quality', icon: ShieldCheck },
    { name: 'Food and Dairy Technology', icon: FlaskConical },
    { name: 'Healthcare and Nutrition', icon: HeartPulse },
    { name: 'Food Quality and Safety Regulations', icon: Scale },
    { name: 'Functional Food and Food innovation', icon: Lightbulb },
];

const ScientificSessions = () => {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h4 className="text-primary font-black tracking-[0.3em] uppercase text-[10px] mb-6">Scientific Tracks</h4>
                        <h2 className="text-5xl font-display font-medium text-navy tracking-tight">Main Sessions</h2>
                        <p className="text-slate-500 text-lg font-medium mt-6">Explore our curated selection of scientific sessions designed to foster innovation and collaboration.</p>
                    </div>
                    <Link to="/sessions" className="group flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-navy transition-all shadow-xl shadow-navy/20">
                        View All 30+ Tracks <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sessions.map((session, idx) => {
                        const Icon = session.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all group hover:shadow-2xl hover:border-primary/20"
                            >
                                <div className="w-20 h-20 bg-primary/5 rounded-[32px] flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-navy transition-all">
                                    <Icon size={32} />
                                </div>
                                <h3 className="font-display font-bold text-xl text-navy group-hover:text-primary transition-colors leading-tight">
                                    {session.name}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ScientificSessions;

