import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import WhatsAppFloat from "./components/WhatsAppFloat";

import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import Services from "./pages/Services";
import CSR from "./pages/CSR";
import Calculator from "./pages/Calculator";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import Policy from "./pages/Policy";



export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // ⏱️ 1.5 seconds loader

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />

      {/* Page content */}
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/services" element={<Services />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </div>

      <Footer />

      {/* WhatsApp Floating Button – appears on all pages */}
      <WhatsAppFloat  />
    </BrowserRouter>
  );
}
