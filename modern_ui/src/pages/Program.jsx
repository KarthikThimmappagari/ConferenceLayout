import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Download, User, Mic } from 'lucide-react';

const Program = () => {
    const days = [
        {
            day: "Day 01",
            date: "August 17, 2026",
            events: [
                { time: "08:00 - 09:00", title: "Registration and Badge Pick-up", type: "Logistic" },
                { time: "09:00 - 09:30", title: "Opening Ceremony & Introduction", type: "Keynote" },
                { time: "09:30 - 10:30", title: "Keynote Session: Future of Food Safety", type: "Keynote" },
                { time: "10:30 - 11:00", title: "Coffee Break & Networking", type: "Networking" },
                { time: "11:00 - 13:00", title: "Oral Presentations: Session A & B", type: "Scientific" },
                { time: "13:00 - 14:00", title: "Networking Lunch", type: "Social" },
                { time: "14:00 - 16:00", title: "Technical Workshop: Nano Tech in Food", type: "Workshop" }
            ]
        },
        {
            day: "Day 02",
            date: "August 18, 2026",
            events: [
                { time: "09:00 - 10:30", title: "Plenary Session: Sustainable Agriculture", type: "Keynote" },
                { time: "10:30 - 11:00", title: "Morning Refreshment", type: "Social" },
                { time: "11:00 - 13:00", title: "Poster Presentations & Evaluation", type: "Scientific" },
                { time: "13:00 - 14:00", title: "Grand Networking Lunch", type: "Social" },
                { time: "14:00 - 16:00", title: "Panel Discussion: Global Regulations", type: "Scientific" },
                { time: "16:00 - 17:00", title: "Closing Remarks & Awards", type: "Logistic" }
            ]
        }
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
                        Scientific Schedule
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-navy mb-8"
                    >
                        Tentative Program
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        Get a glimpse into the two-day academic journey featuring world-class speakers and cutting-edge research presentations.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 flex justify-center gap-4"
                    >
                        <button className="bg-navy text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all">
                            <Download size={18} /> Download Full PDF
                        </button>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {days.map((day, idx) => (
                        <div key={idx} className="space-y-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-4 bg-primary text-navy rounded-2xl font-black text-xl shadow-lg shadow-primary/20">
                                    {day.day}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-navy">{day.date}</h3>
                                    <p className="text-slate-400 text-sm flex items-center gap-1 font-semibold uppercase tracking-widest mt-1">
                                        <MapPin size={14} className="text-primary" /> Paris, France
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 border-l-2 border-primary/20 pl-8 ml-6">
                                {day.events.map((event, eIdx) => (
                                    <motion.div
                                        key={eIdx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative group hover:shadow-xl transition-all"
                                    >
                                        <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-primary/20 border-2 border-white" />
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                                                    <Clock size={14} /> {event.time}
                                                </div>
                                                <h4 className="text-lg font-bold text-navy">{event.title}</h4>
                                            </div>
                                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${event.type === 'Keynote' ? 'bg-navy text-white' :
                                                    event.type === 'Networking' ? 'bg-primary/10 text-primary' :
                                                        'bg-slate-50 text-slate-400'
                                                }`}>
                                                {event.type}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* PDF Viewer Placeholder */}
                <div className="mt-24 max-w-7xl mx-auto">
                    <div className="bg-navy rounded-[40px] p-2 overflow-hidden shadow-2xl group border border-white/10">
                        <div className="aspect-[16/9] md:aspect-[21/9] bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent z-10" />
                            <div className="z-20 text-center p-12">
                                <div className="w-24 h-24 bg-white/10 rounded-[32px] flex items-center justify-center mx-auto mb-8 animate-pulse">
                                    <Download className="text-primary" size={48} />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Detailed Program Guide</h3>
                                <p className="text-white/40 text-sm max-w-md mx-auto mb-8 font-semibold tracking-wide uppercase italic">
                                    Complete PDF document including bio summaries, session rooms, and technical specifications.
                                </p>
                                <button className="bg-primary text-navy font-bold px-10 py-4 rounded-full hover:scale-105 transition-all shadow-xl shadow-primary/20">
                                    Open in New Tab
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Program;
