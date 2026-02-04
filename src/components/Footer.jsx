
import { Link } from "react-router-dom";


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
        {/* CITIES GRID */}
       {/* CITIES GRID – ALIGNED LIKE SCREENSHOT */}
<div className="space-y-12">

  {/* ROW 1 */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div className="text-white font-semibold">
      Key Cities We Serve
    </div>
    <div>Delhi</div>
    <div>Mumbai</div>
    <div>Noida (Gautam Buddh Nagar, UP)</div>
  </div>

  {/* ROW 2 */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div className="text-white font-semibold">
      North & West Uttar Pradesh
    </div>
    <div>Bareilly</div>
    <div>Pilibhit</div>
    <div>Shahjahanpur</div>
    <div></div>
    <div>Budaun</div>
    <div>Rampur</div>
    <div>Moradabad</div>
    <div></div>
    <div>Amroha</div>
    <div>Bijnor</div>
    <div>Sambhal</div>
  </div>

  {/* ROW 3 */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div className="text-white font-semibold">
      NCR, Braj & Central UP
    </div>
    <div>Meerut</div>
    <div>Ghaziabad</div>
    <div>Greater Noida</div>
    <div></div>
    <div>Hapur</div>
    <div>Bulandshahr</div>
    <div>Muzaffarnagar</div>
    <div></div>
    <div>Saharanpur</div>
    <div>Shamli</div>
    <div>Baghpat</div>
    <div></div>
    <div>Agra</div>
    <div>Mathura</div>
    <div>Aligarh</div>
    <div></div>
    <div>Hathras</div>
    <div>Firozabad</div>
    <div>Etah</div>
    <div></div>
    <div>Kasganj</div>
    <div>Mainpuri</div>
    <div>Farrukhabad</div>
    <div></div>
    <div>Kannauj</div>
    <div>Etawah</div>
    <div>Auraiya</div>
  </div>

</div>

      </div>

      <div className="w-full flex justify-center gap-6 mt-4">
  <a
    href="/policy"
    className="text-gray-400 hover:text-yellow-400 hover:underline transition font-medium"
  >
    Policy
  </a>

  <a
    href="/disclaimer"
    className="text-gray-400 hover:text-yellow-400 hover:underline transition font-medium"
  >
    Disclaimer
  </a>
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
