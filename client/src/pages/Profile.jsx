import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, saveAuth, logout } from "../lib/auth-helper";
import { getMyProfile, updateMyProfile } from "../lib/api-user";

export default function Profile() {
  const nav = useNavigate();
  const auth = getAuth(); // { token, user }

  const [form, setForm] = useState({
    name: "",
    email: "",
    birthDate: "",
    phone: "",
    gender: "prefer_not_to_say",
    address: ""
  });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const p = await getMyProfile();
        setForm({
          name: p.name || "",
          email: p.email || "",
          birthDate: p.birthDate || "",
          phone: p.phone || "",
          gender: p.gender || "prefer_not_to_say",
          address: p.address || ""
        });
      } catch (e) {
        setMsg(e.message);
      }
    })();
  }, []);

  if (!auth) return <div style={{ padding: 20 }}>You must log in.</div>;

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSave(e) {
    e.preventDefault();
    setMsg("");
    try {
      const updated = await updateMyProfile({
        name: form.name,
        birthDate: form.birthDate,
        phone: form.phone,
        gender: form.gender,
        address: form.address
      });
      // Keep the name synchronized in localStorage
      saveAuth({ token: auth.token, user: { ...auth.user, name: updated.name } });
      setMsg("Profile updated ");
    } catch (err) {
      setMsg(err.message);
    }
  }

  function onLogout() {
    logout(); // clears token and user from localStorage
    nav("/profile");
    
  }

  return (
    <section style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <h2 style={{ margin: 0 }}>My Profile</h2>
        <button
          onClick={onLogout}
          style={{
            background: "#FF4D4D",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: 8,
            cursor: "pointer"
          }}
        >
          Log out
        </button>
      </div>

      <form onSubmit={onSave} style={{ display: "grid", gap: 10, marginTop: 12 }}>
        <input name="name" value={form.name} onChange={onChange} placeholder="Full name" />
        <input name="email" value={form.email} readOnly />
        <label>Birth date</label>
        <input type="date" name="birthDate" value={form.birthDate} onChange={onChange} />
        <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" />
        <select name="gender" value={form.gender} onChange={onChange}>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
          <option value="prefer_not_to_say">Prefer not to say</option>
        </select>
        <input name="address" value={form.address} onChange={onChange} placeholder="Address" />
        <button>Save changes</button>
      </form>

      {msg && <div style={{ marginTop: 10 }}>{msg}</div>}
    </section>
  );
}
