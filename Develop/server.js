const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models/workoutcompleted");


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//routes
app.use(express.static("./public/api.js"));

console.log(PORT);

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});; 


