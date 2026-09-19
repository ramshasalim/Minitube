import dotenv from "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    const server = app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port :${process.env.PORT}`);
    });
    server.on("error", (err) => {
      console.log("error:", err);
      throw err;
    });
  })
  .catch((err) => {
    console.log("MONGODB Connection failed", err);
    process.exit(1);
  });
