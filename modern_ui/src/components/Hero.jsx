import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });

    useEffect(() => {
        const target = new Date("October 1, 2026 10:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = target - now;

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background with dynamic visual */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-navy/80 mix-blend-multiply z-10" />
                <img
                    src="/img/Main_Banner.png"
                    alt="Food Science Conference"
                    className="w-full h-full object-cover"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-6 relative z-20 text-center text-white"
            >
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full text-primary font-semibold text-sm mb-6 border border-primary/30">
                    <Calendar size={16} />
                    <span>October 1-2, 2026 • Paris, France</span>
                </motion.div>

                <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-display font-medium text-primary-200 mb-2">
                    6th International Conference on
                </motion.h2>

                <motion.h1 variants={itemVariants} className="text-4xl md:text-7xl font-display font-bold mb-8 leading-tight">
                    Food, Nutrition & <br />
                    <span className="text-primary italic">Processing Technologies</span>
                </motion.h1>

                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
                    <div className="grid grid-cols-4 gap-4 md:gap-8">
                        {[
                            { val: timeLeft.days, label: 'Days' },
                            { val: timeLeft.hours, label: 'Hours' },
                            { val: timeLeft.minutes, label: 'Minutes' },
                            { val: timeLeft.seconds, label: 'Seconds' }
                        ].map((unit, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-16 h-16 md:w-24 md:h-24 glass-dark rounded-2xl flex items-center justify-center text-2xl md:text-4xl font-bold shadow-2xl mb-2">
                                    {String(unit.val).padStart(2, '0')}
                                </div>
                                <span className="text-[10px] md:text-xs uppercase tracking-widest text-primary font-semibold">{unit.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
                    <button className="bg-primary hover:bg-primary-dark text-navy font-bold px-8 py-4 rounded-full flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(203,167,132,0.4)]">
                        Join the Conference <ArrowRight size={18} />
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold px-8 py-4 rounded-full border border-white/30 transition-all">
                        Submit Abstract
                    </button>
                </motion.div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-20" />
        </section>
    );
};

export default Hero;
