import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const benefits = [
  {
    title: "Character Building",
    description: "Prioritizing integrity, moral courage, and duty to ensure students act responsibly."
  },
  {
    title: "Academic Excellence",
    description: "Developing deep conceptual mastery of the CBSE curriculum with zero rote learning."
  },
  {
    title: "Leadership & Agency",
    description: "Training students to guide peer groups, initiate projects, and speak confidently."
  },
  {
    title: "Structured Discipline",
    description: "Developing early internal self-regulation and habits that keep students on track."
  },
  {
    title: "High Attention Span",
    description: "Concentration exercises that reverse screen distraction and improve deep focus."
  },
  {
    title: "Timeless Values",
    description: "Rooted in respect, responsibility, and service to self, family, and the nation."
  },
  {
    title: "Future Readiness",
    description: "Equipping students with scientific skills, digital literacy, and analytical capacities."
  }
];

function ParentTrust() {
  return (
    <div id="parent-trust" className="mt-28 border-t border-white/5 pt-28">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-yellow-400 tracking-[5px] uppercase text-xs font-semibold mb-4"
        >
          Parent Trust
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white leading-tight"
        >
          Why Parents Choose <span className="text-yellow-400">Enlightened Bharat</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex gap-4 bg-white/[0.01] border border-white/5 p-6 rounded-2xl hover:border-yellow-400/20 duration-300"
          >
            <div className="text-yellow-400 mt-1 shrink-0">
              <FaCheckCircle size={18} />
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-2">{benefit.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ParentTrust;
