const express = require("express");

const server = express();

server.get("/", (request, response) => {
  response.send("Servidor Express Funcionando!\nVocê está na página inicial");
});

server.get("/artigos", (request, response) => {
  response.send("Você está na página de artigos");
});

const port = 3000;

server.listen(port, () => {
  console.log(`Servidor Express Iniciado em http://localhost:${port}/`);
});
