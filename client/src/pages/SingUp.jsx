import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../lib/api-auth.js";

function validatePassword(pw) {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  return regex.test(pw);
}

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("");

    if (!form.name || !form.email || !form.password) {
      setMsg("All fields are required.");
      return;
    }

    if (!validatePassword(form.password)) {
      setMsg("Password must be at least 8 characters, include one uppercase letter, one number, and one special symbol.");
      return;
    }

    try {
      setLoading(true);
      const user = await registerUser(form);
      setMsg(`Account created for ${user.email}`);
      setTimeout(() => nav("/login"), 800);
    } catch (err) {
      setMsg(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      style={{
        padding: 20,
        maxWidth: 420,
        margin: "0 auto",
        textAlign: "center"
      }}
    >
      <h2>Create account</h2>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 10, marginTop: 10 }}>
        <input name="name" placeholder="Name" value={form.name} onChange={onChange} />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} />

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>

      {msg && <div style={{ marginTop: 10 }}>{msg}</div>}

      <p style={{ marginTop: 10 }}>
        Already have an account? <a href="/login">Log In</a>
      </p>
    </section>
  );
}
