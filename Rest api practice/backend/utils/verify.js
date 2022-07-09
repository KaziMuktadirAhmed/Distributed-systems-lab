const jwt = require('jsonwebtoken');

function verifyUser (tokenToBeVerified) {
    var returnVal = "";

    if (tokenToBeVerified == null) 
        return returnVal;

    const isValid = jwt.verify(tokenToBeVerified, process.env.JWT_PVT_KEY, (err, userInfo) => {
        if(err)    
            return;
        returnVal = userInfo.fullName;
    });

    return returnVal;
} 

module.exports = {verifyUser};