import { useEffect, useState } from "react";
import { listReminders, createReminder, updateReminder, deleteReminder } from "../lib/api-reminders";

const empty = { medicationName: "", dosage: "", schedule: "", startDate: "", endDate: "", notes: "" };

export default function Reminders() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  async function load() {
    try {
      setLoading(true);
      const data = await listReminders();   
      setItems(data);
      setMsg("");
    } catch (e) {
      setMsg(e.message || "Error loading reminders");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("");
    if (!form.medicationName || !form.dosage || !form.schedule) {
      setMsg("Name, dosage and schedule are required.");
      return;
    }
    try {
      if (editingId) {
        await updateReminder(editingId, form);
        setEditingId(null);
      } else {
        await createReminder(form);
      }
      setForm(empty);
      await load(); 
    } catch (e) {
      setMsg(e.message || "Server error");
    }
  }

  async function onDelete(id) {
    try {
      await deleteReminder(id);
      await load();
    } catch (e) {
      setMsg(e.message || "Server error");
    }
  }

  function startEdit(it) {
    setEditingId(it._id);
    setForm({
      medicationName: it.medicationName || "",
      dosage: it.dosage || "",
      schedule: it.schedule || "",
      startDate: it.startDate?.slice(0,10) || "",
      endDate: it.endDate?.slice(0,10) || "",
      notes: it.notes || ""
    });
  }

  return (
    <section style={{ paddingTop: 20 }}>
      <h1>Medication Reminders</h1>
      {msg && <div style={{ margin: "10px 0", color: "#b91c1c" }}>{msg}</div>}

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 8, marginTop: 16 }}>
        <input name="medicationName" placeholder="Medication name *" value={form.medicationName} onChange={onChange}/>
        <input name="dosage" placeholder="Dosage *" value={form.dosage} onChange={onChange}/>
        <input name="schedule" placeholder="Schedule *" value={form.schedule} onChange={onChange}/>
        <input name="startDate" type="date" value={form.startDate} onChange={onChange}/>
        <input name="endDate" type="date" value={form.endDate} onChange={onChange}/>
        <input name="notes" placeholder="Notes" value={form.notes} onChange={onChange}/>
        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit">{editingId ? "Update" : "Add Reminder"}</button>
          {editingId && (
            <button type="button" onClick={() => { setEditingId(null); setForm(empty); }}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <hr style={{ margin: "20px 0" }} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul style={{ display: "grid", gap: 12, listStyle: "none", padding: 0 }}>
          {items.map((it) => (
            <li key={it._id} style={{ border: "1px solid #374151", borderRadius: 12, padding: 12 }}>
              <strong>{it.medicationName}</strong> — {it.dosage}
              <div>{it.schedule}</div>
              {it.startDate && <div>Start: {String(it.startDate).slice(0,10)}</div>}
              {it.endDate && <div>End: {String(it.endDate).slice(0,10)}</div>}
              {it.notes && <div>Notes: {it.notes}</div>}
              <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
                <button onClick={() => startEdit(it)}>Edit</button>
                <button onClick={() => onDelete(it._id)} style={{ background: "#FF4D4D" }}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
