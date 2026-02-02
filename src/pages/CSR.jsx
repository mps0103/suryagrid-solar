import csrHero from "../assets/csr/csr-hero.png";
import csrAgri from "../assets/csr/csr-agripreneur.png";
import csrEco from "../assets/csr/csr-ecopreneur.png";
import csrSchool from "../assets/csr/csr-ecopreneur.png";

export default function CSR() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="bg-[#0B1F3B] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Corporate Social Responsibility (CSR)
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            Driving sustainable development through education, renewable energy
            awareness, and entrepreneurship.
          </p>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden">
            <img
              src={csrHero}
              alt="CSR initiatives by Suryagrid Energy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-700 max-w-4xl text-lg">
            Suryagrid Energy is committed to creating long-term social and
            environmental impact through its Corporate Social Responsibility
            initiatives. Our CSR programs focus on renewable energy awareness,
            sustainable entrepreneurship, and education for young minds.
          </p>
        </div>
      </section>

      {/* CSR VISION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Our CSR Vision</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Promote renewable energy awareness</li>
            <li>• Support agripreneurs and ecopreneurs</li>
            <li>• Educate students on solar and sustainability</li>
            <li>• Contribute to inclusive and sustainable development</li>
          </ul>
        </div>
      </section>

      {/* AGRIPRENEURS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              CSR Initiative: Supporting Agripreneurs
            </h2>
            <p className="text-gray-600 mb-4">
              We help agripreneurs adopt solar-powered solutions and sustainable
              agricultural practices for a cleaner and more efficient future.
            </p>
          </div>

          <div className="w-full h-64 rounded-xl overflow-hidden">
            <img
              src={csrAgri}
              alt="CSR support for agripreneurs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ECOPRENEURS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 w-full h-64 rounded-xl overflow-hidden">
            <img
              src={csrEco}
              alt="CSR initiatives for ecopreneurs"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">
              CSR Initiative: Empowering Ecopreneurs
            </h2>
            <p className="text-gray-600">
              We encourage eco-friendly startups and green innovators by
              providing awareness, mentorship, and exposure to clean energy
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* SCHOOL EDUCATION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Solar & Sustainability Education for Schools
            </h2>
            <p className="text-gray-600">
              Through school-level programs, we educate students about solar
              energy, climate responsibility, and sustainable living.
            </p>
          </div>

          <div className="w-full h-64 rounded-xl overflow-hidden">
            <img
              src={csrSchool}
              alt="Solar education for school students"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B1F3B] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Partner with Suryagrid Energy for CSR Initiatives
        </h2>
        <p className="text-gray-200 mb-6 max-w-3xl mx-auto">
          Schools, NGOs, startups, and CSR partners are welcome to collaborate
          with us in building a sustainable future.
        </p>
        <a
          href="/contact"
          className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
        >
          Contact Us for CSR Collaboration
        </a>
      </section>

    </main>
  );
}
