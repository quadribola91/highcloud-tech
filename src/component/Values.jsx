import React from "react";
import ITC from "../assets/ITC.jpeg";

export default function Values() {
  return (
    <section id="values" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Text */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Focused Value Proposition
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Standard & Quality
                </h3>
                <p className="text-gray-600">
                  We prioritize innovation, reliability, and customer
                  satisfaction by adhering to industry best practices and proven
                  technology standards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Client-Centric Solutions
                </h3>
                <p className="text-gray-600">
                  Our mission is to empower businesses with scalable and secure
                  IT solutions that improve efficiency, productivity, and
                  competitiveness.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 hover:text-white transition"
            >
              Get Started
            </a>
          </div>

          {/* Image */}
          <div className="animate-slide-up">
            <img
              src={ITC}
              alt="Highcloud Tech Values"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
