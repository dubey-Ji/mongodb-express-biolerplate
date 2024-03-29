import express from "express";
const router = express.Router();

router.get("/ping", (req, res) => {
  res.statusCode(200).json({ success: true, message: "pong" });
});

export default router;
