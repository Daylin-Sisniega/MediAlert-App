export default function Modal({ title, children, onClose }) {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.65)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999
    }}>
      <div style={{
        background: "#1e293b",
        color: "white",
        padding: "24px",
        borderRadius: "10px",
        width: "90%",
        maxWidth: "700px",
        maxHeight: "80vh",
        overflowY: "auto",
        boxShadow: "0 0 20px rgba(0,0,0,0.4)"
      }}>
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        <div style={{ marginTop: 12, lineHeight: "1.6" }}>
          {children}
        </div>

        <button
          onClick={onClose}
          style={{
            marginTop: 20,
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#38BDF8",
            color: "#0f172a",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
