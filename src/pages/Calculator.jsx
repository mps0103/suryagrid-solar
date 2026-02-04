import { useState } from "react";

import heroImg from "../assets/calculator/calculator-hero.png";
import smartImg from "../assets/calculator/calculator-info.png";
import whyUsImg from "../assets/calculator/calculator-hero.png";


export default function Calculator() {
  const [bill, setBill] = useState("");
  const [connection, setConnection] = useState("Residential");
  const [systemType, setSystemType] = useState("On-Grid");
  const [result, setResult] = useState(null);

  const calculateSolar = () => {
    const monthlyBill = Number(bill);
    if (!monthlyBill || monthlyBill < 500) {
      alert("Please enter a valid monthly electricity bill (₹500 or more)");
      return;
    }

    const unitCost = 7;
    const monthlyUnits = monthlyBill / unitCost;
    const yearlyUnits = monthlyUnits * 12;

    const systemSize = Math.ceil(yearlyUnits / 1500);
    const roofArea = systemSize * 100;
    const costPerKW = 60000;
    const baseCost = systemSize * costPerKW;

    const subsidy =
      connection === "Residential" && systemType === "On-Grid"
        ? Math.min(78000, systemSize * 15000)
        : 0;

    const finalCost = baseCost - subsidy;
    const monthlySavings = monthlyBill * 0.9;
    const yearlySavings = monthlySavings * 12;
    const payback = (finalCost / yearlySavings).toFixed(1);

    setResult({
      systemSize,
      roofArea,
      baseCost,
      subsidy,
      finalCost,
      monthlySavings,
      payback,
      co2: (systemSize * 1.2).toFixed(1)
    });
  };

  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="bg-[#0B1F3B] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Solar Calculator
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto px-4">
          Calculate your solar savings, system size, subsidy and ROI using
          accurate India-specific data.
        </p>
      </section>

      {/* HERO IMAGE */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <img src={heroImg} alt="Solar calculator India" className="w-full rounded-xl" />
        </div>
      </section>

      {/* ================= GO SOLAR SMART ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Go Solar the Smart Way with Suryagrid Energy
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Before investing in solar panels, it is important to understand
              how much you can generate, save, and recover over time.
              Our calculator gives you clarity — not exaggerated promises.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Electricity generation potential</li>
              <li>Monthly savings on power bills</li>
              <li>Ideal solar system size</li>
              <li>Return on investment (ROI)</li>
              <li>Suitability of solar for your home</li>
            </ul>
          </div>

          <img
            src={smartImg}
            alt="Go solar the smart way"
            className="w-100 mx-auto rounded-lg"
          />
        </div>
      </section>

      {/* ================= CALCULATOR ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Solar Savings Calculator
          </h2>

          <div className="grid gap-6">
            <input
              type="number"
              placeholder="Monthly Electricity Bill (₹)"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              className="border p-4 rounded-md w-full text-lg"
            />

            <select
              className="border p-4 rounded-md text-lg"
              value={connection}
              onChange={(e) => setConnection(e.target.value)}
            >
              <option>Residential</option>
              <option>Commercial</option>
            </select>

            <select
              className="border p-4 rounded-md text-lg"
              value={systemType}
              onChange={(e) => setSystemType(e.target.value)}
            >
              <option>On-Grid</option>
              <option>Off-Grid</option>
              <option>Not Sure</option>
            </select>

            <button
              onClick={calculateSolar}
              className="bg-yellow-400 text-black font-semibold py-4 rounded-md hover:bg-yellow-300 transition text-lg"
            >
              Calculate My Solar Savings
            </button>
          </div>

          {result && (
            <div className="mt-12 bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-6">
                Your Solar Calculation Summary
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 text-gray-700 text-lg">
                <p>⚡ <strong>System Size:</strong> {result.systemSize} kW</p>
                <p>🏠 <strong>Roof Area:</strong> {result.roofArea} sq.ft</p>
                <p>💰 <strong>Installation Cost:</strong> ₹{result.baseCost.toLocaleString()}</p>
                <p>🏷️ <strong>Subsidy:</strong> ₹{result.subsidy.toLocaleString()}</p>
                <p>📉 <strong>Final Cost:</strong> ₹{result.finalCost.toLocaleString()}</p>
                <p>💸 <strong>Monthly Savings:</strong> ₹{Math.round(result.monthlySavings)}</p>
                <p>📆 <strong>Payback Period:</strong> {result.payback} years</p>
                <p>🌱 <strong>CO₂ Reduction:</strong> {result.co2} tons/year</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Go Solar with Suryagrid Energy
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Transparent pricing & honest advice</li>
              <li>Subsidy guidance and documentation support</li>
              <li>High-quality components only</li>
              <li>Long-term service mindset</li>
              <li>Focus on ROI, not just installation</li>
            </ul>
          </div>

          <img
            src={whyUsImg}
            alt="Why choose Suryagrid Energy"
            className="w-80 mx-auto rounded-lg"
          />
        </div>
      </section>

      {/* ================= FAQ (PROFESSIONAL STYLE) ================= */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">
                Is this solar calculator free to use?
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Yes. This calculator is completely free and does not require
                any registration or payment.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Are the savings shown guaranteed?
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                The savings are realistic estimates based on Indian conditions.
                Actual savings may vary depending on roof orientation, shading
                and electricity usage.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Does the calculator include government subsidy?
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Yes. Residential on-grid subsidy is included as per current
                government guidelines.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Can this calculator be used for off-grid systems?
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Yes, but subsidy benefits are not applicable for off-grid solar systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL THOUGHT ================= */}
      <section className="py-20 bg-[#0B1F3B] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Final Thought
        </h2>
        <p className="text-gray-200 max-w-3xl mx-auto px-4 leading-relaxed">
          Solar is not just about panels — it’s about long-term savings,
          energy independence and smart planning. Start with clarity.
          Start with the Suryagrid Energy Solar Calculator.
        </p>
      </section>

    </main>
  );
}
