import { motion } from "framer-motion";
import { Shield, Lock, FileText, AlertCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
export function SafeguardingPage() {
  const { t } = useLanguage();
  const policies = [
    {
      icon: Shield,
      title: t.safeguarding_child_title,
      desc: t.safeguarding_child_desc,
    },
    {
      icon: Lock,
      title: t.safeguarding_psea_title,
      desc: t.safeguarding_psea_desc,
    },
    {
      icon: AlertCircle,
      title: t.safeguarding_reporting_title,
      desc: t.safeguarding_reporting_desc,
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
            {t.safeguarding_title}
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
            {t.safeguarding_subtitle}
          </motion.p>
        </div>

        {/* Commitment Statement */}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl p-12 shadow-sm border-l-8 border-[#B91C1C] mb-20">
          <h2 className="font-serif text-3xl font-bold text-[#111111] dark:text-white mb-6">
            {t.safeguarding_commitment_title}
          </h2>
          <p className="text-xl text-[#1a1a1a]/80 dark:text-white/80 leading-relaxed">
            {t.safeguarding_commitment_desc}
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {policies.map((policy, index) => (
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
              className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-sm border border-[#B91C1C]/10 dark:border-[#B91C1C]/20"
            >
              <div className="bg-[#B91C1C]/10 dark:bg-[#B91C1C]/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <policy.icon className="h-7 w-7 text-[#B91C1C] dark:text-[#F87171]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111111] dark:text-white mb-4">
                {policy.title}
              </h3>
              <p className="text-[#1a1a1a]/70 dark:text-white/70 leading-relaxed">
                {policy.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Downloads */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="inline-flex items-center justify-center bg-[#B91C1C] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#991B1B] transition-colors shadow-lg">
            <FileText className="mr-2 h-5 w-5" />
            {t.safeguarding_download_btn}
          </button>
        </div>
      </div>
    </div>
  );
}
