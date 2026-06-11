import { motion } from "framer-motion";

const purusharthas = [
  {
    sanskrit: "धर्म",
    name: "Dharma",
    meaning: "Duty & Righteousness",
    description: "Developing ethical character, fulfilling personal and social responsibilities, and understanding how actions affect society and the nation.",
  },
  {
    sanskrit: "अर्थ",
    name: "Artha",
    meaning: "Prosperity & Wealth Creation",
    description: "Acquiring practical skills, scientific knowledge, and commercial understanding to create resources and achieve sustainable material growth.",
  },
  {
    sanskrit: "काम",
    name: "Kama",
    meaning: "Healthy Aspirations & Fulfillment",
    description: "Appreciating art, aesthetics, literature, and culture, while maintaining balanced emotional fulfillment and healthy life desires.",
  },
  {
    sanskrit: "मोक्ष",
    name: "Moksha",
    meaning: "Self-Realization & Inner Freedom",
    description: "Cultivating mental clarity, mindfulness, and self-understanding to transcend stress and discover lasting mental freedom.",
  },
];

function Purusharthas() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#08172d] to-[#061224] relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/[0.01] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-yellow-400 tracking-[5px] uppercase text-xs font-semibold mb-4"
          >
            Guiding Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            The Four <span className="text-yellow-400">Purusharthas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-6 text-lg leading-relaxed"
          >
            Our holistic framework integrates the four classical Vedic dimensions of a balanced, successful, and complete human life.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {purusharthas.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#08172d]/40 border border-white/5 rounded-3xl p-8 hover:border-yellow-400/30 hover:bg-[#08172d]/80 duration-300 relative group flex flex-col justify-between"
            >
              {/* Gold Sanskrit character background water-mark */}
              <div className="absolute top-6 right-6 text-white/5 font-bold text-5xl md:text-6xl group-hover:text-yellow-400/5 duration-300 select-none pointer-events-none font-serif">
                {item.sanskrit}
              </div>

              <div>
                <h3 className="text-yellow-400 text-3xl font-extrabold mb-1 font-serif">
                  {item.sanskrit}
                </h3>
                <h4 className="text-white text-2xl font-bold mb-1">
                  {item.name}
                </h4>
                <p className="text-yellow-400/80 text-xs font-semibold tracking-wider uppercase mb-5 border-b border-white/5 pb-3">
                  {item.meaning}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
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

export default Purusharthas;
