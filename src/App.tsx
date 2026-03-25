import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { DonatePage } from "./pages/DonatePage";
import { TransparencyPage } from "./pages/TransparencyPage";
import { ContactPage } from "./pages/ContactPage";
import { HowWeWorkPage } from "./pages/WhatWeDo";
import { EmergenciesPage } from "./pages/EmergenciesPage";
import { WaysToGivePage } from "./pages/WaysToGivePage";
import { NewsPage } from "./pages/NewsPage";
import { PartnerPage } from "./pages/PartnerPage";
import { FinancialAccountabilityPage } from "./pages/FinancialAccountabilityPage";
import { AdvocacyPage } from "./pages/AdvocacyPage";
import { SafeguardingPage } from "./pages/SafeguardingPage";
import { VolunteerPage } from "./pages/VolunteerPage";
import { LegalPage } from "./pages/LegalPage";
import { ImpactPage } from "./pages/ImpactPage";
import { AdminGate } from "./components/AdminGate";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AdminAuthProvider>
          <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen bg-[#F9F9F9] dark:bg-[#0f0f0f] font-sans text-[#1a1a1a] dark:text-[#f0f0f0] transition-colors duration-300">
              <Navbar />
              <main className="flex-grow pt-20">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/programs" element={<ProgramsPage />} />
                  <Route path="/donate" element={<DonatePage />} />
                  <Route path="/transparency" element={<TransparencyPage />} />
                  <Route path="/contact" element={<ContactPage />} />

                  {/* New Routes */}
                  <Route path="/how-we-work" element={<HowWeWorkPage />} />
                  <Route path="/emergencies" element={<EmergenciesPage />} />
                  <Route path="/ways-to-give" element={<WaysToGivePage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/partner" element={<PartnerPage />} />
                  <Route
                    path="/financial-accountability"
                    element={<FinancialAccountabilityPage />}
                  />

                  <Route path="/advocacy" element={<AdvocacyPage />} />
                  <Route path="/safeguarding" element={<SafeguardingPage />} />
                  <Route
                    path="/volunteer-internship"
                    element={<VolunteerPage />}
                  />
                  <Route path="/legal-governance" element={<LegalPage />} />
                  <Route path="/impact" element={<ImpactPage />} />
                  <Route path="/admin" element={<AdminGate />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </AdminAuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
