require("dotenv").config();
const mongoose = require("mongoose");
const Service = require("./models/Service");

const services = [
  {
    name: "Standard Home Cleaning",
    category: "housekeeping",
    description: "Full home sweep, mop, dusting and bathroom cleaning.",
    price: 500,
    duration: "3-4 hours",
  },
  {
    name: "Electrical Wiring & Repair",
    category: "electrician",
    description: "Fix faulty wiring, install outlets and repair panels.",
    price: 800,
    duration: "1-3 hours",
  },
  {
    name: "Car Oil Change & Basic Service",
    category: "mechanic",
    description: "Engine oil change, filter replacement and basic inspection.",
    price: 600,
    duration: "1-2 hours",
  },
  {
    name: "Pest Extermination",
    category: "other",
    description: "Safe extermination of insects and rodents.",
    price: 1200,
    duration: "2-3 hours",
  },
  {
    name: "Interior Wall Painting",
    category: "other",
    description: "Professional wall painting and interior finishing.",
    price: 900,
    duration: "4-6 hours",
  },
  {
    name: "Pipe Repair & Leak Fix",
    category: "plumber",
    description: "Fix leaking pipes, blocked drains and water lines.",
    price: 700,
    duration: "1-2 hours",
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
    await Service.deleteMany();
    await Service.insertMany(services);
    console.log(`✅ ${services.length} services seeded successfully!`);
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error.message);
    process.exit(1);
  }
};

seedDB();