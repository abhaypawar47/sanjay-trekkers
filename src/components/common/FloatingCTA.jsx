import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const FloatingCTA = () => {
  return (
    <motion.a
      href="#pricing"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 120 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
        px-5 py-4
        rounded-full
        text-white
        font-bold
        bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600
        shadow-2xl
        hover:shadow-orange-500/40
        transition-all duration-300
      "
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping bg-orange-400/30" />

      {/* Text */}
      <span className="relative hidden sm:inline text-sm tracking-wide">
        Register Now
      </span>

      {/* Icon */}
      <ChevronRight className="relative w-6 h-6 group-hover:translate-x-1 transition-transform" />
    </motion.a>
  );
};

export default FloatingCTA;
