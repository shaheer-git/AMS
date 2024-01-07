const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    empConCode: {
        type: Number,
        required: true,
        unique: true
    },
    shift: {
        type: String,
        required: true
    },
    IDEAteam: {
        type: String
    },
    department: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);