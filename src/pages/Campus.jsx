import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaChalkboardTeacher,
  FaBookReader,
  FaFutbol,
  FaTheaterMasks,
  FaShieldAlt,
  FaUserTie,
  FaStar,
  FaHandsHelping,
  FaLightbulb,
  FaRocket,
  FaHeartbeat,
} from "react-icons/fa";

// Asset imports — reusing existing project images
import schoolImage1 from "../assets/school1.jpeg";
import schoolImage2 from "../assets/school2.jpeg";
import schoolImage3 from "../assets/school3.jpeg";
import schoolImage4 from "../assets/school4.jpeg";
import classroomImage from "../assets/classroom.jpeg";
import classroomImage2 from "../assets/classroom2.jpeg";
import libraryImage from "../assets/lib1.jpeg";
import groundImage from "../assets/ground1.jpeg";
import parkImage from "../assets/park1.jpeg";
import openAreaImage from "../assets/openarea1.jpeg";


const galleryImages = [
  { src: classroomImage, title: "Smart Classrooms" },
  { src: libraryImage, title: "Library & Reading" },
  { src: groundImage, title: "Sports Ground" },
  { src: parkImage, title: "Green Campus" },
  { src: openAreaImage, title: "Open Learning Area" },
  { src: classroomImage2, title: "Interactive Sessions" },
];

const facilities = [
  {
    icon: FaChalkboardTeacher,
    title: "Smart Classrooms",
    description:
      "Technology-integrated classrooms designed for interactive, concept-driven learning with modern teaching aids.",
  },
  {
    icon: FaBookReader,
    title: "Library",
    description:
      "A rich collection of academic, spiritual and creative literature fostering a culture of independent learning.",
  },
  {
    icon: FaFutbol,
    title: "Sports Ground",
    description:
      "Sprawling grounds for cricket, athletics, yoga and outdoor fitness — building physical resilience and teamwork.",
  },
  {
    icon: FaTheaterMasks,
    title: "Cultural Activities",
    description:
      "Regular cultural programs, festivals, debates and performances nurturing creativity and self-expression.",
  },
  {
    icon: FaShieldAlt,
    title: "Safe Learning Environment",
    description:
      "CCTV-monitored campus with trained staff, secure boundaries and a zero-tolerance policy for misconduct.",
  },
  {
    icon: FaUserTie,
    title: "Experienced Faculty",
    description:
      "Dedicated teachers with deep subject expertise and a passion for mentoring the next generation of leaders.",
  },
];

const whyChoose = [
  {
    icon: FaStar,
    title: "Academic Excellence",
    description:
      "CBSE curriculum enriched with Vedic wisdom ensures students excel in academics while developing strong character.",
  },
  {
    icon: FaHandsHelping,
    title: "Value-Based Education",
    description:
      "Discipline, respect, empathy and responsibility are woven into every aspect of campus life.",
  },
  {
    icon: FaLightbulb,
    title: "Holistic Development",
    description:
      "Equal focus on mental, physical and spiritual growth prepares students for real-world challenges.",
  },
  {
    icon: FaRocket,
    title: "Future-Ready Skills",
    description:
      "Coding, critical thinking, public speaking and leadership training for the careers of tomorrow.",
  },
];

const timeline = [
  {
    step: "01",
    title: "Learning",
    description:
      "Concept-driven academics with CBSE curriculum and Gurukul methodology.",
  },
  {
    step: "02",
    title: "Values",
    description:
      "Vedic ethics, Dharma and character-building integrated into daily routine.",
  },
  {
    step: "03",
    title: "Sports",
    description:
      "Physical fitness, yoga, outdoor games and competitive sports for resilience.",
  },
  {
    step: "04",
    title: "Leadership",
    description:
      "Student councils, public speaking, debates and responsibility frameworks.",
  },
  {
    step: "05",
    title: "Future Readiness",
    description:
      "Technology literacy, problem solving and career-focused skill development.",
  },
];


// COMPONENT


