import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Instagram } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useLanguage } from "../context/LanguageContext";

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
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// Load Leaflet CSS from CDN to avoid bundler image resolution issues
const leafletCSSUrl = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
// Fix for default marker icon in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});
export function ContactPage() {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const defaultSubject = searchParams.get("subject") || "General Inquiry";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: defaultSubject,
    message: "",
  });
  const [selectedCountryCode, setSelectedCountryCode] = useState("+251"); // Default to Ethiopia
  const [error, setError] = useState("");

  const countryCodes = [
    { code: "+251", country: "Ethiopia" },
    { code: "+1", country: "USA/Canada" },
    { code: "+44", country: "UK" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+20", country: "Egypt" },
    { code: "+254", country: "Kenya" },
    { code: "+251", country: "Ethiopia" },
    { code: "+252", country: "Somalia" },
    { code: "+249", country: "Sudan" },
    { code: "+211", country: "South Sudan" },
    { code: "+243", country: "DR Congo" },
    { code: "+255", country: "Tanzania" },
    { code: "+256", country: "Uganda" },
    { code: "+260", country: "Zambia" },
    { code: "+263", country: "Zimbabwe" },
    { code: "+267", country: "Botswana" },
    { code: "+234", country: "Nigeria" },
    { code: "+233", country: "Ghana" },
    { code: "+225", country: "Ivory Coast" },
  ];
  useEffect(() => {
    // Inject Leaflet CSS via CDN link tag if not already present
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = leafletCSSUrl;
      document.head.appendChild(link);
    }
  }, []);
  const position: [number, number] = [9.032, 38.7469];
  return (
    <div className="min-h-screen bg-[#F9F9F9] dark:bg-[#0f0f0f] pt-12 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="font-serif text-5xl font-bold text-[#B91C1C] mb-6"
          >
            {t.contact_title}
          </motion.h1>
          <p className="text-xl text-[#1a1a1a]/70 dark:text-white/70 max-w-2xl mx-auto">
            {t.contact_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-sm border border-[#B91C1C]/10 dark:border-[#B91C1C]/20 transition-colors duration-300">
              <h3 className="font-serif text-2xl font-bold text-[#111111] dark:text-white mb-6">
                {t.contact_info_title}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#B91C1C]/10 dark:bg-[#B91C1C]/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[#B91C1C] dark:text-[#F87171]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#111111] dark:text-white">
                      {t.contact_general} (Public)
                    </p>
                    <a
                      href="mailto:info@hibretlebego.org"
                      className="text-[#1a1a1a]/70 dark:text-white/70 hover:text-[#B91C1C] dark:hover:text-[#F87171]"
                    >
                      info@hibretlebego.org
                    </a>
                    <p className="font-semibold text-[#111111] dark:text-white mt-4">
                      {t.contact_donations}
                    </p>
                    <a
                      href="mailto:donations@hibretlebego.org"
                      className="text-[#1a1a1a]/70 dark:text-white/70 hover:text-[#B91C1C] dark:hover:text-[#F87171]"
                    >
                      donations@hibretlebego.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#B91C1C]/10 dark:bg-[#B91C1C]/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-[#B91C1C] dark:text-[#F87171]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#111111] dark:text-white">
                      {t.contact_phone}
                    </p>
                    <p className="text-[#1a1a1a]/70 dark:text-white/70">
                      +251 XX XXX XXXX
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Mon-Fri, 9am - 5pm EST
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-[#111111] dark:text-white mt-4">
                  Social Media
                </p>
                <div className="flex items-center flex-wrap gap-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#B91C1C]/10 hover:bg-[#B91C1C]/20"
                  >
                    <Facebook className="h-5 w-5 text-[#B91C1C]" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#B91C1C]/10 hover:bg-[#B91C1C]/20"
                  >
                    <Instagram className="h-5 w-5 text-[#B91C1C]" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#B91C1C]/10 hover:bg-[#B91C1C]/20"
                  >
                    <YoutubeIcon className="h-5 w-5 text-[#B91C1C]" />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#B91C1C]/10 hover:bg-[#B91C1C]/20"
                  >
                    <TikTokIcon className="h-5 w-5 text-[#B91C1C]" />
                  </a>
                </div>

                <div className="flex items-start space-x-4 mt-6">
                  <div className="bg-[#B91C1C]/10 dark:bg-[#B91C1C]/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-[#B91C1C] dark:text-[#F87171]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#111111] dark:text-white">
                      {t.contact_hq}
                    </p>
                    <p className="text-[#1a1a1a]/70 dark:text-white/70">
                      Addis Ababa, Ethiopia
                      <br />
                      (Update with full address)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="bg-white dark:bg-[#1a1a1a] p-8 md:p-10 rounded-2xl shadow-lg border border-[#B91C1C]/10 dark:border-[#B91C1C]/20 transition-colors duration-300"
          >
            <h3 className="font-serif text-2xl font-bold text-[#111111] dark:text-white mb-6">
              {t.contact_form_title}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Validate that either email or phone is provided
                if (!formData.email && !formData.phone) {
                  setError(
                    "Please provide either an email address or phone number",
                  );
                  return;
                }
                setError("");
                // Combine country code with phone number
                const fullPhone = formData.phone
                  ? `${selectedCountryCode} ${formData.phone}`
                  : "";
                // Here you would typically send the data to your backend
                console.log("Form submitted:", {
                  ...formData,
                  phone: fullPhone,
                });
                alert(
                  "Thank you for your message! We will get back to you soon.",
                );
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t.contact_name}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] text-[#1a1a1a] dark:text-white focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 outline-none transition-all"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t.contact_email}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] text-[#1a1a1a] dark:text-white focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 outline-none transition-all"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t.contact_phone_number}
                </label>
                <div className="flex space-x-2">
                  <select
                    className="w-32 px-3 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] text-[#1a1a1a] dark:text-white focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 outline-none transition-all"
                    value={selectedCountryCode}
                    onChange={(e) => setSelectedCountryCode(e.target.value)}
                  >
                    {countryCodes.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.code} ({item.country})
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] text-[#1a1a1a] dark:text-white focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 outline-none transition-all"
                    placeholder="XX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t.contact_subject}
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] text-[#1a1a1a] dark:text-white focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 outline-none transition-all"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                >
                  <option>General Inquiry</option>
                  <option>Volunteering</option>
                  <option>Internship</option>
                  <option>Partnership</option>
                  <option>Donations</option>
                  <option>Press/Media</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t.contact_message}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] text-[#1a1a1a] dark:text-white focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 outline-none transition-all"
                  placeholder="How can we help?"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full bg-[#B91C1C] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#991B1B] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <span>{t.contact_send_btn}</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-[#B91C1C]/10 dark:border-[#B91C1C]/20"
        >
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
              <Popup>
                Hibret Lebego <br /> Addis Ababa, Ethiopia
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </div>
    </div>
  );
}
