//this file is to create a api
const express = require("express");
const router = express.Router();
const register = require("../models/Registeration");
const Club = require("../models/Club");
const async = require("hbs/lib/async");
const Photo_gallery = require("../models/Photo_gallery");

// Route 1: Registration
router.post("/registeration", async (req, res) => {
  try {
    let User = await register.findOne({ email: req.body.email });
    if (User) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (req.body.usertype === "Lead") {
      club = await Club.create({
        input_club_name: req.body.input_club_name,
        input_club_desc: req.body.input_club_desc,
        club_logo_input: req.body.club_logo_input,
      });
    }

    User = await register.create({
      usertype: req.body.usertype,
      fullname: req.body.fullname,
      institute: req.body.institute,
      department: req.body.department,
      email: req.body.email,
      idno: req.body.idno,
      gender: req.body.gender,
      age: req.body.age,
      password: req.body.password,
    });
    User.save();
    res.json({ User, message: "Registeration Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Some Error Occured" });
  }
});

// Route 2: Login
router.get("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let User = await register.findOne({ email: req.body.email });
    if (User.password === password) {
      res.json({ email, message: "Login Successful" });
    } else {
      res.json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Some error occured" });
  }
});
module.exports = router;

// Route 3: Club data
router.get("/club_data", async (req, res) => {
  try {
    let club_data = await Club.find();
    res.json(club_data);
  } catch (error) {
    console.log("The Club data is not retrieved.", error);
  }
});

// Route 4: Photo Gallery
router.post("/Photo_gallery", async (req, res) => {
  try {
    const photo = await Photo_gallery.create({
      gallery_image: req.body.gallery_image,
      Club_id: req.body.Club_id,
      Lead_id: req.body.Lead_id,
    });
    res.json(photo);
  } catch (error) {
    res.send("The Photo Gallery cannot be displayed.", error);
  }
});
