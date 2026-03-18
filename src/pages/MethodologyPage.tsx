import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  BrainCircuit, 
  Zap, 
  Target, 
  Users, 
  Sparkles, 
  Play 
} from "lucide-react";

export const MethodologyPage = () => {
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
