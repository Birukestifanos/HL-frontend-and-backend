import { motion } from "framer-motion";
import { Megaphone, PenTool, Share2, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
export function AdvocacyPage() {
  const { t } = useLanguage();
  const campaigns = [
    {
      title: t.advocacy_campaign_1_title,
      desc: t.advocacy_campaign_1_desc,
    },
    {
      title: t.advocacy_campaign_2_title,
      desc: t.advocacy_campaign_2_desc,
    },
    {
      title: t.advocacy_campaign_3_title,
      desc: t.advocacy_campaign_3_desc,
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
            {t.advocacy_title}
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
            {t.advocacy_subtitle}
          </motion.p>
        </div>

        {/* Why Advocacy Matters */}
        <div className="bg-[#B91C1C] text-white rounded-3xl p-12 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pattern-dots" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <Megaphone className="h-32 w-32 text-white/90" />
            </div>
            <div className="md:w-2/3">
              <h2 className="font-serif text-3xl font-bold mb-6">
                {t.advocacy_why_title}
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                {t.advocacy_why_desc}
              </p>
            </div>
          </div>
        </div>

        {/* Active Campaigns */}
        <h2 className="font-serif text-3xl font-bold text-[#111111] dark:text-white mb-10 text-center">
          Active Campaigns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {campaigns.map((campaign, index) => (
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
              <h3 className="font-serif text-xl font-bold text-[#111111] dark:text-white mb-4">
                {campaign.title}
              </h3>
              <p className="text-[#1a1a1a]/70 dark:text-white/70 leading-relaxed">
                {campaign.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Get Involved */}
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-[#111111] dark:text-white mb-10">
            {t.advocacy_get_involved_title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <button className="flex flex-col items-center p-6 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 hover:border-[#B91C1C] dark:hover:border-[#F87171] transition-all group">
              <PenTool className="h-10 w-10 text-[#B91C1C] dark:text-[#F87171] mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[#111111] dark:text-white">
                {t.advocacy_sign_petition}
              </span>
            </button>
            <button className="flex flex-col items-center p-6 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 hover:border-[#B91C1C] dark:hover:border-[#F87171] transition-all group">
              <Share2 className="h-10 w-10 text-[#B91C1C] dark:text-[#F87171] mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[#111111] dark:text-white">
                {t.advocacy_share}
              </span>
            </button>
            <button className="flex flex-col items-center p-6 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 hover:border-[#B91C1C] dark:hover:border-[#F87171] transition-all group">
              <Users className="h-10 w-10 text-[#B91C1C] dark:text-[#F87171] mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[#111111] dark:text-white">
                {t.advocacy_write}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
