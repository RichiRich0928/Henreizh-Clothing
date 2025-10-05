import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User";

dotenv.config();

mongoose.connect(process.env.MONGO_URI!)
  .then(async () => {
    console.log("Connected to MongoDB");

    const mockUser = new User({
      username: "henreizh_admin",
      email: "admin@henreizh.com",
      password: "password123" // ⚠️ later we’ll hash this!
    });

    await mockUser.save();
    console.log("✅ Mock user created!");
    mongoose.disconnect();
  })
  .catch((err) => console.error(err));
