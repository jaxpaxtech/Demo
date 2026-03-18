import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "motion/react";
import { 
  Users, 
  BookOpen, 
  Award, 
  CheckCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight,
  GraduationCap,
  Clock,
  Star,
  ChevronRight,
  Target,
  Zap,
  Book,
  Search,
  Check,
  Sparkles,
  ArrowUpRight,
  Play,
  ShieldCheck,
  BrainCircuit,
  Lightbulb,
  Trophy
} from "lucide-react";

import { AIChatbot } from "./components/AIChatbot";

// --- Shared Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Admissions", href: "/admissions" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-academy-blue z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 transition-all duration-500 rounded-full ${scrolled ? "glass py-3 px-8" : "bg-transparent py-5 px-6"}`}>
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-extrabold text-academy-dark flex items-center gap-2 group">
          <div className="w-10 h-10 bg-academy-blue rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-200">
            <GraduationCap className="w-6 h-6" />
          </div>
          <span className="tracking-tight">Bright Future</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${location.pathname === link.href ? "bg-academy-blue text-white shadow-lg shadow-blue-100" : "text-slate-500 hover:text-academy-blue hover:bg-blue-50"}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-px h-6 bg-slate-200 mx-4"></div>
          <Link to="/admissions" className="bg-academy-dark text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-slate-200">
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute top-full left-0 w-full mt-4 bg-white/90 backdrop-blur-2xl shadow-2xl rounded-3xl py-8 px-8 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsOpen(false)}
                className={`text-xl font-bold py-2 ${location.pathname === link.href ? "text-academy-blue" : "text-slate-400"}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/admissions" onClick={() => setIsOpen(false)} className="bg-academy-blue text-white py-4 rounded-2xl font-bold mt-4 text-center shadow-xl shadow-blue-100">
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
};

const Footer = () => (
  <footer className="bg-academy-dark text-white pt-32 pb-12 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-academy-blue rounded-full blur-[150px]"></div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-2">
          <div className="text-3xl font-black text-white flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center"><GraduationCap className="w-7 h-7" /></div>
            <span>Bright Future</span>
          </div>
          <p className="text-slate-400 max-w-sm text-lg leading-relaxed mb-10">
            Pioneering the future of education with a blend of traditional wisdom and modern technology.
          </p>
          <div className="flex gap-4">
            {["Twitter", "Instagram", "LinkedIn", "YouTube"].map(social => (
              <div key={social} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-500 transition-all cursor-pointer group">
                <div className="w-5 h-5 bg-white/20 rounded-full group-hover:scale-125 transition-transform"></div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-8">Navigation</h4>
          <ul className="space-y-5 text-slate-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Academy</Link></li>
            <li><Link to="/courses" className="hover:text-white transition-colors">Our Programs</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-8">Contact</h4>
          <ul className="space-y-5 text-slate-400">
            <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-blue-500" /> Mumbai, India</li>
            <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-blue-500" /> +91 98765 43210</li>
            <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-blue-500" /> hello@brightfuture.edu</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm font-medium">
          Demo Website | Crafted by <span className="text-white">Prince Maurya</span>
        </p>
        <div className="flex gap-8 text-slate-500 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Page Components ---

const HomePage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const features = [
    { icon: <BrainCircuit className="w-8 h-8" />, title: "Elite Mentorship", desc: "Direct access to IITians, Doctors, and PhD scholars who have mastered the art of teaching." },
    { icon: <Users className="w-8 h-8" />, title: "Personalized Focus", desc: "We maintain a strict 1:12 ratio to ensure no student is left behind in the crowd." },
    { icon: <Zap className="w-8 h-8" />, title: "AI-Powered Insights", desc: "Proprietary analytics that identify your weak spots before they become obstacles." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Mental Resilience", desc: "Integrated stress management and mindfulness sessions for peak exam performance." },
  ];

  const stats = [
    { label: "Success Rate", value: "98%", suffix: "+" },
    { label: "Top Ranks", value: "500", suffix: "+" },
    { label: "Expert Faculty", value: "150", suffix: "+" },
    { label: "Years of Legacy", value: "15", suffix: "+" },
  ];

  const faqs = [
    { q: "What is the admission process?", a: "The process starts with a diagnostic test followed by a 1-on-1 counseling session with our academic experts to determine the best program for your child." },
    { q: "Do you offer online classes?", a: "Yes, we offer a hybrid model where students can attend both physical and live interactive online sessions with recorded backups." },
    { q: "How do you handle doubt clearing?", a: "We have dedicated 24/7 doubt-clearing support via our app and daily 1-on-1 physical doubt sessions at our centers." },
    { q: "Is there a scholarship program?", a: "Absolutely. We offer up to 100% scholarships based on our Bright Future Talent Search Exam (BFTSE) conducted monthly." },
  ];

  const testimonials = [
    { name: "Mrs. Anjali Mehta", role: "Parent of Topper", text: "The transformation in my son's confidence was visible within months. It's not just coaching; it's character building.", img: "https://i.pravatar.cc/150?img=32" },
    { name: "Dr. Vikram Singh", role: "Alumnus (AIIMS)", text: "Bright Future gave me the conceptual clarity I needed to crack NEET. Their test series is the closest to the real thing.", img: "https://i.pravatar.cc/150?img=68" },
    { name: "Siddharth Rao", role: "IIT Bombay Student", text: "The mentors here don't just teach subjects; they teach you how to think. That made all the difference for JEE.", img: "https://i.pravatar.cc/150?img=12" },
  ];

  return (
    <main ref={containerRef} className="mesh-gradient">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-academy-blue text-xs font-black uppercase tracking-widest mb-8 border border-blue-100 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              India's Most Trusted Learning Hub
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-10 tracking-tighter text-academy-dark">
              Don't Just Study. <br />
              <span className="text-gradient">Dominate.</span>
            </h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl font-medium">
              We combine elite mentorship with cutting-edge technology to deliver results that aren't just good—they're legendary.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/admissions" className="group bg-academy-blue text-white px-10 py-5 rounded-3xl font-bold text-lg shadow-[0_20px_50px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all flex items-center gap-3">
                Start Your Journey <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <button className="bg-white border border-slate-200 text-academy-dark px-10 py-5 rounded-3xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-academy-blue"><Play className="w-4 h-4 fill-current" /></div>
                Experience a Class
              </button>
            </div>

            {/* Floating Academic Icons */}
            <div className="mt-16 flex gap-8 opacity-20">
              <BookOpen className="w-10 h-10" />
              <BrainCircuit className="w-10 h-10" />
              <Target className="w-10 h-10" />
              <Zap className="w-10 h-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Students Collaborating" 
                className="w-full h-full object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass p-6 rounded-3xl z-20 hidden xl:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-200">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Global Rank</p>
                  <p className="text-xl font-black">Top 1% Club</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl z-20 hidden xl:block"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-white overflow-hidden bg-slate-200">
                      <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold text-slate-600">500+ Selections in 2025</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-blue-50/50 -z-10 rounded-l-[10rem]"></div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-slate-100 bg-white/50 backdrop-blur-sm overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-10">Our Students Excel At</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {["IIT BOMBAY", "AIIMS DELHI", "MIT", "STANFORD", "BITS PILANI"].map(logo => (
              <span key={logo} className="text-2xl font-black tracking-tighter text-academy-dark">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-5xl md:text-7xl font-black text-academy-blue mb-2 tracking-tighter">
                  {stat.value}{stat.suffix}
                </h3>
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Features Section */}
      <section className="section-padding relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">The <span className="text-gradient">Bright Future</span> Edge</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Why settle for average when you can be extraordinary? Our methodology is designed for high-performers.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`bento-card ${i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"}`}
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-academy-blue mb-8 shadow-inner">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{f.desc}</p>
                <div className="mt-10 flex items-center text-academy-blue font-bold text-sm gap-2 group cursor-pointer">
                  Learn Our Method <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-5xl font-black mb-8 tracking-tight">Voices of <br /><span className="text-gradient">Success.</span></h2>
              <p className="text-lg text-slate-500 font-medium mb-10">Don't take our word for it. Hear from the families and students who have walked the path before you.</p>
              <div className="flex gap-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="mt-4 font-bold text-academy-dark">4.9/5 Rating from 2,000+ Reviews</p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between"
                >
                  <p className="text-slate-600 italic mb-8 text-lg leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-academy-dark">{t.name}</h4>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - Horizontal Scroll Style */}
      <section className="section-padding bg-academy-dark text-white rounded-[4rem] mx-4 md:mx-10 my-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black mb-6">Our Hall of <span className="text-blue-400">Fame</span></h2>
              <p className="text-xl text-slate-400 font-medium">The results speak for themselves. Meet our top achievers who redefined excellence.</p>
            </div>
            <Link to="/courses" className="bg-white text-academy-dark px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all">View All Results</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Aryan Malhotra", score: "99.8%", exam: "JEE Advanced", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop" },
              { name: "Ishita Kapoor", score: "AIR 12", exam: "NEET UG", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop" },
              { name: "Kabir Das", score: "98.9%", exam: "CBSE 12th", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop" },
              { name: "Ananya Iyer", score: "1580/1600", exam: "SAT Elite", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop" },
            ].map((topper, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 border border-white/10">
                  <img src={topper.img} alt={topper.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-academy-dark via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-3xl font-black text-blue-400">{topper.score}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-300">{topper.exam}</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold">{topper.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-slate-50 rounded-[4rem] p-12 md:p-24 relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 -z-0 rounded-l-[4rem] hidden lg:block"></div>
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-academy-blue rounded-3xl flex items-center justify-center text-white mb-10 shadow-xl shadow-blue-100">
                  <Star className="w-10 h-10 fill-current" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">From a Small Town to <span className="text-gradient">IIT Bombay.</span></h2>
                <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10 italic">
                  "I used to struggle with basic physics concepts. The mentors at Bright Future didn't just teach me formulas; they taught me how to visualize the universe. Their 1-on-1 sessions were the turning point in my JEE preparation."
                </p>
                <div>
                  <h4 className="text-2xl font-black text-academy-dark">Aryan Malhotra</h4>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">JEE Advanced 2025 | AIR 42</p>
                </div>
              </motion.div>
              <div className="relative">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1000&auto=format&fit=crop" 
                    alt="Success Story" 
                    className="w-full h-full object-cover aspect-square" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                  <p className="text-sm font-black text-academy-blue uppercase tracking-widest mb-1">Scholarship Awarded</p>
                  <p className="text-xl font-black">100% Merit Based</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-6">Common <span className="text-gradient">Questions</span></h2>
              <p className="text-lg text-slate-500 font-medium">Everything you need to know about starting your journey with us.</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <details key={i} className="group bento-card p-0 overflow-hidden border border-slate-100">
                  <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
                    <h4 className="text-xl font-bold text-academy-dark">{faq.q}</h4>
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-academy-blue group-open:rotate-180 transition-transform">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </summary>
                  <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* High-End CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[4rem] bg-gradient-to-br from-academy-blue to-accent-purple p-12 md:p-24 text-center text-white overflow-hidden shadow-[0_50px_100px_rgba(59,130,246,0.2)]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter">Your Seat at the Top <br /> <span className="italic">is Waiting.</span></h2>
              <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-3xl mx-auto font-medium">
                Admissions for the 2026-27 session are now open. Secure your future with the academy that delivers on its promises.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/admissions" className="bg-white text-academy-blue px-12 py-6 rounded-3xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
                  Apply for Admission
                </Link>
                <button className="glass text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-white/20 transition-all">
                  Book Free Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

const AboutPage = () => (
  <main className="mesh-gradient min-h-screen pt-32">
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-academy-blue font-black uppercase tracking-[0.3em] text-xs mb-6 block">The Gold Standard</span>
            <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.95]">Where Ambition <br /><span className="text-gradient">Meets Excellence.</span></h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium mb-10">
              Bright Future Academy was founded with a single mission: to bridge the gap between potential and achievement. We don't just prepare students for exams; we prepare them for life.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <p className="text-5xl font-black text-academy-blue mb-2">94%</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">IIT/Medical Selection</p>
              </div>
              <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <p className="text-5xl font-black text-academy-blue mb-2">50+</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Expert PhD Mentors</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[15px] border-white">
              <img src="https://images.unsplash.com/photo-1523050335392-93851179ae22?q=80&w=2070&auto=format&fit=crop" alt="University Campus" className="w-full h-full object-cover aspect-square" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-academy-dark text-white p-10 rounded-[3rem] shadow-2xl hidden lg:block">
              <p className="text-4xl font-black mb-2">#1</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">Ranked in Mumbai</p>
            </div>
          </div>
        </div>

        {/* Success Framework */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">The 4-Step <span className="text-gradient">Success Framework</span></h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Our proven methodology that has produced over 5,000 top-rankers.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Conceptual Depth", desc: "Moving beyond rote learning to deep first-principles understanding." },
              { step: "02", title: "Rigorous Practice", desc: "Daily problem-solving sets curated by national-level subject experts." },
              { step: "03", title: "Adaptive Testing", desc: "Weekly mock tests that mirror the exact difficulty of the real exams." },
              { step: "04", title: "Personal Mentoring", desc: "1-on-1 doubt clearing and strategic planning with your dedicated mentor." },
            ].map((item, i) => (
              <div key={i} className="relative p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm group hover:bg-academy-blue transition-all duration-500">
                <span className="text-6xl font-black text-slate-100 group-hover:text-white/20 absolute top-6 right-8 transition-colors">{item.step}</span>
                <h3 className="text-2xl font-black mb-4 relative z-10 group-hover:text-white">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed relative z-10 group-hover:text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 tracking-tight">The <span className="text-gradient">Core Values</span> that Drive Us</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Our philosophy is simple: Put the student first, and excellence will follow.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Integrity", icon: <ShieldCheck className="w-8 h-8" />, desc: "We maintain the highest standards of academic honesty and transparency." },
              { title: "Innovation", icon: <Lightbulb className="w-8 h-8" />, desc: "We constantly evolve our teaching methods to stay ahead of the curve." },
              { title: "Inclusion", icon: <Users className="w-8 h-8" />, desc: "Every student, regardless of their starting point, deserves a chance at greatness." },
              { title: "Impact", icon: <Trophy className="w-8 h-8" />, desc: "We measure our success by the real-world achievements of our alumni." },
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group"
              >
                <div className="w-16 h-16 bg-blue-50 text-academy-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-academy-blue group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{value.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Meet the Faculty */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">Meet Our <span className="text-gradient">Elite Faculty</span></h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Learn from the masters who have produced national toppers year after year.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Dr. Rajesh Khanna", role: "Head of Physics", exp: "20+ Years", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
              { name: "Prof. Sunita Sharma", role: "Mathematics Expert", exp: "15+ Years", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
              { name: "Dr. Amit Verma", role: "Biology Specialist", exp: "18+ Years", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
            ].map((faculty, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-100"
              >
                <div className="h-80 overflow-hidden">
                  <img src={faculty.img} alt={faculty.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="p-10">
                  <h4 className="text-2xl font-black mb-2">{faculty.name}</h4>
                  <p className="text-academy-blue font-bold mb-4">{faculty.role}</p>
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-widest">
                    <Clock className="w-4 h-4" /> {faculty.exp} Experience
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Life at Academy Gallery */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">Life at <span className="text-gradient">Academy</span></h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">A glimpse into the vibrant and focused environment we foster.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=600&auto=format&fit=crop"
            ].map((img, i) => (
              <div key={i} className={`rounded-3xl overflow-hidden h-64 ${i === 1 || i === 2 ? "md:col-span-2" : ""}`}>
                <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Our Mission", icon: <Target className="w-10 h-10" />, desc: "To democratize elite education and provide every student with the tools to reach the top 1%." },
            { title: "Our Vision", icon: <Zap className="w-10 h-10" />, desc: "To be the most innovative educational ecosystem that blends human wisdom with AI-driven insights." },
            { title: "Our Values", icon: <ShieldCheck className="w-10 h-10" />, desc: "Radical transparency, student-first thinking, and an obsession with measurable results." },
          ].map((item, i) => (
            <div key={i} className="bento-card">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-academy-blue mb-8">{item.icon}</div>
              <h3 className="text-2xl font-black mb-4">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState("school");

  const programs = {
    school: {
      title: "School Excellence",
      subtitle: "Grades 8 - 10",
      desc: "Building rock-solid foundations for the crucial board exam years. We focus on conceptual clarity that lasts a lifetime.",
      items: ["Mathematics Mastery", "Conceptual Science", "Advanced English", "Mental Ability & Logic", "Weekly Board-Pattern Tests", "Doubt Solving Sessions"]
    },
    science: {
      title: "Science Elite",
      subtitle: "Grades 11 - 12",
      desc: "Specialized streams for Physics, Chemistry, Biology, and Mathematics with a focus on deep academic rigor.",
      items: ["Quantum Physics Lab", "Organic Chemistry Hub", "Calculus Mastery", "Medical Biology Pro", "NCERT Thorough Revision", "Practical Lab Sessions"]
    },
    competitive: {
      title: "Competitive Edge",
      subtitle: "Entrance Exams",
      desc: "Intensive training for JEE, NEET, and National Olympiads. Designed for students aiming for the top 100 ranks.",
      items: ["JEE Advanced Strategy", "NEET Intensive Prep", "Olympiad Foundation", "CET Crash Course", "All India Test Series", "Rank Improvement Program"]
    }
  };

  return (
    <main className="mesh-gradient min-h-screen pt-32">
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">Elite Academic <span className="text-gradient">Programs.</span></h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium mb-12">Choose the path that aligns with your ambitions. Every program is delivered by subject-matter experts.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(programs).map((key) => (
                <button 
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${activeTab === key ? "bg-academy-blue text-white shadow-xl shadow-blue-200 scale-105" : "bg-white text-slate-400 hover:text-academy-dark"}`}
                >
                  {programs[key as keyof typeof programs].title}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="p-10 bg-white rounded-[4rem] border border-slate-100 shadow-sm">
                <span className="text-academy-blue font-black uppercase tracking-[0.3em] text-xs mb-4 block">{programs[activeTab as keyof typeof programs].subtitle}</span>
                <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">{programs[activeTab as keyof typeof programs].title}</h2>
                <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">{programs[activeTab as keyof typeof programs].desc}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {programs[activeTab as keyof typeof programs].items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="w-8 h-8 bg-academy-blue rounded-lg flex items-center justify-center text-white"><Check className="w-4 h-4" /></div>
                      <span className="font-bold text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 flex flex-wrap gap-4">
                  <Link to="/admissions" className="bg-academy-dark text-white px-10 py-5 rounded-3xl font-bold hover:bg-academy-blue transition-all flex items-center gap-3 shadow-xl shadow-slate-200">
                    Enroll in Program <ArrowUpRight className="w-5 h-5" />
                  </Link>
                  <Link to="/contact" className="bg-white border border-slate-200 text-academy-dark px-10 py-5 rounded-3xl font-bold hover:bg-slate-50 transition-all">
                    View Schedule
                  </Link>
                </div>
              </div>
              <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[15px] border-white relative group">
                <img 
                  src={`https://images.unsplash.com/photo-${activeTab === "school" ? "1503676260728-1c00da094a0b" : activeTab === "science" ? "1532094349884-543bc11b234d" : "1427504494785-3a9ca7044f45"}?q=80&w=2070&auto=format&fit=crop`} 
                  alt="Program" 
                  className="w-full h-full object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-academy-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                  <p className="text-white text-2xl font-black">Join the Elite {programs[activeTab as keyof typeof programs].title} Batch</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Course Comparison / Why Choose Us */}
          <div className="mt-40">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-6">Why Our <span className="text-gradient">Programs Work</span></h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">We don't just teach; we transform. Here's how we compare to traditional coaching.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Standard Coaching", icon: <X className="w-6 h-6 text-red-500" />, items: ["Large batches (50+)", "Generic study material", "Monthly tests", "No personal attention"] },
                { title: "Bright Future Edge", icon: <Check className="w-6 h-6 text-green-500" />, items: ["Small batches (12 max)", "Customized AI-driven material", "Daily adaptive testing", "1-on-1 PhD mentorship"], highlight: true },
                { title: "Self Study", icon: <X className="w-6 h-6 text-red-500" />, items: ["No structured path", "Limited resources", "Inconsistent testing", "No expert guidance"] },
              ].map((card, i) => (
                <div key={i} className={`p-10 rounded-[3rem] border ${card.highlight ? "bg-academy-dark text-white border-academy-blue shadow-2xl scale-105 z-10" : "bg-white border-slate-100 shadow-sm"}`}>
                  <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                    {card.title}
                  </h3>
                  <ul className="space-y-6">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${card.highlight ? "bg-blue-500/20" : "bg-slate-50"}`}>
                          {card.icon}
                        </div>
                        <span className={`font-bold text-sm ${card.highlight ? "text-slate-300" : "text-slate-500"}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const AdmissionsPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="mesh-gradient min-h-screen pt-32">
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-academy-blue text-xs font-black uppercase tracking-widest mb-8">
                  <Sparkles className="w-4 h-4" />
                  <span>Admissions Open 2026-27</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter">Start Your <span className="text-gradient">Journey.</span></h1>
                <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed max-w-xl">
                  Join a community of high achievers. Our admission process is designed to identify potential and passion.
                </p>

                <div className="space-y-8">
                  {[
                    { title: "Expert Counseling", desc: "1-on-1 session with our senior academic advisors." },
                    { title: "Scholarship Test", desc: "Up to 100% scholarship based on merit and potential." },
                    { title: "Immediate Enrollment", desc: "Secure your spot in our limited-size elite batches." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-academy-blue flex-shrink-0">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-black mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-12 md:p-16 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <h3 className="text-3xl font-black mb-10">Admission Enquiry</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Student Name</label>
                          <input required type="text" placeholder="John Doe" className="w-full px-8 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-100 outline-none transition-all font-bold" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Parent Name</label>
                          <input required type="text" placeholder="Jane Doe" className="w-full px-8 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-100 outline-none transition-all font-bold" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                          <input required type="email" placeholder="john@example.com" className="w-full px-8 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-100 outline-none transition-all font-bold" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                          <input required type="tel" placeholder="+91 00000 00000" className="w-full px-8 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-100 outline-none transition-all font-bold" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Current Grade</label>
                          <select className="w-full px-8 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-100 outline-none transition-all font-bold appearance-none">
                            <option>Class 8</option>
                            <option>Class 9</option>
                            <option>Class 10</option>
                            <option>Class 11</option>
                            <option>Class 12</option>
                            <option>Repeater/Dropper</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Target Exam</label>
                          <select className="w-full px-8 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-100 outline-none transition-all font-bold appearance-none">
                            <option>JEE Main/Advanced</option>
                            <option>NEET (Medical)</option>
                            <option>Board Excellence</option>
                            <option>Olympiads/KVPY</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message (Optional)</label>
                        <textarea rows={3} placeholder="Tell us about your academic goals..." className="w-full px-8 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-100 outline-none transition-all font-bold resize-none"></textarea>
                      </div>
                      <button type="submit" className="w-full bg-academy-blue text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 hover:bg-blue-600 transition-all flex items-center justify-center gap-3">
                        Submit Application <ArrowRight className="w-6 h-6" />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <h3 className="text-4xl font-black mb-4">Application Received!</h3>
                    <p className="text-xl text-slate-500 font-medium mb-10">Our admissions officer will contact you within 24 hours to schedule your counseling session.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-academy-blue font-black uppercase tracking-widest text-sm"
                    >
                      Send Another Enquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="mesh-gradient min-h-screen pt-32">
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter">Get in <span className="text-gradient">Touch.</span></h1>
              <p className="text-xl text-slate-500 font-medium mb-16 leading-relaxed">Have a general question or feedback? We'd love to hear from you.</p>
              
              <div className="space-y-10 mb-20">
                {[
                  { icon: <MapPin />, title: "Visit Us", detail: "123, Education Hub, Knowledge Park, Mumbai" },
                  { icon: <Phone />, title: "Call Us", detail: "+91 98765 43210" },
                  { icon: <Mail />, title: "Email Us", detail: "hello@brightfuture.edu" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-academy-blue shadow-lg border border-slate-100 group-hover:bg-academy-blue group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-1">{item.title}</h4>
                      <p className="text-slate-500 font-medium">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Map */}
              <div className="rounded-[3rem] overflow-hidden h-80 bg-slate-100 border border-slate-200 relative group shadow-2xl shadow-blue-50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.796748446949!2d72.89735661489917!3d19.11655708706443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c809958d6605%3A0x86502d38a6957866!2sIIT%20Bombay!5e0!3m2!1sen!2sin!4v1625567890123!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
                <div className="absolute top-6 left-6 pointer-events-none">
                  <div className="bg-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100">
                    <div className="w-8 h-8 bg-academy-blue rounded-lg flex items-center justify-center text-white">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm">Knowledge Park, Mumbai</span>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-12 md:p-16 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <h3 className="text-3xl font-black mb-10">Send a Message</h3>
                    <form className="space-y-8" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                          <input required type="text" placeholder="John Doe" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-100 outline-none transition-all font-bold" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                          <input required type="email" placeholder="john@example.com" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-100 outline-none transition-all font-bold" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                        <input required type="text" placeholder="How can we help?" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-100 outline-none transition-all font-bold" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                        <textarea rows={4} placeholder="Your message here..." className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-100 outline-none transition-all font-bold resize-none"></textarea>
                      </div>
                      <button type="submit" className="w-full bg-academy-dark text-white py-6 rounded-3xl font-black text-xl shadow-xl shadow-slate-100 hover:bg-slate-800 transition-all flex items-center justify-center gap-3">
                        Send Message <ArrowRight className="w-6 h-6" />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <h3 className="text-4xl font-black mb-4">Message Sent!</h3>
                    <p className="text-xl text-slate-500 font-medium mb-10">Thank you for reaching out. We'll get back to you shortly.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-academy-blue font-black uppercase tracking-widest text-sm"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="selection:bg-blue-100 selection:text-academy-blue min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
        <AIChatbot />
      </div>
    </Router>
  );
}
