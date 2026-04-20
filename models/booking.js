const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    service: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
    bookingDate: { type: Date, required: true },
    timeSlot: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    notes: { type: String, default: "" },
    status: { type: String, enum: ["pending", "confirmed", "in-progress", "completed", "cancelled"], default: "pending" },
    totalPrice: { type: Number },
    confirmationCode: { type: String, unique: true }
  },
  { timestamps: true }
);

bookingSchema.pre("save", function (next) {
  if (!this.confirmationCode) {
    this.confirmationCode = "HS-" + Math.random().toString(36).substring(2, 8).toUpperCase();
  }
  next();
});

module.exports = mongoose.model("Booking", bookingSchema);