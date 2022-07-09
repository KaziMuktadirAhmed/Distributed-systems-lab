const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const postSchema = new mongoose.Schema({
    fullName: {type: String, reuired: true},
    message: {type: String, reuired: true},
    date: {type: Date, required: true}
});

const Post = mongoose.model("post", postSchema);