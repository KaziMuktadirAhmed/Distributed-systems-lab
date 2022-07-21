const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log('database url: ' + process.env.DB);
        console.log("Successfully connectd to mongoDB database server ...");
    } 
    catch (error) {
        console.log(error);
        console.log("Could not connect to database !!!!");
    }
};