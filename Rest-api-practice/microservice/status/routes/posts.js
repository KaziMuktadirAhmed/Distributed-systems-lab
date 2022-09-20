const router = require('express').Router();
const Joi = require('joi');

const { Post } = require('../models/post.js');
const { verifyUser } = require('../utils/verify.js');

router.get('/', verifyUser, (req, res) => {
    Post.find((err, doc) => {
        if(!err)    
            res.send(doc);
        else
            console.log('Error in fetching post data: ' + JSON.stringify(err, undefined, 2));
    }).sort({$natural: -1});
});

router.post("/", verifyUser, (req, res) => {
    try {
        const {error} = validate(req.body);
        if(error)
            return res.status(400).send({message: error.details[0].message});

        new Post({
            fullName: req.body.fullName,
            message: req.body.message,
            date: req.body.date,
        }).save((err, doc) => {
            if(err) res.status(402).send({ message: "Error at saving post data !!!", error: err});
            else res.status(200).send({ message: "Post saved successfully ..." });
        });   
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at post" });
    }
});

const validate = (data) => {
	const schema = Joi.object({
		fullName: Joi.string().label("Full name"),
		message: Joi.string().label("Message"),
        date: Joi.string().required().label("Date"),
	});
	return schema.validate(data);
};

module.exports = router;