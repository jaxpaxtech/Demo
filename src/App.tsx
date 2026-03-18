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
  Trophy,
  ChevronDown
} from "lucide-react";

import { AIChatbot } from "./components/AIChatbot";

// --- Shared Components ---

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

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
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-academy-blue via-accent-purple to-accent-pink z-[70] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-2xl py-4 shadow-sm" : "bg-transparent py-8"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-black text-academy-dark flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="w-12 h-12 bg-academy-blue rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200"
            >
              <GraduationCap className="w-7 h-7" />
            </motion.div>
            <span className="tracking-tighter">Bright Future</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all group ${location.pathname === link.href ? "text-academy-blue" : "text-slate-500 hover:text-academy-dark"}`}
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-6 right-6 h-0.5 bg-academy-blue rounded-full"
                  />
                )}
              </Link>
            ))}
            <div className="w-px h-6 bg-slate-200 mx-4"></div>
            <Link to="/admissions" className="btn-primary !rounded-full !px-8 !py-3 !text-sm">
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-100 text-academy-dark hover:bg-slate-200 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-white border-b border-slate-100 overflow-hidden lg:hidden"
            >
              <div className="container mx-auto px-6 py-12 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl font-black ${location.pathname === link.href ? "text-academy-blue" : "text-slate-300 hover:text-academy-dark"}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/admissions" onClick={() => setIsOpen(false)} className="btn-primary w-full mt-6 py-6 text-xl">
                  Apply Now
                </Link>
              </div>
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
    { label: "Success Rate", value: 98, suffix: "%+" },
    { label: "Top Ranks", value: 500, suffix: "+" },
    { label: "Expert Faculty", value: 150, suffix: "+" },
    { label: "Years of Legacy", value: 15, suffix: "+" },
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
      <section className="relative min-h-screen flex items-center pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-blue-400/5 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
              x: [0, -100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-purple-400/5 rounded-full blur-[120px]" 
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-50 text-academy-blue text-xs font-black uppercase tracking-[0.2em] mb-10 border border-blue-100 shadow-sm"
              >
                <Sparkles className="w-4 h-4 animate-pulse" />
                India's Premier Learning Ecosystem
              </motion.div>
              <h1 className="text-7xl md:text-9xl font-black leading-[0.85] mb-12 tracking-tighter text-academy-dark">
                Shape Your <br />
                <span className="text-gradient">Destiny.</span>
              </h1>
              <p className="text-2xl text-slate-500 mb-16 leading-relaxed max-w-xl font-medium">
                We don't just teach students; we engineer success through elite mentorship and AI-driven precision.
              </p>
              <div className="flex flex-wrap gap-8">
                <Link to="/admissions" className="btn-primary !px-12 !py-6 !text-xl !rounded-3xl shadow-2xl shadow-blue-200 group">
                  Start Your Journey <ArrowUpRight className="ml-2 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <button className="btn-secondary !px-12 !py-6 !text-xl !rounded-3xl group">
                  <Play className="mr-3 w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>

              <div className="mt-20 flex items-center gap-12">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-14 h-14 rounded-2xl border-4 border-white overflow-hidden bg-slate-100 shadow-lg">
                      <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt="Student" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-sm font-black text-academy-dark">Trusted by 10,000+ Students</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.12)] border-[16px] border-white bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                  alt="Academy Life" 
                  className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 glass p-8 rounded-[2.5rem] z-20 hidden xl:block border-white/60"
              >
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-green-200">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Success Rate</p>
                    <p className="text-2xl font-black">98.4%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-12 -left-12 glass p-8 rounded-[2.5rem] z-20 hidden xl:block border-white/60"
              >
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Batch Size</p>
                    <p className="text-2xl font-black">1:12 Ratio</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-academy-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent scale-150"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl md:text-8xl font-black mb-4 tracking-tighter text-blue-400">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-academy-blue font-black uppercase tracking-[0.4em] text-xs mb-6 block"
            >
              The Academy Advantage
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">Engineered for <br /><span className="text-gradient">Excellence.</span></h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">We've reimagined the learning experience from the ground up, combining human empathy with technological precision.</p>
          </div>

          <div className="grid md:grid-cols-6 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bento-card group ${i === 0 || i === 3 ? "md:col-span-3" : "md:col-span-3 lg:col-span-2"}`}
              >
                <div className="w-20 h-20 bg-blue-50 text-academy-blue rounded-3xl flex items-center justify-center mb-10 group-hover:bg-academy-blue group-hover:text-white transition-all duration-500 shadow-inner">
                  {f.icon}
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight">{f.title}</h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">{f.desc}</p>
                <Link to="/methodology" className="flex items-center gap-3 text-academy-blue font-black text-sm uppercase tracking-widest group-hover:gap-5 transition-all cursor-pointer">
                  Explore Methodology <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-slate-50/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-20 items-center">
            <div className="lg:col-span-1">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-academy-blue font-black uppercase tracking-[0.4em] text-xs mb-6 block"
              >
                Student Stories
              </motion.span>
              <h2 className="text-6xl font-black mb-10 tracking-tighter leading-[0.95]">Voices of <br /><span className="text-gradient">Success.</span></h2>
              <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">Don't take our word for it. Hear from the families and students who have walked the path before you and reached the top.</p>
              <div className="flex gap-2 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="font-black text-academy-dark text-lg">4.9/5 Rating from 2,000+ Reviews</p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-500"
                >
                  <div className="mb-10">
                    <div className="flex gap-1 mb-6">
                      {[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-slate-600 italic text-xl leading-relaxed font-medium">"{t.text}"</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <img src={t.img} alt={t.name} className="w-16 h-16 rounded-2xl object-cover shadow-lg" />
                    <div>
                      <h4 className="font-black text-academy-dark text-lg">{t.name}</h4>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-academy-dark text-white rounded-[5rem] mx-4 md:mx-10 my-32 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-600 rounded-full blur-[180px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] bg-purple-600 rounded-full blur-[180px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-blue-400 font-black uppercase tracking-[0.4em] text-xs mb-6 block"
              >
                Hall of Fame
              </motion.span>
              <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">The Results <br /> <span className="text-blue-400 italic">Speak.</span></h2>
              <p className="text-2xl text-slate-400 font-medium leading-relaxed">Meet our top achievers who didn't just pass—they redefined what's possible in national competitive exams.</p>
            </div>
            <Link to="/results" className="btn-primary !bg-white !text-academy-dark !rounded-full !px-10 !py-5 !text-lg hover:!bg-blue-50">
              View All Results
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: "Aryan Malhotra", score: "99.8%", exam: "JEE Advanced", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" },
              { name: "Ishita Kapoor", score: "AIR 12", exam: "NEET UG", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
              { name: "Kabir Das", score: "98.9%", exam: "CBSE 12th", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" },
              { name: "Ananya Iyer", score: "1580/1600", exam: "SAT Elite", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" },
            ].map((topper, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="aspect-[3/4] rounded-[3rem] overflow-hidden mb-8 border border-white/10 shadow-2xl">
                  <img src={topper.img} alt={topper.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-academy-dark via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-8 left-8">
                    <p className="text-4xl font-black text-blue-400 mb-1 tracking-tighter">{topper.score}</p>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-300">{topper.exam}</p>
                  </div>
                </div>
                <h4 className="text-2xl font-black tracking-tight">{topper.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-slate-50 rounded-[5rem] p-12 md:p-24 relative overflow-hidden border border-slate-100">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 -z-0 rounded-l-[5rem] hidden lg:block"></div>
            <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-24 h-24 bg-academy-blue rounded-[2rem] flex items-center justify-center text-white mb-12 shadow-2xl shadow-blue-200">
                  <Star className="w-12 h-12 fill-current" />
                </div>
                <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-tight">From a Small Town to <span className="text-gradient">IIT Bombay.</span></h2>
                <p className="text-2xl text-slate-500 font-medium leading-relaxed mb-12 italic">
                  "I used to struggle with basic physics concepts. The mentors at Bright Future didn't just teach me formulas; they taught me how to visualize the universe. Their 1-on-1 sessions were the turning point in my JEE preparation."
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-academy-blue" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-academy-dark">Aryan Malhotra</h4>
                    <p className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">JEE Advanced 2025 | AIR 42</p>
                  </div>
                </div>
              </motion.div>
              <div className="relative">
                <div className="rounded-[4rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.1)] border-[16px] border-white bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop" 
                    alt="Success Story" 
                    className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-1000" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100"
                >
                  <p className="text-xs font-black text-academy-blue uppercase tracking-[0.3em] mb-2">Scholarship Awarded</p>
                  <p className="text-2xl font-black">100% Merit Based</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-academy-blue font-black uppercase tracking-[0.4em] text-xs mb-6 block"
              >
                Got Questions?
              </motion.span>
              <h2 className="text-6xl font-black mb-8 tracking-tighter">Common <span className="text-gradient">Queries.</span></h2>
              <p className="text-xl text-slate-500 font-medium">Everything you need to know about starting your journey with us.</p>
            </div>
            <div className="space-y-8">
              {faqs.map((faq, i) => (
                <details key={i} className="group bento-card p-0 overflow-hidden border border-slate-100 hover:border-blue-100 transition-colors">
                  <summary className="flex justify-between items-center p-10 cursor-pointer list-none">
                    <h4 className="text-2xl font-black text-academy-dark tracking-tight">{faq.q}</h4>
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-academy-blue group-open:rotate-180 transition-transform shadow-inner">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  </summary>
                  <div className="px-10 pb-10 text-xl text-slate-500 font-medium leading-relaxed">
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
          <div className="relative rounded-[5rem] bg-academy-dark p-16 md:p-32 text-center text-white overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.2)]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent scale-150"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter leading-[0.85]">Your Seat at the Top <br /> <span className="text-blue-400 italic">is Waiting.</span></h2>
              <p className="text-2xl md:text-3xl text-white/70 mb-20 max-w-4xl mx-auto font-medium leading-relaxed">
                Admissions for the 2026-27 session are now open. Secure your future with the academy that delivers on its promises.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link to="/admissions" className="btn-primary !bg-white !text-academy-dark !px-14 !py-7 !text-2xl !rounded-full hover:!bg-blue-50 shadow-2xl">
                  Apply for Admission
                </Link>
                <button className="glass text-white !px-14 !py-7 !text-2xl !rounded-full hover:bg-white/20 transition-all border-white/20">
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

const MethodologyPage = () => {
  const methodologies = [
    {
      title: "Conceptual Depth",
      icon: <BrainCircuit className="w-12 h-12" />,
      desc: "We move beyond rote memorization. Our curriculum is designed to build deep first-principles understanding, ensuring students can solve even the most complex, unseen problems.",
      features: ["Visual Learning Aids", "Real-world Applications", "First-Principles Approach"]
    },
    {
      title: "Rigorous Practice",
      icon: <Zap className="w-12 h-12" />,
      desc: "Success is built on consistent, high-quality practice. Our Daily Practice Problems (DPPs) are curated by national-level subject experts to challenge and refine student skills.",
      features: ["Daily Problem Sets", "Step-by-step Solutions", "Progressive Difficulty"]
    },
    {
      title: "Adaptive Testing",
      icon: <Target className="w-12 h-12" />,
      desc: "Our testing engine mirrors the exact difficulty and format of national exams. We provide detailed analytics to identify weak areas and track growth over time.",
      features: ["Weekly Mock Tests", "Performance Analytics", "Time Management Training"]
    },
    {
      title: "Personal Mentoring",
      icon: <Users className="w-12 h-12" />,
      desc: "Every student is unique. Our 1-on-1 mentoring sessions provide personalized guidance, doubt clearing, and strategic planning tailored to individual needs.",
      features: ["1-on-1 Doubt Clearing", "Strategic Goal Setting", "Emotional Support"]
    },
    {
      title: "AI-Driven Insights",
      icon: <Sparkles className="w-12 h-12" />,
      desc: "We leverage cutting-edge AI to analyze student performance and provide personalized learning paths, ensuring no time is wasted on redundant material.",
      features: ["Personalized Study Plans", "Predictive Analytics", "Instant AI Assistance"]
    }
  ];

  return (
    <main className="mesh-gradient min-h-screen pt-32">
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-academy-blue font-black uppercase tracking-[0.4em] text-xs mb-6 block"
            >
              Our Secret Sauce
            </motion.span>
            <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85]">The Science of <br /><span className="text-gradient">Success.</span></h1>
            <p className="text-2xl text-slate-500 font-medium leading-relaxed">
              Our methodology isn't just a set of rules—it's a dynamic, data-driven ecosystem designed to maximize human potential.
            </p>
          </div>

          <div className="grid gap-12">
            {methodologies.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bento-card group overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <div className="w-24 h-24 bg-blue-50 text-academy-blue rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-academy-blue group-hover:text-white transition-all duration-500">
                      {m.icon}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">{m.title}</h2>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">{m.desc}</p>
                    <div className="flex flex-wrap gap-4">
                      {m.features.map((f, j) => (
                        <span key={j} className="px-6 py-3 bg-slate-50 rounded-full text-sm font-black text-slate-400 uppercase tracking-widest border border-slate-100">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-video rounded-[3rem] bg-slate-100 overflow-hidden border border-slate-200 shadow-inner flex items-center justify-center">
                      <div className="text-center p-12">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                          <Play className="w-8 h-8 text-academy-blue fill-current" />
                        </div>
                        <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Watch Video Demonstration</p>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-End CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="bg-academy-dark rounded-[5rem] p-16 md:p-32 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent scale-150"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter">Ready to Experience <br /> <span className="text-blue-400 italic">the Difference?</span></h2>
              <Link to="/admissions" className="btn-primary !bg-white !text-academy-dark !px-14 !py-7 !text-2xl !rounded-full hover:!bg-blue-50">
                Start Your Journey
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

const ResultsPage = () => {
  const stats = [
    { label: "IIT Selections", value: 450, suffix: "+" },
    { label: "Medical Seats", value: 320, suffix: "+" },
    { label: "Board Toppers", value: 120, suffix: "+" },
    { label: "Scholarships", value: 15, suffix: "Cr+" }
  ];

  const toppers = [
    { name: "Aryan Malhotra", score: "AIR 42", exam: "JEE Advanced 2025", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" },
    { name: "Ishita Kapoor", score: "AIR 12", exam: "NEET UG 2025", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
    { name: "Kabir Das", score: "98.9%", exam: "CBSE 12th Boards", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" },
    { name: "Ananya Iyer", score: "1580/1600", exam: "SAT Elite", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" },
    { name: "Rohan Gupta", score: "AIR 156", exam: "JEE Main 2025", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
    { name: "Meera Reddy", score: "AIR 89", exam: "NEET UG 2025", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" },
    { name: "Siddharth Jain", score: "99.2%", exam: "ICSE 10th Boards", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop" },
    { name: "Zoya Khan", score: "AIR 210", exam: "CLAT 2025", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop" }
  ];

  return (
    <main className="mesh-gradient min-h-screen pt-32">
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-academy-blue font-black uppercase tracking-[0.4em] text-xs mb-6 block"
            >
              The Hall of Fame
            </motion.span>
            <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85]">Legacy of <br /><span className="text-gradient">Excellence.</span></h1>
            <p className="text-2xl text-slate-500 font-medium leading-relaxed">
              Year after year, our students dominate national competitive exams, proving that with the right guidance, greatness is inevitable.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bento-card text-center"
              >
                <div className="text-5xl md:text-7xl font-black text-academy-blue mb-4 tracking-tighter">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {toppers.map((topper, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-[3rem] overflow-hidden mb-8 border border-slate-100 shadow-sm relative">
                  <img src={topper.img} alt={topper.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-academy-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <p className="text-3xl font-black text-blue-400 mb-1 tracking-tighter">{topper.score}</p>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70">{topper.exam}</p>
                  </div>
                </div>
                <h4 className="text-2xl font-black tracking-tight mb-2">{topper.name}</h4>
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest">{topper.exam}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">Why Our Students <br /><span className="text-gradient">Outperform.</span></h2>
              <p className="text-xl text-slate-500 font-medium">A data-backed comparison of our results vs. national averages.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bento-card bg-slate-50 border-none">
                <h3 className="text-3xl font-black mb-10">National Average</h3>
                <div className="space-y-12">
                  {[
                    { label: "JEE Selection Rate", value: "2.5%", color: "bg-slate-300" },
                    { label: "NEET Selection Rate", value: "5.8%", color: "bg-slate-300" },
                    { label: "Board 90%+ Rate", value: "12.4%", color: "bg-slate-300" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-4 font-black uppercase tracking-widest text-xs text-slate-400">
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                      </div>
                      <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: item.value }}
                          className={`h-full ${item.color}`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bento-card bg-academy-dark text-white border-none shadow-2xl shadow-blue-200">
                <h3 className="text-3xl font-black mb-10">Bright Future Edge</h3>
                <div className="space-y-12">
                  {[
                    { label: "JEE Selection Rate", value: "32.4%", color: "bg-blue-400" },
                    { label: "NEET Selection Rate", value: "41.2%", color: "bg-blue-400" },
                    { label: "Board 90%+ Rate", value: "68.5%", color: "bg-blue-400" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-4 font-black uppercase tracking-widest text-xs text-blue-400">
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                      </div>
                      <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: item.value }}
                          className={`h-full ${item.color}`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-academy-blue font-black uppercase tracking-[0.4em] text-xs mb-6 block"
            >
              Academic Excellence
            </motion.span>
            <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85]">Elite Academic <br /><span className="text-gradient">Programs.</span></h1>
            <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-medium mb-16 leading-relaxed">Choose the path that aligns with your ambitions. Every program is delivered by subject-matter experts with a track record of success.</p>
            <div className="flex flex-wrap justify-center gap-6">
              {Object.keys(programs).map((key) => (
                <button 
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 ${activeTab === key ? "bg-academy-dark text-white shadow-2xl shadow-slate-300 scale-105" : "bg-white text-slate-400 hover:text-academy-dark border border-slate-100"}`}
                >
                  {programs[key as keyof typeof programs].title}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="grid lg:grid-cols-2 gap-24 items-center"
            >
              <div className="p-12 md:p-20 bg-white rounded-[5rem] border border-slate-100 shadow-[0_40px_80px_rgba(0,0,0,0.03)]">
                <span className="text-academy-blue font-black uppercase tracking-[0.4em] text-xs mb-6 block">{programs[activeTab as keyof typeof programs].subtitle}</span>
                <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-tight">{programs[activeTab as keyof typeof programs].title}</h2>
                <p className="text-2xl text-slate-500 font-medium mb-16 leading-relaxed">{programs[activeTab as keyof typeof programs].desc}</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {programs[activeTab as keyof typeof programs].items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                      <div className="w-10 h-10 bg-academy-blue rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform"><Check className="w-5 h-5" /></div>
                      <span className="font-black text-sm tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-16 flex flex-wrap gap-6">
                  <Link to="/admissions" className="btn-primary !px-12 !py-6 !text-xl !rounded-full shadow-2xl shadow-blue-200">
                    Enroll in Program <ArrowUpRight className="w-6 h-6" />
                  </Link>
                  <Link to="/contact" className="bg-white border-2 border-slate-100 text-academy-dark px-12 py-6 rounded-full font-black text-xl hover:bg-slate-50 transition-all">
                    View Schedule
                  </Link>
                </div>
              </div>
              <div className="rounded-[5rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.1)] border-[20px] border-white relative group bg-white">
                <img 
                  src={`https://images.unsplash.com/photo-${activeTab === "school" ? "1503676260728-1c00da094a0b" : activeTab === "science" ? "1532094349884-543bc11b234d" : "1427504494785-3a9ca7044f45"}?q=80&w=2070&auto=format&fit=crop`} 
                  alt="Program" 
                  className="w-full h-full object-cover aspect-[4/5] lg:aspect-square group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-academy-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-16">
                  <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-4xl font-black tracking-tighter mb-4">Join the Elite {programs[activeTab as keyof typeof programs].title} Batch</p>
                    <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-sm">Limited Seats Available</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Course Comparison */}
          <div className="mt-60">
            <div className="text-center mb-24">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-academy-blue font-black uppercase tracking-[0.4em] text-xs mb-6 block"
              >
                The Competitive Edge
              </motion.span>
              <h2 className="text-6xl font-black mb-8 tracking-tighter">Why Our <span className="text-gradient">Programs Work.</span></h2>
              <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">We don't just teach; we transform. Here's how we compare to traditional coaching methods.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 items-stretch">
              {[
                { title: "Standard Coaching", icon: <X className="w-8 h-8 text-red-500" />, items: ["Large batches (50+)", "Generic study material", "Monthly tests", "No personal attention"], color: "bg-white" },
                { title: "Bright Future Edge", icon: <Check className="w-8 h-8 text-green-400" />, items: ["Small batches (12 max)", "Customized AI-driven material", "Daily adaptive testing", "1-on-1 PhD mentorship"], highlight: true, color: "bg-academy-dark" },
                { title: "Self Study", icon: <X className="w-8 h-8 text-red-500" />, items: ["No structured path", "Limited resources", "Inconsistent testing", "No expert guidance"], color: "bg-white" },
              ].map((card, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-16 rounded-[4rem] border flex flex-col ${card.highlight ? "text-white border-blue-500/30 shadow-[0_60px_120px_rgba(0,0,0,0.2)] scale-105 z-10" : "bg-white border-slate-100 shadow-sm"} ${card.color}`}
                >
                  <h3 className="text-3xl font-black mb-12 flex items-center gap-4">
                    {card.title}
                  </h3>
                  <ul className="space-y-8 flex-grow">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-5">
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${card.highlight ? "bg-white/10" : "bg-slate-50"}`}>
                          {card.icon}
                        </div>
                        <span className={`font-black text-base tracking-tight ${card.highlight ? "text-slate-300" : "text-slate-500"}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {card.highlight && (
                    <Link to="/admissions" className="mt-16 btn-primary !rounded-full !py-6 !text-lg !w-full text-center">
                      Get Started Now
                    </Link>
                  )}
                </motion.div>
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
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 text-academy-blue text-xs font-black uppercase tracking-[0.3em] mb-10 border border-blue-100/50">
                  <Sparkles className="w-4 h-4" />
                  <span>Admissions Open 2026-27</span>
                </div>
                <h1 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter leading-[0.85]">Start Your <br /><span className="text-gradient">Journey.</span></h1>
                <p className="text-2xl text-slate-500 font-medium mb-16 leading-relaxed max-w-xl">
                  Join a community of high achievers. Our admission process is designed to identify potential and passion through holistic evaluation.
                </p>

                <div className="space-y-10">
                  {[
                    { title: "Expert Counseling", desc: "1-on-1 session with our senior academic advisors to map your career path." },
                    { title: "Scholarship Test", desc: "Up to 100% scholarship based on merit and potential in our entrance exam." },
                    { title: "Immediate Enrollment", desc: "Secure your spot in our limited-size elite batches for the upcoming session." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 items-start group">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-white shadow-xl flex items-center justify-center text-academy-blue flex-shrink-0 border border-slate-50 group-hover:bg-academy-blue group-hover:text-white transition-all duration-500">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black mb-2 tracking-tight">{item.title}</h4>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-12 md:p-20 rounded-[5rem] shadow-[0_60px_120px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative z-10"
                  >
                    <h3 className="text-4xl font-black mb-12 tracking-tighter">Admission Enquiry</h3>
                    <form className="space-y-8" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Student Name</label>
                          <input required type="text" placeholder="John Doe" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-blue-100 focus:bg-white outline-none transition-all font-black text-lg" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Parent Name</label>
                          <input required type="text" placeholder="Jane Doe" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-blue-100 focus:bg-white outline-none transition-all font-black text-lg" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                          <input required type="email" placeholder="john@example.com" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-blue-100 focus:bg-white outline-none transition-all font-black text-lg" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Phone Number</label>
                          <input required type="tel" placeholder="+91 00000 00000" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-blue-100 focus:bg-white outline-none transition-all font-black text-lg" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Current Grade</label>
                          <div className="relative">
                            <select className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-blue-100 focus:bg-white outline-none transition-all font-black text-lg appearance-none">
                              <option>Class 8</option>
                              <option>Class 9</option>
                              <option>Class 10</option>
                              <option>Class 11</option>
                              <option>Class 12</option>
                              <option>Repeater/Dropper</option>
                            </select>
                            <ChevronDown className="absolute right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 pointer-events-none" />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Target Exam</label>
                          <div className="relative">
                            <select className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-blue-100 focus:bg-white outline-none transition-all font-black text-lg appearance-none">
                              <option>JEE Main/Advanced</option>
                              <option>NEET (Medical)</option>
                              <option>Board Excellence</option>
                              <option>Olympiads/KVPY</option>
                            </select>
                            <ChevronDown className="absolute right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 pointer-events-none" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Message (Optional)</label>
                        <textarea rows={3} placeholder="Tell us about your academic goals..." className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-blue-100 focus:bg-white outline-none transition-all font-black text-lg resize-none"></textarea>
                      </div>
                      <button type="submit" className="w-full btn-primary !py-7 !text-2xl !rounded-[2rem] shadow-2xl shadow-blue-200">
                        Submit Application <ArrowRight className="w-8 h-8" />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-24 relative z-10"
                  >
                    <div className="w-32 h-32 bg-green-50 text-green-500 rounded-[2.5rem] flex items-center justify-center mb-10 shadow-inner">
                      <CheckCircle className="w-16 h-16" />
                    </div>
                    <h3 className="text-5xl font-black mb-6 tracking-tighter">Application Received!</h3>
                    <p className="text-2xl text-slate-500 font-medium mb-12 leading-relaxed">Our admissions officer will contact you within 24 hours to schedule your counseling session.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-academy-blue font-black uppercase tracking-[0.3em] text-sm hover:tracking-[0.5em] transition-all"
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
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter leading-[0.85]">Get in <br /><span className="text-gradient">Touch.</span></h1>
                <p className="text-2xl text-slate-500 font-medium mb-20 leading-relaxed max-w-xl">Have a general question or feedback? Our team is here to support your academic journey.</p>
                
                <div className="space-y-12 mb-24">
                  {[
                    { icon: <MapPin className="w-8 h-8" />, title: "Visit Us", detail: "123, Education Hub, Knowledge Park, Mumbai" },
                    { icon: <Phone className="w-8 h-8" />, title: "Call Us", detail: "+91 98765 43210" },
                    { icon: <Mail className="w-8 h-8" />, title: "Email Us", detail: "hello@brightfuture.edu" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-10 group">
                      <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-academy-blue shadow-xl border border-slate-50 group-hover:bg-academy-blue group-hover:text-white transition-all duration-500">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl font-black mb-2 tracking-tight">{item.title}</h4>
                        <p className="text-slate-500 text-lg font-medium">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Map */}
                <div className="rounded-[4rem] overflow-hidden h-[400px] bg-slate-100 border-[15px] border-white relative group shadow-[0_60px_120px_rgba(0,0,0,0.1)]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.796748446949!2d72.89735661489917!3d19.11655708706443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c809958d6605%3A0x86502d38a6957866!2sIIT%20Bombay!5e0!3m2!1sen!2sin!4v1625567890123!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  ></iframe>
                  <div className="absolute top-8 left-8 pointer-events-none">
                    <div className="bg-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-50">
                      <div className="w-10 h-10 bg-academy-blue rounded-xl flex items-center justify-center text-white">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="font-black text-base tracking-tight">IIT Bombay, Mumbai</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-12 md:p-20 rounded-[5rem] shadow-[0_60px_120px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden h-fit"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative z-10"
                  >
                    <h3 className="text-4xl font-black mb-12 tracking-tighter">Send a Message</h3>
                    <form className="space-y-10" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                          <input required type="text" placeholder="John Doe" className="w-full px-8 py-6 rounded-[2rem] bg-slate-50 border-2 border-transparent focus:border-blue-100 focus:bg-white outline-none transition-all font-black text-lg" />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                          <input required type="email" placeholder="john@example.com" className="w-full px-8 py-6 rounded-[2rem] bg-slate-50 border-2 border-transparent focus:border-blue-100 focus:bg-white outline-none transition-all font-black text-lg" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Subject</label>
                        <input required type="text" placeholder="How can we help?" className="w-full px-8 py-6 rounded-[2rem] bg-slate-50 border-2 border-transparent focus:border-blue-100 focus:bg-white outline-none transition-all font-black text-lg" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Message</label>
                        <textarea rows={5} placeholder="Your message here..." className="w-full px-8 py-6 rounded-[2rem] bg-slate-50 border-2 border-transparent focus:border-blue-100 focus:bg-white outline-none transition-all font-black text-lg resize-none"></textarea>
                      </div>
                      <button type="submit" className="w-full bg-academy-dark text-white py-7 rounded-[2rem] font-black text-2xl shadow-2xl shadow-slate-200 hover:bg-slate-800 transition-all flex items-center justify-center gap-4">
                        Send Message <ArrowRight className="w-8 h-8" />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-24 relative z-10"
                  >
                    <div className="w-32 h-32 bg-green-50 text-green-500 rounded-[2.5rem] flex items-center justify-center mb-10 shadow-inner">
                      <CheckCircle className="w-16 h-16" />
                    </div>
                    <h3 className="text-5xl font-black mb-6 tracking-tighter">Message Sent!</h3>
                    <p className="text-2xl text-slate-500 font-medium mb-12 leading-relaxed">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-academy-blue font-black uppercase tracking-[0.3em] text-sm hover:tracking-[0.5em] transition-all"
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
            <Route path="/methodology" element={<MethodologyPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
        <AIChatbot />
      </div>
    </Router>
  );
}
