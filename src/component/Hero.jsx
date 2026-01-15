import back1 from "../assets/back1 .jpeg";
import back2 from "../assets/back2.jpeg";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Image Layer 1 */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-bg-left scale-110"
          style={{ backgroundImage: `url(${back1})` }}
        />

        {/* Image Layer 2 */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay animate-bg-right scale-110"
          style={{ backgroundImage: `url(${back2})` }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <ScrollReveal className="relative z-10 max-w-6xl mx-auto px-6 text-center" once origin="up" duration={900}>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          We build fast, secure, and modern digital solutions
          <span className="text-primary"> for growing businesses</span>.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Websites. Systems. Support. Built to scale with you.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-primary hover:bg-primaryDark text-white px-8 py-3 rounded-lg font-medium transition">
            Get Started
          </button>

          <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition">
            Free Consultation
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}
