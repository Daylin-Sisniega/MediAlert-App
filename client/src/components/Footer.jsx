import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{
      background: "#0A3D62",
      color: "white",
      padding: "26px 0",
      textAlign: "center",
      marginTop: "40px",
      fontSize: "0.95rem",
      letterSpacing: "0.3px"
    }}>
      <p style={{ margin: "0 0 6px" }}>
        © 2025 <b>ADC Health Solutions</b> — MediAlert. All rights reserved.
      </p>

      <p style={{ margin: "4px 0", opacity: 0.9 }}>
        Contact us:{" "}
        <a
          href="mailto:support@adchealthsolutions.com"
          style={{ color: "#AEE1FF", textDecoration: "none" }}
        >
          support@adchealthsolutions.com
        </a>
      </p>

      <p style={{ margin: "4px 0", opacity: 0.9 }}>
        Phone: (555) 123-7890
      </p>

      <div style={{ marginTop: 8, fontSize: "0.85rem" }}>
        <Link to="/support" style={{ color: "#AEE1FF", margin: "0 10px", textDecoration: "none" }}>
          Support
        </Link>
        <span style={{ opacity: 0.5 }}> | </span>
        <Link to="/privacy-policy" style={{ color: "#AEE1FF", margin: "0 10px", textDecoration: "none" }}>
          Privacy Policy
        </Link>
        <span style={{ opacity: 0.5 }}> | </span>
        <Link to="/terms-of-use" style={{ color: "#AEE1FF", margin: "0 10px", textDecoration: "none" }}>
          Terms of Use
        </Link>
      </div>

      <p style={{ marginTop: 10, fontSize: "0.85rem", opacity: 0.75 }}>
        Empowering your daily wellness — one reminder at a time.
      </p>
    </footer>
  );
}
