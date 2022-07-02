const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstname: {type: String, reuired: true},
    lastname: {type: String, reuired: true},
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
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
    
	return schema.validate(data);
};

module.exports = {User, validate};