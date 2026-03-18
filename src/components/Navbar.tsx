import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { GraduationCap, Menu, X } from "lucide-react";

export const Navbar = () => {
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
