import { useEffect, useState, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AdminGate } from "./components/AdminGate";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { ToastProvider } from "./components/Toast";

// Lazy load all page components for better performance
const HomePage = lazy(() =>
  import("./pages/HomePage").then((m) => ({ default: m.HomePage })),
);
const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })),
);
const ProgramsPage = lazy(() =>
  import("./pages/ProgramsPage").then((m) => ({ default: m.ProgramsPage })),
);
const DonatePage = lazy(() =>
  import("./pages/DonatePage").then((m) => ({ default: m.DonatePage })),
);
const TransparencyPage = lazy(() =>
  import("./pages/TransparencyPage").then((m) => ({
    default: m.TransparencyPage,
  })),
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })),
);
const HowWeWorkPage = lazy(() =>
  import("./pages/WhatWeDo").then((m) => ({ default: m.HowWeWorkPage })),
);
const EmergenciesPage = lazy(() =>
  import("./pages/EmergenciesPage").then((m) => ({
    default: m.EmergenciesPage,
  })),
);

const NewsPage = lazy(() =>
  import("./pages/NewsPage").then((m) => ({ default: m.NewsPage })),
);
const PartnerPage = lazy(() =>
  import("./pages/PartnerPage").then((m) => ({ default: m.PartnerPage })),
);
const AdvocacyPage = lazy(() =>
  import("./pages/AdvocacyPage").then((m) => ({ default: m.AdvocacyPage })),
);
const SafeguardingPage = lazy(() =>
  import("./pages/SafeguardingPage").then((m) => ({
    default: m.SafeguardingPage,
  })),
);
const VolunteerPage = lazy(() =>
  import("./pages/VolunteerPage").then((m) => ({ default: m.VolunteerPage })),
);
const LegalPage = lazy(() =>
  import("./pages/LegalPage").then((m) => ({ default: m.LegalPage })),
);
const ImpactPage = lazy(() =>
  import("./pages/ImpactPage").then((m) => ({ default: m.ImpactPage })),
);
const PastProjectsPage = lazy(() =>
  import("./pages/PastProjectsPage").then((m) => ({
    default: m.PastProjectsPage,
  })),
);

// Loading fallback component
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B91C1C]"></div>
    </div>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Hide Footer on admin pages
function FooterWrapper() {
  const { pathname } = useLocation();
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    // Hide footer on admin routes
    if (pathname.startsWith("/admin")) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [pathname]);

  if (!showFooter) return null;
  return <Footer />;
}

export function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ToastProvider>
          <AdminAuthProvider>
            <Router>
              <ScrollToTop />
              <div className="flex flex-col min-h-screen bg-[#F9F9F9] dark:bg-[#0f0f0f] font-sans text-[#1a1a1a] dark:text-[#f0f0f0] transition-colors duration-300">
                <Navbar />
                <main className="flex-grow pt-20">
                  <Suspense fallback={<PageLoader />}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/programs" element={<ProgramsPage />} />
                      <Route path="/donate" element={<DonatePage />} />
                      <Route
                        path="/transparency"
                        element={<TransparencyPage />}
                      />
                      <Route path="/contact" element={<ContactPage />} />

                      {/* New Routes */}
                      <Route path="/how-we-work" element={<HowWeWorkPage />} />
                      <Route
                        path="/emergencies"
                        element={<EmergenciesPage />}
                      />
                      <Route path="/news" element={<NewsPage />} />
                      <Route path="/partner" element={<PartnerPage />} />
                      <Route
                        path="/financial-accountability"
                        element={<TransparencyPage />}
                      />

                      <Route path="/advocacy" element={<AdvocacyPage />} />
                      <Route
                        path="/safeguarding"
                        element={<SafeguardingPage />}
                      />
                      <Route
                        path="/volunteer-internship"
                        element={<VolunteerPage />}
                      />
                      <Route path="/legal-governance" element={<LegalPage />} />
                      <Route path="/impact" element={<ImpactPage />} />
                      <Route
                        path="/past-projects"
                        element={<PastProjectsPage />}
                      />
                      <Route path="/admin" element={<AdminGate />} />
                    </Routes>
                  </Suspense>
                </main>
                <FooterWrapper />
              </div>
            </Router>
          </AdminAuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
