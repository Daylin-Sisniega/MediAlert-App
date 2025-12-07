const KEY = "medialert_jwt";
const REMINDERS_KEY = "medialert.reminders";

// Use sessionStorage so every link does have the option to have their own account
function setItem(k, v) { sessionStorage.setItem(k, v); }
function getItem(k) { return sessionStorage.getItem(k); }
function removeItem(k) { sessionStorage.removeItem(k); }

export function saveAuth({ token, user }) {
  setItem(KEY, JSON.stringify({ token, user }));
  removeItem(REMINDERS_KEY);
}

export function getAuth() {
  try {
    const raw = getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  return !!getAuth()?.token;
}

export function logout() {
  removeItem(KEY);
  removeItem(REMINDERS_KEY);
}