const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        phone: { type: String, trim: true },
        isAvailable: { type: Boolean, default: true },
        unavailableUntil: { type: Date, default: null },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Worker", workerSchema, "worker");