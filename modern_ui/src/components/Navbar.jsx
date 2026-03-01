import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Speakers', href: '/speakers' },
        { name: 'Sessions', href: '/sessions' },
        { name: 'Program', href: '/program' },
        { name: 'Registration', href: '/registration' },
        { name: 'Abstract', href: '/abstract' },
        { name: 'Venue', href: '/venue' },
    ];

    const moreLinks = [
        { name: 'About', href: '/about' },
        { name: 'Guidelines', href: '/guidelines' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Sponsors', href: '/sponsors' },
        { name: 'Contact', href: '/contact' },
    ];

    const isHomePage = location.pathname === '/';
    const textColor = isScrolled || !isHomePage ? 'text-navy' : 'text-white';
    const linkColor = isScrolled || !isHomePage ? 'text-navy/60 hover:text-navy' : 'text-white/60 hover:text-white';

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-lg border-b border-navy/5' : 'py-8 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <img
                        src="/img/FS_logo.png"
                        alt="Logo"
                        className={`h-12 w-auto transition-all ${isScrolled || !isHomePage ? 'brightness-0' : 'brightness-0 invert'}`}
                    />
                    <div className="hidden sm:block">
                        <h1 className={`font-display font-medium text-xl leading-tight ${textColor}`}>
                            FOOD SCIENCE <span className="text-primary italic font-black">2026</span>
                        </h1>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-black">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`transition-all hover:text-primary relative py-2 ${linkColor} ${location.pathname === link.href ? 'text-primary' : ''}`}
                        >
                            {link.name}
                            {location.pathname === link.href && (
                                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                            )}
                        </Link>
                    ))}

                    <div className="relative group">
                        <button className={`flex items-center gap-1 py-2 ${linkColor} hover:text-primary transition-colors`}>
                            More <ChevronDown size={12} />
                        </button>
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top translate-y-2 group-hover:translate-y-0 text-navy">
                            {moreLinks.map(link => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="block px-6 py-3 hover:bg-slate-50 hover:text-primary transition-colors normal-case font-bold text-xs"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link to="/registration" className="bg-primary hover:bg-navy hover:text-white text-navy px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-xl font-black">
                        Register
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 rounded-xl transition-colors"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Menu className={textColor} size={32} />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-navy lg:hidden h-screen w-screen flex flex-col"
                    >
                        <div className="flex justify-between items-center p-8 border-b border-white/5">
                            <div className="font-display font-bold text-white text-2xl tracking-tight">FOOD SCIENCE <span className="text-primary italic">2026</span></div>
                            <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2 border border-white/20 rounded-full hover:bg-white/10">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-grow overflow-y-auto p-8 space-y-12">
                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-primary/40">Conference</h4>
                                <div className="flex flex-col gap-6">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.href}
                                            className={`text-4xl font-display font-bold transition-colors ${location.pathname === link.href ? 'text-primary' : 'text-white'}`}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6 pb-12">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-primary/40">Information</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {moreLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.href}
                                            className="text-white/60 font-bold hover:text-white"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

