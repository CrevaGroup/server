const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./Routes/mainRouter");
const dolarUpdate = require("./Utils/dollarUpdate");



const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(mainRouter);
//descomentar esta linea para que empiece a funcionar la actualizacion automatica del dolar
//dolarUpdate() 


module.exports = server