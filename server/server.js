require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

// Rutas y middleware
const authRoutes = require("./routes/auth.routes");
const requireAuth = require("./middleware/auth");
const meRoutes = require("./routes/me.routes")
const remindersRoutes = require("./routes/reminders.routes");
const app = express();

const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";
app.use(
  cors({
    origin: CLIENT_ORIGIN, // antes estaba hardcodeado
    credentials: true,
  })
);

connectDB();

// Rutas públicas 
app.get("/", (_req, res) => {
  res.send("🩺 MediAlert API is running");
});

app.get("/health", (_req, res) => {
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  res.json({ api: "MediAlert API", dbState: states[mongoose.connection.readyState] });
});

// Agrupa autenticación
app.use("/api/auth", authRoutes);
app.use("/api/me", requireAuth, meRoutes);
app.use("/api/reminders", requireAuth, remindersRoutes);

// Rutas protegidas
app.get("/api/secure/ping", requireAuth, (req, res) => {
  res.json({ ok: true, user: req.user });
});

//404 
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Manejador global de errores 
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Server error" });
});

// Start 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` MediAlert API http://localhost:${PORT}`);
});



