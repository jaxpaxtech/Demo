import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, ArrowRight, Send, User, Mail, Phone, BookOpen, MessageSquare } from "lucide-react";

export const AdmissionsPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "8",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className="mesh-gradient min-h-screen pt-32">
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <span className="text-academy-blue font-black uppercase tracking-[0.4em] text-xs mb-6 block">Join the Elite</span>
              <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85]">Secure Your <br /><span className="text-gradient">Future.</span></h1>
              <p className="text-2xl text-slate-500 font-medium mb-16 leading-relaxed">Admission to Bright Future Academy is highly selective. We look for students with curiosity, discipline, and a drive to excel in competitive environments.</p>
              
              <div className="space-y-10">
                {[
                  { title: "Merit-Based Selection", desc: "We prioritize academic potential and a strong foundation in core subjects." },
                  { title: "Personal Interview", desc: "A 1-on-1 session with our faculty to understand the student's goals and mindset." },
                  { title: "Scholarship Programs", desc: "Up to 100% scholarships for top performers in our entrance test." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 bg-white rounded-3xl border border-slate-100 flex items-center justify-center text-academy-blue shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-2 tracking-tight">{item.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="bg-white p-12 md:p-20 rounded-[5rem] border border-slate-100 shadow-[0_60px_120px_rgba(0,0,0,0.05)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-academy-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative">
                <h2 className="text-4xl font-black mb-10 tracking-tighter">Enquiry Form</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Full Name</label>
                      <div className="relative group">
                        <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-academy-blue transition-colors" />
                        <input 
                          type="text" 
                          required
                          placeholder="John Doe"
                          className="w-full bg-slate-50 border-2 border-transparent focus:border-academy-blue focus:bg-white rounded-3xl px-16 py-6 font-black text-sm transition-all outline-none"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Email Address</label>
                      <div className="relative group">
                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-academy-blue transition-colors" />
                        <input 
                          type="email" 
                          required
                          placeholder="john@example.com"
                          className="w-full bg-slate-50 border-2 border-transparent focus:border-academy-blue focus:bg-white rounded-3xl px-16 py-6 font-black text-sm transition-all outline-none"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Phone Number</label>
                      <div className="relative group">
                        <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-academy-blue transition-colors" />
                        <input 
                          type="tel" 
                          required
                          placeholder="+91 98765 43210"
                          className="w-full bg-slate-50 border-2 border-transparent focus:border-academy-blue focus:bg-white rounded-3xl px-16 py-6 font-black text-sm transition-all outline-none"
                          value={formState.phone}
                          onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Current Grade</label>
                      <div className="relative group">
                        <BookOpen className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-academy-blue transition-colors" />
                        <select 
                          className="w-full bg-slate-50 border-2 border-transparent focus:border-academy-blue focus:bg-white rounded-3xl px-16 py-6 font-black text-sm transition-all outline-none appearance-none"
                          value={formState.grade}
                          onChange={(e) => setFormState({...formState, grade: e.target.value})}
                        >
                          <option value="8">Grade 8</option>
                          <option value="9">Grade 9</option>
                          <option value="10">Grade 10</option>
                          <option value="11">Grade 11 (Science)</option>
                          <option value="12">Grade 12 (Science)</option>
                          <option value="competitive">Competitive Exams</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Message (Optional)</label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-6 top-8 w-5 h-5 text-slate-300 group-focus-within:text-academy-blue transition-colors" />
                      <textarea 
                        rows={4}
                        placeholder="Tell us about your academic goals..."
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-academy-blue focus:bg-white rounded-[2.5rem] px-16 py-8 font-black text-sm transition-all outline-none resize-none"
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full btn-primary !rounded-full !py-8 !text-xl !font-black !tracking-widest shadow-2xl shadow-blue-200 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      {isSubmitted ? "Enquiry Sent Successfully!" : "Submit Enquiry"}
                      {!isSubmitted && <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />}
                    </span>
                    {isSubmitted && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 bg-green-500 flex items-center justify-center"
                      >
                        <Check className="w-10 h-10 text-white" />
                      </motion.div>
                    )}
                  </button>
                </form>
                <p className="mt-8 text-center text-slate-400 text-sm font-medium">Our admissions team will contact you within 24 hours.</p>
              </div>
            </motion.div>
          </div>

          {/* Admission Process */}
          <div className="mt-60">
            <div className="text-center mb-24">
              <h2 className="text-6xl font-black mb-8 tracking-tighter">The Admission <span className="text-gradient">Journey.</span></h2>
              <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">A transparent, four-step process designed to ensure the perfect fit for both the student and the academy.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />
              {[
                { step: "01", title: "Enquiry", desc: "Fill the form or visit our campus for an initial consultation." },
                { step: "02", title: "Entrance Test", desc: "A diagnostic test to assess conceptual understanding and logic." },
                { step: "03", title: "Faculty Meet", desc: "A personalized interaction with our subject experts." },
                { step: "04", title: "Enrollment", desc: "Finalize the program and begin your journey to excellence." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm relative z-10 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="w-20 h-20 bg-academy-dark text-white rounded-3xl flex items-center justify-center text-3xl font-black mb-8 group-hover:scale-110 transition-transform duration-300">{item.step}</div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
