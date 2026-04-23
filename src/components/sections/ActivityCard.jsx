import { motion } from "framer-motion";
import { cardHover } from "../../lib/animations";
import * as Icons from "lucide-react";
import placeholderImg from "../../assets/images/activity-placeholder.jpg";

const ActivityCard = ({ activity }) => {
  const IconComponent = Icons[activity.icon] || Icons.HelpCircle;

  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="
        group relative
        bg-white
        rounded-3xl
        overflow-hidden
        border border-gray-200
        shadow-lg
        hover:shadow-2xl
        transition-all duration-300
      "
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={activity.img || placeholderImg}
          alt={activity.title}
          className="
            w-full h-full object-cover
            group-hover:scale-110
            transition-transform duration-500
          "
          loading="lazy"
        />

        {/* Dark overlay */}
        <div
          className="
          absolute inset-0
          bg-gradient-to-t
          from-black/70 via-black/20 to-transparent
        "
        />

        {/* Top accent glow */}
        <div
          className="
          absolute inset-0
          bg-gradient-to-br
          from-orange-500/10
          via-transparent
          to-purple-500/10
        "
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {/* Icon */}
          <div
            className="
            w-11 h-11
            flex items-center justify-center
            rounded-xl
            bg-gradient-to-br
            from-orange-500 to-purple-600
            text-white
            shadow-md
          "
          >
            <IconComponent size={22} strokeWidth={2.5} />
          </div>

          {/* Title */}
          <h3
            className="
            text-xl font-extrabold
            text-gray-900
            tracking-tight
          "
          >
            {activity.title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="
          text-gray-600
          text-sm
          font-medium
          leading-relaxed
        "
        >
          {activity.description}
        </p>
      </div>

      {/* Hover border glow */}
      <div
        className="
        absolute inset-0
        rounded-3xl
        border-2 border-transparent
        group-hover:border-orange-400/40
        transition-all duration-300
        pointer-events-none
      "
      />
    </motion.div>
  );
};

export default ActivityCard;
