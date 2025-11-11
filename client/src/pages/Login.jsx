// client/src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../lib/api-auth";
import { saveAuth } from "../lib/auth-helper";

export default function Login() {
  const nav = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("");
    if (!form.email || !form.password) {
      setMsg("Email and password are required");
      return;
    }
    try {
      setLoading(true);
      const data = await loginUser(form); // { token, user }
      saveAuth(data);
      setMsg(`Welcome ${data.user.name}`);
      setTimeout(() => nav("/reminders"), 500);
    } catch (err) {
      setMsg(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section style={{ padding: 20, maxWidth: 420, margin: "0 auto" }}>
      <h2>Log In</h2>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 10, marginTop: 10 }}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
        />
        <button disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
      </form>
      {msg && <div style={{ marginTop: 10 }}>{msg}</div>}

      <p style={{ marginTop: 10 }}>
        Don't have an account? <a href="/register">Sign Up</a>
      </p>
    </section>
  );
}
