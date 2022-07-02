const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
    firstName: {type: String, reuired: true},
    lastName: {type: String, reuired: true},
    email: {type: String, reuired: true},
    password: {type: String, reuired: true}
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_PVT_KEY, {expiresIn: "7d"});
    return token;
}

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().label("Last Name"),
		email: Joi.string().email().label("Email"),
		password: passwordComplexity().label("Password"),
	});
    
	return schema.validate(data);
};

module.exports = {User, validate};