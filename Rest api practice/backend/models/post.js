const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const postSchema = new mongoose.Schema({
    fullName: {type: String, reuired: true},
    message: {type: String, reuired: true},
    date: {type: String, required: true},
    jwtToken: {type: String, required: true}
});

const Post = mongoose.model("post", postSchema);

module.exports = {Post};