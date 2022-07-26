const jwt = require('jsonwebtoken');

function verifyUser (req, res, next) {
    if (req.cookies){
        jwt.verify(req.cookies.jwt, process.env.JWT_PVT_KEY, (err, userInfo) => {
            if(err){  
                res.status(500).send("Error in verifying jwt token");
            }
            else {
                next();
            }
        });
    }
} 

module.exports = { verifyUser };