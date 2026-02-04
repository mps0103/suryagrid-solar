import { useEffect, useState } from "react";
import solar1 from "../assets/hero/solar1.jpg";
import solar2 from "../assets/hero/solar2.jpg";
import solar3 from "../assets/hero/solar6.jpg";

import { Link } from "react-router-dom";


const images = [solar1, solar2, solar3];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* HERO SLIDER */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Solar Energy Solutions"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Smart Solar Energy Solutions for a Sustainable Future
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Suryagrid Solar delivers high-performance solar systems for homes,
              businesses, and housing societies across India.
            </p>
            <div className="mt-8">
              <Link
  to="/contact"
  className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
>
  Get Free Consultation
</Link>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Our Solar Offerings
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            End-to-end solar solutions designed to meet residential, commercial,
            and housing society energy needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Residential Solar
              </h3>
              <p className="text-gray-600">
                Rooftop solar systems that reduce electricity bills and increase
                energy independence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Commercial Solar
              </h3>
              <p className="text-gray-600">
                Scalable solar solutions for offices, factories, and institutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Housing Societies
              </h3>
              <p className="text-gray-600">
                Centralized solar power for apartments and gated communities with
                strong ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
<section className="about-section">
  <div className="about-container">
    <h2>About Us</h2>

    <p>
      We are a solar energy company dedicated to empowering Indian households
      with high-quality, affordable, and government-approved solar solutions.
      Our goal is to support India’s transition towards clean energy by helping
      families reduce electricity bills while contributing to a sustainable
      future.
    </p>

    <p>
      We actively work in alignment with Government of India renewable energy
      initiatives, including <strong>PM Surya Ghar: Muft Bijli Yojana</strong>,
      enabling homeowners to benefit from subsidies, net metering, and
      simplified solar adoption. From consultation and system design to
      installation and after-sales support, we provide end-to-end rooftop solar
      solutions tailored for Indian homes and climatic conditions.
    </p>

    <p>
      Beyond installations, we strongly believe in social responsibility and
      nation-building. Through our CSR initiatives, we focus on creating
      <strong> Ecopreneurs and Agripreneurs</strong> by promoting solar awareness,
      skill development, and sustainable practices among youth, farmers, and
      students.
    </p>

    <p className="about-highlight">
      By combining technology, trust, and social impact, we are not just
      installing solar systems — we are helping build an energy-independent,
      environmentally responsible, and self-reliant India.
    </p>
  </div>
</section>

    </main>
  );
}
