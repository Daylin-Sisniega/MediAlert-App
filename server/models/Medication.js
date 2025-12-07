const mongoose = require("mongoose");

const MedicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  medicationName: String,
  dosage: String,
  schedule: String,
  startDate: String,
  endDate: String,
  notes: String
}, { timestamps: true });

module.exports = mongoose.model("Medication", MedicationSchema);
