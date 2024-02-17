const mongoose = require("mongoose");
const { string } = require("zod");
mongoose.connect("mongodb+srv://skillify:8HBg68st@cluster0.lnrxjjn.mongodb.net/Skillify");

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const FolioSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    folioCount: {
        type: Number,  // Corrected this line
        required: true
    }
});

const User = mongoose.model("User", UserSchema);
const Folio = mongoose.model("Folio", FolioSchema);

module.exports = {
    User,
    Folio
};


