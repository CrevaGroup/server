const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./Routes/mainRouter.js");
const dolarUpdate = require("./Utils/dollarUpdate.js");


const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
    next();
 });

server.use(mainRouter);
dolarUpdate() 


module.exports = server
