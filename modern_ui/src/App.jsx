import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Abstract from './pages/Abstract';
import Registration from './pages/Registration';
import Venue from './pages/Venue';
import Contact from './pages/Contact';
import Speakers from './pages/Speakers';
import Program from './pages/Program';
import Sponsors from './pages/Sponsors';
import Faq from './pages/Faq';
import Guidelines from './pages/Guidelines';
import Sessions from './pages/Sessions';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/abstract" element={<Abstract />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/program" element={<Program />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/sessions" element={<Sessions />} />
          </Routes>
        </main>

        <footer className="bg-navy pt-24 pb-12 text-slate-400 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
              <div className="lg:col-span-1">
                <div className="font-display font-bold text-white text-3xl mb-8 tracking-tight">
                  FOOD SCIENCE <span className="text-primary italic">2026</span>
                </div>
                <p className="max-w-xs mb-8 leading-relaxed text-slate-500 font-medium">
                  The premier global gathering for Food Science & Processing Technologies in the heart of Paris.
                </p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary hover:text-navy cursor-pointer transition-all">
                    <span className="font-bold">in</span>
                  </div>
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary hover:text-navy cursor-pointer transition-all">
                    <span className="font-bold">f</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold mb-8 text-lg uppercase tracking-widest text-xs">Scientific Program</h4>
                <ul className="space-y-4 text-sm font-semibold">
                  <li><Link to="/speakers" className="hover:text-primary transition-colors flex items-center gap-2">Conference Speakers</Link></li>
                  <li><Link to="/sessions" className="hover:text-primary transition-colors flex items-center gap-2">Scientific Sessions</Link></li>
                  <li><Link to="/program" className="hover:text-primary transition-colors flex items-center gap-2">Tentative Program</Link></li>
                  <li><Link to="/guidelines" className="hover:text-primary transition-colors flex items-center gap-2">Speaker Guidelines</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-8 text-lg uppercase tracking-widest text-xs">Participation</h4>
                <ul className="space-y-4 text-sm font-semibold">
                  <li><Link to="/registration" className="hover:text-primary transition-colors flex items-center gap-2">Registration Packages</Link></li>
                  <li><Link to="/abstract" className="hover:text-primary transition-colors flex items-center gap-2">Abstract Submission</Link></li>
                  <li><Link to="/sponsors" className="hover:text-primary transition-colors flex items-center gap-2">Sponsorships</Link></li>
                  <li><Link to="/faq" className="hover:text-primary transition-colors flex items-center gap-2">Help & FAQs</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-8 text-lg uppercase tracking-widest text-xs">Venue & Contact</h4>
                <ul className="space-y-6 text-sm font-semibold">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">📍</span>
                    <span className="text-slate-300">Novotel Paris La Défense Esplanade, 2 Boulevard de Neuilly 92081 Paris La Défense</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">📧</span>
                    <span className="text-slate-300">foodscience@averconferences.com</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-black uppercase tracking-[0.2em]">
              <p className="text-slate-600 italic">© 2026 Aver Conferences. Built for the Scientific Community.</p>
              <div className="flex gap-10">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

