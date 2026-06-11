import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const founders = [
  {
    name: "Durgesh Nandan",
    role: "Co-Founder & Academic Director",
    credentials: "IIT Kharagpur • Ex-Microsoft • Ex-Amazon",
    bio: "Dr. Sharma spent 15+ years leading software engineering divisions at Microsoft and Amazon in Seattle. Believing that modern technical capabilities must be built on top of deep concentration and character, he returned to India to pioneer a Gurukul system that prepares students for global challenges.",
    quote: "Education should not just load the mind with data, but build the cognitive endurance to process it ethically.",
    email: "rajesh.sharma@enlightenedbharat.com"
  },
  {
    name: "Tushar Nene",
    role: "Co-Founder & Managing Trustee",
    credentials: "IIT Delhi • Ex-Ford • Systems Director",
    bio: "Anuj brings extensive experience in large-scale operations and engineering leadership from Ford and global technology firms. At Enlightened Bharat, he focuses on integrating operational discipline, structural excellence, and Vedic values into our daily tracking systems.",
    quote: "A child who has mastered the habit of focused attention can master any skill or profession in the modern world.",
    email: "anuj.keshav@enlightenedbharat.com"
  }
];

function Founders() {
  return (
    <section id="founders" className="py-24 px-6 bg-gradient-to-b from-[#061224] to-[#08172d] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-yellow-400 tracking-[5px] uppercase text-xs font-semibold mb-4"
          >
            Leadership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Meet Our <span className="text-yellow-400">Founders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-6 text-lg leading-relaxed"
          >
            Combining world-class industrial experience with a deep devotion to restoring the soul of Indian education.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8 md:p-12 hover:border-yellow-400/20 hover:bg-white/[0.04] duration-300 relative group flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-white text-2xl md:text-3xl font-bold">{founder.name}</h3>
                    <p className="text-yellow-400 text-sm font-semibold mt-1">{founder.role}</p>
                  </div>
                </div>

                {/* Credentials list */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {founder.credentials.split(" • ").map((cred, idx) => (
                    <span
                      key={idx}
                      className="bg-yellow-500/10 border border-yellow-400/20 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-yellow-400 uppercase"
                    >
                      {cred}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                  {founder.bio}
                </p>

                {/* Blockquote */}
                <div className="border-l-2 border-yellow-400/40 pl-4 py-1 mb-8 italic text-gray-400 text-sm">
                  "{founder.quote}"
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 mt-auto flex items-center justify-between">
                <span className="text-gray-500 text-xs tracking-wider uppercase font-semibold">Educational Mission</span>
                <a
                  href={`mailto:${founder.email}`}
                  className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors text-xs font-semibold"
                >
                  <FaEnvelope size={12} />
                  <span>Connect</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Founders;
