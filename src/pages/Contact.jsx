export default function Contact() {
  return (
    <main style={{ padding: "80px 16px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Contact Suryagrid Solar</h1>
      <p style={{ color: "#64748B", marginBottom: "30px" }}>
        Get in touch with us for a free solar consultation.
      </p>

      <form style={{ display: "grid", gap: "16px" }}>
        <input placeholder="Full Name" />
        <input placeholder="Email Address" />
        <input placeholder="Phone Number" />
        <textarea placeholder="Your Message" rows="4" />
        <button className="btn-primary">Submit</button>
      </form>
    </main>
  );
}
