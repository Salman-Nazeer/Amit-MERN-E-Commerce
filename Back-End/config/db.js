import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch {
    console.log("Error connecting to MongoDB", err);
  }
}

export default connectDB;
