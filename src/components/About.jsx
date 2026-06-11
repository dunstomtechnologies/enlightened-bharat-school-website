import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaLightbulb, FaRocket, FaUserTie, FaStethoscope, 
  FaCog, FaUserShield, FaSearch, FaUserGraduate 
} from "react-icons/fa";

import schoolImage from "../assets/school2.jpeg";

const futureStudents = [
  { icon: FaLightbulb, title: "Innovators" },
  { icon: FaRocket, title: "Founders" },
  { icon: FaUserTie, title: "Entrepreneurs" },
  { icon: FaStethoscope, title: "Doctors" },
  { icon: FaCog, title: "Engineers" },
  { icon: FaUserShield, title: "Civil Servants" },
  { icon: FaSearch, title: "Researchers" },
  { icon: FaUserGraduate, title: "Professors & Leaders" }
];

function About() {
  return (
    <div className="bg-[#061224] text-white overflow-hidden">
      
      {/* Concise Vision Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-yellow-400 tracking-[4px] uppercase text-xs font-semibold mb-4">
            About Enlightened Bharat
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Modern Learning <span className="block text-yellow-400">With Vedic Wisdom</span>
          </h2>
          <p className="text-gray-300 mt-8 text-base md:text-lg leading-relaxed">
            Enlightened Bharat is a modern CBSE Gurukul school focused on skill-based learning and character development. We believe in teaching students how to learn, preparing them to master any domain.
          </p>
          <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed mb-8">
            Our framework balances personal, family, social, and national responsibilities, raising individuals equipped to lead and serve.
          </p>
          <Link
            to="/about"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3.5 rounded-xl duration-300 shadow-lg"
          >
            Read Our Philosophy
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={schoolImage}
            alt="School Vision Campus"
            className="w-full h-[320px] md:h-[480px] object-cover rounded-3xl shadow-2xl border border-white/5"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-yellow-400/40 rounded-br-3xl pointer-events-none"></div>
        </motion.div>
      </section>

      {/* Future Students Section */}
      <section id="future-students" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <p className="text-yellow-400 tracking-[4px] uppercase text-xs font-semibold mb-4">
            Our Graduates
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Developing Future <span className="text-yellow-400">Leaders</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We cultivate baseline habits and skills that empower our students to enter diverse vocational fields as leaders of integrity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {futureStudents.map((student, index) => {
            const Icon = student.icon;
            return (
              <motion.div
                key={student.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:border-yellow-400/35 hover:bg-white/[0.04] duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-4 group-hover:bg-yellow-400 group-hover:text-black duration-300">
                  <Icon size={18} />
                </div>
                <h3 className="text-white text-base font-bold group-hover:text-yellow-400 duration-300">
                  {student.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

export default About;