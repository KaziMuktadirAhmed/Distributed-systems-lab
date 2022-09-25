let data = [
    "fahim", "siam", "arif", "and also", "new user", "new new user", "dead user", "leterally dead suer i mean student", "change anlam"
]

module.exports.getData = (req, res, next) => {
    res.json(data);
}

module.exports.writeData = (req, res, next) => {
    data.push(req.body);
    res.json(data);
}


