import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const Item = ({ to, children }) => (
    <Link
      to={to} 
      onClick={() => setOpen(false)}
      style={{
        display: "block",
        padding: "10px 14px",
        borderRadius: 10,
        color: pathname === to ? "#0077FF" : "#E5E7EB",
        background: pathname === to ? "rgba(0,119,255,0.15)" : "transparent",
        fontWeight: pathname === to ? 600 : 500,
        
      }}
    >
      {children}
    </Link>
  );

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "#111827" }}>
      <div style={{
        maxWidth: 900, margin: "0 auto", padding: "10px 14px",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <Link to="/" style={{ color: "#0077FF", fontWeight: 700, fontSize: "1.1rem" }}>
          🩺 MediAlert
        </Link>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setOpen((v) => !v)}
          style={{ width: 36, height: 28, border: "none", background: "transparent", cursor: "pointer", position: "relative" }}
        >
          <span style={{
            position: "absolute", left: 0, right: 0, height: 3, background: "#FF4D4D",
            top: open ? 12 : 0, transform: open ? "rotate(45deg)" : "none", transition: "all .2s"
          }} />
          <span style={{
            position: "absolute", left: 0, right: 0, height: 3, background: "#E5E7EB",
            top: 12, opacity: open ? 0 : 1, transition: "opacity .2s"
          }} />
          <span style={{
            position: "absolute", left: 0, right: 0, height: 3, background: "#FF4D4D",
            bottom: open ? 13 : 0, transform: open ? "rotate(-45deg)" : "none", transition: "all .2s"
          }} />
        </button>
      </div>

      {open && (
        <div style={{
          position: "absolute", right: 12, top: 56,
          background: "#1F2937", border: "1px solid #374151",
          borderRadius: 14, width: 220, padding: 8,
          boxShadow: "0 10px 30px rgba(0,0,0,.4)"
        }}>
          <Item to="/">Home</Item>
          <Item to="/about">About</Item>
          <Item to="/reminders">Reminders</Item>
          <Item to="/profile">Profile</Item>
          <Item to="/login">Log In</Item>
          <Item to="/register">Sing Up</Item>
        </div>
      )}
    </header>
  );
}
