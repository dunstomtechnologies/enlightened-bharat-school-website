import { motion } from "framer-motion";
import { FaBullseye, FaHourglassHalf, FaCalendarCheck, FaGraduationCap } from "react-icons/fa";

const pillars = [
  {
    icon: FaBullseye,
    title: "Focused Attention",
    subtitle: "Ability to Remain Engaged",
    description: "Training students to filter out distractions and focus deeply on a single concept, task, or inquiry, fostering higher cognitive development.",
  },
  {
    icon: FaHourglassHalf,
    title: "Endurance",
    subtitle: "Steady Under Challenge",
    description: "Developing grit and resilience. The capacity to stay committed to learning processes even when they become repetitive, challenging, or rigorous.",
  },
  {
    icon: FaCalendarCheck,
    title: "Discipline",
    subtitle: "Consistent Execution",
    description: "Building structured habits of action. The internal drive to honor commitments, schedules, and daily routines without requiring external push.",
  },
  {
    icon: FaGraduationCap,
    title: "Deep Practice",
    subtitle: "Refined Skill Mastery",
    description: "Encouraging a cycle of execution, self-analysis, feedback, and refinement. True mastery is achieved through persistent, deliberate effort.",
  },
];

function Methodology() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#061224] to-[#08172d] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-yellow-400 tracking-[5px] uppercase text-xs font-semibold mb-4"
          >
            Core Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Our Teaching <span className="text-yellow-400">Methodology</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-6 text-lg leading-relaxed"
          >
            We move away from passive listening to develop active capabilities that prepare students for a lifetime of self-directed achievement.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-yellow-400/40 hover:shadow-[0_10px_30px_rgba(250,204,21,0.05)] duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-8 group-hover:bg-yellow-400 group-hover:text-black duration-300 shadow-md">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-yellow-400/80 text-xs font-semibold tracking-wider uppercase mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Methodology;
