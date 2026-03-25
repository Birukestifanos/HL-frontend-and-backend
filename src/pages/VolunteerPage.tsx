import { motion } from "framer-motion";
import { Users, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export function VolunteerPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-[#F9F9F9] dark:bg-[#0f0f0f] pt-12 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl font-bold text-[#B91C1C] mb-6"
          >
            {t.nav_volunteer_internship}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#1a1a1a]/70 dark:text-white/70 max-w-3xl mx-auto"
          >
            Join us in making a difference. Explore voluntary and internship
            opportunities to contribute your skills and time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#1a1a1a] p-10 rounded-2xl shadow-lg border border-[#B91C1C]/10 dark:border-[#B91C1C]/20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#86efac]/20 rounded-full mb-6">
              <Users className="h-8 w-8 text-[#22c55e]" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#111111] dark:text-white mb-4">
              Voluntary Opportunities
            </h2>
            <p className="text-[#1a1a1a]/70 dark:text-white/70 mb-6 leading-relaxed">
              Contribute your time and skills to our programs. Whether in the
              field, office, or remotely, we welcome volunteers who share our
              commitment to community empowerment.
            </p>
            <ul className="space-y-2 text-[#1a1a1a]/80 dark:text-white/80 mb-8">
              <li>• Field program support</li>
              <li>• Education and training</li>
              <li>• Health outreach</li>
              <li>• Water project assistance</li>
            </ul>
            <Link
              to="/contact?subject=Volunteering"
              className="inline-flex items-center text-[#B91C1C] dark:text-[#F87171] font-bold hover:underline"
            >
              Apply to Volunteer <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#1a1a1a] p-10 rounded-2xl shadow-lg border border-[#B91C1C]/10 dark:border-[#B91C1C]/20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B91C1C]/10 dark:bg-[#B91C1C]/20 rounded-full mb-6">
              <Briefcase className="h-8 w-8 text-[#B91C1C] dark:text-[#F87171]" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#111111] dark:text-white mb-4">
              Internship Opportunities
            </h2>
            <p className="text-[#1a1a1a]/70 dark:text-white/70 mb-6 leading-relaxed">
              Gain hands-on experience while supporting our mission. We offer
              internships in program management, communications, finance, and
              field operations.
            </p>
            <ul className="space-y-2 text-[#1a1a1a]/80 dark:text-white/80 mb-8">
              <li>• Program & project management</li>
              <li>• Communications & media</li>
              <li>• Finance & transparency</li>
              <li>• Field operations</li>
            </ul>
            <Link
              to="/contact?subject=Internship"
              className="inline-flex items-center text-[#B91C1C] dark:text-[#F87171] font-bold hover:underline"
            >
              Apply for Internship <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111111] text-white p-10 rounded-2xl text-center"
        >
          <p className="text-lg mb-6">
            Interested? Contact us with your background and area of interest. We
            will get back to you with available opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#86efac] text-[#111111] px-8 py-3 rounded-full font-bold hover:bg-[#22c55e] transition-colors"
          >
            {t.contact_send_btn}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
