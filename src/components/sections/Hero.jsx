import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import FloatingCTA from "../common/FloatingCTA";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import { useState, useEffect } from "react";

const Hero = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        fontFamily:
          "Ubuntu, -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601619555244-148569b56591?q=80&w=1074&auto=format&fit=crop')",
        }}
      />

      {/* Stronger cinematic overlay */}
      <div
        className="
        absolute inset-0
        bg-gradient-to-b
        from-black/20 via-black/40 to-black/40
      "
      />

      {/* Glow accents
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />
 */}
      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center"
      >
        {/* Main Title */}
        <motion.h1
          variants={fadeInUp}
          className="
            text-5xl sm:text-6xl lg:text-7xl xl:text-8xl
            font-extrabold
            tracking-tight
            text-white
            leading-tight
            
          "
        >
          Sanjay Trekking Adventure
          <span
            className="
            block mt-6
            text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
            font-bold
           bg-white
            bg-clip-text text-transparent
          "
          >
            Commando Sports Camp 2026
          </span>
        </motion.h1>

        {/* Info Cards */}
        <motion.div
          variants={fadeInUp}
          className="mt-14 flex flex-wrap justify-center gap-6"
        >
          {[
            {
              icon: Calendar,
              text: "7th–13th May 2026",
            },
            {
              icon: MapPin,
              text: "Pachgani & Mahabaleshwar",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                flex items-center gap-3
                px-6 py-4
                bg-white/10
                backdrop-blur-xl
                border border-white/20
                rounded-2xl
                shadow-lg
                hover:scale-105
                transition
              "
            >
              <item.icon className="w-5 h-5 text-orange-400" />
              <span className="text-white font-semibold text-sm sm:text-base">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeInUp} className="mt-20">
          <a
            href="#pricing"
            className="
              inline-block
              px-12 py-5
              rounded-2xl
              text-lg font-bold
              text-white
              bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600
              shadow-2xl
              hover:scale-105
              hover:shadow-orange-500/30
              transition-all duration-300
            "
          >
            Register Now
          </a>
        </motion.div>
      </motion.div>

      <FloatingCTA />
    </section>
  );
};

export default Hero;
