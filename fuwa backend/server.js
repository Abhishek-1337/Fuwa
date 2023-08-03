const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = express();

const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful"));

const PORT = process.env.PORT || process.env.API_PORT;

const server = app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${5002}`);
});
