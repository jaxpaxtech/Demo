import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowUpRight, X, Star } from "lucide-react";

export const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState("school");

  const programs = {
    school: {
      title: "School Excellence",
      subtitle: "Grades 8 - 10",
      desc: "Building rock-solid foundations for the crucial board exam years. We focus on conceptual clarity that lasts a lifetime.",
      items: ["Mathematics Mastery", "Conceptual Science", "Advanced English", "Mental Ability & Logic", "Weekly Board-Pattern Tests", "Doubt Solving Sessions"],
      roadmap: [
        { label: "Q1", title: "Foundation & Basics", desc: "Focus on building core concepts in Math and Science through visual learning." },
        { label: "Q2", title: "Mid-term Excellence", desc: "Intensive practice and first round of comprehensive testing for board readiness." },
        { label: "Q3", title: "Advanced Application", desc: "Applying concepts to complex problems and early Olympiad preparation." },
        { label: "Q4", title: "Board Mastery", desc: "Final revision, mock boards, and specialized time management workshops." }
      ]
    },
    science: {
      title: "Science Elite",
      subtitle: "Grades 11 - 12",
      desc: "Specialized streams for Physics, Chemistry, Biology, and Mathematics with a focus on deep academic rigor.",
      items: ["Quantum Physics Lab", "Organic Chemistry Hub", "Calculus Mastery", "Medical Biology Pro", "NCERT Thorough Revision", "Practical Lab Sessions"],
      roadmap: [
        { label: "Q1", title: "Core Theory", desc: "Deep dive into 11th/12th grade syllabus fundamentals and conceptual mapping." },
        { label: "Q2", title: "Practical & Lab", desc: "Hands-on experiments and application-based learning in our advanced labs." },
        { label: "Q3", title: "Intensive Revision", desc: "Revisiting complex topics with advanced problem sets and PhD mentorship." },
        { label: "Q4", title: "Final Prep", desc: "Full-length syllabus tests, board prep, and performance fine-tuning." }
      ]
    },
    competitive: {
      title: "Competitive Edge",
      subtitle: "Entrance Exams",
      desc: "Intensive training for JEE, NEET, and National Olympiads. Designed for students aiming for the top 100 ranks.",
      items: ["JEE Advanced Strategy", "NEET Intensive Prep", "Olympiad Foundation", "CET Crash Course", "All India Test Series", "Rank Improvement Program"],
      roadmap: [
        { label: "Q1", title: "Syllabus Sprint", desc: "Rapid completion of core JEE/NEET topics with high precision and accuracy." },
        { label: "Q2", title: "Revision Cycle", desc: "Multiple rounds of revision focusing on high-weightage areas and shortcuts." },
        { label: "Q3", title: "Mock Test Series", desc: "All India level mock tests with detailed AI-driven performance analysis." },
        { label: "Q4", title: "Rank Booster", desc: "Personalized strategy sessions and rank-improvement workshops for top results." }
      ]
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
                  loading="lazy"
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
          
          {/* Academic Roadmap */}
          <div className="mt-40">
            <div className="text-center mb-24">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-academy-blue font-black uppercase tracking-[0.4em] text-xs mb-6 block"
              >
                The Learning Journey
              </motion.span>
              <h2 className="text-6xl font-black mb-8 tracking-tighter">Academic <span className="text-gradient">Roadmap.</span></h2>
              <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">A structured progression designed to take students from fundamentals to mastery.</p>
            </div>

            <div className="relative">
              {/* Timeline Line for Desktop */}
              <div className="absolute top-[120px] left-0 w-full h-1 bg-slate-100 hidden lg:block" />
              
              <div className="grid lg:grid-cols-4 gap-12 relative z-10">
                <AnimatePresence mode="wait">
                  {programs[activeTab as keyof typeof programs].roadmap.map((step, i) => (
                    <motion.div 
                      key={`${activeTab}-${i}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: i * 0.1 }}
                      className="group relative"
                    >
                      {/* Milestone Dot on Line */}
                      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-slate-100 rounded-full hidden lg:block group-hover:border-academy-blue group-hover:scale-125 transition-all duration-500 z-20" />
                      
                      <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 h-full flex flex-col pt-24 lg:pt-32">
                        <div className="absolute top-8 left-8 lg:top-10 lg:left-10 w-16 h-16 bg-blue-50 text-academy-blue rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-academy-blue group-hover:text-white transition-all duration-500">
                          {step.label}
                        </div>
                        <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-academy-blue transition-colors">{step.title}</h3>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                        
                        {i === programs[activeTab as keyof typeof programs].roadmap.length - 1 && (
                          <div className="mt-auto pt-8">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-academy-blue rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
                              <Star className="w-3 h-3 fill-current" /> Key Milestone
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

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
