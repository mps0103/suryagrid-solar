export default function Contact() {
  return (
    <main className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-[#0B1F3B] mb-4">
            Contact Suryagrid Energy
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We help homeowners make confident solar decisions with honest advice,
            transparent pricing, and long-term support.
          </p>
        </div>

        {/* ================= BENEFITS ================= */}
        <section className="bg-white rounded-2xl shadow-sm p-10 mb-16">
          <h2 className="text-2xl font-semibold text-[#0B1F3B] mb-8 text-center">
            Why Choose Suryagrid Energy?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-3">
              <span className="text-yellow-400 text-xl">✔</span>
              <p>
                Honest solar consultation focused on ROI, not overselling
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-yellow-400 text-xl">✔</span>
              <p>
                Deep understanding of Indian rooftops, tariffs, and subsidies
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-yellow-400 text-xl">✔</span>
              <p>
                Quality-first approach using reliable components only
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-yellow-400 text-xl">✔</span>
              <p>
                End-to-end support including subsidy guidance and documentation
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-yellow-400 text-xl">✔</span>
              <p>
                Transparent pricing with no hidden charges
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-yellow-400 text-xl">✔</span>
              <p>
                Long-term service mindset, not just installation
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONTACT DETAILS ================= */}
        <section className="bg-[#0B1F3B] text-white rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Get in Touch With Us
          </h2>

          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Have questions about solar installation, pricing, or subsidies?
            Reach out to us and our team will guide you clearly.
          </p>

          <div className="space-y-4 text-lg">
            <p>
              📧 Email:
              <span className="ml-2 text-yellow-400">
                support@suryagridenergy.in
              </span>
            </p>

            <p>
              📞 Phone:
              <span className="ml-2 text-yellow-400">
                +919286799221
              </span>
            </p>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            Monday – Saturday | 9:00 AM – 6:00 PM
          </p>
        </section>

      </div>
    </main>
  );
}
