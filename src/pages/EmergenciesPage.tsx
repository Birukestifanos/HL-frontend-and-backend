import { motion } from "framer-motion";
import { AlertTriangle, Droplets, Heart, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
export function EmergenciesPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-[#F9F9F9] dark:bg-[#0f0f0f] pt-12 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgent Banner */}
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="bg-red-600 text-white px-6 py-3 rounded-xl mb-12 flex items-center justify-center font-bold tracking-wide shadow-lg animate-pulse"
        >
          <AlertTriangle className="mr-2 h-5 w-5" />
          {t.emergency_banner}
        </motion.div>

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
            {t.emergency_title}
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="text-xl text-[#1a1a1a]/70 dark:text-white/70 max-w-3xl mx-auto"
          >
            {t.emergency_subtitle}
          </motion.p>
        </div>

        {/* Current Crisis Section */}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-xl border border-[#B91C1C]/10 dark:border-[#B91C1C]/20 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-96 lg:h-auto relative">
              <img
                src="https://images.unsplash.com/photo-1541976844346-718b7d2831af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
                alt="Drought affected area"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <span className="bg-[#B91C1C] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  {t.emergency_urgent}
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#111111] dark:text-white mb-6">
                {t.emergency_crisis_title}
              </h2>
              <p className="text-lg text-[#1a1a1a]/80 dark:text-white/80 mb-8 leading-relaxed">
                {t.emergency_crisis_desc}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-[#F9F9F9] dark:bg-[#2a2a2a] rounded-xl">
                  <div className="text-2xl font-bold text-[#B91C1C] dark:text-[#F87171] mb-1">
                    {t.emergency_affected_num}
                  </div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">
                    {t.emergency_affected}
                  </div>
                </div>
                <div className="text-center p-4 bg-[#F9F9F9] dark:bg-[#2a2a2a] rounded-xl">
                  <div className="text-2xl font-bold text-[#B91C1C] dark:text-[#F87171] mb-1">
                    {t.emergency_deployed_num}
                  </div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">
                    {t.emergency_deployed}
                  </div>
                </div>
                <div className="text-center p-4 bg-[#F9F9F9] dark:bg-[#2a2a2a] rounded-xl">
                  <div className="text-2xl font-bold text-[#B91C1C] dark:text-[#F87171] mb-1">
                    {t.emergency_raised_num}
                  </div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">
                    {t.emergency_raised}
                  </div>
                </div>
              </div>

              <Link
                to="/donate"
                className="w-full text-center bg-[#B91C1C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#991B1B] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t.emergency_donate_btn}
              </Link>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Truck,
              title: "Food Distribution",
              desc: "Delivering emergency food packs to remote villages.",
            },
            {
              icon: Droplets,
              title: "Water Trucking",
              desc: "Providing clean water where wells have dried up.",
            },
            {
              icon: Heart,
              title: "Medical Aid",
              desc: "Treating malnutrition and preventing disease outbreaks.",
            },
          ].map((action, index) => (
            <motion.div
              key={index}
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
              transition={{
                delay: index * 0.1,
              }}
              className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-sm border border-[#B91C1C]/10 dark:border-[#B91C1C]/20 text-center"
            >
              <div className="bg-[#B91C1C]/10 dark:bg-[#B91C1C]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <action.icon className="h-8 w-8 text-[#B91C1C] dark:text-[#F87171]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111111] dark:text-white mb-3">
                {action.title}
              </h3>
              <p className="text-[#1a1a1a]/70 dark:text-white/70">
                {action.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
