// This file for the club table for the databse
const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClubSchema = new Schema ({
    input_club_name: {
        type: String,
    },
    input_club_desc: {
        type: String,
    },
    club_logo_input: {
        type: String,
    },
});

const Club = mongoose.model("clubdata", ClubSchema);
Club.createCollection();
module.exports = Club;
