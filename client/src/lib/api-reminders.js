import { getAuth } from "./auth-helper";

const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

function authHeaders() {
  const a = getAuth();
  return a?.token ? { Authorization: `Bearer ${a.token}` } : {};
}

export async function listReminders() {
  const res = await fetch(`${API}/api/reminders`, {
    headers: { ...authHeaders() },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "Error fetching reminders");
  return Array.isArray(data.items) ? data.items : data;
}

export async function createReminder(payload) {
  const res = await fetch(`${API}/api/reminders`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "Error creating reminder");
  return data;
}

export async function updateReminder(id, payload) {
  const res = await fetch(`${API}/api/reminders/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "Error updating reminder");
  return data;
}

export async function deleteReminder(id) {
  const res = await fetch(`${API}/api/reminders/${id}`, {
    method: "DELETE",
    headers: { ...authHeaders() },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "Error deleting reminder");
  return data;
}
