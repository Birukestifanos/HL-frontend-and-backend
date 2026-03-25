import { motion } from "framer-motion";
import {
  Building2,
  Handshake,
  Users,
  Briefcase,
  Link as LinkIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
export function PartnerPage() {
  const { t } = useLanguage();
  const types = [
    {
      icon: Building2,
      title: t.partner_corporate,
      desc: t.partner_corporate_desc,
    },
    {
      icon: Handshake,
      title: t.partner_grant,
      desc: t.partner_grant_desc,
    },
    {
      icon: Users,
      title: t.partner_employee,
      desc: t.partner_employee_desc,
    },
    {
      icon: Briefcase,
      title: t.partner_probono,
      desc: t.partner_probono_desc,
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
            {t.partner_title}
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
            {t.partner_subtitle}
          </motion.p>
        </div>

        {/* Why Partner Section */}
        <div className="bg-[#ffffff] dark:bg-[#1a1a1a] rounded-3xl p-8 md:p-12 shadow-sm border border-[#22c55e] dark:border-[#B91C1C] mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-[#B91C1C] dark:text-white mb-6">
              {t.partner_why_title}
            </h2>
            <p className="text-xl text-[#1a1a1a]/80 dark:text-white/80 leading-relaxed">
              {t.partner_why_desc}
            </p>
          </div>
        </div>

        {/* Partnership Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {types.map((type, index) => (
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
              className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-sm border border-[#B91C1C]/10 dark:border-[#B91C1C]/20 flex items-start space-x-6"
            >
              <div className="bg-[#B91C1C]/10 dark:bg-[#B91C1C]/20 p-4 rounded-xl flex-shrink-0">
                <type.icon className="h-8 w-8 text-[#22c55e] dark:text-[#F87171]" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#111111] dark:text-white mb-3">
                  {type.title}
                </h3>
                <p className="text-[#1a1a1a]/70 dark:text-white/70 leading-relaxed">
                  {type.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-[#22c55e] dark:text-white mb-6">
            {t.partner_cta_title}
          </h2>
          <p className="text-xl text-[#1a1a1a]/70 dark:text-white/70 max-w-2xl mx-auto mb-8">
            {t.partner_cta_text}
          </p>
          <Link
            to="/contact?subject=Partnership"
            className="inline-flex items-center bg-[#B91C1C] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#22c55e] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <LinkIcon className="mr-2 h-5 w-5" />
            {t.partner_contact_label}
          </Link>
        </div>
      </div>
    </div>
  );
}
