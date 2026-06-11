import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBook, FaRunning, FaBrain, FaWrench, FaCheckCircle, FaUserFriends, FaRegChartBar } from "react-icons/fa";

const goalData = {
  yearly: {
    title: "Yearly Milestones",
    description: "Long-term academic and character foundations designed to establish systemic capabilities.",
    metrics: [
      { area: "Knowledge", percent: 85, icon: FaBook, details: "Master CBSE syllabus & Vedic basics" },
      { area: "Skills", percent: 70, icon: FaWrench, details: "Learn Web Development or Public Speaking" },
      { area: "Healthy Mind", percent: 90, icon: FaBrain, details: "Daily 15-min deep focus practice" },
      { area: "Healthy Body", percent: 75, icon: FaRunning, details: "Achieve personal fitness & athletic marks" }
    ],
    tasks: [
      "Complete Grade CBSE curriculum with conceptual excellence",
      "Deliver a capstone presentation on ancient history & technology",
      "Read and reflect on 6 books of philosophical values",
      "Achieve Level 3 sports fitness certificate"
    ]
  },
  monthly: {
    title: "Monthly Targets",
    description: "Intermediate review cycles focusing on skill development, conceptual deep-dives, and performance evaluation.",
    metrics: [
      { area: "Knowledge", percent: 68, icon: FaBook, details: "Complete 2 academic units with 90%+ tests" },
      { area: "Skills", percent: 55, icon: FaWrench, details: "Build 1 interactive project or presentation" },
      { area: "Healthy Mind", percent: 80, icon: FaBrain, details: "Zero-distraction study streak of 10 days" },
      { area: "Healthy Body", percent: 65, icon: FaRunning, details: "Participate in inter-house athletics matches" }
    ],
    tasks: [
      "Submit Science lab report with original data analysis",
      "Build a functional model showing gravity & orbit dynamics",
      "Maintain a daily gratitude and meditation journal",
      "Complete 5km endurance run under 28 minutes"
    ]
  },
  weekly: {
    title: "Weekly Check-ins",
    description: "Accountability and execution tracking designed to ensure steady weekly progress and fix blockers.",
    metrics: [
      { area: "Knowledge", percent: 45, icon: FaBook, details: "Study 4 textbook chapters deeply" },
      { area: "Skills", percent: 35, icon: FaWrench, details: "Practice keyboarding & basic coding labs" },
      { area: "Healthy Mind", percent: 70, icon: FaBrain, details: "Complete weekly reflection sheet" },
      { area: "Healthy Body", percent: 50, icon: FaRunning, details: "3 hours of physical activity" }
    ],
    tasks: [
      "Resolve math practice set with no external aid",
      "Present a 2-minute topic summary in Sanskrit/English",
      "Set up a personal workspace checklist",
      "Attend 2 morning yogasana sessions"
    ]
  },
  daily: {
    title: "Daily Sadhana",
    description: "Granular planning and focus. Daily habits that aggregate into lifetime masteries.",
    metrics: [
      { area: "Knowledge", percent: 20, icon: FaBook, details: "Complete today's academic self-study block" },
      { area: "Skills", percent: 15, icon: FaWrench, details: "30 mins of analytical/logical coding practice" },
      { area: "Healthy Mind", percent: 10, icon: FaBrain, details: "Morning concentration drills (Trataka)" },
      { area: "Healthy Body", percent: 25, icon: FaRunning, details: "Perform Surya Namaskar and core drills" }
    ],
    tasks: [
      "Review notes from math and physics lectures",
      "Read 5 pages of a literature book out loud for pronunciation",
      "Execute 10 minutes of controlled breathing (Pranayama)",
      "Log off screens by 9:00 PM for deep sleep recovery"
    ]
  }
};

