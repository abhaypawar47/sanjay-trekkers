import { motion } from "framer-motion";
import { IndianRupee, CheckCircle2 } from "lucide-react";
import { fadeInUp } from "../../lib/animations";
import SectionContainer from "../common/SectionContainer";

const Pricing = () => {
  return (
    <SectionContainer
      id="pricing"
      className="bg-gradient-to-b from-gray-100 via-white to-gray-100 py-24"
    >
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="max-w-md mx-auto"
      >
        {/* Card */}
        <div
          className="
          relative overflow-hidden
          rounded-3xl p-9
          bg-white
          border border-gray-200
          shadow-xl
          hover:shadow-2xl
          transition-all duration-300
        "
        >
          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-orange-300/30 to-purple-400/30 blur-3xl rounded-full" />

          {/* Badge */}
          <div className="text-center relative">
            <span
              className="
              inline-block px-5 py-1.5
              bg-gradient-to-r from-orange-500 to-purple-600
              text-white
              rounded-full text-sm font-bold
              mb-6 shadow-md
            "
            >
              All-Inclusive Adventure Package
            </span>

            {/* Price */}
            <div className="flex items-center justify-center gap-1 text-6xl font-extrabold text-gray-900 tracking-tight mb-3">
              <IndianRupee className="w-8 h-8 text-orange-500" />
              10,800
            </div>

            <p className="text-gray-600 text-sm font-medium mb-8">
              7 days of extreme adventure, survival training, meals & stay
            </p>
          </div>

          {/* Benefits */}
          <ul className="space-y-4 mb-10 relative">
            {[
              "Professional instructors",
              "All safety equipment included",
              "Accommodation in camps/tents",
              "Nutritious high-energy meals",
              "Official completion certificate",
            ].map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 text-gray-800"
              >
                <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <span className="text-[15px] font-medium">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}

          <a href="https://forms.gle/qDHesAqhtVyG1C9b8">
            <button
              className="
              w-full py-4 rounded-2xl
              font-bold text-white text-lg
              bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600
              hover:scale-[1.02]
              transition-all duration-300
              shadow-lg hover:shadow-2xl
            "
            >
              {" "}
              Secure Your Spot Now
            </button>{" "}
          </a>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default Pricing;
