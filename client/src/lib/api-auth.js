import { getAuth } from "./auth-helper";

const API = import.meta.env.VITE_API_BASE || "http://localhost:3000";

/* helpers */
function authHeaders() {
  const a = getAuth();
  return a?.token ? { Authorization: `Bearer ${a.token}` } : {};
}

/* AUTH */
export async function registerUser(data) {
  const res = await fetch(`${API}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || "Register failed");
  return json; // { id, name, email, createdAt }
}

export async function loginUser(credentials) {
  const res = await fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || "Login failed");
  // json: { token, user: { id, name, email, ... } }
  return json;
}

/* PROFILE */
export async function getMyProfile() {
  const res = await fetch(`${API}/api/me`, { headers: { ...authHeaders() } });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "Error fetching profile");
  return data;
}

export async function updateMyProfile(payload) {
  const res = await fetch(`${API}/api/me`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "Error updating profile");
  return data;
}
