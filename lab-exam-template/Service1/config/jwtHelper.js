const jwt = require('jsonwebtoken');

module.exports.verifyJwtToken = async (req, res, next) => {
    //console.log(req.body.token);
    var ret;    
    jwt.verify(req.body.token, process.env.JWT_SECRET,
            (err, decoded) => {
                if(err)
                    ret = { status: false, message: 'Token authentication failed' };
                else{
                    ret = decoded;
                }
            }
        )
    return res.send(ret);

}