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

const validate = (data) => {
	const schema = Joi.object({
		fullName: Joi.string().required().label("Full Name"),
		message: Joi.string().label("Message"),
		date: Joi.string().required().label("Date"),
        jwtToken: Joi.string().required().label("Token"),
	});
    
	return schema.validate(data);
};

module.exports = {Post, validate};