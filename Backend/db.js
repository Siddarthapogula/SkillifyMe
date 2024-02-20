const mongoose = require("mongoose");
const { string } = require("zod");
const {config} = require("dotenv");
config();
mongoose.connect(process.env.DATABASE_CONNECTION);

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
    },
    folios : [
        {
            folioId :{
                type : Number
            },
            data : {}
        }
    ]
});

const User = mongoose.model("User", UserSchema);
const Folio = mongoose.model("Folio", FolioSchema);

module.exports = {
    User,
    Folio
};


