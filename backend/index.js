const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = process.env.PORT || 5000;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/api/generate", async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: "❌ Prompt is required" });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
        });

        console.log("📥 Full API Response:", JSON.stringify(result, null, 2));

        if (!result || !result.response?.candidates || result.response.candidates.length === 0) {
            return res.status(500).json({ error: "❌ No response from Gemini API" });
        }

        // ✅ Extract the AI-generated text properly
        const responseText = result.response.candidates[0]?.content?.parts[0]?.text || "❌ No valid response";

        res.json({ response: responseText });

    } catch (error) {
        console.error("🔥 Error:", error);
        res.status(500).json({ error: "❌ Failed to generate response", details: error.message });
    }
});

app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
