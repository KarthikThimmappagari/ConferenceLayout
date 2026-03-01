import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, UserCheck, Globe, Info } from 'lucide-react';

const Speakers = () => {
    const [activeTab, setActiveTab] = useState('ocm');

    const ocmMembers = [
        {
            name: "Prof. Anitha C",
            country: "India",
            image: "/img/Anitha_C.jpg",
            org: "Department of Studies and Research in Food Science and Nutrition, Karnataka State Open University, Mysuru.",
            desc: "Expertise in Community Nutrition with 27+ years of experience in academic development."
        },
        {
            name: "Dr. Christian Randi",
            country: "Spain",
            image: "/img/Dr._Christian_Randi.jpg",
            org: "Dietitians-Nutritionists of Canary Islands",
            desc: "Innovation expert in food safety and clinical diagnostics within medical panels."
        },
        {
            name: "Prof. Dinesh Chandra Rai",
            country: "India",
            image: "/img/Prof._Dinesh_Chandra_Rai.jpg",
            org: "Senior Professor of Dairy Science & Food Technology, BHU.",
            desc: "Commonwealth Academic Fellow with 32 years of rich experience in teaching and research."
        },
        {
            name: "Dr. Premila L. Bordoloi",
            country: "India",
            image: "/img/Dr._Premila_L._Bordoloi-foodscience.png",
            org: "Food Science Specialist, Assam Agricultural University.",
            desc: "Research Lead specializing in functional food development and nutritional biochemistry."
        },
        {
            name: "Martin Gillespie",
            country: "United Kingdom",
            image: "/img/Martin_Gillespie.png",
            org: "Medical & Science Director, GEM Wellness Warriors.",
            desc: "Specialist in health science navigation and nutrition technology integration."
        },
        {
            name: "Dr. Ahmed Behdal Shazly",
            country: "Egypt",
            image: "/img/Dr._Ahmed_Behdal_Shazly.jpg",
            org: "University Researcher & Food Technologist.",
            desc: "Leading expert in food chemistry and innovative academic research methodologies."
        }
    ];

    const pastSpeakers = [
        { name: "Naomi Cano Ibañez", country: "Spain", image: "/img/Naomi_Cano_Pic.jpg", org: "University of Granada" },
        { name: "Sanjay Noonan", country: "UK", image: "/img/Sanjay_Noonan.png", org: "Croydon University" },
        { name: "Nina Ortova", country: "Czech Republic", image: "/img/Nina_Ortova.jpg", org: "Charles University" },
        { name: "Miroslaw Kwiatkowski", country: "Poland", image: "/img/Miroslaw_Kwiatkowski.jpg", org: "AGH University" },
        { name: "Huang Wei Ling", country: "Brazil", image: "/img/Huang.jpg", org: "Medical Acupuncture" },
        { name: "Antonio Fazari", country: "Italy", image: "/img/Antonio_Fazari.jpg", org: "Innovation Group" },
        { name: "Anna Onopiuk", country: "Poland", image: "/img/Anna_Onopiuk.jpg.jpg", org: "Warsaw University" },
        { name: "Harry Behzadi", country: "USA", image: "/img/Dr._Harry_Behzadi.jpg", org: "Strategic Science Lead" },
        { name: "Nagendra Rangavajla", country: "USA", image: "/img/Dr._Nagendra.jpg", org: "Varan Nutrition LLC" },
        { name: "Myleen Corpuz", country: "Philippines", image: "/img/Dr._Myleen_Corpuz.jpg", org: "Isabela State University" },
        { name: "Richa Sharma", country: "India", image: "/img/Dt._Richa_Sharma.png", org: "AAFT University" },
        { name: "Bhashyam M K", country: "India", image: "/img/Bhashyam_M_K.jpg", org: "CSIR-CFTRI" }
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
                        Elite Academic Panel
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-navy mb-8"
                    >
                        Conference Speakers
                    </motion.h1>

                    {/* Tabs */}
                    <div className="flex justify-center gap-4 mt-12 bg-white p-2 rounded-2xl shadow-sm border border-slate-100 max-w-fit mx-auto">
                        <button
                            onClick={() => setActiveTab('ocm')}
                            className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === 'ocm' ? 'bg-navy text-white shadow-lg' : 'text-slate-400 hover:text-navy'}`}
                        >
                            <Users size={18} /> Organizing Committee
                        </button>
                        <button
                            onClick={() => setActiveTab('past')}
                            className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === 'past' ? 'bg-navy text-white shadow-lg' : 'text-slate-400 hover:text-navy'}`}
                        >
                            <UserCheck size={18} /> Previous Speakers
                        </button>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    {activeTab === 'ocm' ? (
                        <motion.div
                            key="ocm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
                        >
                            {ocmMembers.map((member, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 hover:shadow-xl transition-all group">
                                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shrink-0 bg-slate-100 border-2 border-primary/20">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                            onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=OCM"; }}
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-navy mb-1">{member.name}</h3>
                                            <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                                                <Globe size={14} />
                                                <span>{member.country}</span>
                                            </div>
                                        </div>
                                        <div className="text-navy/70 text-xs font-bold uppercase tracking-tight leading-relaxed">{member.org}</div>
                                        <p className="text-slate-500 text-sm leading-relaxed italic border-l-2 border-primary/20 pl-4">
                                            {member.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="past"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
                        >
                            {pastSpeakers.map((speaker, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center group">
                                    <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-slate-50 border border-slate-100">
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                            onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=Speaker"; e.target.className = "w-full h-full object-cover opacity-20"; }}
                                        />
                                    </div>
                                    <h4 className="font-bold text-navy mb-1">{speaker.name}</h4>
                                    <p className="text-primary text-[10px] uppercase tracking-widest font-bold mb-2">{speaker.country}</p>
                                    <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">{speaker.org}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Call to Action */}
                <div className="mt-24 text-center">
                    <div className="bg-navy p-12 rounded-[50px] text-white relative overflow-hidden shadow-2xl max-w-4xl mx-auto">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
                        <h3 className="text-3xl font-display font-bold mb-4">Want to Join the Faculty?</h3>
                        <p className="text-white/60 mb-8 max-w-lg mx-auto">
                            Submit your abstract today to be considered for a keynote or plenary speaking slot at the 2026 conference.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-primary text-navy font-bold px-10 py-4 rounded-full hover:scale-105 transition-all">
                                Submit Abstract
                            </button>
                            <button className="border border-white/20 hover:bg-white/10 px-10 py-4 rounded-full font-bold transition-all">
                                Contact Committee
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speakers;
