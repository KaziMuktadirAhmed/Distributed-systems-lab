const mongoose = require('mongoose');
const passport = require('passport');
const jwtHelper = require('../config/jwtHelper')
const _ = require('lodash');
const bcrypt = require('bcryptjs');

let data = [
    {
        name: "service 2 data 1",
        age: 12
    },
    {
        name: "service 2 data 2",
        age: 13
    }
]

module.exports.register = (req, res, next) => {
    res.json(data);
}

module.exports.authenticate = (req, res, next) => {
    data.push(req.body);
    res.json(data);
}


