import { motion } from "framer-motion";
import { FileText, PieChart, ShieldCheck, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
export function TransparencyPage() {
  const { t } = useLanguage();
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
            {t.transparency_title}
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
            {t.transparency_subtitle}
          </motion.p>
        </div>

        {/* Financial Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-sm border border-[#B91C1C]/10 dark:border-[#B91C1C]/20 transition-colors duration-300"
          >
            <h2 className="font-serif text-2xl font-bold text-[#B91C1C] dark:text-white mb-8 flex items-center">
              <PieChart className="mr-3 h-6 w-6 text-[#B91C1C]" />
              {t.transparency_breakdown_title}
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 font-medium text-[#1a1a1a] dark:text-white">
                  <span>{t.transparency_program_services}</span>
                  <span className="text-[#86efac] dark:text-[#0eca53]">
                    85%
                  </span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-[#86efac] h-4 rounded-full"
                    style={{
                      width: "85%",
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {t.transparency_program_desc}
                </p>
              </div>
              <div>
                <div className="flex justify-between mb-2 font-medium text-[#1a1a1a] dark:text-white">
                  <span>{t.transparency_fundraising}</span>
                  <span className="text-[#B91C1C] dark:text-gray-300">10%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-[#B91C1C] dark:bg-gray-500 h-4 rounded-full"
                    style={{
                      width: "10%",
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {t.transparency_fundraising_desc}
                </p>
              </div>
              <div>
                <div className="flex justify-between mb-2 font-medium text-[#1a1a1a] dark:text-white">
                  <span>{t.transparency_management}</span>
                  <span className="text-gray-400">5%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-gray-400 h-4 rounded-full"
                    style={{
                      width: "5%",
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {t.transparency_management_desc}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="font-serif text-3xl font-bold text-[#B91C1C] dark:text-[#0eca53] mb-6">
              {t.transparency_accountability_title}
            </h2>
            <p className="text-lg text-[#1a1a1a]/80 dark:text-white/80 mb-6 leading-relaxed font-justify">
              {t.transparency_accountability_text_1}
            </p>
            <p className="text-lg text-[#1a1a1a]/80 dark:text-white/80 mb-8 leading-relaxed font-justify">
              {t.transparency_accountability_text_2}
            </p>
            <div className="flex flex-col sm:flex-row gap-4"></div>
          </motion.div>
        </div>

        {/* Impact Stories */}
        <section>
          <h2 className="font-serif text-3xl font-bold text-[#B91C1C] dark:text-white mb-10 text-center">
            {t.transparency_stories_title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "A New School for Kajiado",
                date: "October 2023",
                image:
                  "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
                desc: "See how your donations built a 4-classroom block for 200 students.",
              },
              {
                title: "Clean Water for 500 Families",
                date: "August 2023",
                image:
                  "https://images.unsplash.com/photo-1574482620266-b6568eb9a68d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
                desc: "The completion of the deep bore well project in the rift valley.",
              },
              {
                title: "Medical Camp Success",
                date: "June 2023",
                image:
                  "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
                desc: "Over 1,000 residents received free checkups and medication.",
              },
            ].map((story, index) => (
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
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 h-64">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm text-[#B91C1C] dark:text-[#F87171] font-semibold mb-2">
                  {story.date}
                </p>
                <h3 className="font-serif text-xl font-bold text-[#111111] dark:text-white mb-2 group-hover:text-[#B91C1C] dark:group-hover:text-[#F87171] transition-colors">
                  {story.title}
                </h3>
                <p className="text-[#1a1a1a]/70 dark:text-white/70">
                  {story.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Financial Accountability Documents - Integrated from FinancialAccountabilityPage */}
        <section className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-[#B91C1C] dark:text-white mb-4">
              {t.financial_title}
            </h2>
            <p className="text-xl text-[#1a1a1a]/70 dark:text-white/70 max-w-3xl mx-auto">
              {t.financial_subtitle}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: t.financial_annual_title,
                desc: t.financial_annual_desc,
                year: "2023",
              },
              {
                title: t.financial_audited_title,
                desc: t.financial_audited_desc,
                year: "2023",
              },
              {
                title: t.financial_filing_title,
                desc: t.financial_filing_desc,
                year: "2023",
              },
            ].map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-sm border border-[#B91C1C]/10 dark:border-[#B91C1C]/20 flex flex-col"
              >
                <div className="bg-[#B91C1C]/10 dark:bg-[#B91C1C]/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <FileText className="h-7 w-7 text-[#B91C1C] dark:text-[#F87171]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#111111] dark:text-white mb-2">
                  {doc.title}
                </h3>
                <p className="text-sm text-[#B91C1C] font-bold mb-4">
                  {doc.year}
                </p>
                <p className="text-[#1a1a1a]/70 dark:text-white/70 mb-8 flex-1">
                  {doc.desc}
                </p>
                <button className="w-full border-2 border-[#B91C1C] text-[#B91C1C] dark:text-[#F87171] dark:border-[#F87171] py-3 rounded-xl font-bold hover:bg-[#B91C1C] hover:text-white dark:hover:bg-[#F87171] dark:hover:text-white transition-all flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  {t.financial_download}
                </button>
              </motion.div>
            ))}
          </div>
          {/* Certifications */}
          <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl p-12 text-center shadow-sm border border-[#B91C1C]/10 dark:border-[#B91C1C]/20">
            <h2 className="font-serif text-3xl font-bold text-[#111111] dark:text-white mb-10">
              {t.financial_certifications}
            </h2>
            <div className="flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center">
                <ShieldCheck className="h-16 w-16 text-[#B91C1C] mb-2" />
                <span className="font-bold">Platinum Transparency</span>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck className="h-16 w-16 text-[#B91C1C] mb-2" />
                <span className="font-bold">4-Star Charity</span>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck className="h-16 w-16 text-[#B91C1C] mb-2" />
                <span className="font-bold">Accredited Charity</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
