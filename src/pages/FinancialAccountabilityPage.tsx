import { motion } from "framer-motion";
import { FileText, ShieldCheck, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
export function FinancialAccountabilityPage() {
  const { t } = useLanguage();
  const documents = [
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
  ];
  return (
    <div className="min-h-screen bg-[#F9F9F9] dark:bg-[#0f0f0f] pt-12 pb-24 transition-colors duration-300">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="text-center mb-16">
          {" "}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl font-bold text-[#B91C1C] mb-6"
          >
            {" "}
            {t.financial_title}{" "}
          </motion.h1>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#1a1a1a]/70 dark:text-white/70 max-w-3xl mx-auto"
          >
            {" "}
            {t.financial_subtitle}{" "}
          </motion.p>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {" "}
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-sm border border-[#B91C1C]/10 dark:border-[#B91C1C]/20 flex flex-col"
            >
              {" "}
              <div className="bg-[#B91C1C]/10 dark:bg-[#B91C1C]/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                {" "}
                <FileText className="h-7 w-7 text-[#B91C1C] dark:text-[#F87171]" />{" "}
              </div>{" "}
              <h3 className="font-serif text-xl font-bold text-[#111111] dark:text-white mb-2">
                {" "}
                {doc.title}{" "}
              </h3>{" "}
              <p className="text-sm text-[#B91C1C] font-bold mb-4">
                {" "}
                {doc.year}{" "}
              </p>{" "}
              <p className="text-[#1a1a1a]/70 dark:text-white/70 mb-8 flex-1">
                {" "}
                {doc.desc}{" "}
              </p>{" "}
              <button className="w-full border-2 border-[#B91C1C] text-[#B91C1C] dark:text-[#F87171] dark:border-[#F87171] py-3 rounded-xl font-bold hover:bg-[#B91C1C] hover:text-white dark:hover:bg-[#F87171] dark:hover:text-white transition-all flex items-center justify-center">
                {" "}
                <Download className="mr-2 h-5 w-5" />{" "}
                {t.financial_download}{" "}
              </button>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
        {/* Certifications */}{" "}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl p-12 text-center shadow-sm border border-[#B91C1C]/10 dark:border-[#B91C1C]/20">
          {" "}
          <h2 className="font-serif text-3xl font-bold text-[#111111] dark:text-white mb-10">
            {" "}
            {t.financial_certifications}{" "}
          </h2>{" "}
          <div className="flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {" "}
            {/* Placeholders for Charity Navigator, GuideStar, etc. logos */}{" "}
            <div className="flex flex-col items-center">
              {" "}
              <ShieldCheck className="h-16 w-16 text-[#B91C1C] mb-2" />{" "}
              <span className="font-bold">Platinum Transparency</span>{" "}
            </div>{" "}
            <div className="flex flex-col items-center">
              {" "}
              <ShieldCheck className="h-16 w-16 text-[#B91C1C] mb-2" />{" "}
              <span className="font-bold">4-Star Charity</span>{" "}
            </div>{" "}
            <div className="flex flex-col items-center">
              {" "}
              <ShieldCheck className="h-16 w-16 text-[#B91C1C] mb-2" />{" "}
              <span className="font-bold">Accredited Charity</span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
