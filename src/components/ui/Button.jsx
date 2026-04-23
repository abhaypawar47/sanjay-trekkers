import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-primary/30",
  secondary: "bg-white text-primary border border-primary/20 hover:bg-glow/10",
  outline:
    "bg-transparent text-primary border border-primary hover:bg-primary/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-full",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  ...props
}) => {
  const classes = `inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary/50 ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
