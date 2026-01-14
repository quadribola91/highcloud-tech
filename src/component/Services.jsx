export default function Services() {
  const services = [
    {
      title: "Managed IT Services",
      description:
        "Proactive monitoring, maintenance, and support to keep your systems secure, stable, and always available.",
      icon: "🛠️",
    },
    {
      title: "Web Development",
      description:
        "Modern, scalable websites and applications built with performance, security, and user experience in mind.",
      icon: "💻",
    },
    {
      title: "IT Training & Mentorship",
      description:
        "Experienced educator teaching ICT, IT support, web development, and programming for both academic and industry standards.",
      icon: "☁️",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Protect your business with threat detection, access control, and security best practices.",
      icon: "🔐",
    },
    {
      title: "IT Consulting",
      description:
        "Strategic technology guidance aligned with your business goals and growth plans.",
      icon: "📊",
    },
    {
      title: "IT project management",
      description:
        "Fast, reliable support for hardware, software, and network-related issues.",
      icon: "🎧",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Highcloud Tech delivers reliable, scalable, and secure technology
            solutions designed to help your business grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-slide-up"
            >
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
