import { motion } from "framer-motion";
import { BookOpen, Droplets, Stethoscope, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import ourProImage from "../svg/Our_Pro.png";
export function ProgramsPage() {
  const { t } = useLanguage();
  const programs = [
    {
      id: "education",
      title: t.programs_edu_title,
      icon: BookOpen,
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
      description: t.programs_edu_desc,
      impact: t.programs_edu_impact,
      supportMessage: t.programs_support_message,
    },
    {
      id: "water",
      title: t.programs_water_title,
      icon: Droplets,
      image:
        "https://images.unsplash.com/photo-1538300342682-cf57afb97285?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: t.programs_water_desc,
      impact: t.programs_water_impact,
      supportMessage:
        "Together, we are building healthier, happier futures for",
    },
    {
      id: "health",
      title: t.programs_health_title,
      icon: Stethoscope,
      image: ourProImage,
      description: t.programs_health_desc,
      impact: t.programs_health_impact,
      supportMessage:
        "We are proud to stand with our community in the fight against hunger. Every",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9] dark:bg-[#0f0f0f] pt-12 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
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
            {t.programs_title}
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
            {t.programs_subtitle}
          </motion.p>
        </div>

        <div className="space-y-24">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <div className="absolute inset-0 bg-[#B91C1C]/20 group-hover:bg-transparent transition-colors duration-500" />
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-[#B91C1C]/10 dark:bg-[#B91C1C]/20 rounded-full">
                    <program.icon className="h-8 w-8 text-[#05ea59] dark:text-[#86efac]" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-[#B91C1C] dark:text-white">
                    {program.title}
                  </h2>
                </div>

                <p className="text-lg text-[#1a1a1a]/80 dark:text-white/80 mb-8 leading-relaxed">
                  {program.description}
                </p>

                <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border-l-4 border-[#B91C1C] shadow-sm mb-8 transition-colors duration-300">
                  <h3 className="font-bold text-[#B91C1C] dark:text-[#F87171] mb-2 uppercase tracking-wide text-sm">
                    {t.programs_impact_label}
                  </h3>
                  <ul className="space-y-2">
                    {program.impact.split("\n").map((item, idx) => (
                      <li
                        key={idx}
                        className="text-[#1a1a1a]/80 dark:text-white/80 italic list-disc list-inside"
                      >
                        {item.replace(/^[•\s]/, "")}
                      </li>
                    ))}
                  </ul>
                </div>

                {program.supportMessage && (
                  <p className="text-sm text-[#1a1a1a]/60 dark:text-white/60 italic mb-4">
                    {program.supportMessage}
                  </p>
                )}
                <Link
                  to="/donate"
                  className="inline-flex items-center text-[#B91C1C] dark:text-[#F87171] font-bold hover:text-[#991B1B] dark:hover:text-white transition-colors"
                >
                  {t.programs_support_btn}{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Target Areas (Beneficiaries) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl border border-[#86efac]/30 dark:border-[#86efac]/20">
            <h3 className="font-serif text-2xl font-bold text-[#111111] dark:text-white mb-6 text-center">
              Target Areas (Beneficiaries)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Rural Communities",
                  desc: "Rural and underserved communities",
                  icon: "🏡",
                },
                {
                  title: "Children & Youth",
                  desc: "Children and youth",
                  icon: "👶",
                },
                {
                  title: "Women & Mothers",
                  desc: "Women and mothers",
                  icon: "🤱",
                },
                {
                  title: "Families in Crisis",
                  desc: "Families affected by drought/disaster",
                  icon: "❤️",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-[#F9F9F9] dark:bg-[#0f0f0f] hover:shadow-md transition-shadow"
                >
                  <span className="text-4xl mb-3">{item.icon}</span>
                  <h4 className="font-bold text-[#111111] dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#1a1a1a]/70 dark:text-white/70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
