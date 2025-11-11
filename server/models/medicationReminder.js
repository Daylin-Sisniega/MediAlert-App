// server/models/medicationReminder.js
const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    medicationName: { type: String, required: true },
    dosage: { type: String, required: true },
    schedule: { type: String, required: true },
    startDate: { type: String },
    endDate: { type: String },
    notes: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("MedicationReminder", reminderSchema);
