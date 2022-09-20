const router = require('express').Router();

const { Story } = require('../models/story.js');
const { verifyUser } = require('../utils/verify.js');
const minioClient = require('../db/dbObject.js');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/story', verifyUser, (req, res) => {
    Story.find((err, doc) => {
        if(!err)    
            res.send(doc);
        else
            console.log('Error in fetching story data: ' + JSON.stringify(err, undefined, 2));
    });
});

router.post("/story", verifyUser, (req, res) => {
    try {
        new Story({
            fullName: req.body.fullName,
            id: req.body.id,
            date: req.body.date,
        }).save((err, doc) => {
            if(err) res.status(402).send({ message: "Error at saving story id data !!!", error: err});
            else res.status(200).send({ message: "Story id saved successfully ..." });
        }); 
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at storing story id" });
    }
});

router.post("/image", verifyUser, upload.single('image'), (req, res) => {
    try { 
        var filePath = process.env.DOCKER_UPLOADS_DIR + req.file.path;
        var fileName = new Date().getTime().toString() + ".png";
        var metaData = {
            'Content-Type': 'application/octet-stream',
            'X-Amz-Meta-Testing': 1234,
            'example': 5678
        };
        minioClient.fPutObject(process.env.MINIO_BUCKET, fileName, filePath, metaData, function(err, etag) {
            if (err){ 
                return res.status(402).send({ message: "Error at saving image data !!!", error: err});
            }
            res.status(200).send({ fileId: fileName });
        });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at posting image" });
    }
});

router.get("/image/:id", verifyUser, (req, res) => {
    try {
        let data;
        minioClient.getObject(process.env.MINIO_BUCKET, req.params.id, (err, objStream) => {
            if(err) {
                return res.status(404).send({ message: "Image not found" });
            }
            objStream.on('data', (chunk) => {
                data = !data ? new Buffer(chunk) : Buffer.concat([data, chunk]);
            });
            objStream.on('end', () => {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.write(data);
                res.end();
            });
        });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at fetching image" });
    }
});

router.post("/image/path", verifyUser, (req, res) => {
    try {   
        var filePath = req.body.filePath;
        var metaData = req.body.metaData;
        var fileName = new Date().getTime().toString() + ".png";
        minioClient.fPutObject(process.env.MINIO_BUCKET, fileName, filePath, metaData, function(err, etag) {
            if (err) { 
                return res.status(401).send({ message: "Error at saving image data !!!", error: err, errorTag: etag});
            }
            res.status(200).send({ message: "Image saved successfully ..." });
        });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at posting image" });
    }
});

module.exports = router;