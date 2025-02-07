//MongoDB model for contact form

import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Database already connected"); // Avoid reconnecting if already connected
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database connected successfully"); // Log in the console
  } catch (error) {
    console.error("❌ Database connection error:", error);
    throw new Error("Database connection failed");
  }
};

export default connectDB;



