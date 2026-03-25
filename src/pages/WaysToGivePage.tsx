import { motion } from "framer-motion";
import { Calendar, CreditCard, Gift, BookOpen, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
export function WaysToGivePage() {
  const { t } = useLanguage();
  const ways = [
    {
      icon: Calendar,
      title: t.ways_monthly_title,
      desc: t.ways_monthly_desc,
      highlight: true,
    },
    {
      icon: CreditCard,
      title: t.ways_onetime_title,
      desc: t.ways_onetime_desc,
    },
    {
      icon: Gift,
      title: t.ways_inkind_title,
      desc: t.ways_inkind_desc,
    },
    {
      icon: BookOpen,
      title: t.ways_legacy_title,
      desc: t.ways_legacy_desc,
    },
    {
      icon: Heart,
      title: t.ways_tribute_title,
      desc: t.ways_tribute_desc,
    },
  ];

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
            {t.ways_title}
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
            {t.ways_subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ways.map((way, index) => (
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
              className={`p-8 rounded-2xl shadow-sm border transition-all duration-300 hover:shadow-lg ${way.highlight ? "bg-[#B91C1C] text-white border-[#86efac]" : "bg-white dark:bg-[#1a1a1a] border-[#B91C1C]/10 dark:border-[#B91C1C]/20"}`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${way.highlight ? "bg-white/20 text-white" : "bg-[#B91C1C]/10 dark:bg-[#B91C1C]/20 text-[#B91C1C] dark:text-[#F87171]"}`}
              >
                <way.icon className="h-7 w-7" />
              </div>
              <h3
                className={`font-serif text-2xl font-bold mb-4 ${way.highlight ? "text-white" : "text-[#B91C1C] dark:text-white"}`}
              >
                {way.title}
              </h3>
              <p
                className={`text-lg leading-relaxed ${way.highlight ? "text-white/90" : "text-[#1a1a1a]/70 dark:text-white/70"}`}
              >
                {way.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/donate"
            className="inline-block bg-[#86efac] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#991B1B] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t.nav_donate}
          </Link>
        </div>
      </div>
    </div>
  );
}
