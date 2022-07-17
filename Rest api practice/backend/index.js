require("dotenv").config();

// import node pakage 
const express = require("express");
const cors = require("cors");

// import db connection file
const connectDB = require("./db.js");
const connectObjectDb = require("./dbObject.js");

//import routes 
const usersRoute = require('./routes/users.js');
const authRoute = require('./routes/auth.js');
const postRoute = require('./routes/posts.js');

const app = express();

// DB connection
connectDB();
console.log("connected minio object storage at: http://" + connectObjectDb.minioClient.host + ":" + connectObjectDb.minioClient.port);

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/post', postRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('llistening on port ' + port + ' ...'));