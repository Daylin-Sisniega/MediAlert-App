const User = require("../models/Users");

exports.getMe = async (req, res) => {
  const user = await User.findById(req.userId).select("-passwordHash -__v");
  if (!user) return res.status(404).json({ error: "Not found" });
  res.json(user);
};

exports.updateMe = async (req, res) => {
  const allowed = ["name","birthDate","phone","gender","address"];
  const updates = {};
  for (const k of allowed) if (k in req.body) updates[k] = req.body[k];

  const user = await User.findByIdAndUpdate(req.userId, updates, { new: true }).select("-passwordHash -__v");
  if (!user) return res.status(404).json({ error: "Not found" });
  res.json(user);
};
