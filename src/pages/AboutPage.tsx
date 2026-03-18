import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Lightbulb, Users, Trophy, Clock, Target, Zap } from "lucide-react";

export const AboutPage = () => (
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
              <img src="https://images.unsplash.com/photo-1523050335392-93851179ae22?q=80&w=2070&auto=format&fit=crop" alt="University Campus" className="w-full h-full object-cover aspect-square" referrerPolicy="no-referrer" loading="lazy" />
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
                  <img src={faculty.img} alt={faculty.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" loading="lazy" />
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
                <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" />
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
