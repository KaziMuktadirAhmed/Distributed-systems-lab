const jwt = require('jsonwebtoken');

function verifyUser (tokenToBeVerified) {
    if (tokenToBeVerified == null) return false;

    jwt.verify(tokenToBeVerified, process.env.JWT_PVT_KEY, (err, userInfo) => {
        if(err) return false;

        console.log(userInfo);
        return true;
    });

    console.log('verify te dhuke nai');
    return false;
} 