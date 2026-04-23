import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Activities", href: "#activities" },
  { name: "Features", href: "#features" },
  { name: "Info", href: "#info" },
  { name: "Pricing", href: "#pricing" },
];

const GlassNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-lg border-b border-gray-200"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <a
            href="#hero"
            className={`
              text-2xl md:text-3xl
              font-extrabold
              tracking-tight
              transition
              ${scrolled ? "text-gray-900" : "text-white"}
            `}
          >
            SANJAY <span className="text-orange-500">ADVENTURE</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  relative text-base
                  font-bold
                  transition
                  group
                  ${
                    scrolled
                      ? "text-gray-700 hover:text-black"
                      : "text-white/90 hover:text-white"
                  }
                `}
              >
                {item.name}

                {/* underline */}
                <span
                  className={`
                    absolute left-0 -bottom-1
                    h-[2px] w-0
                    transition-all duration-300
                    group-hover:w-full
                    ${scrolled ? "bg-orange-500" : "bg-white"}
                  `}
                />
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              md:hidden
              p-2 rounded-xl
              transition
              ${scrolled ? "text-black bg-gray-100" : "text-white bg-white/10"}
            `}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-6 py-6 space-y-5 bg-white/95 backdrop-blur-xl border-t border-gray-200">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="
                block text-lg
                font-bold
                text-gray-900
                hover:text-orange-500
                transition
              "
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default GlassNavbar;
