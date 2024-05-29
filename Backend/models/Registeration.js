// This file for the Registration table for the databse
const mongoose = require("mongoose");
const { Schema } = mongoose;

const RegisterSchema = new Schema({
  usertype: {
    type: String,
  },
  fullname: {
    type: String,
  },
  institute: {
    type: String,
  },
  department: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  idno: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  verification: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
  },
});

const Register = mongoose.model("RegistrationData", RegisterSchema);
Register.createCollection();
module.exports = Register;
