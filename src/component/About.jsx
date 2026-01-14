import ITA from "../assets/ITA.jpeg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Image */}
          <div className="animate-slide-up">
            <img
              src={ITA}
              alt="Highcloud Tech Infrastructure"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Crafting Tomorrow&apos;s IT Today
            </h2>

            <h3 className="text-lg font-semibold text-emerald-600 mb-6">
              Transformative IT for a connected world
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Highcloud Tech provides reliable and forward-thinking IT solutions
              that align with your business priorities for growth, innovation,
              and operational excellence. We minimize disruptions by ensuring
              availability, performance, and timely execution across all IT
              services.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our team operates with precision and accountability, delivering
              solutions within agreed timelines while maintaining high standards
              of quality and security.
            </p>

            <a
              href="#services"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
