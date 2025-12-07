export default function Support() {
  return (
    <section
      style={{
        padding: 24,
        maxWidth: 800,
        margin: "0 auto",
        color: "inherit"  
      }}
    >
      <h2 style={{ marginBottom: 12 }}>Support & Help</h2>
      <p>If you need assistance or have questions, we are here to help.</p>

      <div
        style={{
          marginTop: 16,
          padding: 16,
          borderRadius: 12,
          background: "rgba(255,255,255,.06)"
        }}
      >
        <p style={{ margin: 0 }}>
          <b>Email:</b>{" "}
          <a href="mailto:support@adchealthsolutions.com" style={{ color: "#AEE1FF" }}>
            support@adchealthsolutions.com
          </a>
        </p>
        <p style={{ margin: "8px 0 0" }}>
          <b>Phone:</b> (555) 123-7890
        </p>
      </div>

      <p style={{ marginTop: 16 }}>Send us a message and we will get back to you soon:</p>

      <textarea
        placeholder="Write your message here..."
        style={{
          width: "100%",
          height: 120,
          borderRadius: 8,
          border: "1px solid #2b3345",
          background: "rgba(255,255,255,.08)",
          color: "#E5E7EB",
          padding: 10
        }}
      />
      <button
        style={{
          marginTop: 12,
          padding: "10px 16px",
          border: "none",
          borderRadius: 8,
          background: "#2563eb",
          color: "white",
          cursor: "pointer"
        }}
      >
        Send
      </button>
    </section>
  );
}
