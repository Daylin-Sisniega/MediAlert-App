const express = require("express");
const router = express.Router();

const imageRegex = /\/.+\.(svg|png|jpg|png|jpeg)$/;
const videoRegex = /\/.+\.(mp4|ogv)$/;

const ASSETS_BASE_URL = process.env.CLIENT_ASSETS_URL || "http://localhost:3000";

router.get(imageRegex, (req, res) => {
  const filePath = req.path;
  res.redirect(303, `${ASSETS_BASE_URL}/src${filePath}`);
});

router.get(videoRegex, (req, res) => {
  const filePath = req.path;
  res.redirect(303, `${ASSETS_BASE_URL}/src${filePath}`);
});

module.exports = router;
