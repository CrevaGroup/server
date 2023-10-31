const server = require("./src/server.js");
const {conn} = require("./src/db.js")

const PORT = process.env.PORT

server.listen(PORT, () => {
    conn.sync({ force: true }).then(()=>{console.log(`Connected to the DB: ${process.env.DB_NAME}`);})
    console.log(`Server raised in port: ${PORT}`);
  });
