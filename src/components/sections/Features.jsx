import { motion } from "framer-motion";
import { Shield, Users } from "lucide-react";
import { fadeInUp } from "../../lib/animations";
import SectionContainer from "../common/SectionContainer";

const features = [
  {
    icon: Shield,
    title: "Professional Trainers & Trackers",
    description: "Certified mountaineering experts guide every activity.",
  },
  {
    icon: Users,
    title: "Special Ladies Trainers",
    description:
      "Dedicated female instructors ensure comfort and safety for girls.",
  },
];

const Features = () => {
  return (
    <SectionContainer
      id="features"
      className="bg-gradient-to-b from-gray-100 via-white to-gray-100 py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Our Camp
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg font-medium max-w-2xl mx-auto">
            Expert-led adventure training designed for discipline, safety, and
            real-world survival skills.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="
                relative overflow-hidden
                bg-white
                rounded-3xl
                p-10
                border border-gray-200
                shadow-lg
                hover:shadow-2xl
                transition-all duration-300
              "
            >
              {/* Glow accent */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-gradient-to-br from-orange-200/40 to-purple-300/40 blur-3xl rounded-full" />

              {/* Icon */}
              <div
                className="
                w-16 h-16
                rounded-2xl
                flex items-center justify-center
                mb-6
                bg-gradient-to-br from-orange-500 to-purple-600
                text-white
                shadow-md
              "
              >
                <feature.icon size={30} strokeWidth={2.2} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Features;
