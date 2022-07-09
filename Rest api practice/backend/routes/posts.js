const router = require('express').Router();
const Joi = require('joi');
const {Post} = require('../models/post.js');
const verifyUser = require('../utils/verify.js');

router.post("/", async (req, res) => {
    
    try {
        const {error} = validate(req.body);
        if(error)
            return res.status(400).send({message: error.details[0].message});

        const hasValidToken = verifyUser.verifyUser(req.body.jwtToken);
        
        if(hasValidToken){
            await new Post({
                fullName: req.body.fullName,
                message: req.body.message,
                date: req.body.date,
            }).save((err, doc) => {
                if(err) res.status(402).send({ message: "Error at saving post data"});
                else res.status(200).send({ message: "Post saved successfully ..." });
            });
        }
        else 
            res.status(401).send({ message: "Invlaid token !!!"});
        
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

const validate = (data) => {
	const schema = Joi.object({
		fullName: Joi.string().required().label("Email"),
		message: Joi.string().label("Password"),
        date: Joi.string().required().label("Date"),
        jwtToken: Joi.string().required().label("Jwt-token"),
	});
	return schema.validate(data);
};

module.exports = router;