import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Image, Clock, Smartphone, CheckCircle, Info, FileVideo, Users } from 'lucide-react';

const Guidelines = () => {
    const [activeTab, setActiveTab] = useState('speaker');

    const speakerGuidelines = [
        { icon: Clock, title: "Timing", text: "Arrive at least 15 minutes before your session begins." },
        { icon: FileVideo, title: "Presentation Length", text: "20 minutes for presentation and 5 minutes for Q&A." },
        { icon: Smartphone, title: "Slide Format", text: "Widescreen 16:9; Resolution 1920 x 1080; MS PowerPoint or Apple Keynote." },
        { icon: Info, title: "Submission", text: "Bring your slides on a portable drive for upload at least 2 hours in advance." }
    ];

    const posterGuidelines = [
        { icon: Image, title: "Dimensions", text: "Poster should be exactly 1m x 1m." },
        { icon: Users, title: "Clarity", text: "Readable from 10-15 feet away; use 24pt font minimum." },
        { icon: Info, title: "Content", text: "Should include title, authors, organization, and summary." },
        { icon: CheckCircle, title: "Evaluation", text: "Evaluated on quality, relevance, content, and layout." }
    ];

    return (
        <div className="pt-32 pb-24 bg-slate-50 min-h-screen font-display">
            <div className="container mx-auto px-6">
                <header className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Academic Standards
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-navy mb-8"
                    >
                        Presentation Guidelines
                    </motion.h1>

                    {/* Tabs */}
                    <div className="flex justify-center gap-4 mt-12 bg-white p-2 rounded-2xl shadow-sm border border-slate-100 max-w-fit mx-auto">
                        <button
                            onClick={() => setActiveTab('speaker')}
                            className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === 'speaker' ? 'bg-navy text-white shadow-lg' : 'text-slate-400 hover:text-navy'}`}
                        >
                            <Mic size={18} /> Speaker Guidelines
                        </button>
                        <button
                            onClick={() => setActiveTab('poster')}
                            className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === 'poster' ? 'bg-navy text-white shadow-lg' : 'text-slate-400 hover:text-navy'}`}
                        >
                            <Image size={18} /> Poster Guidelines
                        </button>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    {activeTab === 'speaker' ? (
                        <motion.div
                            key="speaker"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                        >
                            {speakerGuidelines.map((item, idx) => (
                                <div key={idx} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="poster"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                        >
                            {posterGuidelines.map((item, idx) => (
                                <div key={idx} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Tip Banner */}
                <div className="mt-20 max-w-4xl mx-auto bg-primary rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 shadow-2xl shadow-primary/20 relative overflow-hidden group">
                    <div className="relative z-10 space-y-4">
                        <h4 className="text-2xl font-bold text-navy">Pro Tip for Successful Presentation</h4>
                        <p className="text-navy/70 text-sm max-w-lg leading-relaxed">
                            Ensure your academic status is verified before the fee increase deadline.
                            Keep your presentation visual and focused on results and future applications.
                        </p>
                    </div>
                    <button className="bg-navy text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all flex items-center gap-3 active:scale-95">
                        Read Full Abstract Guidelines
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Guidelines;
