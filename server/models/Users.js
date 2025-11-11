const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    passwordHash: { type: String, required: true },

     birthDate: { type: String },     // guarda "YYYY-MM-DD" para hacerlo simple
    phone: { type: String },
    gender: { type: String, enum: ["female","male","other","prefer_not_to_say"], default: "prefer_not_to_say" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
