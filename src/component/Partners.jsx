export default function Partners() {
  const partners = [
    "Microsoft",
    "Google",
    "AWS",
    "Zoho",
    "Cloudflare",
    "DigitalOcean",
  ];

  return (
    <section id="partners" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted Partners
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We work with leading technology partners to deliver reliable,
            secure, and industry-standard solutions.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300 animate-slide-up"
            >
              <span className="text-gray-700 font-semibold text-lg">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
