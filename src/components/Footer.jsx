export default function Footer() {
  return (
    <footer className="bg-[#0B1F3B] text-gray-300">
      
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* BRAND */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white">
            Suryagrid <span className="text-yellow-400">Energy</span>
          </h3>
          <p className="mt-4 max-w-2xl text-gray-400">
            Suryagrid Energy provides reliable and high-quality solar energy
            solutions for homes, businesses, and housing societies across India.
          </p>
        </div>

        {/* CITIES GRID */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* CORE CITIES */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Key Cities We Serve
            </h4>
            <ul className="space-y-2">
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Noida (Gautam Buddh Nagar, UP)</li>
            </ul>
          </div>

          {/* WEST & ROHILKHAND */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              North & West Uttar Pradesh
            </h4>
            <ul className="space-y-2">
              <li>Bareilly</li>
              <li>Pilibhit</li>
              <li>Shahjahanpur</li>
              <li>Budaun</li>
              <li>Rampur</li>
              <li>Moradabad</li>
              <li>Amroha</li>
              <li>Bijnor</li>
              <li>Sambhal</li>
            </ul>
          </div>

          {/* NCR, BRAJ & DOAB */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              NCR, Braj & Central UP
            </h4>
            <ul className="space-y-2">
              <li>Meerut</li>
              <li>Ghaziabad</li>
              <li>Greater Noida</li>
              <li>Hapur</li>
              <li>Bulandshahr</li>
              <li>Muzaffarnagar</li>
              <li>Saharanpur</li>
              <li>Shamli</li>
              <li>Baghpat</li>
              <li>Agra</li>
              <li>Mathura</li>
              <li>Aligarh</li>
              <li>Hathras</li>
              <li>Firozabad</li>
              <li>Etah</li>
              <li>Kasganj</li>
              <li>Mainpuri</li>
              <li>Farrukhabad</li>
              <li>Kannauj</li>
              <li>Etawah</li>
              <li>Auraiya</li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Suryagrid Energy. All rights reserved.
          </p>
          <p>
            Clean • Reliable • Sustainable Solar Energy
          </p>
        </div>
      </div>

    </footer>
  );
}
