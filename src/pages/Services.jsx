export default function Services() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="bg-[#0B1F3B] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Solar Services & Buying Guide
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto px-4">
          Complete buying guide for On-Grid and Off-Grid solar systems in India.
          Understand costs, components, subsidies, and choose the right system
          with confidence.
        </p>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Solar Systems Explained – On-Grid & Off-Grid
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            Solar energy systems are designed to convert sunlight into usable
            electricity for your home or business. Choosing the right solar
            system depends on your electricity usage, power availability,
            budget, and backup requirements. The two most common types in India
            are On-Grid and Off-Grid solar systems.
          </p>
        </div>
      </section>

      {/* ================= HOW SOLAR WORKS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            How Solar Energy Works
          </h2>
          <p className="text-gray-700 max-w-4xl leading-relaxed">
            Sunlight falls on solar panels installed on your rooftop. These
            panels generate DC electricity, which is converted into AC
            electricity by a solar inverter. The electricity is then used to
            power your home appliances. In some systems, excess power is stored
            in batteries or exported to the grid.
          </p>

          {/* IMAGE PLACEHOLDER – SOLAR WORKING DIAGRAM */}
          {/*
          <div className="mt-6 w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Image: How Solar Energy Works</span>
          </div>
          */}
        </div>
      </section>

      {/* ================= ON-GRID BUYING GUIDE ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            On-Grid Solar System Buying Guide
          </h2>
          <p className="text-gray-700 max-w-4xl mb-4">
            An On-Grid solar system is connected to the electricity grid. It
            allows you to use solar power during the day and draw electricity
            from the grid when required.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Equipment Used in On-Grid Solar
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Solar panels</li>
            <li>On-grid solar inverter</li>
            <li>Net meter</li>
            <li>Mounting structure</li>
            <li>AC & DC cables and safety devices</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Advantages of On-Grid Solar
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Lowest cost solar system</li>
            <li>Government subsidy available</li>
            <li>Net-metering reduces electricity bills</li>
            <li>High return on investment</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            When to Choose On-Grid Solar
          </h3>
          <p className="text-gray-700">
            Choose on-grid solar if you have reliable grid power and want maximum
            savings with minimum investment.
          </p>
        </div>
      </section>

      {/* ================= OFF-GRID BUYING GUIDE ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Off-Grid Solar System Buying Guide
          </h2>
          <p className="text-gray-700 max-w-4xl mb-4">
            An Off-Grid solar system works independently of the electricity grid
            and stores power in batteries for backup.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Equipment Used in Off-Grid Solar
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Solar panels</li>
            <li>Off-grid solar inverter</li>
            <li>Battery bank (Lithium / Tubular)</li>
            <li>Solar charge controller</li>
            <li>Mounting structure and safety accessories</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Advantages of Off-Grid Solar
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Power backup during outages</li>
            <li>No dependency on grid</li>
            <li>Ideal for remote or rural areas</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            When to Choose Off-Grid Solar
          </h3>
          <p className="text-gray-700">
            Choose off-grid solar if you face frequent power cuts or live in an
            area with unreliable electricity supply.
          </p>
        </div>
      </section>

      {/* ================= PRICE ESTIMATION ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Solar System Price Estimation in India
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>1 kW system: ₹85,000 – ₹1,00,000</li>
            <li>2 kW system: ₹1.6 – ₹2.2 lakh</li>
            <li>3 kW system: ₹2.5 – ₹3.1 lakh</li>
            <li>4 kW system: ₹3.2 – ₹4.5 lakh</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Price Depends On
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Battery type and capacity</li>
            <li>Inverter quality</li>
            <li>Load requirement</li>
            <li>Backup hours needed</li>
            <li>Installation complexity</li>
          </ul>
        </div>
      </section>

      {/* ================= SUBSIDY ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Government Subsidy on Solar Systems
          </h2>
          <p className="text-gray-700 max-w-4xl">
            Government subsidy is available only for residential on-grid solar
            systems as per PM Surya Ghar Muft Bijli Yojana. Off-grid systems do
            not qualify for subsidy.
          </p>
        </div>
      </section>

      {/* ================= WHY SURYAGRID ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Suryagrid Energy
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Focus on right system, not expensive system</li>
            <li>Honest pricing and clear guidance</li>
            <li>Quality components only</li>
            <li>End-to-end installation & support</li>
            <li>ROI-focused solar planning</li>
          </ul>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">
                Which solar system is better – On-Grid or Off-Grid?
              </h3>
              <p className="text-gray-700 mt-1">
                On-grid is better for savings, off-grid is better for backup.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is battery required in on-grid solar?
              </h3>
              <p className="text-gray-700 mt-1">
                No, batteries are not required in on-grid systems.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does off-grid solar get subsidy?
              </h3>
              <p className="text-gray-700 mt-1">
                No, subsidy is not available for off-grid solar systems.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
