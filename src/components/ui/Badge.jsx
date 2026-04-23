import { motion } from "framer-motion";

const Badge = ({ children, color = "primary", className = "" }) => {
  const colorClasses = {
    primary: "bg-primary/10 text-primary border-primary/20",
    glow: "bg-glow/20 text-primary-dark border-glow/30",
    teal: "bg-teal/10 text-teal-deep border-teal/20",
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${colorClasses[color]} ${className}`}
    >
      {children}
    </motion.span>
  );
};

export default Badge;
