const mongoose = require("mongoose");
const Reminder = require("../models/medicationReminder");
const isValidId = (id) => mongoose.isValidObjectId(id);

exports.list = async (req, res) => {
  const page = Math.max(parseInt(req.query.page || "1", 10), 1);
  const limit = Math.max(parseInt(req.query.limit || "10", 10), 1);
  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    Reminder.find({ user: req.userId }).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    Reminder.countDocuments({ user: req.userId }),
  ]);
  res.json({ page, limit, total, pages: Math.ceil(total / limit), items });
};

exports.getOne = async (req, res) => {
  if (!isValidId(req.params.id)) return res.status(400).json({ error: "Invalid id" });
  const item = await Reminder.findOne({ _id: req.params.id, user: req.userId }).lean();
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
};

exports.create = async (req, res) => {
  const { medicationName, dosage, schedule, startDate, endDate, notes } = req.body;
  if (!medicationName || !dosage || !schedule)
    return res.status(400).json({ error: "medicationName, dosage and schedule are required" });

  const item = await Reminder.create({ user: req.userId, medicationName, dosage, schedule, startDate, endDate, notes });
  res.status(201).json(item);
};

exports.update = async (req, res) => {
  if (!isValidId(req.params.id)) return res.status(400).json({ error: "Invalid id" });
  const item = await Reminder.findOneAndUpdate(
    { _id: req.params.id, user: req.userId },
    { $set: req.body },
    { new: true, runValidators: true }
  );
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
};

exports.remove = async (req, res) => {
  if (!isValidId(req.params.id)) return res.status(400).json({ error: "Invalid id" });
  const deleted = await Reminder.findOneAndDelete({ _id: req.params.id, user: req.userId });
  if (!deleted) return res.status(404).json({ error: "Not found" });
  res.json({ ok: true });
};
