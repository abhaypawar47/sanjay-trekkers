import { motion } from "framer-motion";
import ActivityCard from "./ActivityCard";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import SectionContainer from "../common/SectionContainer";

const activities = [
  {
    title: "Rock Climbing",
    icon: "Mountain",
    description:
      "Conquer vertical rock faces with professional gear and guidance.",
    img: "https://images.unsplash.com/photo-1682872073234-3af7e7c26585?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Rappelling",
    icon: "ArrowDown",
    description: "Descend steep cliffs with confidence and safety harnesses.",
    img: "https://images.unsplash.com/photo-1668436059395-8ea1fbea24a9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Rifle Shooting",
    icon: "Target",
    description: "Learn precision aiming under expert supervision.",
    img: "https://images.unsplash.com/photo-1645999140911-fb4e70baf2b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Jungle Trekking",
    icon: "Trees",
    description: "Navigate dense forests with navigation and survival skills.",
    img: "https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Archery",
    icon: "Crosshair",
    description: "Traditional bow and arrow precision training.",
    img: "https://images.unsplash.com/photo-1641531105535-1ead3c1784ab?q=80&w=811&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Kayaking",
    icon: "Ship",
    description: "Paddle through calm waters with basic kayaking techniques.",
    img: "https://images.unsplash.com/photo-1561774711-b0fa364863b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Zip Lining",
    icon: "Zap",
    description: "Soar across canyons on high-speed zip lines.",
    img: "https://images.unsplash.com/photo-1664735094820-c6c40d862d5b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Map Reading",
    icon: "Map",
    description: "Navigate using compass and topographical maps.",
    img: "https://images.unsplash.com/photo-1773411155264-fab17d8c5140?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Activities = () => {
  return (
    <SectionContainer
      id="activities"
      className="bg-gradient-to-b from-gray-100 via-white to-gray-100 py-24 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-orange-300/20 to-purple-400/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="
              text-5xl sm:text-6xl
              font-extrabold
              text-center
              tracking-tight
              text-gray-900
              mb-5
            "
          >
            Commando{" "}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Training
            </span>{" "}
            Activities
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            className="
              text-center
              text-gray-600
              text-lg
              font-medium
              max-w-2xl
              mx-auto
              mb-16
            "
          >
            20+ elite adventure modules designed by ex-military professionals to
            build discipline, strength, and real-world survival skills.
          </motion.p>

          {/* Grid */}
          <motion.div
            variants={staggerContainer}
            className="
              grid grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-8
            "
          >
            {activities.map((activity) => (
              <ActivityCard key={activity.title} activity={activity} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Activities;
