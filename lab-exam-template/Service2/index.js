const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routeIndex = require('./routes/index.router');

var app = express();
const server = require('http').createServer(app);

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(cors());
app.use('/api', routeIndex);

//error handler
app.use((err, req, res, next) => {
    if(err.name == 'ValidationError'){
        var valErrors = [];
        Object.keys(err.errors).forEach( key => valErrors.push(err.errors[key].message) );
        res.status(422).send(valErrors)
    }
});

//start server
server.listen(1111, () => console.log("Server started at port: " + 1111));







