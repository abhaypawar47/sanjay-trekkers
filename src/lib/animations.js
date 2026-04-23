export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export const cardHover = {
  rest: { scale: 1, boxShadow: "0px 4px 8px rgba(0,0,0,0.02)" },
  hover: {
    scale: 1.03,
    boxShadow: "0px 20px 30px -10px rgba(118, 200, 147, 0.25)",
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
};
