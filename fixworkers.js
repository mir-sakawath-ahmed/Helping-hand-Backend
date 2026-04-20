require('dotenv').config();
const mongoose = require('mongoose');
const Worker = require('./models/Worker');

mongoose.connect(process.env.MONGO_URI).then(async () => {
    const result = await Worker.updateMany({}, { $set: { isAvailable: true, unavailableUntil: null } });
    console.log('Updated:', result);
    process.exit(0);
});