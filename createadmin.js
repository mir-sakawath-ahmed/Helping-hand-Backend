require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    const adminExists = await User.findOne({ email: "admin@helpinghand.com" });
    if (adminExists) {
      console.log("Admin already exists!");
      process.exit(0);
    }

    const admin = await User.create({
      name: "Admin",
      email: "admin@helpinghand.com",
      password: "admin123456",
      phone: "01700000000",
      address: "Chittagong",
      role: "admin",
    });

    console.log("✅ Admin created successfully!");
    console.log("Email: admin@helpinghand.com");
    console.log("Password: admin123456");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
};

createAdmin();