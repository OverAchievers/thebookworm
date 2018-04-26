const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profile_image: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    share_phone: {
        type: Boolean,
        required: true,
        default: false
    },
    address: {
        addr_line_1: {
            type: String,
            required: false
        },
        addr_line_2: {
            type: String,
            required: false
        },
        zipcode: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: false
        },
        state: {
            type: String,
            required: false
        }
    },
    share_address: {
        type: Boolean,
        required: false,
        default: false
    },
    active_status: {
        type: Boolean,
        required: true,
        default: true
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
