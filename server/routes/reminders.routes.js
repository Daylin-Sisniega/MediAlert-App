const express = require("express");
const mongoose = require("mongoose");
const Reminder = require("../models/medicationReminder"); // Asegura nombre/case correcto
const auth = require("../middleware/auth");
const c = require("../controllers/reminders.controller");

const router = express.Router();

//Aplica auth a TODAS las rutas de este router
router.use(auth);

/** Helpers */
function isValidId(id) {
  return mongoose.isValidObjectId(id);
}

/**
 * GET /api/reminders
 * Lista SOLO los recordatorios del usuario logueado
 */
router.get("/", async (req, res) => {
  try {
    const page = Math.max(parseInt(req.query.page || "1", 10), 1);
    const limit = Math.max(parseInt(req.query.limit || "10", 10), 1);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Reminder.find({ user: req.user.id })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Reminder.countDocuments({ user: req.user.id }),
    ]);

    res.json({
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      items,
    });
  } catch (e) {
    console.error("GET /reminders error:", e.message);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * GET /api/reminders/:id
 * Obtiene un recordatorio del usuario (verifica propiedad)
 */
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ error: "Invalid id" });

    const item = await Reminder.findOne({ _id: id, user: req.user.id }).lean();
    if (!item) return res.status(404).json({ error: "Not found" });

    res.json(item);
  } catch (e) {
  console.error("POST /reminders error:", e); 
  res.status(500).json({ error: "Server error" });
}

});

/**
 * POST /api/reminders
 * Crea un recordatorio para el usuario logueado
 * body: { medicationName, dosage, schedule, startDate?, endDate?, notes? }
 */
router.post("/", async (req, res) => {
  try {
    const { medicationName, dosage, schedule, startDate, endDate, notes } = req.body;
    if (!medicationName || !dosage || !schedule) {
      return res.status(400).json({ error: "medicationName, dosage and schedule are required" });
    }

    const item = await Reminder.create({
      user: req.user.id,
      medicationName,
      dosage,
      schedule,
      startDate,
      endDate,
      notes,
    });

    res.status(201).json(item);
  } catch (e) {
    console.error("POST /reminders error:", e.message);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * PUT /api/reminders/:id
 * Actualiza un recordatorio del usuario (verifica propiedad)
 */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ error: "Invalid id" });

    const item = await Reminder.findOneAndUpdate(
      { _id: id, user: req.user.id },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  } catch (e) {
    console.error("PUT /reminders/:id error:", e.message);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * DELETE /api/reminders/:id
 * Elimina un recordatorio del usuario (verifica propiedad)
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ error: "Invalid id" });

    const deleted = await Reminder.findOneAndDelete({ _id: id, user: req.user.id });
    if (!deleted) return res.status(404).json({ error: "Not found" });

    res.json({ ok: true });
  } catch (e) {
    console.error("DELETE /reminders/:id error:", e.message);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
