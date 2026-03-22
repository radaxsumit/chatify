import mongoose from "mongoose";
import {ENV} from "./env.js";

export const connectDB = async () => {
  try {
    const { MONGODB_URI } = ENV;
    if (!MONGODB_URI) throw new Error("MongoDB URI is not set");

    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error Connection to MONGODB : ${error.message}`);
    process.exit(1); // 1 status code means fail , and 0 means success
  }
};
