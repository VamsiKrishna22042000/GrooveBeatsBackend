import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import favsRoute from "./routes/favouritesRoute.js";
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./config/connectDB.js";

dotenv.config();

const app = express();

connectDB();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Deployed backend successfully in vercel" });
});

app.use("/users", userRouter);
app.use("/favs", favsRoute);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
