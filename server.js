
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/generate", (req, res) => {
    const { age, weight, height, goal } = req.body;
    const baseCalories = 2000;
    const calorieAdjustment = goal === "gain" ? 500 : -500;
    const calories = baseCalories + calorieAdjustment;
    const macros = {
        proteins: Math.round(weight * 2),
        carbs: Math.round(calories * 0.5 / 4),
        fats: Math.round(calories * 0.25 / 9),
    };
    res.json({ calories, macros });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
