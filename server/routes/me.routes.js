const express = require("express");
const User = require("../models/Users");
const { getMe, updateMe } = require("../controllers/me.controller");
const router = express.Router();

router.get("/", getMe);
router.put("/", updateMe);

// GET perfil
router.get("/", async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-passwordHash -__v");
    if (!user) return res.status(404).json({ error: "Not found" });
    res.json(user);
  } catch (e) {
    console.error("GET /api/me error:", e);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT actualizar perfil
router.put("/", async (req, res) => {
  try {
    const allowed = ["name","birthDate","phone","gender","avatarUrl","address"];
    const updates = {};
    for (const k of allowed) if (k in req.body) updates[k] = req.body[k];

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updates },
      { new: true, runValidators: true }
    ).select("-passwordHash -__v");

    if (!user) return res.status(404).json({ error: "Not found" });
    res.json(user);
  } catch (e) {
    console.error("PUT /api/me error:", e);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
