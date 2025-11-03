import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

const DATA_PATH = "../../zaplof-app/src/data/data.jsx";

// ✅ API to add experience
app.post("/experiences", (req, res) => {
  try {
    const { company, period, role, points } = req.body;

    if (!company || !period || !role || !points) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const newExperience = {
      company,
      period,
      role,
      points: points.split(",").map((p) => p.trim()),
    };

    const filePath = path.join(process.cwd(), DATA_PATH);
    let fileData = fs.readFileSync(filePath, "utf-8");

    const updated = fileData.replace(
      /(export const experiences = \[)([\s\S]*?)(\];)/,
      (match, start, middle, end) =>
        `${start}${middle}\n    ${JSON.stringify(newExperience, null, 4)},${end}`
    );

    fs.writeFileSync(filePath, updated);

    res.json({ success: true, newExperience });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
});

// ✅ API to get all experiences
app.get("/experiences", (req, res) => {
  try {
    const filePath = path.join(process.cwd(), DATA_PATH);
    const fileData = fs.readFileSync(filePath, "utf-8");

    // Extract only the experiences array using regex
    const match = fileData.match(/export const experiences = (\[[\s\S]*?\]);/);
    if (!match) {
      return res.status(500).json({ error: "Experiences array not found" });
    }

    // Parse into JSON
    const experiences = eval(match[1]); // ⚠️ uses eval, better to move to JSON file later
    res.json(experiences);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to read experiences", details: err.message });
  }
});

app.listen(5000, () =>
  console.log("✅ Server running on http://localhost:5000")
);
