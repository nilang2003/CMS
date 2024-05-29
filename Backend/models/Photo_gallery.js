//this file is for storing the photo-gallery info.
const mongoose = require("mongoose");
const schema = mongoose;

const Photogallery = new mongoose.Schema({
  //creating the foreign key
  Lead_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RegistrationData",
  },

  Club_id: {
    ref: "clubdata",
    type: mongoose.Schema.Types.ObjectId,
  },

  //this is for the images
  gallery_image: {
    type: String,
  },
});

const Photo_gallery = mongoose.model("Photo_gallery", Photogallery);
Photo_gallery.createCollection();
module.exports = Photo_gallery;
