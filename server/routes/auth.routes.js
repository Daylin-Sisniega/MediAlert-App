const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { register, login } = require("../controllers/auth.controller");
const User = require("../models/Users"); 

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

/** POST /api/auth/register */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, birthDate, phone, gender, avatarUrl, address } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ error: "name, email and password are required" });

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ error: "Email is already registered" });

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await User.create({
      name, email, passwordHash,
      birthDate, phone, gender, avatarUrl, address
    });

    return res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      birthDate: user.birthDate,
      phone: user.phone,
      gender: user.gender,
      avatarUrl: user.avatarUrl,
      address: user.address,
      createdAt: user.createdAt
    });
  } catch (err) {
    console.error("register error:", err.message);
    return res.status(500).json({ error: "Server error" });
  }
});

/** POST /api/auth/login */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "email and password are required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    console.error("login error:", err.message);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
