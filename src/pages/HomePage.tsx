import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, AnimatePresence } from "motion/react";
import { 
  BrainCircuit, 
  Users, 
  Zap, 
  ShieldCheck, 
  Trophy, 
  Sparkles, 
  ArrowUpRight, 
  Play, 
  Star, 
  ArrowRight,
  ChevronDown,
  Plus,
  Minus
} from "lucide-react";
import { Counter } from "../components/Counter";

export const HomePage = () => {
  const containerRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
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
    { 
      q: "What is the admission process?", 
      a: "The process is designed to be thorough yet simple. It begins with a diagnostic test to understand the student's current conceptual standing, followed by a 1-on-1 counseling session with our academic experts. Based on the results and the student's goals, we recommend the most suitable program." 
    },
    { 
      q: "Do you offer online or hybrid classes?", 
      a: "Yes, we offer a flexible hybrid model. Students can attend physical classes at our state-of-the-art centers or join live interactive online sessions. All lectures are recorded and available on our student portal for 24/7 revision." 
    },
    { 
      q: "How do you handle doubt clearing?", 
      a: "Doubt clearing is a cornerstone of our methodology. We have dedicated 1-on-1 doubt sessions every day after classes. Additionally, students can use our AI-powered app to upload photos of their doubts and get instant solutions or connect with a live mentor 24/7." 
    },
    { 
      q: "Is there a scholarship program?", 
      a: "Absolutely. We believe in rewarding merit. Our Bright Future Talent Search Exam (BFTSE) is conducted monthly, offering up to 100% scholarships on tuition fees for top performers. We also offer special scholarships for students with consistent academic excellence in school." 
    },
    {
      q: "What are the academy timings?",
      a: "Our regular batches usually run from 4:00 PM to 8:00 PM on weekdays to accommodate school schedules. We also have intensive morning batches for integrated students and special weekend-only programs for Foundation courses."
    },
    {
      q: "What is the student-teacher ratio?",
      a: "We maintain a strict 1:12 student-teacher ratio in all our elite batches. This ensures that every student receives personalized attention, and mentors can track individual progress closely, identifying and fixing weak areas in real-time."
    }
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
                  loading="lazy"
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

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-6xl font-black mb-8 tracking-tighter">Common <span className="text-gradient">Questions.</span></h2>
              <p className="text-xl text-slate-500 font-medium">Everything you need to know about starting your journey with us.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`group rounded-[2.5rem] border transition-all duration-300 ${
                    activeFaq === i 
                      ? "bg-white border-academy-gold/30 shadow-xl shadow-academy-gold/5" 
                      : "bg-slate-50 border-slate-100 hover:border-academy-gold/20 hover:bg-white"
                  }`}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-10 flex items-center justify-between text-left gap-8"
                  >
                    <span className={`text-2xl font-black transition-colors ${
                      activeFaq === i ? "text-academy-gold" : "text-academy-dark"
                    }`}>
                      {faq.q}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeFaq === i ? "bg-academy-gold text-white rotate-180" : "bg-white text-slate-400"
                    }`}>
                      {activeFaq === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-10 pb-10">
                          <div className="h-px w-full bg-slate-100 mb-8" />
                          <p className="text-lg text-slate-500 font-medium leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-academy-dark rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[100%] bg-blue-600 rounded-full blur-[150px]"></div>
              <div className="absolute bottom-[-50%] right-[-20%] w-[100%] h-[100%] bg-purple-600 rounded-full blur-[150px]"></div>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]">Ready to Engineer Your <br /><span className="text-blue-400">Success?</span></h2>
              <p className="text-2xl text-slate-400 mb-16 leading-relaxed font-medium">Join the elite league of achievers. Admissions are now open for the upcoming academic session.</p>
              <div className="flex flex-wrap justify-center gap-8">
                <Link to="/admissions" className="btn-primary !px-16 !py-8 !text-2xl !rounded-[2rem] shadow-2xl shadow-blue-500/20">
                  Apply for Admission
                </Link>
                <Link to="/contact" className="px-16 py-8 rounded-[2rem] border-2 border-white/10 text-white font-black text-2xl hover:bg-white/5 transition-all">
                  Talk to Counselor
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
