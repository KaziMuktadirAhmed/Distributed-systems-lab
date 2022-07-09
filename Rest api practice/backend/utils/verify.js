const jwt = require('jsonwebtoken');

function verifyUser (tokenToBeVerified) {
    if (tokenToBeVerified == null) return false;

    const isValid = jwt.verify(tokenToBeVerified, process.env.JWT_PVT_KEY, (err, userInfo) => {
        if(err) return false;

        console.log("user info from jwt token: ");
        console.log(userInfo);
        return true;
    });

    return isValid;
} 

module.exports = {verifyUser};