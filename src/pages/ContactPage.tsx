import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, User, Check, ArrowUpRight } from "lucide-react";

export const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
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
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-academy-blue font-black uppercase tracking-[0.4em] text-xs mb-6 block"
            >
              Get in Touch
            </motion.span>
            <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85]">Let's Start a <br /><span className="text-gradient">Conversation.</span></h1>
            <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-medium mb-16 leading-relaxed">Have questions about our programs or the admission process? Our team is here to help you every step of the way.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-40">
            {[
              { icon: <Phone className="w-10 h-10" />, title: "Call Us", value: "+91 98765 43210", desc: "Mon-Sat, 9am - 7pm", color: "bg-blue-50 text-blue-600" },
              { icon: <Mail className="w-10 h-10" />, title: "Email Us", value: "info@brightfuture.edu", desc: "We reply within 24 hours", color: "bg-emerald-50 text-emerald-600" },
              { icon: <MapPin className="w-10 h-10" />, title: "Visit Us", value: "Academy Campus, New Delhi", desc: "Main Academic Block", color: "bg-violet-50 text-violet-600" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group text-center"
              >
                <div className={`w-24 h-24 ${item.color} rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-4">{item.title}</h3>
                <p className="text-3xl font-black mb-4 tracking-tighter">{item.value}</p>
                <p className="text-slate-500 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-20 rounded-[5rem] border border-slate-100 shadow-[0_60px_120px_rgba(0,0,0,0.05)]"
            >
              <h2 className="text-4xl font-black mb-10 tracking-tighter">Send a Message</h2>
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

                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Subject</label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-academy-blue transition-colors" />
                    <input 
                      type="text" 
                      required
                      placeholder="Admission Query"
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-academy-blue focus:bg-white rounded-3xl px-16 py-6 font-black text-sm transition-all outline-none"
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Message</label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-6 top-8 w-5 h-5 text-slate-300 group-focus-within:text-academy-blue transition-colors" />
                    <textarea 
                      rows={6}
                      required
                      placeholder="How can we help you?"
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
                    {isSubmitted ? "Message Sent Successfully!" : "Send Message"}
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
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="bg-academy-dark text-white p-16 rounded-[5rem] shadow-2xl shadow-slate-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
                <h3 className="text-4xl font-black mb-8 tracking-tighter">Campus Location</h3>
                <p className="text-xl text-slate-400 font-medium mb-12 leading-relaxed">Visit our state-of-the-art campus to experience the academic environment firsthand.</p>
                <div className="aspect-video w-full bg-slate-800 rounded-[3rem] overflow-hidden border border-white/10 relative group-hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5620649313!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Campus Map"
                  />
                </div>
                <div className="mt-12 flex items-center justify-between">
                  <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-xs">New Delhi, India</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-black hover:text-academy-blue transition-colors">
                    Open in Maps <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-12 bg-white rounded-[4rem] border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-black mb-6 tracking-tight">Academic Hours</h3>
                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
                    { day: "Saturday", time: "9:00 AM - 4:00 PM" },
                    { day: "Sunday", time: "Closed" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-4 border-b border-slate-50 last:border-0">
                      <span className="text-slate-500 font-medium">{item.day}</span>
                      <span className="font-black text-academy-dark">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};
