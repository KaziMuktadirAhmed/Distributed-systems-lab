const jwt = require('jsonwebtoken');

function verifyUser (tokenToBeVerified) {
    var returnVal = "";

    if (tokenToBeVerified == null) 
        return returnVal;

    const isValid = jwt.verify(tokenToBeVerified, process.env.JWT_PVT_KEY, (err, userInfo) => {
        if(err)    return;

        console.log("user info from jwt token: ");
        console.log(userInfo);
        
        returnVal = userInfo.fullName;
    });

    return returnVal;
} 

module.exports = {verifyUser};