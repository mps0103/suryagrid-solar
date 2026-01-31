export default function Footer() {
  return (
    <footer style={{ background: "#0F172A", color: "#fff", marginTop: "60px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 16px",
          display: "grid",
          gap: "20px"
        }}
      >
        <strong>Suryagrid Solar</strong>
        <p style={{ color: "#94a3b8" }}>
          Reliable solar energy solutions for a sustainable future.
        </p>

        <p style={{ fontSize: "14px", color: "#94a3b8" }}>
          © {new Date().getFullYear()} Suryagrid Solar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
