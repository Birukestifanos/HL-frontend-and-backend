import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "../svg/logo.png";
import { useLanguage } from "../context/LanguageContext";
// Custom icons for TikTok, YouTube and Telegram
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#111111] dark:bg-[#050505] text-white pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Hibret Lebego logo"
                className="h-12 w-12 object-contain rounded-full"
              />
              <span className="font-serif text-2xl font-bold text-white">
                <span className="text-[#86efac] font-bold">Hibret</span>
                <span className="text-[#B91C1C]"> Lebego</span>
              </span>
            </Link>
            <p className="text-white/80 leading-relaxed">{t.footer_desc}</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#B91C1C] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#B91C1C] transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#B91C1C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#B91C1C] transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#B91C1C] transition-colors"
                aria-label="Telegram"
              >
                <TelegramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-[#B91C1C]">
              {t.footer_quick_links}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-[#B91C1C] transition-colors"
                >
                  {t.nav_story}
                </Link>
              </li>
              <li>
                <Link
                  to="/how-we-work"
                  className="text-white/80 hover:text-[#B91C1C] transition-colors"
                >
                  {t.nav_how_we_work}
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-white/80 hover:text-[#B91C1C] transition-colors"
                >
                  {t.nav_programs}
                </Link>
              </li>
              <li>
                <Link
                  to="/emergencies"
                  className="text-white/80 hover:text-[#B91C1C] transition-colors"
                >
                  {t.nav_emergencies}
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-white/80 hover:text-[#B91C1C] transition-colors"
                >
                  {t.nav_news}
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-[#B91C1C]">
              {t.nav_get_involved}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/donate"
                  className="text-white/80 hover:text-[#B91C1C] transition-colors"
                >
                  {t.nav_donate}
                </Link>
              </li>
              <li>
                <Link
                  to="/ways-to-give"
                  className="text-white/80 hover:text-[#B91C1C] transition-colors"
                >
                  {t.nav_ways_to_give}
                </Link>
              </li>
              <li>
                <Link
                  to="/partner"
                  className="text-white/80 hover:text-[#B91C1C] transition-colors"
                >
                  {t.nav_partner}
                </Link>
              </li>
              <li>
                <Link
                  to="/volunteer-internship"
                  className="text-white/80 hover:text-[#B91C1C] transition-colors"
                >
                  {t.nav_volunteer_internship}
                </Link>
              </li>
              <li>
                <Link
                  to="/transparency"
                  className="text-white/80 hover:text-[#B91C1C] transition-colors"
                >
                  {t.nav_transparency}
                </Link>
              </li>
              <li>
                <Link
                  to="/financial-accountability"
                  className="text-white/80 hover:text-[#B91C1C] transition-colors"
                >
                  {t.nav_financial}
                </Link>
              </li>
              <li>
                <Link
                  to="/legal-governance"
                  className="text-white/80 hover:text-[#B91C1C] transition-colors"
                >
                  {t.nav_legal_governance}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-[#B91C1C]">
              {t.footer_contact_us}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/80">
                <MapPin className="h-5 w-5 text-[#86efac] flex-shrink-0 mt-0.5" />
                <span>
                  Addis Ababa, Ethiopia
                  <br />
                  (Update with full address)
                </span>
              </li>
              <li className="flex items-center space-x-3 text-white/80">
                <Phone className="h-5 w-5 text-[#86efac] flex-shrink-0" />
                <span>+251 XX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3 text-white/80">
                <Mail className="h-5 w-5 text-[#86efac] flex-shrink-0" />
                <span>info@hibretlebego.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Hibret Lebego. {t.footer_rights}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/safeguarding"
              className="hover:text-[#B91C1C] transition-colors"
            >
              {t.nav_safeguarding}
            </Link>
            <Link
              to="/advocacy"
              className="hover:text-[#B91C1C] transition-colors"
            >
              {t.nav_advocacy}
            </Link>
            <a href="#" className="hover:text-[#B91C1C] transition-colors">
              {t.footer_privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
