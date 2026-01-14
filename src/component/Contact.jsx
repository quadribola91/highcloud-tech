export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-soft py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a project, question, or need technical support? Let’s talk
            about how Highcloud Tech can help your business grow.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Contact Information
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We work with startups, SMEs, and growing businesses to deliver
              reliable IT solutions, modern websites, and long-term technical
              support.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:quadribola91@gmail.com"
                  className="text-primary hover:underline"
                >
                  quadribola91@gmail.com
                </a>
              </p>

              <p>
                <span className="font-medium">Phone / WhatsApp:</span>{" "}
                <a
                  href="tel:+2349058824643"
                  className="text-primary hover:underline"
                >
                  +234 905 882 4643
                </a>
              </p>

              <p>
                <span className="font-medium">Location:</span> Lagos, Nigeria
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="mailto:quadribola91@gmail.com"
            method="POST"
            encType="text/plain"
            className="bg-white rounded-xl shadow-lg p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-primary outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-primary outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-primary outline-none resize-none"
                placeholder="Tell us about your project or request"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primaryDark text-white py-3 rounded-lg font-medium transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
