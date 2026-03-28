import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
export function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-[#F9F9F9] dark:bg-[#0f0f0f] pt-12 pb-24 transition-colors duration-300">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
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
          {t.about_title}
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
          {t.about_subtitle}
        </motion.p>
      </div>

      {/* Founder Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#B91C1C]/10 dark:bg-[#B91C1C]/20 rounded-2xl" />
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1288&q=80"
              alt="Founder Portrait"
              className="relative rounded-2xl shadow-lg w-full object-cover h-[600px]"
            />
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
            <h2 className="font-serif text-3xl font-bold text-[#15803d] dark:text-white mb-6">
              {t.about_spark_title}
            </h2>
            <div className="space-y-6 text-lg text-[#1a1a1a]/80 dark:text-white/80 leading-relaxed">
              <p>{t.about_spark_text_1}</p>
              <p>{t.about_spark_text_2}</p>
              <p>{t.about_spark_text_3}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-[#111111] dark:bg-[#050505] text-[#86efac] white py-24 mb-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">
              {t.about_mission_title}
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t.about_mission_subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: t.about_value_integrity,
                desc: t.about_value_integrity_desc,
              },
              {
                title: t.about_value_empowerment,
                desc: t.about_value_empowerment_desc,
              },
              {
                title: t.about_value_compassion,
                desc: t.about_value_compassion_desc,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white/5 p-8 rounded-xl border border-white/10"
              >
                <h3 className="font-serif text-2xl font-bold text-[#B91C1C] mb-4">
                  {value.title}
                </h3>
                {value.desc.includes("•") ? (
                  <ul className="text-white/80 leading-relaxed list-disc list-inside space-y-1">
                    {value.desc.split("\n").map((line, i) => (
                      <li key={i}>{line.replace("• ", "")}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white/80 leading-relaxed">{value.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Board Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-[#111111] dark:text-white mb-4">
            Leadership & Board Members
          </h2>
          <p className="text-xl text-[#1a1a1a]/70 dark:text-white/70 max-w-2xl mx-auto">
            {t.about_team_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Sarah Mitchell",
              role: "Founder & CEO",
              image:
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "David Chen",
              role: "Director of Programs",
              image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Elena Rodriguez",
              role: "Head of Operations",
              image:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "James Okonjo",
              role: "Field Coordinator",
              image:
                "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
          ].map((member, index) => (
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
              className="text-center group"
            >
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-[#B91C1C] rounded-full transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-48 h-48 rounded-full object-cover border-4 border-[#F9F9F9] dark:border-[#1a1a1a] shadow-md transition-colors duration-300"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111111] dark:text-white">
                {member.name}
              </h3>
              <p className="text-[#B91C1C] dark:text-[#F87171] font-medium">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Legal Registration */}
      <section className="bg-[#F9F9F9] dark:bg-[#050505] text-white py-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl font-bold mb-4 text-[#B91C1C]">
            Legal Registration & Certificate
          </h1>
          <br />
          <p className="text-black max-w-2xl mx-auto mb-6">
            Hibret Lebego is a legally registered NGO. Our registration
            certificate and compliance documentation are available for
            verification. Visit our Legal & Governance page for details.
          </p>
          <Link
            to="/advocacy"
            className="inline-block bg-[#86efac] text-[#111111] px-8 py-3 rounded-full font-bold hover:bg-[#22c55e] transition-colors"
          >
            View Legal Info
          </Link>
        </div>
      </section>
    </div>
  );
}
