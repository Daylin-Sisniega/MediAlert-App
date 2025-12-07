import { getAuth } from "./auth-helper";
const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

function authHeaders() {
  const a = getAuth();
  return a?.token ? { Authorization: `Bearer ${a.token}` } : {};
}

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
