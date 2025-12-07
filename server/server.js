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


app.use(
  cors({
    origin: "http://localhost:5173", // front Vite
    credentials: true,
  })
);
app.use(express.json());


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



