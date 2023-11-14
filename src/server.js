const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./Routes/mainRouter.js");



const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(mainRouter);



module.exports = server
