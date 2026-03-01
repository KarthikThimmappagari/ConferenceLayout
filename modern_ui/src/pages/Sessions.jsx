import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Microscope, Salad, ShieldAlert, Milk, Heart, ClipboardCheck, Lightbulb, Pill, Baby, Brain, Sprout, Coffee, Apple, Zap, Bug, Hospital, Dna, Dumbbell, Globe, FlaskConical, TestTube, Recycle, Thermometer, Wind, Leaf, Activity, Layers, Activity as Endocrine, Network as Neuro, Scissors, Settings } from 'lucide-react';

const ScientificSessionsPage = () => {
    const sessions = [
        { icon: Beaker, title: "Food Science and Technology", desc: "Foundational research into food processing, preservation, and innovation." },
        { icon: Microscope, title: "Food Chemistry and Microbiology", desc: "Molecular analysis and microbial safety for high-quality production." },
        { icon: Salad, title: "Food Nutrition and Dietary Supplement", desc: "Scientific approach to balanced diets and nutritional enrichment." },
        { icon: ShieldAlert, title: "Food Fraud and Quality Control", desc: "Combatting adulteration and ensuring global quality standards." },
        { icon: Milk, title: "Food and Dairy Technology", desc: "Next-gen dairy processing and alternative plant-based milk systems." },
        { icon: Heart, title: "Healthcare and Nutrition", desc: "The vital link between dietary habits and long-term health outcomes." },
        { icon: ClipboardCheck, title: "Food Quality and Safety Regulations", desc: "Global standards, HACCP, and international regulatory frameworks." },
        { icon: Lightbulb, title: "Functional Food and Innovation", desc: "Development of foods with added health benefits beyond basic nutrition." },
        { icon: Pill, title: "Medical Foods and Nutraceuticals", desc: "Bioactive compounds and therapeutic applications in clinical diets." },
        { icon: Baby, title: "Pregnancy and Pre-pregnancy Nutrition", desc: "Maternal nutrition and its impact on fetal development." },
        { icon: Brain, title: "Food Addiction and Eating Disorders", desc: "Psychological and neurological aspects of dietary behavior." },
        { icon: Sprout, title: "Agriculture and Plant Science", desc: "Sustainable crop production for food security and resilience." },
        { icon: Coffee, title: "Food and Beverages", desc: "Innovation in liquid refreshment, fermentation, and flavor chemistry." },
        { icon: Apple, title: "Diet and Nutrients", desc: "Macro and micronutrient balance for optimal human performance." },
        { icon: Zap, title: "Prebiotics and Probiotics", desc: "Gut health and the microbiome's role in the immune system." },
        { icon: Bug, title: "Food-borne Illness and Allergies", desc: "Identification and prevention of pathogens and allergens." },
        { icon: Hospital, title: "Clinical Nutrition", desc: "Specialized nutrition therapy for hospital patients and chronic care." },
        { icon: FlaskConical, title: "Foodomics", desc: "Advanced -omics technologies applied to food and nutrition science." },
        { icon: Baby, title: "Pediatric and Child Nutrition", desc: "Early childhood nutritional needs and development milestones." },
        { icon: Dumbbell, title: "Sports Nutrition", desc: "Performance-oriented fueling for athletes and active lifestyles." },
        { icon: Globe, title: "Public Health Nutrition", desc: "Community-wide interventions and global food security strategies." },
        { icon: TestTube, title: "Nano Biotechnology", desc: "Nanotechnology applications in food packaging and nutrient delivery." },
        { icon: Thermometer, title: "Food Texture and Rheology", desc: "Physical properties and sensory perception of food materials." },
        { icon: Wind, title: "Food Waste Management", desc: "Circular economy strategies to reduce and repurpose food waste." },
        { icon: Leaf, title: "Climate Change and Food Systems", desc: "Mitigating and adapting food systems to a changing environment." },
        { icon: Endocrine, title: "Nutritional Endocrinology", desc: "Hormonal regulation of metabolism and appetite." },
        { icon: Dna, title: "Nutrigenomics & Epigenetics", desc: "Gene-diet interactions and personalized nutrition strategies." }
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
                        Scientific Frontiers
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-navy mb-8"
                    >
                        Scientific Sessions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        A comprehensive program designed for researchers, academics, and industry experts to share the latest breakthroughs in Food Science.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {sessions.map((session, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:scale-105 transition-all group"
                        >
                            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                <session.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">{session.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{session.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center">
                    <button className="bg-navy text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:scale-105 transition-all">
                        Download Session PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ScientificSessionsPage;
