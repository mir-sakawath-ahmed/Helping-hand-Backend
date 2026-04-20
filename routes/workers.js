const express = require("express");
const router = express.Router();
const Worker = require("../models/Worker");

// GET /api/workers — fetch all available workers
router.get("/", async (req, res) => {
    try {
        const now = new Date();
        await Worker.updateMany(
            { isAvailable: false, unavailableUntil: { $lte: now } },
            { isAvailable: true, unavailableUntil: null }
        );
        const workers = await Worker.find({ isAvailable: true });
        res.json({ success: true, data: workers });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// PUT /api/workers/:id — mark worker as unavailable for X days
router.put("/:id", async (req, res) => {
    try {
        const { days } = req.body;
        const unavailableUntil = new Date();
        unavailableUntil.setDate(unavailableUntil.getDate() + (days || 1));
        const worker = await Worker.findByIdAndUpdate(
            req.params.id,
            { isAvailable: false, unavailableUntil },
            { new: true }
        );
        if (!worker) return res.status(404).json({ success: false, message: "Worker not found" });
        res.json({ success: true, data: worker });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;