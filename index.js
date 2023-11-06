const server = require("./src/server");
const {conn} = require("./src/db")

const PORT = process.env.PORT

server.listen(PORT, () => {
    conn.sync({ force: true }).then(()=>{console.log(`Connected to the DB: ${process.env.DB_NAME}`);})
    console.log(`Server raised in port: ${PORT}`);
  });

  //prueba