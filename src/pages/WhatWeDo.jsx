import solarRooftopImg from "../assets/whatwedo/solar-rooftop.jpg";
import solarWorkingImg from "../assets/whatwedo/solar-working.jpg";
import solarInstallationImg from "../assets/whatwedo/solar-installation.jpg";

export default function WhatWeDo() {
  return (
    <main>

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#0B1F3B] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Know More About Solar Energy
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            Learn how rooftop solar works, why it is ideal for Indian homes,
            and how we deliver safe, reliable, and long-lasting solar solutions.
          </p>
        </div>
      </section>

      {/* ================= IMAGE 1: ROOFTOP SOLAR ================= */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden">
            <img
              src={solarRooftopImg}
              alt="Rooftop solar installation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= WHAT IS SOLAR ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            What Is Solar Energy?
          </h2>
          <p className="text-gray-600 max-w-4xl">
            Solar energy is electricity generated from sunlight using photovoltaic
            technology. Solar panels absorb sunlight and convert it into usable
            electricity for homes, commercial buildings, and housing societies.
            It is a clean, renewable, and cost-effective energy source.
          </p>
        </div>
      </section>

      {/* ================= HOW SOLAR WORKS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              How Does a Solar Power System Work?
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>• Solar panels capture sunlight and generate DC electricity</li>
              <li>• Inverter converts DC electricity into usable AC power</li>
              <li>• Power runs your home appliances in real time</li>
              <li>• Excess power is exported to the grid through net metering</li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden">
            <img
              src={solarWorkingImg}
              alt="How solar power system works"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= SOLAR COMPONENTS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Key Components of a Solar Power System
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Solar Panels</h3>
              <p className="text-gray-600">
                High-efficiency panels that convert sunlight into electricity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Inverter</h3>
              <p className="text-gray-600">
                Converts DC power into AC power suitable for home use.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Mounting Structure</h3>
              <p className="text-gray-600">
                Strong, corrosion-resistant structures for safe installation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Electrical Safety</h3>
              <p className="text-gray-600">
                Proper wiring, earthing, and protection for complete safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-[#0B1F3B] text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Choose Our Solar Solutions?
            </h2>
            <p className="text-gray-200 mb-4">
              We follow strict engineering standards, high-quality materials,
              and professional installation practices to deliver solar systems
              that perform reliably for decades.
            </p>
            <p className="text-gray-200">
              From consultation and system design to installation and long-term
              support, we manage your complete solar journey.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden">
            <img
              src={solarInstallationImg}
              alt="Professional solar installation"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Switch to Solar?
          </h2>
          <p className="text-gray-600 mb-8">
            Get a free solar consultation and discover how much you can save
            with clean solar energy.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Get Free Solar Consultation
          </a>
        </div>
      </section>

    </main>
  );
}
