import { motion } from "framer-motion";
import {
  Users,
  ClipboardCheck,
  RefreshCw,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
export function HowWeWorkPage() {
  const { t } = useLanguage();
  const principles = [
    {
      icon: Users,
      title: t.how_locally_led_title,
      desc: t.how_locally_led_desc,
    },
    {
      icon: ClipboardCheck,
      title: t.how_needs_title,
      desc: t.how_needs_desc,
    },
    {
      icon: RefreshCw,
      title: t.how_sustainability_title,
      desc: t.how_sustainability_desc,
    },
    {
      icon: Handshake,
      title: t.how_partnership_title,
      desc: t.how_partnership_desc,
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
            {t.how_title}
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
            {t.how_subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
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
              className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-sm border border-[#B91C1C]/10 dark:border-[#B91C1C]/20"
            >
              <div className="bg-[#B91C1C]/10 dark:bg-[#B91C1C]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <item.icon className="h-8 w-8 text-[#00e153] dark:text-[#000000]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#B91C1C] dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-lg text-[#1a1a1a]/80 dark:text-white/80 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          className="bg-[#B91C1C] rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 pattern-dots" />
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              {t.how_cta_title}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t.how_cta_text}
            </p>
            <Link
              to="/programs"
              className="inline-flex items-center bg-white text-[#B91C1C] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              {t.nav_programs} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
