import { motion } from "framer-motion";
import { FaBaby, FaChild, FaUserAstronaut, FaUserTie } from "react-icons/fa";

const stages = [
  {
    age: "0–5 Years",
    title: "Early Childhood",
    icon: FaBaby,
    focus: "Curiosity & Observation",
    goals: "Sensory awareness, basic habits formation, speech, coordination, and warm social play.",
    outcomes: "Active imagination, emotional security, natural curiosity, and basic physical stability.",
  },
  {
    age: "6–11 Years",
    title: "Childhood",
    icon: FaChild,
    focus: "Foundational Tools",
    goals: "Language grammar, arithmetic logic, reading habits, discipline, and memorization capability.",
    outcomes: "Conceptual clarity in core subjects, systematic study habits, and strong self-regulation.",
  },
  {
    age: "12–16 Years",
    title: "Early Adolescence",
    icon: FaUserAstronaut,
    focus: "Independent Inquiry",
    goals: "Advanced subjects, logical inquiry, moral reasoning, skill exploration, and project execution.",
    outcomes: "Critical thinking ability, sense of personal responsibility, and initial focus area discovery.",
  },
  {
    age: "17+ Years",
    title: "Young Adults",
    icon: FaUserTie,
    focus: "Professional Mastery",
    goals: "Specialised career preparation, societal contribution study, leadership execution, and duty awareness.",
    outcomes: "Ethical decision-making, professional capabilities, and a drive to serve family, society, and nation.",
  },
];

function AgeJourney() {
  return (
    <section id="age-journey" className="py-24 px-6 bg-[#061224] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-yellow-500/[0.01] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-yellow-400 tracking-[5px] uppercase text-xs font-semibold mb-4"
          >
            Developmental Path
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Age-Based <span className="text-yellow-400">Learning Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-6 text-lg leading-relaxed"
          >
            Education must align with the natural cognitive and biological maturation of a student. We tailor focus areas to fit each developmental stage.
          </motion.p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-white/5 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-[2px] md:before:bg-white/5 md:before:-translate-x-1/2">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={stage.age} className="relative mb-20 last:mb-0">
                {/* Timeline Center Dot (Desktop) or Left Dot (Mobile) */}
                <div className="absolute left-[-9px] md:left-1/2 top-4 w-[18px] h-[18px] rounded-full bg-[#061224] border-4 border-yellow-400 md:-translate-x-1/2 z-20 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>

                {/* Content Block */}
                <div className={`flex flex-col md:flex-row items-stretch md:justify-between w-full pl-8 md:pl-0 ${isEven ? "" : "md:flex-row-reverse"}`}>
                  {/* Card Section */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
                    className="w-full md:w-[45%] bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-yellow-400/20 hover:bg-white/[0.04] duration-300 shadow-xl"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-yellow-400 font-extrabold text-sm tracking-wider bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-400/20 uppercase">
                        {stage.age}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-yellow-400">
                        <Icon size={18} />
                      </div>
                    </div>

                    <h3 className="text-white text-2xl font-bold mb-4">{stage.title}</h3>
                    
                    <div className="space-y-4 text-sm leading-relaxed">
                      <div>
                        <span className="text-yellow-400/90 font-bold block mb-1">Learning Focus</span>
                        <p className="text-gray-200">{stage.focus}</p>
                      </div>
                      <div>
                        <span className="text-yellow-400/90 font-bold block mb-1">Development Goals</span>
                        <p className="text-gray-400">{stage.goals}</p>
                      </div>
                      <div>
                        <span className="text-yellow-400/90 font-bold block mb-1">Target Outcomes</span>
                        <p className="text-gray-400">{stage.outcomes}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Empty Spacer Column for layout on Desktop */}
                  <div className="hidden md:block md:w-[45%]"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AgeJourney;
