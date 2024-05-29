const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 4000;
// const cors = require()

const connecToMongo = require("./db");
connecToMongo();
app.set("view engine", "hbs");
const views_path = path.join(__dirname, "../Views");
const public_path = path.join(__dirname, "../public");

// Serve static files from the "public" directory
app.use(
  express.static(public_path, {
    setHeaders: (res, path, stat) => {
      if (path.endsWith(".css")) {
        res.set("Content-Type", "text/css");
      } else if (path.endsWith(".js")) {
        res.set("Content-Type", "text/javascript");
      }
    },
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/register", require("./routes/register"));

//get and post login
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  res.render("login");
});

//get and post registeration
app.get("/registeration", (req, res) => {
  res.render("registeration_page");
});

app.post("/registeration", (req, res) => {
  res.render("registeration_page");
});

//dashboard
app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.listen(port, () => {
  console.log("Connected on port", port);
});
