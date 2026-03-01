import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane, Building2, Coffee, Wifi, Star } from 'lucide-react';

const Venue = () => {
    return (
        <div className="pt-32 pb-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <header className="max-w-4xl mx-auto text-center mb-16 px-6">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Location & Destination
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-navy mb-8"
                    >
                        Venue & Hospitality
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg leading-relaxed"
                    >
                        We are pleased to host Food Science 2026 in the beautiful heart of France.
                        Experience world-class conferencing and hospitality.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
                    {/* Venue Card */}
                    <section className="space-y-12">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                            <div className="h-96 bg-slate-200 relative">
                                <img
                                    src="/img/v2.png"
                                    alt="Paris Venue"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-navy/20" />
                                <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl flex justify-between items-center">
                                    <div>
                                        <h3 className="text-navy font-bold text-xl">Novotel Paris La Défense</h3>
                                        <p className="text-navy/70 text-sm">Official Conference Venue</p>
                                    </div>
                                    <div className="flex gap-1 text-primary">
                                        {[1, 2, 3, 4].map(i => <Star key={i} size={16} fill="currentColor" />)}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 md:p-12 space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                        <MapPin />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy mb-2">Address</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            2 Bd de Neuilly, 92400 Courbevoie, <br />
                                            Paris, France
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-navy text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-navy/20">
                                        <Building2 />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy mb-2">About the Hotel</h4>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            Located at the gates of Paris, in the heart of La Défense, our hotel offers
                                            stunning views over the Eiffel Tower and the Sacré Coeur. It provides
                                            state-of-the-art conference facilities and modern rooms for international guests.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 pt-4">
                                    {[
                                        { icon: Coffee, text: "Breakfast" },
                                        { icon: Wifi, text: "Free WiFi" },
                                        { icon: Plane, text: "Airport shuttle" }
                                    ].map((feat, idx) => (
                                        <div key={idx} className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center group hover:bg-white hover:shadow-xl transition-all">
                                            <feat.icon className="text-slate-400 group-hover:text-primary transition-colors mb-2" size={24} />
                                            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter">{feat.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Travel Info Section */}
                    <section className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-display font-bold text-navy mb-8">Travel Information</h2>
                            <div className="space-y-6">
                                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Plane size={80} />
                                    </div>
                                    <h4 className="font-bold text-navy mb-4 text-lg">By Plane</h4>
                                    <div className="space-y-4 text-sm text-slate-600">
                                        <p>Paris Charles de Gaulle Airport (CDG) - 25km (Approx. 45 mins)</p>
                                        <p>Paris Orly Airport (ORY) - 20km (Approx. 40 mins)</p>
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <MapPin size={80} />
                                    </div>
                                    <h4 className="font-bold text-navy mb-4 text-lg">By Metro</h4>
                                    <div className="space-y-4 text-sm text-slate-600">
                                        <p>Line 1 - Station: "Esplanade de la Défense"</p>
                                        <p>RER A - Station: "La Défense Grande Arche"</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary/10 p-8 rounded-3xl border border-primary/20">
                            <h4 className="font-bold text-navy mb-3">Visa Assistance</h4>
                            <p className="text-sm text-slate-700 leading-relaxed mb-6">
                                For international attendees requiring a visa invitation letter,
                                please complete your registration first and then request the letter via the participant portal.
                            </p>
                            <button className="bg-navy text-white text-sm font-bold px-6 py-3 rounded-xl hover:translate-x-1 transition-all">
                                Learn more about VISA
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Venue;
