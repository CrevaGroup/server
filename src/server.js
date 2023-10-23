const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const server = express()

server.use(morgan("dev"))
server.use(express.json())
server.use(cors())

module.exports = server