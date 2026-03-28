import { motion } from "framer-motion";
import { BookOpen, Droplets, Heart, GraduationCap } from "lucide-react";

const pastProjects = [
  {
    region: "Oromia",
    projects: "15 school builds, 8 water projects",
    description:
      "Focused on education infrastructure and clean water access for rural communities.",
    icon: BookOpen,
    color: "bg-blue-500",
  },
  {
    region: "Tigray",
    projects: "Emergency relief, water trucking",
    description:
      "Provided urgent humanitarian aid during conflict and displacement crises.",
    icon: Droplets,
    color: "bg-red-500",
  },
  {
    region: "SNNPR",
    projects: "Health clinics, maternal care",
    description:
      "Established healthcare facilities and maternal health programs.",
    icon: Heart,
    color: "bg-pink-500",
  },
  {
    region: "Amhara",
    projects: "Education & water initiatives",
    description:
      "Implemented literacy programs and sustainable water solutions.",
    icon: GraduationCap,
    color: "bg-green-500",
  },
];

export function PastProjectsPage() {
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
          className="font-serif text-5xl font-bold text-[#B91C1C] dark:text-[#F87171] mb-6"
        >
          Past Projects
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
          A look at our completed projects across Ethiopia, making lasting
          impact in communities in need.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastProjects.map((project, index) => {
            const Icon = project.icon;
            return (
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
                className="group bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800"
              >
                {/* Colored Header */}
                <div className={`${project.color} p-6 flex items-center gap-4`}>
                  <div className="p-3 bg-white/20 rounded-xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {project.region}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#86efac]/20 text-[#15803d] dark:text-[#86efac] text-sm font-medium">
                      {project.projects}
                    </span>
                  </div>
                  <p className="text-[#1a1a1a]/80 dark:text-white/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
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
          className="bg-gradient-to-r from-[#111111] to-[#1a1a1a] dark:from-[#050505] dark:to-[#111111] rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#86efac]">
                4
              </div>
              <div className="text-white/70 text-lg">Regions Covered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#86efac]">
                15+
              </div>
              <div className="text-white/70 text-lg">Schools Built</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#86efac]">
                8+
              </div>
              <div className="text-white/70 text-lg">Water Projects</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
