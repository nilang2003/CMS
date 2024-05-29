// For Database connection

const mongoose = require("mongoose");
const connString = "mongodb://localhost:27017/CMS";
const connecToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(connString);
    console.log("Connected to Mongo DB");
  } catch (error) {
    console.log("Error:", error);
    process.exit();
  }
};

module.exports = connecToMongo;
