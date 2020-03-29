// Environment variable

require("dotenv").config();

// Package import

const express = require("express");
const mongoose = require("mongoose");
const formidableMiddleware = require("express-formidable");
``;
const cors = require("cors");

// Initializing the server

const app = express();
app.use(cors());
app.use(formidableMiddleware());

// Creating the DataBase

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Model import

require("./Models/Task");

// Route import

const taskRoute = require("./Routes/task");
app.use(taskRoute);

// Start of the server

app.listen(process.env.PORT, () => {
  console.log("Your server is started !");
});
