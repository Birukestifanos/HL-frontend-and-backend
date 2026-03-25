import { motion } from "framer-motion";
import { Users, Heart, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export function ImpactPage() {
  const { t } = useLanguage();
  const stats = [
    { value: "10,000+", label: t.home_stats_lives, icon: Users },
    { value: "15", label: t.home_stats_countries, icon: Heart },
    { value: "500+", label: t.home_stats_water, icon: BarChart3 },
  ];
  return (
    <div className="min-h-screen bg-[#F9F9F9] dark:bg-[#0f0f0f] pt-12 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl font-bold text-[#B91C1C] mb-6"
          >
            {t.nav_impact_results}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#1a1a1a]/70 dark:text-white/70 max-w-3xl mx-auto"
          >
            See the impact of your support. Beneficiaries, success stories,
            statistics, and case studies.
          </motion.p>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#1a1a1a] p-10 rounded-2xl text-center shadow-sm border border-[#86efac]/30 dark:border-[#86efac]/20"
            >
              <s.icon className="h-12 w-12 text-[#86efac] mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-[#111111] dark:text-white mb-2">
                {s.value}
              </h3>
              <p className="text-[#1a1a1a]/70 dark:text-white/70">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Success Stories & Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg border border-[#B91C1C]/10 dark:border-[#B91C1C]/20">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Success story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl font-bold text-[#111111] dark:text-white mb-4">
                Success Stories
              </h3>
              <p className="text-[#1a1a1a]/70 dark:text-white/70 mb-6">
                Real stories from the people whose lives have been transformed.
                Read how clean water, education, and healthcare have made a
                difference.
              </p>
              <Link
                to="/news"
                className="text-[#B91C1C] dark:text-[#F87171] font-bold hover:underline"
              >
                Read Stories →
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg border border-[#B91C1C]/10 dark:border-[#B91C1C]/20">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Case study"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl font-bold text-[#111111] dark:text-white mb-4">
                Case Studies
              </h3>
              <p className="text-[#1a1a1a]/70 dark:text-white/70 mb-6">
                In-depth case studies documenting project outcomes,
                methodologies, and lessons learned for donors and partners.
              </p>
              <Link
                to="/transparency"
                className="text-[#B91C1C] dark:text-[#F87171] font-bold hover:underline"
              >
                View Case Studies →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Photos & Videos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-serif text-3xl font-bold text-[#111111] dark:text-white mb-8 text-center">
            Photos & Short Descriptive Videos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            ].map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-md aspect-video"
              >
                <img
                  src={src}
                  alt={`Impact ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-[#1a1a1a]/60 dark:text-white/60 mt-4 text-sm">
            Photos and short videos from the field. Video content can be
            embedded here.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/transparency"
            className="inline-block bg-[#B91C1C] text-white px-10 py-4 rounded-full font-bold hover:bg-[#991B1B] transition-colors"
          >
            See Financial Transparency
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
