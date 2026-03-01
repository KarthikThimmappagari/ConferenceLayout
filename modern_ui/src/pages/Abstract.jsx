import React from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const Abstract = () => {
    return (
        <div className="pt-32 pb-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <header className="max-w-4xl mx-auto text-center mb-16 px-6">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Scientific Submission
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-navy mb-8"
                    >
                        Abstract Submission
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg leading-relaxed"
                    >
                        Share your research with the global scientific community. We invite original papers
                        and case studies in the field of Food Science, Nutrition, and Processing Technologies.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    {/* Submission Guidelines */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                            <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                                <FileText className="text-primary" />
                                Guidelines
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Max word count: 300 words",
                                    "Include 3-5 keywords",
                                    "Structured: Aim, Method, Result, Conclusion",
                                    "Original and unpublished work",
                                    "PDF/Docx format only"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                                        <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 p-4 bg-primary/5 rounded-2xl border border-primary/20 flex gap-4">
                                <AlertCircle className="text-primary shrink-0" />
                                <p className="text-xs text-slate-700 leading-relaxed">
                                    <strong>Important:</strong> First round submission closes on
                                    <span className="text-navy font-bold"> March 05, 2026</span>.
                                </p>
                            </div>
                        </div>

                        <div className="bg-navy p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                            <h3 className="text-lg font-bold mb-4">Sample Template</h3>
                            <p className="text-white/70 text-sm mb-6 leading-relaxed">
                                Download our standardized conference abstract template for proper formatting.
                            </p>
                            <button className="w-full bg-primary hover:bg-primary-dark text-navy font-bold py-3 rounded-xl transition-all shadow-lg">
                                Download Template
                            </button>
                        </div>
                    </div>

                    {/* Submission Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl">
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">Organization</label>
                                        <input type="text" placeholder="University / Company" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">Session Topic</label>
                                        <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                                            <option>Select Topic</option>
                                            <option>Food Science & Technology</option>
                                            <option>Nutrition & Dietetics</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">Work Title</label>
                                    <input type="text" placeholder="The title of your research paper" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">Brief Abstract Preview</label>
                                    <textarea rows="4" placeholder="Enter a 200 character summary" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
                                </div>

                                <div className="relative group">
                                    <div className="border-2 border-dashed border-slate-200 group-hover:border-primary rounded-3xl p-12 transition-colors flex flex-col items-center justify-center bg-slate-50/50">
                                        <Upload className="text-slate-300 group-hover:text-primary transition-colors mb-4" size={48} />
                                        <p className="text-slate-500 font-medium mb-1">Drag and drop your file here</p>
                                        <p className="text-slate-400 text-xs">Maximum size: 10MB (PDF, DOC, DOCX)</p>
                                        <button type="button" className="mt-6 bg-white border border-slate-200 group-hover:border-primary px-6 py-2 rounded-lg text-sm font-bold shadow-sm transition-all active:scale-95">Browse Files</button>
                                    </div>
                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                                </div>

                                <div className="flex items-center gap-12 pt-4">
                                    <button className="flex-1 bg-navy hover:bg-navy-dark text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-navy/20 active:scale-[0.98]">
                                        Submit Abstract
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abstract;
