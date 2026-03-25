import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileCheck, Shield, BookOpen, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function LegalPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-[#F9F9F9] dark:bg-[#0f0f0f] pt-12 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl font-bold text-[#15803d] mb-6"
          >
            {t.nav_legal_governance}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#B91C1C]/70 dark:text-white/70 max-w-3xl mx-auto"
          >
            Legal information, governance structure, and organizational
            policies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-sm border border-[#B91C1C]/10 dark:border-[#B91C1C]/20"
          >
            <FileCheck className="h-12 w-12 text-[#86efac] mb-6" />
            <h3 className="font-serif text-xl font-bold text-[#111111] dark:text-white mb-3">
              NGO Certificate
            </h3>
            <p className="text-[#1a1a1a]/70 dark:text-white/70 mb-4">
              Hibret Lebego is a legally registered NGO. Our registration
              certificate and legal status are available for verification.
            </p>
            <button className="text-[#B91C1C] dark:text-[#F87171] font-semibold flex items-center hover:underline">
              <Download className="h-4 w-4 mr-2" /> View Certificate
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-sm border border-[#B91C1C]/10 dark:border-[#B91C1C]/20"
          >
            <Shield className="h-12 w-12 text-[#86efac] mb-6" />
            <h3 className="font-serif text-xl font-bold text-[#111111] dark:text-white mb-3">
              Governance Structure
            </h3>
            <p className="text-[#1a1a1a]/70 dark:text-white/70 mb-4">
              Our governance includes a Board of Directors, executive
              leadership, and transparent decision-making processes.
            </p>
            <button className="text-[#B91C1C] dark:text-[#F87171] font-semibold flex items-center hover:underline">
              <Download className="h-4 w-4 mr-2" /> View Structure
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-sm border border-[#B91C1C]/10 dark:border-[#B91C1C]/20"
          >
            <BookOpen className="h-12 w-12 text-[#86efac] mb-6" />
            <h3 className="font-serif text-xl font-bold text-[#111111] dark:text-white mb-3">
              Policies
            </h3>
            <p className="text-[#1a1a1a]/70 dark:text-white/70 mb-4">
              Child safeguarding, PSEA, financial accountability, and other
              organizational policies are documented and enforced.
            </p>
            <Link
              to="/safeguarding"
              className="text-[#B91C1C] dark:text-[#F87171] font-semibold hover:underline"
            >
              View Policies
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#1a1a1a] p-10 rounded-2xl border border-[#B91C1C]/10 dark:border-[#B91C1C]/20"
        >
          <h2 className="font-serif text-2xl font-bold text-[#B91C1C] dark:text-white mb-6">
            Legal Registration Info
          </h2>
          <div className="space-y-4 text-[#1a1a1a]/80 dark:text-white/80">
            <p>
              Hibret Lebego is registered as a non-governmental organization in
              accordance with applicable laws. For verification of our legal
              status or to request official documentation, please contact us.
            </p>
            <p>
              All financial reports and audit representations (past, current,
              and future) are available on our Financial Accountability page.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
