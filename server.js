import express from "express";
import fetch from "node-fetch";   // ✅ ES module import
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Proxy to Flask ML service
app.post("/predict", async (req, res) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error communicating with ML service" });
  }
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://127.0.0.1:${PORT}`);
});
