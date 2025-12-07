import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section
      style={{
        padding: "50px 20px",
        maxWidth: 1000,
        margin: "0 auto",
        fontFamily: "Inter, system-ui, Arial, sans-serif",
      }}
    >
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #e6fcf5 0%, #d0ebff 100%)",
          border: "1px solid #c5e6ff",
          borderRadius: 18,
          padding: "42px 28px",
          boxShadow: "0 8px 24px rgba(0,0,0,.10)",
          marginBottom: 28,
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.4rem", margin: 0, color: "#0b7285", fontWeight: 800 }}>
          Welcome to MediAlert 🩺
        </h1>
        <p style={{ marginTop: 10, color: "#244" }}>
          Manage your medications easily and stay organized with smart reminders.
        </p>
        <Link
          to="/reminders"
          style={{
            marginTop: 18,
            display: "inline-block",
            background: "#0b7285",
            color: "white",
            padding: "10px 16px",
            borderRadius: 10,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Add my first reminder
        </Link>
      </div>

      {/* Benefits */}
      <section
        style={{
          background: "white",
          border: "1px solid #e8eaef",
          borderRadius: 16,
          padding: 24,
          boxShadow: "0 6px 18px rgba(0,0,0,.08)",
          marginBottom: 26,
        }}
      >
        <h2
          style={{
            margin: 0,
            marginBottom: 14,
            color: "#0b7285",
            fontWeight: 800,
            fontSize: "1.6rem",
          }}
        >
          Benefits of taking your medication on time
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 14,
          }}
        >
          {[
            {
              t: "Better treatment results",
              d: "Consistent doses help medicines work as prescribed.",
            },
            {
              t: "Fewer complications",
              d: "Reduces relapses and adverse events from missed doses.",
            },
            {
              t: "Peace of mind",
              d: "Know exactly what to take and when—no more guesswork.",
            },
            {
              t: "Support for caregivers",
              d: "Keep routines organized for you and your loved ones.",
            },
          ].map((c, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #eef1f5",
                borderRadius: 14,
                padding: 14,
                background: "#fafcff",
              }}
            >
              <div style={{ fontWeight: 700, marginBottom: 6, color: "#0b7285" }}>{c.t}</div>
              <div style={{ color: "#333" }}>{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="testimonials"
        style={{
          background: "white",
          border: "1px solid #e8eaef",
          borderRadius: 16,
          padding: 24,
          boxShadow: "0 6px 18px rgba(0,0,0,.08)",
          marginBottom: 26,
        }}
      >
        <h2
          style={{
            margin: 0,
            marginBottom: 14,
            color: "#0b7285",
            fontWeight: 800,
            fontSize: "1.6rem",
          }}
        >
          What our users are saying
        </h2>

        <div style={{ display: "grid", gap: 14 }}>
          {[
            {
              q: `"MediAlert helped me finally stay on track with my morning medication. I feel more energetic and consistent."`,
              a: "— Emily R. ★★★★★",
            },
            {
              q: `"The reminders are simple and reliable. I love adding notes like 'take with food' so I never forget."`,
              a: "— James L. ★★★★★",
            },
            {
              q: `"My mom and I both use it. It’s easy to update doses and see what’s next. Huge stress-reliever!"`,
              a: "— Sarah T. ★★★★★",
            },
            {
              q: `"I used to miss doses on busy days. Now I don’t. The app just works."`,
              a: "— Michael P. ★★★★★",
            },
          ].map((t, i) => (
            <blockquote
              key={i}
              style={{
                margin: 0,
                padding: "14px 16px",
                borderRadius: 12,
                background: "#f8fbff",
                border: "1px solid #e8f1ff",
                color: "#223",
              }}
            >
              <i>{t.q}</i>
              <div style={{ marginTop: 8, fontWeight: 600, color: "#0b7285" }}>{t.a}</div>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          background: "white",
          border: "1px solid #e8eaef",
          borderRadius: 16,
          padding: 24,
          boxShadow: "0 6px 18px rgba(0,0,0,.08)",
          marginBottom: 26,
        }}
      >
        <h2
          style={{
            margin: 0,
            marginBottom: 14,
            color: "#0b7285",
            fontWeight: 800,
            fontSize: "1.6rem",
          }}
        >
          Frequently Asked Questions
        </h2>

        {[
          {
            q: "Is my data private?",
            a: "Yes. Each account sees only its own reminders. Data is stored securely per user.",
          },
          {
            q: "Can I set multiple reminders for the same medication?",
            a: "Yes, add as many as you need (e.g., morning and evening).",
          },
          {
            q: "What happens if I change phones or browsers?",
            a: "Your reminders live in your account, so they appear wherever you log in.",
          },
          {
            q: "Can caregivers help?",
            a: "Upcoming releases will include caregiver sharing to coordinate routines.",
          },
        ].map((f, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #eef1f5",
              borderRadius: 12,
              padding: 14,
              marginBottom: 10,
              background: "#fcfeff",
            }}
          >
            <div style={{ fontWeight: 700, color: "#0b7285" }}>{f.q}</div>
            <div style={{ color: "#333", marginTop: 6 }}>{f.a}</div>
          </div>
        ))}
      </section>

      {/* Health Tips */}
      <section
        style={{
          background: "white",
          border: "1px solid #e8eaef",
          borderRadius: 16,
          padding: 24,
          boxShadow: "0 6px 18px rgba(0,0,0,.08)",
          marginBottom: 10,
        }}
      >
        <h2
          style={{
            margin: 0,
            marginBottom: 14,
            color: "#0b7285",
            fontWeight: 800,
            fontSize: "1.6rem",
          }}
        >
          Quick health tips for better adherence
        </h2>
        <ul style={{ marginLeft: 22, color: "#333", lineHeight: 1.6 }}>
          <li>Pair pills with daily routines (e.g., after brushing your teeth).</li>
          <li>Keep medications in a visible, safe place—away from kids and sunlight.</li>
          <li>Use clear labels and keep a simple list of what each dose is for.</li>
          <li>When in doubt, ask your pharmacist or doctor—don’t guess or skip.</li>
        </ul>
        <div style={{ marginTop: 14 }}>
          <Link
            to="/reminders"
            style={{
              background: "#0b7285",
              color: "white",
              padding: "10px 16px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Go to Reminders
          </Link>
        </div>
      </section>
    </section>
  );
}
