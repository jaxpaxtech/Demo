import React from "react";
import { motion } from "motion/react";
import { Counter } from "../components/Counter";

export const ResultsPage = () => {
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
                  <img src={topper.img} alt={topper.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" loading="lazy" />
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
