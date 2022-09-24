const mongoose = require('mongoose');
const passport = require('passport');
const jwtHelper = require('../config/jwtHelper')
const _ = require('lodash');
const bcrypt = require('bcryptjs');
var axios = require('axios');

let data = [
    {
        name: "siam",
        age: 12
    },
    {
        name: "inzamam",
        age: 13
    }
]
    
const servURL = "http://service2:3000/api/service2";

module.exports.register = async (req, res, next) => {
    let responseFromDifferentService =  await axios.get(servURL)
    .catch(error=> {
        console.log("error: ", error);
    });
    // await axios.get(servURL)
    //     .then(ress => {
    //         console.log('tt2: ', ress);
    //         responseFromDifferentService = ress;
    //         data.push(responseFromDifferentService);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    //console.log(responseFromDifferentService.data);
    //data.concat(responseFromDifferentService.data);
    data = [...data, ...responseFromDifferentService.data]
    //console.log(data);
    res.json(data);
}

module.exports.authenticate = (req, res, next) => {
    data.push(req.body);
    res.json(data);
}


