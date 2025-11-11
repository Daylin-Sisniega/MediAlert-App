export default function About() {
  return (
    <section
      style={{
        padding: "60px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "50px 40px",
          borderRadius: "18px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.12)",
          border: "1px solid #e6e6e6",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "800",
            textAlign: "center",
            color: "#0b7285",
            marginBottom: "10px",
          }}
        >
          About ADC Health Solutions
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "1.15rem",
            color: "#444",
            marginBottom: "40px",
          }}
        >
          Empowering daily health with simple, meaningful technology.
        </p>

        <p style={{ fontSize: "1.05rem", color: "#333" }}>
          <b>ADC Health Solutions</b> is a digital health company focused on improving everyday
          well-being through intuitive technology. Our goal is to support individuals in managing
          medication and health routines with clarity and confidence.
        </p>

        {/* Mission */}
        <h2
          style={{
            marginTop: "45px",
            color: "#0b7285",
            fontWeight: "700",
            borderBottom: "3px solid #0b7285",
            display: "inline-block",
            paddingBottom: "4px",
          }}
        >
          Mission
        </h2>
        <p style={{ color: "#333", marginTop: "10px" }}>
          To provide smart and easy-to-use digital health tools that promote consistency, independence,
          and long-term wellness.
        </p>

        {/* Vision */}
        <h2
          style={{
            marginTop: "35px",
            color: "#0b7285",
            fontWeight: "700",
            borderBottom: "3px solid #0b7285",
            display: "inline-block",
            paddingBottom: "4px",
          }}
        >
          Vision
        </h2>
        <p style={{ color: "#333", marginTop: "10px" }}>
          To become a trusted health-technology partner that empowers individuals and families to
          take control of their wellness journey with confidence.
        </p>

        {/* About App */}
        <h2
          style={{
            marginTop: "45px",
            color: "#0b7285",
            fontWeight: "700",
            borderBottom: "3px solid #0b7285",
            display: "inline-block",
            paddingBottom: "4px",
          }}
        >
          About MediAlert
        </h2>

        <p style={{ marginTop: "10px", color: "#333" }}>
          <b>MediAlert</b> is our first application release — a medication reminder and tracking tool
          designed to help users stay consistent with their health care routines.
        </p>

        <ul style={{ marginTop: "15px", marginLeft: "25px", color: "#333" }}>
          <li>Create and customize medication reminders</li>
          <li>Save dosage and scheduling details</li>
          <li>Track duration and add personal notes</li>
          <li>Secure login and private user profiles</li>
        </ul>

        <p style={{ marginTop: "25px", color: "#333" }}>
          Future releases will include:
        </p>

        <ul style={{ marginLeft: "25px", color: "#333", marginBottom: "40px" }}>
          <li>Smart notification alerts</li>
          <li>Multiple schedule and frequency modes</li>
          <li>Caregiver/family linked access</li>
          <li>Health tracking & progress dashboards</li>
        </ul>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontStyle: "italic",
            fontWeight: "600",
            fontSize: "1.1rem",
            color: "#0b7285",
          }}
        >
          ADC Health Solutions — supporting your wellness, one reminder at a time.
        </p>
      </div>
    </section>
  );
}
