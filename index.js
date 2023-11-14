const server = require("./src/server.js");
const {conn} = require("./src/db.js");
const dolarUpdate = require("./src/Utils/dollarUpdate.js");

const PORT = process.env.PORT

const startServer = async()=>{
    try {
    await conn.sync({ force: true })
    server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
    dolarUpdate()
  });
    } catch (error) {
        console.log(error.message)
    }
}
startServer()
