import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Globe, Droplets, Quote } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
export function HomePage() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="src/assets/HomePage-Pic.png"
            alt="HomePage"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#B91C1C]/30 to-[#15803d]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            {t.home_hero_title_1}
            <br />
            <span className="text-[#B91C1C]">{t.home_hero_title_2}</span>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-light text-white/90"
          >
            {t.home_hero_subtitle}
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/donate"
              className="bg-[#B91C1C] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#15803d] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t.nav_donate}
            </Link>
            <Link
              to="/programs"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#111111] transition-all"
            >
              {t.home_hero_programs_btn}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-[#F9F9F9] dark:bg-[#0f0f0f] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="p-8 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-sm border border-[#B91C1C]/10 dark:border-[#B91C1C]/20 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B91C1C]/10 dark:bg-[#B91C1C]/20 rounded-full mb-6">
                <Users className="h-8 w-8 text-[#B91C1C] dark:text-[#F87171]" />
              </div>
              <h3 className="text-4xl font-bold text-[#111111] dark:text-white mb-2 font-serif">
                10,000+
              </h3>
              <p className="text-[#1a1a1a]/70 dark:text-white/70 text-lg">
                {t.home_stats_lives}
              </p>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="p-8 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-sm border border-[#B91C1C]/10 dark:border-[#B91C1C]/20 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#111111]/10 dark:bg-white/10 rounded-full mb-6">
                <Globe className="h-8 w-8 text-[#111111] dark:text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#111111] dark:text-white mb-2 font-serif">
                15
              </h3>
              <p className="text-[#1a1a1a]/70 dark:text-white/70 text-lg">
                {t.home_stats_countries}
              </p>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="p-8 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-sm border border-[#B91C1C]/10 dark:border-[#B91C1C]/20 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B91C1C]/10 dark:bg-[#B91C1C]/20 rounded-full mb-6">
                <Droplets className="h-8 w-8 text-[#B91C1C] dark:text-[#F87171]" />
              </div>
              <h3 className="text-4xl font-bold text-[#111111] dark:text-white mb-2 font-serif">
                500+
              </h3>
              <p className="text-[#1a1a1a]/70 dark:text-white/70 text-lg">
                {t.home_stats_water}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Clear structure */}
      <section className="py-24 bg-[#111111] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heart className="h-12 w-12 text-[#B91C1C] mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-[#86efac] font-bold mb-6 leading-tight">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-white">{t.home_mission_quote}</p>
            <p className="text-lg text-white/70">{t.home_mission_text}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/5 p-6 rounded-xl border border-[#86efac]/30">
              <h3 className="font-semibold text-[#86efac] mb-2">Who We Are</h3>
              <p className="text-white/80">{t.home_who_we_are}</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-[#86efac]/30">
              <h3 className="font-semibold text-[#86efac] mb-2">
                What Problems We Solve
              </h3>
              <p className="text-white/80">{t.home_what_we_solve}</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-[#86efac]/30">
              <h3 className="font-semibold text-[#86efac] mb-2">Who We Help</h3>
              <p className="text-white/80">{t.home_who_we_help}</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-[#86efac]/30">
              <h3 className="font-semibold text-[#86efac] mb-2">
                Our Long-Term Vision
              </h3>
              <p className="text-white/80">{t.home_our_vision}</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/about"
              className="inline-flex items-center text-[#86efac] font-bold text-lg hover:text-white transition-colors"
            >
              {t.home_read_story} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Programs Preview */}
      <section className="py-24 bg-[#F9F9F9] dark:bg-[#0f0f0f] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-[#111111] dark:text-white mb-4">
              {t.home_programs_title}
            </h2>
            <p className="text-xl text-[#1a1a1a]/70 dark:text-white/70 max-w-2xl mx-auto">
              {t.home_programs_subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t.home_program_edu_title,
                image:
                  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80",
                desc: t.home_program_edu_desc,
              },
              {
                title: t.home_program_water_title,
                image:
                  "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                desc: t.home_program_water_desc,
              },
              {
                title: t.home_program_health_title,
                image:
                  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                desc: t.home_program_health_desc,
              },
            ].map((program, index) => (
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
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-[#B91C1C] dark:text-white mb-3">
                    {program.title}
                  </h3>
                  <p className="text-[#1a1a1a]/70 dark:text-white/70 mb-6">
                    {program.desc}
                  </p>
                  <Link
                    to="/programs"
                    className="text-[#B91C1C] dark:text-[#F87171] font-semibold hover:text-[#991B1B] dark:hover:text-white transition-colors inline-flex items-center"
                  >
                    {t.home_learn_more} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-[#ffffff] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-[#B91C1C] dark:text-white mb-4">
              {t.home_testimonials_title}
            </h2>
            <p className="text-xl text-[#111111]/70 dark:text-white/70 max-w-2xl mx-auto">
              {t.home_testimonials_subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Before the new well, I walked 5 miles every day for water. Now, I have time to go to school and dream of becoming a teacher.",
                author: "Amani, 12",
                location: "Kenya",
                image:
                  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                quote:
                  "The mobile clinic saved my baby's life. The doctors treated his malaria just in time. I am forever grateful to the Foundation.",
                author: "Sarah",
                location: "Uganda",
                image:
                  "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                quote:
                  "Education is the key to our future. The new classroom block means we can learn even during the rainy season.",
                author: "James, Headmaster",
                location: "Tanzania",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
            ].map((testimonial, index) => (
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
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-white dark:bg-[#2a2a2a] p-8 rounded-2xl border border-[#15803d] dark:border-[#B91C1C]/20 relative"
              >
                <Quote className="h-10 w-10 text-[#B91C1C]/20 dark:text-[#B91C1C]/40 absolute top-6 left-6" />
                <p className="text-[#1a1a1a]/80 dark:text-white/80 text-lg italic mb-6 relative z-10 pt-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />

                  <div>
                    <h4 className="font-bold text-[#111111] dark:text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-[#B91C1C] dark:text-[#F87171]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#d9fae5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] mb-6">
            {t.home_cta_title}
          </h2>
          <p className="text-xl text-[#111111] mb-10 max-w-2xl mx-auto">
            {t.home_cta_text}
          </p>
          <Link
            to="/donate"
            className="inline-block bg-white text-[#B91C1C] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#B91C1C] hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t.home_give_today}
          </Link>
        </div>
      </section>
    </div>
  );
}
