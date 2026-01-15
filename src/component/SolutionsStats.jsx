// src/components/SolutionsStats.jsx
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    label: "Ticket Volume",
    value: 383,
    suffix: "+",
  },
  {
    label: "Resolution Rate",
    value: 75,
    suffix: "%",
  },
  {
    label: "SLA Compliance Rate",
    value: 95,
    suffix: "%",
  },
  {
    label: "Managed Customers",
    value: 64,
    suffix: "+",
  },
];

export default function SolutionsStats() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1200;
      const increment = Math.ceil(end / (duration / 16));

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 16);
    });
  }, [visible]);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-20" id="solutions">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* HEADER */}
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Solutions
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Unleash the power of cutting-edge solutions
          </h2>
          <p className="mt-4 text-gray-600">
            We deliver reliable IT services designed to elevate your business,
            improve operational efficiency, and ensure long-term scalability.
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block mt-6 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Call Us Now
          </a>
        </div>

        {/* STATS GRID */}
        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white p-6 text-center shadow-sm"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                {counts[index]}
                {stat.suffix}
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
