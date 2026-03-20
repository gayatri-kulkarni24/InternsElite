const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://gayatri-kulkarni:gayatri2411@cluster0.1aaojhd.mongodb.net/?appName=Cluster0");
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;