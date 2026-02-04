import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0B1F3B] text-white shadow-md relative">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
 <Link to="/" className="flex items-center">
  <img
    src={logo}
    alt="Suryagrid Energy logo"
    style={{
      height: "60px",        // ⬅ CHANGE THIS
      width: "auto",         // ⬅ KEEP auto (very important)
      maxWidth: "320px",     // ⬅ CHANGE THIS
      padding: "2px 0"       // ⬅ CHANGE THIS
    }}
  />
</Link>


        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <Link className="hover:text-yellow-400 transition" to="/">Home</Link>
          <Link className="hover:text-yellow-400 transition" to="/services">Services</Link>
          <Link className="hover:text-yellow-400 transition" to="/calculator">Calculator</Link>
          <Link className="hover:text-yellow-400 transition" to="/what-we-do">What We Do</Link>
          <Link className="hover:text-yellow-400 transition" to="/csr">CSR</Link>
          <Link className="hover:text-yellow-400 transition" to="/contact">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Accent Line */}
      <div className="h-[2px] bg-yellow-400"></div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B1F3B] border-t border-white/10">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 border-b border-white/10 hover:bg-white/10"
          >
            Home
          </Link>

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 border-b border-white/10 hover:bg-white/10"
          >
            Services
          </Link>

          {/* ✅ THIS WAS MISSING – NOW ADDED */}
          <Link
            to="/what-we-do"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 border-b border-white/10 hover:bg-white/10"
          >
            What We Do
          </Link>

            <Link
  to="/calculator"
  onClick={() => setMenuOpen(false)}
  className="block px-6 py-4 border-b border-white/10 hover:bg-white/10"
>
  Calculator
</Link>
          <Link
  to="/csr"
  onClick={() => setMenuOpen(false)}
  className="block px-6 py-4 border-b border-white/10 hover:bg-white/10"
>
  CSR
</Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-white/10"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
