import mongoose from "mongoose";

const url = process.env.MONGODB_URL!;

export async function connectToDb() {
  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(url, {
      dbName: "community-dev-platform",
    });
    console.log("Connected to DB!");
  } catch (error) {
    console.log("Cannot connect to DB");
  }
}
