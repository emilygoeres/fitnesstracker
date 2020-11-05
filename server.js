// Rows 1-16 installed NPM packages and connected to Mongo
const express = require("express");
const PORT = process.env.PORT || 8080
const app = express();
const mongoose = require ("mongoose") 

// const environment = 'development';
// const environment = process.env.NODE_ENV || 'development';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
})
// connected the backend to the html page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

var apiroutes=require("./routes/apiroutes")
app.use(apiroutes)

// This allows the user to open the webpage
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});