import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth";
import connectDB from "./config/db";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use(cors({
  origin: "*", // your React dev server
  credentials: true
}));


// connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// sample route
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running with TypeScript 🚀");
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
