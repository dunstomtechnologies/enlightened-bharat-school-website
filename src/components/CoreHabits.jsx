import { motion } from "framer-motion";
import { FaCompass, FaLock, FaSync, FaHeart } from "react-icons/fa";

const habits = [
  {
    icon: FaCompass,
    title: "Focus",
    description: "Developing cognitive capacity to focus on a single subject without screen distraction, strengthening intellect and attention spans.",
  },
  {
    icon: FaSync,
    title: "Endurance",
    description: "Cultivating mental toughness (tapas) to commit to study blocks, athletic practices, and duties even when they are repetitive.",
  },
  {
    icon: FaLock,
    title: "Discipline",
    description: "Honoring schedules, self-study plans, and clean eating routines. External control is replaced by internal self-mastery.",
  },
  {
    icon: FaHeart,
    title: "Life Skills",
    description: "Teaching emotional regulation, community service, financial literacy, and clear communication to build successful lives.",
  },
];

function CoreHabits() {
  return (
    <section className="py-24 px-6 bg-[#061224] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-yellow-500/[0.01] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-yellow-400 tracking-[5px] uppercase text-xs font-semibold mb-4"
          >
            Daily Sadhana
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Core Habits We <span className="text-yellow-400">Instill</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-6 text-lg leading-relaxed"
          >
            Academics fail without character. We focus on training core neurological habits that produce successful, values-driven adults.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {habits.map((habit, index) => {
            const Icon = habit.icon;
            return (
              <motion.div
                key={habit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-yellow-400/30 hover:bg-white/[0.04] duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-6 group-hover:bg-yellow-400 group-hover:text-black duration-300">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 duration-300">
                    {habit.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {habit.description}
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

export default CoreHabits;
