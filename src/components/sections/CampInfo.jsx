import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";
import SectionContainer from "../common/SectionContainer";

const rules = [
  "Respect all instructors and fellow campers",
  "Follow safety protocols strictly",
  "No mobile phones during training",
  "Punctuality is mandatory",
];

const trainingBasics = [
  { label: "Jungle Cooking", value: "Learn survival cooking techniques" },
  {
    label: "Ground Training",
    value: "Physical conditioning & obstacle drills",
  },
  { label: "Discipline Routines", value: "Daily schedule & code of conduct" },
];

const CampInfo = () => {
  return (
    <SectionContainer
      id="info"
      className="bg-gradient-to-b from-gray-100 via-white to-gray-100 py-20"
    >
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-10 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
            Camp Information
          </span>
        </h2>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Rules Header */}
          <div className="px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-purple-50">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-2 h-7 rounded-full bg-gradient-to-b from-orange-500 to-purple-600"></span>
              Rules & Guidelines
            </h3>
          </div>

          {/* Rules */}
          <ul className="divide-y divide-gray-100">
            {rules.map((rule, idx) => (
              <li
                key={idx}
                className="px-8 py-4 flex items-start gap-3 text-gray-800 hover:bg-orange-50 transition"
              >
                <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                <span className="font-medium">{rule}</span>
              </li>
            ))}
          </ul>

          {/* Training */}
          <div className="px-8 py-10 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-purple-600">Training Basics</span>
            </h3>

            <div className="grid sm:grid-cols-3 gap-6">
              {trainingBasics.map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-2xl bg-gradient-to-br from-orange-100 via-white to-purple-100 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-purple-700 mb-2">
                    {item.label}
                  </div>
                  <div className="text-gray-900 font-semibold text-[15px]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default CampInfo;
