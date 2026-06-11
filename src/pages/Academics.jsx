import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

// Component imports
import LearningCycle from "../components/LearningCycle";
import AgeJourney from "../components/AgeJourney";
import GoalDashboard from "../components/GoalDashboard";

// Asset imports
import schoolImage3 from "../assets/school3.jpeg";

function Academics() {
  return (
    <>
      <Helmet>
        <title>Academics & Gurukul Curriculum | Enlightened Bharat</title>
        <meta
          name="description"
          content="Learn about our academic structure, CBSE curriculum integrated with Gurukul values, cyclical learning loop, age developmental journeys and goal systems."
        />
      </Helmet>

      <div className="bg-[#061224] text-white overflow-hidden min-h-screen pt-20">
        
        {/* Hero Section */}
        <section className="relative h-[55vh] flex items-center justify-center">
          <img
            src={schoolImage3}
            alt="Academics at Enlightened Bharat Gurukul"
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
              Academic Framework
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Modern Learning <span className="text-yellow-400">Vedic Soul</span>
            </motion.h1>
          </div>
        </section>

        {/* Curriculum Intro Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-yellow-400 tracking-[4px] uppercase text-xs font-semibold mb-4">
                Curriculum Integration
              </p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Academic Excellence With <span className="text-yellow-400">Practical Wisdom</span>
              </h2>
              <p className="text-gray-300 mt-6 text-base md:text-lg leading-relaxed">
                Our curriculum integrates the CBSE framework with ancient Gurukul values. Rather than relying on simple memorization, we emphasize deep conceptual understanding, query-driven classrooms, and daily mental and physical fitness regimes.
              </p>
              <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
                We design classrooms around dialogue and observation, urging students to construct answers. Conceptual math, structured grammar, coding literacy, and logical expression are prioritized as fundamental building tools.
              </p>
            </div>
            <div className="relative">
              <img
                src={schoolImage3}
                alt="School Curriculum classroom"
                className="w-full h-[320px] md:h-[450px] object-cover rounded-[32px] shadow-2xl border border-white/5"
              />
              <div className="absolute -bottom-4 -right-4 w-40 h-40 border-b-2 border-r-2 border-yellow-400/40 rounded-br-[32px] pointer-events-none -z-10"></div>
            </div>
          </div>
        </section>

        {/* Learning Cycle Component */}
        <LearningCycle />

        {/* Subjects & Skills Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-yellow-400 tracking-[4px] uppercase text-xs font-semibold mb-4">
              Core Disciplines
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Balanced Academic <span className="text-yellow-400">Growth</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-yellow-400/20 duration-300">
              <h3 className="text-yellow-400 text-xl font-bold mb-4">Mathematics</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Establishing strong logic, numerical clarity, and problem-solving mechanisms to build analytical foundations.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-yellow-400/20 duration-300">
              <h3 className="text-yellow-400 text-xl font-bold mb-4">Languages</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Developing vocabulary, reading habits, and clear vocal expression in English, Hindi, and foundational Sanskrit.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-yellow-400/20 duration-300">
              <h3 className="text-yellow-400 text-xl font-bold mb-4">Science & tech</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Fostering active curiosity through laboratory experiments, coding structures, and conceptual physics.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-yellow-400/20 duration-300">
              <h3 className="text-yellow-400 text-xl font-bold mb-4">Life Skills</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Developing personal leadership, group project execution, emotional control, and financial basics.
              </p>
            </div>
          </div>
        </section>

        {/* Age-Based Learning Journey */}
        <AgeJourney />

        {/* Goal Tracking Dashboard */}
        <GoalDashboard />

        {/* Classroom Principles & Smart Learning */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/[0.01] border border-white/5 p-8 rounded-2xl hover:border-yellow-400/20 duration-300">
              <h3 className="text-yellow-400 text-2xl font-bold mb-4">Smart Classrooms</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Equipped with modern visual projectors and online research terminals to enable multi-disciplinary, visual conceptual learning.
              </p>
            </div>
            <div className="bg-white/[0.01] border border-white/5 p-8 rounded-2xl hover:border-yellow-400/20 duration-300">
              <h3 className="text-yellow-400 text-2xl font-bold mb-4">Guru-Student Dialogue</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Replacing standard top-down commands with inquiry, storytelling, and reflection, guiding students to discover answers naturally.
              </p>
            </div>
            <div className="bg-white/[0.01] border border-white/5 p-8 rounded-2xl hover:border-yellow-400/20 duration-300">
              <h3 className="text-yellow-400 text-2xl font-bold mb-4">Holistic Evaluation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Equal emphasis is placed on academic test logs, physical fitness parameters, focus streaking, and emotional accountability.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Academics;