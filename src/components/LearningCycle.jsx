import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeadphones, FaEdit, FaFlask, FaShareAlt } from "react-icons/fa";

const steps = [
  {
    id: "aditi",
    title: "Aditi",
    action: "Listen, Read, Observe",
    icon: FaHeadphones,
    description: "The reception stage. Students absorb high-quality concepts and information through deep listening, active reading, and structured observation, laying a strong base of clean knowledge.",
    practices: ["Guided Reading", "Discourse Listening", "Observational Journeys"]
  },
  {
    id: "abhyas",
    title: "Abhyas",
    action: "Practice & Reinforce",
    icon: FaEdit,
    description: "The internalisation stage. Concepts are digested and solidified through retrieval practice, written work, repetitive reviews, and consistent recitation, making learning permanent.",
    practices: ["Active Recall", "Structured Revision", "Formula Writing"]
  },
  {
    id: "prayog",
    title: "Prayog",
    action: "Apply & Experiment",
    icon: FaFlask,
    description: "The execution stage. Students translate theoretical knowledge into practical capabilities by building, experimenting, solving problems, and executing projects.",
    practices: ["Lab Experiments", "Project-Based Learning", "Real-World Problem Solving"]
  },
  {
    id: "prasaar",
    title: "Prasaar",
    action: "Teach & Collaborate",
    icon: FaShareAlt,
    description: "The expansion stage. Learning becomes absolute when students teach concepts to peers, explain theories in forums, and collaborate to solve complex multi-disciplinary challenges.",
    practices: ["Peer Teaching", "Knowledge Sharing", "Group Seminars"]
  }
];

function LearningCycle() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStep = steps[activeIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section id="learning-cycle" className="py-24 px-6 bg-gradient-to-b from-[#08172d] to-[#061224] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/[0.02] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-yellow-400 tracking-[5px] uppercase text-xs font-semibold mb-4"
          >
            Mastery Framework
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            The Four-Step <span className="text-yellow-400">Learning Framework</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-6 text-lg leading-relaxed"
          >
            Vedic learning is not a linear path with a fixed endpoint, but a cyclical journey of constant refinement and expansion.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Interactive Visual Loop */}
          <div className="lg:col-span-6 flex justify-center items-center py-6">
            <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex items-center justify-center">
              {/* Circular SVG Loop with Arrows */}
              <svg className="absolute w-full h-full rotate-[-45deg] pointer-events-none" viewBox="0 0 100 100">
                {/* Dashed outer track representing continuous movement */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="rgba(250, 204, 21, 0.1)"
                  strokeWidth="1.5"
                />
                
                {/* Active rotating indicator segment */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="#facc15"
                  strokeWidth="2.5"
                  strokeDasharray="60 180"
                  animate={{ rotate: activeIndex * 90 }}
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                />
              </svg>

              {/* Loop Nodes */}
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                // Calculate position on circle
                const angle = (index * 90 * Math.PI) / 180 - Math.PI / 2;
                const radius = 38; // percentage-based relative to circle
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);

                const isActive = activeIndex === index;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveIndex(index)}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center border-2 z-20 cursor-pointer shadow-lg transition-all duration-300 ${
                      isActive
                        ? "bg-yellow-400 border-yellow-400 text-black scale-110 shadow-[0_0_20px_rgba(250,204,21,0.4)]"
                        : "bg-[#08172d] border-white/10 text-white hover:border-yellow-400/40 hover:scale-105"
                    }`}
                  >
                    <IconComponent size={20} className="md:text-xl" />
                    <span className="text-[10px] md:text-xs font-bold mt-1 uppercase tracking-wider">{step.title}</span>
                  </button>
                );
              })}

              {/* Center Core Logo/Title */}
              <div className="w-24 h-24 md:w-32 md:h-32 bg-[#061224] border border-white/10 rounded-full flex flex-col items-center justify-center text-center p-3 shadow-inner pointer-events-none">
                <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">Cycle Of</span>
                <span className="text-white text-sm md:text-base font-extrabold uppercase mt-1">Sadhana</span>
                <span className="text-gray-500 text-[9px] mt-1">Non-Linear</span>
              </div>
            </div>
          </div>

          {/* Right Column: Content Detail card */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[32px] p-8 md:p-12 relative shadow-2xl"
              >
                {/* Step Index Badge */}
                <div className="absolute top-8 right-8 text-white/5 font-extrabold text-7xl md:text-8xl leading-none pointer-events-none select-none">
                  0{activeIndex + 1}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400">
                    <ActiveIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-yellow-400 text-[13px] tracking-[4px] uppercase font-semibold">
                      Phase {activeIndex + 1}
                    </h3>
                    <h4 className="text-white text-3xl font-bold mt-1">
                      {activeStep.title}
                    </h4>
                  </div>
                </div>

                <p className="text-yellow-400/90 text-sm font-semibold tracking-wider uppercase mb-6 border-b border-white/5 pb-3">
                  Focus: {activeStep.action}
                </p>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                  {activeStep.description}
                </p>

                <div>
                  <h5 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
                    Key Practical Exercises:
                  </h5>
                  <div className="flex flex-wrap gap-3">
                    {activeStep.practices.map((practice) => (
                      <span
                        key={practice}
                        className="bg-white/5 border border-white/5 px-4 py-2 rounded-xl text-gray-300 text-sm"
                      >
                        {practice}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Indicators */}
            <div className="flex gap-3 mt-6 justify-center lg:justify-start">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-yellow-400 w-8" : "bg-white/20"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningCycle;
