import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Globe, ChevronDown } from "lucide-react";
import logo from "../svg/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "am" : "en");
  };
  // Navigation Structure with Dropdowns
  const navItems = [
    {
      label: t.nav_about,
      id: "about",
      links: [
        {
          name: t.nav_story,
          path: "/about",
        },
        {
          name: t.nav_how_we_work,
          path: "/how-we-work",
        },
      ],
    },
    {
      label: t.nav_our_work,
      id: "work",
      links: [
        {
          name: "Past Projects",
          path: "/past-projects",
        },
        {
          name: t.nav_programs,
          path: "/programs",
        },
        {
          name: t.nav_emergencies,
          path: "/emergencies",
        },
      ],
    },
    {
      label: t.nav_get_involved,
      id: "involved",
      links: [
        {
          name: t.nav_donate,
          path: "/donate",
        },
        {
          name: t.nav_partner,
          path: "/partner",
        },
        {
          name: t.nav_volunteer_internship,
          path: "/volunteer-internship",
        },
      ],
    },
    {
      label: t.nav_impact,
      id: "impact",
      links: [
        {
          name: t.nav_impact_results,
          path: "/impact",
        },
        {
          name: t.nav_transparency,
          path: "/transparency",
        },
        {
          name: t.nav_news,
          path: "/news",
        },
      ],
    },
    {
      label: t.nav_policies,
      id: "policies",
      links: [
        {
          name: t.nav_advocacy,
          path: "/advocacy",
        },
        {
          name: t.nav_safeguarding,
          path: "/safeguarding",
        },
      ],
    },
  ];

  const isActive = (path: string) => location.pathname === path;
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9]/90 dark:bg-[#0f0f0f]/90 backdrop-blur-md border-b border-[#B91C1C]/10 dark:border-[#B91C1C]/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group flex-shrink-0"
          >
            <img
              src={logo}
              alt="Hibret Lebego logo"
              className="h-10 w-10 object-contain rounded-full"
            />
            <span className="hidden sm:inline font-serif text-2xl font-bold tracking-tight">
              <span className="text-[#15803d] dark:text-[#86efac] font-bold">
                Hibret
              </span>
              <span className="text-[#B91C1C]"> Lebego</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-sm font-medium text-[#1a1a1a]/80 dark:text-white/80 hover:text-[#B91C1C] dark:hover:text-[#F87171] transition-colors py-2">
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.id && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 10,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="absolute left-0 mt-0 w-56 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-xl border border-[#B91C1C]/10 dark:border-[#B91C1C]/20 overflow-hidden z-50"
                    >
                      <div className="py-2">
                        {item.links.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            className={`block px-4 py-2 text-sm hover:bg-[#B91C1C]/5 dark:hover:bg-[#B91C1C]/20 hover:text-[#B91C1C] dark:hover:text-[#F87171] transition-colors ${
                              isActive(link.path)
                                ? "text-[#B91C1C] dark:text-[#F87171] font-semibold"
                                : "text-[#1a1a1a]/80 dark:text-white/80"
                            }`}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-[#B91C1C] dark:hover:text-[#F87171] ${
                isActive("/contact")
                  ? "text-[#B91C1C] dark:text-[#F87171] font-semibold"
                  : "text-[#1a1a1a]/80 dark:text-white/80"
              }`}
            >
              {t.nav_contact}
            </Link>

            <div className="flex items-center space-x-2 border-l border-gray-200 dark:border-gray-700 pl-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-[#1a1a1a] dark:text-white"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>

              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-sm font-medium text-[#1a1a1a] dark:text-white"
              >
                <Globe className="h-4 w-4" />
                <span>{language === "en" ? "EN" : "አማ"}</span>
              </button>
            </div>

            <Link
              to="/donate"
              className="bg-[#B91C1C] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#15803d] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t.nav_donate}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2 py-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-sm font-medium text-[#1a1a1a] dark:text-white"
            >
              <span>{language === "en" ? "EN" : "አማ"}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-[#1a1a1a] dark:text-white"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#111111] dark:text-white p-2 hover:bg-[#B91C1C]/5 dark:hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="lg:hidden bg-[#F9F9F9] dark:bg-[#1a1a1a] border-b border-[#B91C1C]/10 dark:border-[#B91C1C]/20 overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-200 dark:border-gray-800 pb-2"
                >
                  <div className="text-sm font-bold text-[#B91C1C] dark:text-[#F87171] mb-2 px-4 uppercase tracking-wider">
                    {item.label}
                  </div>
                  {item.links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 rounded-lg text-base font-medium ${
                        isActive(link.path)
                          ? "bg-[#B91C1C]/5 dark:bg-[#B91C1C]/20 text-[#B91C1C] dark:text-[#F87171]"
                          : "text-[#1a1a1a]/80 dark:text-white/80 hover:bg-[#B91C1C]/5 dark:hover:bg-white/5 hover:text-[#B91C1C] dark:hover:text-[#F87171]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-bold text-[#1a1a1a] dark:text-white hover:text-[#B91C1C]"
              >
                {t.nav_contact}
              </Link>

              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-[#B91C1C] text-white px-6 py-3 rounded-full font-medium hover:bg-[#991B1B] transition-colors"
              >
                {t.nav_donate}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
