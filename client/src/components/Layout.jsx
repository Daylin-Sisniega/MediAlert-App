// client/src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#0b1220" 
    }}>
      <Navbar />
      <main style={{
        flex: 1,
        maxWidth: 960,
        width: "100%",
        margin: "24px auto",
        padding: "0 16px",
        color: "#E5E7EB" 
      }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

