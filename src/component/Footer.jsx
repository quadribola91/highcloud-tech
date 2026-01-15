import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <ScrollReveal
        className="opacity-0 translate-y-10 transition-all duration-700"
        once
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Highcloud Technologies
            </h2>
            <p className="text-sm leading-relaxed">
              We build scalable, modern digital solutions that help businesses
              grow, automate, and stay secure.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-primary transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Web Development</li>
              <li>IT support</li>
              <li>Cybersecurity</li>
              <li>IT Consulting</li>
              <li>IT training & mentorship</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: technologies.highcloud@gmail.com</li>
              <li>Phone: +234 905 882 4643</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Highcloud Technologies. All rights
          reserved.
        </div>
      </ScrollReveal>
    </footer>
  );
}
