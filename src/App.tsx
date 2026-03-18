import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { AIChatbot } from "./components/AIChatbot";

// Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CoursesPage } from "./pages/CoursesPage";
import { AdmissionsPage } from "./pages/AdmissionsPage";
import { ContactPage } from "./pages/ContactPage";
import { MethodologyPage } from "./pages/MethodologyPage";
import { ResultsPage } from "./pages/ResultsPage";

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
