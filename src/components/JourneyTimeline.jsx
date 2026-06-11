import { motion } from "framer-motion";

const journeyStages = [
  {
    stage: "Stage 1",
    title: "Understand Identity",
    description: "Students develop a strong organic connection to their identity, roots, culture, and heritage, forming a secure baseline of self-awareness.",
  },
  {
    stage: "Stage 2",
    title: "Learn Dharma",
    description: "Focus shifts to understanding ethical duties, personal honor, social harmony, and responsibilities towards self, family, and nation.",
  },
  {
    stage: "Stage 3",
    title: "Build Fundamental Skills",
    description: "Developing cognitive tools: advanced languages, conceptual mathematics, observation drills, and basic study stamina.",
  },
  {
    stage: "Stage 4",
    title: "Acquire Knowledge",
    description: "Engaging in core academic disciplines—Physics, Chemistry, History, Economics—to build a multi-dimensional mental database.",
  },
  {
    stage: "Stage 5",
    title: "Develop Working Skills",
    description: "Acquiring practical professional tools: computer science, design systems, administrative logic, public speaking, and project leadership.",
  },
  {
    stage: "Stage 6",
    title: "Serve Society",
    description: "Translating skills and wisdom into societal impact, entering higher vocational sectors as leaders and responsible citizens.",
  },
];

function JourneyTimeline() {
  return (
    <section className="py-24 px-6 bg-[#061224] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/[0.01] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-yellow-400 tracking-[5px] uppercase text-xs font-semibold mb-4"
          >
            The Pathway
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Our Educational <span className="text-yellow-400">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed"
          >
            A progressive roadmap designed to transition students from raw curiosity into disciplined social contributors.
          </motion.p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-white/5 pl-8 md:pl-12 space-y-12">
          {journeyStages.map((item) => (
            <motion.div
              key={item.stage}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-41px] md:left-[-57px] top-1.5 w-6 h-6 rounded-full bg-[#061224] border-2 border-white/10 group-hover:border-yellow-400 duration-300 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-yellow-400 duration-300"></div>
              </div>

              {/* Card */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-yellow-400/20 hover:bg-white/[0.04] duration-300 shadow-xl">
                <span className="text-yellow-400 font-extrabold text-xs tracking-wider uppercase bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-400/20">
                  {item.stage}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-bold mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JourneyTimeline;
