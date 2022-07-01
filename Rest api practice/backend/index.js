require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./db.js");

const app = express();

// DB connection
connectDB();

// middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('llistening on port ' + port + ' ...'));