import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import {
  userRouter,
  favRouter
} from "./api/routes/index.js";

//config enviroments 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path:path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
})

/**
 * Mongoose
 */

// Connect to db
const dbConnection = process.env.DB_CONNECTION;
await mongoose.connect(dbConnection);

// Listener to connection error
mongoose.connection.on("error", function (e) {
  console.error("ERROR: ", e);
});

/**
 * Express
 */
const app = express();

//Middleware
app.use(express.json());

// Routes
app.get("/", (request, response) => {
  console.log(request.query)
  response.send("API LIST OF FAVORITES");
  
});

app.use("/api",favRouter );
app.use("/auth/local", userRouter);

const PORT = process.env.PORT || 5000; 
// Launch server
app.listen(PORT, () => {
  console.log("Iniatialized server!!");
});

