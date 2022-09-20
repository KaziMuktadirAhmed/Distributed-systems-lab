const router = require('express').Router();
const bcrypt = require('bcrypt');

const {User, validate} = require('../models/user.js');

router.get('/', (req, res) => {
    User.find((err, doc) => {
        if(!err)    
            res.send(doc);
        else
            console.log('Error in fetching user data: ' + JSON.stringify(err, undefined, 2));
    });
});

router.post("/", async (req, res) => {
    try {
        const {error} = validate(req.body);
        
        if(error) 
            return res.status(400).send({message: error.details[0].message});

        const user = await User.findOne({email: req.body.email});
        
        if(user)
            return res.status(409).send({message: "User with given email alread exists !!!"});
        
        // generate salt and password hash for storage
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        // storing user data and password hash in db
        new User({
            ...req.body,
            password: hashPassword 
        }).save((err, doc) => {
            if(err) res.status(402).send({message: "error at saving user data"});
            else res.status(201).send({ message: "User created successfully" });
        });
        
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error !!!" });
    }
});

module.exports = router;