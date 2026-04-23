import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-100 via-white to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Sanjay Tracking Adventure
            </h3>

            <p className="text-sm font-medium mt-2 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Commando Sports Camp 2026
            </p>
          </div>

          {/* Contact */}
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-purple-100 flex items-center justify-center shadow-sm">
              <Phone className="w-5 h-5 text-orange-600" />
            </div>

            {/* Numbers */}
            <div>
              <p className="text-sm font-semibold text-gray-500 mb-1">
                Contact Naresh Lohara
              </p>

              <div className="flex flex-wrap gap-4 text-gray-900 font-bold text-lg">
                <a
                  href="tel:+919921322679"
                  className="hover:text-orange-500 transition"
                >
                  9921322679
                </a>

                <span className="text-gray-300">|</span>

                <a
                  href="tel:+919921322607"
                  className="hover:text-purple-500 transition"
                >
                  9921322607
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm font-medium text-gray-500">
            © 2026{" "}
            <span className="font-semibold text-gray-900">
              Sanjay Tracking Adventure
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
