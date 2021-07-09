const mongoose = require("mongoose")
const { Schema } = mongoose;

const addressSchema = new Schema({
    name: String,
    mobile: Number,
    country: String,
    pin: Number,
    flat: String,
    area: String,
    city: String,
    state: String,
})

const userSchema = new Schema({
    name: {
        type: String,
        required: "Name of the user is required",
    },
    password: {
        type: String,
        required: "Password is a required attribute",
    },
    email: {
        type: String,
        required: "Email is a mandatory attribute",
        unique: true,
        lowercase: true
    },
    cart: [String],
    wishlist: [String],
    address: [addressSchema]
})

const User = mongoose.model("UserGortiKart", userSchema);

module.exports = { User }