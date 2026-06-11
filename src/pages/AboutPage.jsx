import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen, FaUserCheck, FaGlobe } from "react-icons/fa";

// Component imports
import Methodology from "../components/Methodology";
import CoreHabits from "../components/CoreHabits";
import Purusharthas from "../components/Purusharthas";
import JourneyTimeline from "../components/JourneyTimeline";
import Founders from "../components/Founders";

// Asset imports
import schoolImage from "../assets/school2.jpeg";
import visionImage from "../assets/school1.jpeg";

const visionPillars = [
  {
    icon: FaBookOpen,
    title: "Learning How to Learn",
    description: "Prioritizing cognitive tools and learning agility over rote memorization. Once a student masters learning, they can excel in any field."
  },
  {
    icon: FaGraduationCap,
    title: "Vedic Wisdom",
    description: "Rooting students in timeless spiritual, ethical, and conceptual foundations that foster deep wisdom and self-realization."
  },
  {
    icon: FaUserCheck,
    title: "Character & Discipline",
    description: "Developing consistent execution, stamina (tapas), and internal moral responsibility (Dharma) to guide all future achievements."
  },
  {
    icon: FaGlobe,
    title: "Four Responsibilities",
    description: "Training students to balance duties and responsibilities towards Self, Family, Society, and the Nation."
  }
];

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Philosophy & Vision | Enlightened Bharat Gurukul</title>
        <meta
          name="description"
          content="Discover our educational philosophy, Vedic wisdom, teaching methodologies, founders and values at Enlightened Bharat."
        />
      </Helmet>

      <div className="bg-[#061224] text-white overflow-hidden min-h-screen pt-20">
        
        {/* Page Hero Header */}
        <section className="relative h-[55vh] flex items-center justify-center">
          <img
            src={schoolImage}
            alt="Enlightened Bharat Campus"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
          
          <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-yellow-400 tracking-[5px] uppercase text-xs font-semibold mb-4"
            >
              Our Foundation
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Philosophy & <span className="text-yellow-400">Values</span>
            </motion.h1>
          </div>
        </section>

        {/* Vision Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-yellow-400 tracking-[4px] uppercase text-xs font-semibold mb-4">
                Core Vision
              </p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Skill-Based Education Rooted In <span className="text-yellow-400">Vedic Wisdom</span>
              </h2>
              <p className="text-gray-300 mt-6 text-base md:text-lg leading-relaxed">
                Enlightened Bharat envisions a world where academic excellence is not an end in itself, but the natural outcome of a disciplined, value-driven character. We aim to nurture students who are intellectually active, physically robust, and morally steadfast.
              </p>
              <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
                By integrating CBES curriculum structures with ancient Gurukul habits, we help children establish four levels of balance: responsibility to self (health and mindset), family (harmony and care), society (service and values), and the nation (righteous citizenship).
              </p>
            </div>
            <div className="relative">
              <img
                src={visionImage}
                alt="Student learning"
                className="w-full h-[320px] md:h-[450px] object-cover rounded-[32px] shadow-2xl border border-white/5"
              />
              {/* Gold border decorative box */}
              <div className="absolute -bottom-4 -right-4 w-40 h-40 border-b-2 border-r-2 border-yellow-400/40 rounded-br-[32px] pointer-events-none -z-10"></div>
            </div>
          </div>

          {/* Vision Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white/[0.01] border border-white/5 p-8 rounded-2xl hover:border-yellow-400/20 duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-6">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{pillar.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Teaching Methodology Section */}
        <Methodology />

        {/* Core Habits Section */}
        <CoreHabits />

        {/* Four Purusharthas */}
        <Purusharthas />

        {/* Journey Timeline */}
        <JourneyTimeline />

        {/* Founders Section */}
        <Founders />

      </div>
    </>
  );
}

export default AboutPage;