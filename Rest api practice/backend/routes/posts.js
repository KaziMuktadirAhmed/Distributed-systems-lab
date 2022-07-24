const router = require('express').Router();
const Joi = require('joi');

const { Post } = require('../models/post.js');
const { verifyUser } = require('../utils/verify.js');
const Minio = require('../db/dbObject.js');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', verifyUser, (req, res) => {
    Post.find((err, doc) => {
        if(!err)    
            res.send(doc);
        else
            console.log('Error in fetching user data: ' + JSON.stringify(err, undefined, 2));
    });
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
        // console.log(req.body);    
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at post" });
    }
});

router.post("/image", verifyUser, upload.single('image'), (req, res) => {
    try {   
        var filePath = "/home/kazimuktadir/Desktop/git-repo/Distributed-systems-lab/Rest api practice/backend/" + req.file.path;
        var fileData = req.file;
        var fileName = new Date().getTime().toString() + ".png";
        var metaData = {
            'Content-Type': 'application/octet-stream',
            'X-Amz-Meta-Testing': 1234,
            'example': 5678
        };

        console.log(filePath);
        console.log(fileData);
        console.log(fileName);

        Minio.minioClient.fPutObject(process.env.MINIO_BUCKET, fileName, filePath, metaData, function(err, etag) {
            if (err) return res.status(402).send({ message: "Error at saving image data !!!", error: err});
            res.status(200).send({ message: "Image saved successfully ..." });
        });
        // res.status(200).send({ message: "file sent to backend" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at posting image" });
    }
});

router.post("/image/path", verifyUser, (req, res) => {
    try {   
        var filePath = req.body.filePath;
        var metaData = req.body.metaData;
        var fileName = new Date().getTime().toString() + ".png";

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
	});
	return schema.validate(data);
};

module.exports = router;