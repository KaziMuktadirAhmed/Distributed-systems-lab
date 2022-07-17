const router = require('express').Router();
const Joi = require('joi');

const {Post} = require('../models/post.js');
const verify = require('../utils/verify.js');
const Minio = require('../dbObject.js');

router.get('/', (req, res) => {
    Post.find((err, doc) => {
        if(!err)    
            res.send(doc);
        else
            console.log('Error in fetching user data: ' + JSON.stringify(err, undefined, 2));
    });
});

router.post("/", (req, res) => {
    try {
        const {error} = validate(req.body);
        if(error)
            return res.status(400).send({message: error.details[0].message});
            
        const hasFullName = verify.verifyUser(req.body.jwtToken);
        
        if(hasFullName){
            new Post({
                fullName: hasFullName,
                message: req.body.message,
                date: req.body.date,
            }).save((err, doc) => {
                if(err) res.status(402).send({ message: "Error at saving post data !!!", error: err});
                else res.status(200).send({ message: "Post saved successfully ..." });
            });
        }
        else 
            res.status(401).send({ message: "Invlaid token !!!"});
        
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at post" });
    }
});

router.post("/image", (req, res) => {
    try {   
        var filePath = req.body.filePath;
        var metaData = req.body.metaData;
        var fileName = req.body.fileName;

        Minio.minioClient.fPutObject(process.env.MINIO_BUCKET, fileName, filePath, metaData, function(err, etag) {
            if (err) return res.status(402).send({ message: "Error at saving image data !!!", error: err});
            res.status(200).send({ message: "Image saved successfully ..." });
        });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at posting image" });
    }
});

const validate = (data) => {
	const schema = Joi.object({
		fullName: Joi.string().label("Full name"),
		message: Joi.string().label("Message"),
        date: Joi.string().required().label("Date"),
        jwtToken: Joi.string().required().label("Jwt-token"),
	});
	return schema.validate(data);
};

module.exports = router;