function Campus() {
  return (
    <>
      <Helmet>
        <title>Explore Our Campus | Enlightened Bharat Gurukul</title>
        <meta
          name="description"
          content="Discover the Enlightened Bharat Gurukul campus — smart classrooms, library, sports grounds, cultural activities and a safe, holistic learning environment."
        />
      </Helmet>

      <div className="bg-[#061224] text-white overflow-hidden min-h-screen pt-20">

        {/* HERO SECTION*/}
            
        <section className="relative h-[65vh] flex items-center justify-center">
          <img
            src={schoolImage4}
            alt="Enlightened Bharat Gurukul Campus"
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
              Our Campus
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Explore Our <span className="text-yellow-400">Campus</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 mt-8 text-base md:text-xl leading-8 max-w-3xl mx-auto"
            >
              Step into a world where modern education meets Vedic wisdom — a
              campus built to nurture disciplined, future-ready leaders with
              strong values and character.
            </motion.p>
          </div>
        </section>

        {/* ABOUT CAMPUS SECTION*/}
            
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-yellow-400 tracking-[4px] uppercase text-xs font-semibold mb-4">
                About Our Campus
              </p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                A Modern Gurukul For{" "}
                <span className="text-yellow-400">Tomorrow's Leaders</span>
              </h2>
              <p className="text-gray-300 mt-6 text-base md:text-lg leading-relaxed">
                Enlightened Bharat Gurukul provides a carefully designed learning
                environment where academic rigour is balanced with value-based
                education. Our classrooms are equipped with modern teaching aids
                to foster interactive, concept-driven learning that goes far
                beyond textbooks and rote memorisation.
              </p>
              <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
                Discipline is a cornerstone of campus life. Every student
                follows a structured daily routine that includes meditation,
                physical fitness, academic sessions and creative pursuits. Sports
                grounds, cultural stages and open-air learning zones create an
                atmosphere where children develop confidence, resilience and a
                love for knowledge.
              </p>
              <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
                From morning assembly to evening reflection, our campus breathes
                holistic development — nurturing the mind, body and spirit
                equally. Here, every child is mentored to become a responsible
                citizen, a compassionate human being, and a future leader.
              </p>
            </div>

            <div className="relative">
              <img
                src={schoolImage1}
                alt="Campus overview"
                className="w-full h-[320px] md:h-[450px] object-cover rounded-[32px] shadow-2xl border border-white/5"
              />
              <div className="absolute -bottom-4 -right-4 w-40 h-40 border-b-2 border-r-2 border-yellow-400/40 rounded-br-[32px] pointer-events-none -z-10"></div>
            </div>
          </div>
        </section>

        {/* CAMPUS GALLERY SECTION */}
           
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-yellow-400 tracking-[4px] uppercase text-xs font-semibold mb-4">
              Campus Gallery
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Life Inside <span className="text-yellow-400">Our Campus</span>
            </h2>
            <p className="text-gray-300 mt-6 text-lg leading-9">
              A glimpse into the vibrant learning spaces, sports facilities, and
              holistic campus life at Enlightened Bharat Gurukul.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 group"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-[280px] md:h-[350px] object-cover group-hover:scale-110 duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 duration-500"></div>

                {/* Text */}
                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500">
                  <h3 className="text-white text-xl font-bold">
                    {image.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FACILITIES SECTION */}
            
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-yellow-400 tracking-[4px] uppercase text-xs font-semibold mb-4">
              Campus Facilities
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              World-Class{" "}
              <span className="text-yellow-400">Infrastructure</span>
            </h2>
            <p className="text-gray-300 mt-6 text-lg leading-9">
              Our campus is equipped with everything a student needs for
              academic, physical and creative growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-yellow-400/20 duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-6">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* WHY CHOOSE OUR CAMPUS SECTION */}
            
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-yellow-400 tracking-[4px] uppercase text-xs font-semibold mb-4">
                Why Choose Us
              </p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Education That Builds{" "}
                <span className="text-yellow-400">Character</span>
              </h2>
              <p className="text-gray-300 mt-6 text-base md:text-lg leading-relaxed">
                Enlightened Bharat Gurukul is more than a school — it is a
                movement to create future-ready leaders rooted in Indian values
                and equipped with modern skills.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {whyChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:border-yellow-400/20 duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-4">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CAMPUS EXPERIENCE TIMELINE */}
            
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-yellow-400 tracking-[4px] uppercase text-xs font-semibold mb-4">
              The Gurukul Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Campus <span className="text-yellow-400">Experience</span>
            </h2>
            <p className="text-gray-300 mt-6 text-lg leading-9">
              A structured journey of growth — from academic fundamentals to
              future-ready leadership.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line — visible only on md+ */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-yellow-400/20"></div>

            <div className="flex flex-col gap-12 md:gap-16">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div className="w-full md:w-[45%]">
                      <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-yellow-400/20 duration-300">
                        <span className="text-yellow-400 text-3xl font-bold">
                          {item.step}
                        </span>
                        <h3 className="text-white text-xl font-bold mt-3 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="hidden md:flex w-[10%] justify-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 border-4 border-[#061224] z-10"></div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block w-[45%]"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CAMPUS LIFE HIGHLIGHT */}
            
        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-400 tracking-[4px] uppercase text-xs font-semibold mb-4">
              Campus Life
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Where Learning{" "}
              <span className="block text-yellow-400">Comes Alive</span>
            </h2>
            <p className="text-gray-300 mt-8 text-lg leading-9">
              Beyond classrooms, our campus is a living, breathing ecosystem of
              growth. Morning yoga, inter-house competitions, cultural festivals,
              mentorship sessions and community service — every day brings a new
              opportunity to learn, lead and grow.
            </p>
          </div>

          <div>
            <img
              src={schoolImage2}
              alt="Campus Life at Enlightened Bharat"
              className="w-full h-[320px] md:h-[500px] object-cover rounded-3xl shadow-2xl border border-white/5"
            />
          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
            
        <section className="px-6 py-24 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 p-[1px] shadow-2xl">
              <div className="bg-[#08172d] rounded-[40px] px-8 md:px-16 py-16 md:py-24 text-center">
                <p className="text-yellow-400 tracking-[5px] uppercase mb-6">
                  Begin Your Journey
                </p>

                <h2 className="text-white text-4xl md:text-7xl font-bold leading-tight">
                  Join Enlightened Bharat
                  <span className="block text-yellow-400">Gurukul</span>
                </h2>

                <p className="text-gray-300 text-lg md:text-xl leading-9 max-w-4xl mx-auto mt-10">
                  Give your child the gift of modern education rooted in ancient
                  wisdom. A campus where discipline, values and excellence
                  converge to shape tomorrow's leaders.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                  <Link
                    to="/admissions"
                    className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold text-lg hover:scale-[1.05] duration-300 shadow-2xl"
                  >
                    Apply Now
                  </Link>

                  <Link
                    to="/contact"
                    className="border border-yellow-400 text-yellow-400 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-400 hover:text-black duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Campus;
