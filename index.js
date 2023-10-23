const server = require("./src/server");

const PORT = 3001

server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
  });