function GoalDashboard() {
  const [activeTab, setActiveTab] = useState("yearly");
  const data = goalData[activeTab];

  return (
    <section id="goal-dashboard" className="py-24 px-6 bg-gradient-to-b from-[#061224] to-[#08172d] relative overflow-hidden">
      {/* Visual accents */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-yellow-500/[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Descriptions & Tab Buttons */}
          <div className="lg:col-span-5">
            <p className="text-yellow-400 tracking-[5px] uppercase text-xs font-semibold mb-4">
              Student Progress
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Goal-Based <span className="text-yellow-400">Learning Dashboard</span>
            </h2>
            <p className="text-gray-400 mt-6 text-lg leading-relaxed mb-10">
              We replace standard grading stress with a transparent progress dashboard. Students map out daily tasks that build up to yearly milestones in academic, mental, and physical fitness.
            </p>

            {/* Dashboard Tabs */}
            <div className="flex flex-col gap-3 bg-white/[0.02] border border-white/5 p-3 rounded-2xl">
              {Object.keys(goalData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-5 py-4 rounded-xl font-bold transition-all duration-300 flex justify-between items-center capitalize ${
                    activeTab === tab
                      ? "bg-yellow-400 text-black shadow-lg shadow-yellow-500/10"
                      : "text-white hover:bg-white/5"
                  }`}
                >
                  <span>{tab} Goals</span>
                  {activeTab === tab && <div className="w-2 h-2 rounded-full bg-black"></div>}
                </button>
              ))}
            </div>

            {/* Monitoring Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
                <div className="text-yellow-400 mb-3"><FaUserFriends size={20} /></div>
                <h4 className="text-white font-bold text-sm mb-1">Small Group Reviews</h4>
                <p className="text-gray-500 text-xs leading-normal">5-6 student micro-cohorts for close mentoring.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
                <div className="text-yellow-400 mb-3"><FaRegChartBar size={20} /></div>
                <h4 className="text-white font-bold text-sm mb-1">Parent Visibility</h4>
                <p className="text-gray-500 text-xs leading-normal">Real-time status tracking via reports.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Dashboard UI Panel */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-tr from-[#08172d] to-[#0f284a] border border-white/10 rounded-[32px] p-8 shadow-2xl relative">
              {/* Dashboard Status Bar */}
              <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-8">
                <div>
                  <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest">Tracking Terminal</span>
                  <h3 className="text-white font-extrabold text-lg mt-1">Sadhana Performance</h3>
                </div>
                <div className="flex items-center gap-2 bg-[#061224] px-4 py-2 rounded-full border border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-gray-300 text-xs font-semibold">Active Tracker</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {data.description}
                  </p>

                  {/* Core Metrics Grid */}
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-6">Focus Area Progress</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
                    {data.metrics.map((metric) => {
                      const Icon = metric.icon;
                      // Circle parameters
                      const radius = 26;
                      const circumference = 2 * Math.PI * radius;
                      const strokeDashoffset = circumference - (metric.percent / 100) * circumference;

                      return (
                        <div key={metric.area} className="flex flex-col items-center text-center bg-[#061224]/50 border border-white/5 p-4 rounded-2xl hover:border-yellow-400/20 duration-300">
                          {/* Radial Progress Ring */}
                          <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                            <svg className="absolute w-full h-full -rotate-90">
                              <circle
                                cx="32"
                                cy="32"
                                r={radius}
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.05)"
                                strokeWidth="4"
                              />
                              <circle
                                cx="32"
                                cy="32"
                                r={radius}
                                fill="none"
                                stroke="#facc15"
                                strokeWidth="4"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                              />
                            </svg>
                            <span className="text-yellow-400 text-xs font-bold">{metric.percent}%</span>
                          </div>

                          <div className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-2">
                            <Icon size={14} />
                          </div>
                          <span className="text-white font-bold text-xs tracking-wider uppercase">{metric.area}</span>
                          <span className="text-[10px] text-gray-500 mt-1 leading-snug">{metric.details}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tasks Checklist */}
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-6">Current Targets Checklist</h4>
                  <div className="space-y-4">
                    {data.tasks.map((task, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 bg-[#061224]/30 border border-white/5 px-5 py-4 rounded-xl hover:bg-[#061224]/60 duration-300"
                      >
                        <div className="text-yellow-400 mt-0.5"><FaCheckCircle size={16} /></div>
                        <p className="text-gray-300 text-sm leading-relaxed">{task}</p>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default GoalDashboard;
