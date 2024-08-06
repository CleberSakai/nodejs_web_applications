const express = require("express");
const path = require("node:path");
const router = require("./router");

const app = express();

// Configuração ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configuração de arquivos estáticos
app.use(express.static("public"));

// Configuração para ler dados da requisição
app.use(express.urlencoded({ extended: true }));

// Adiciona as rotas de roteador na aplicação.
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor Iniciado\nRodando em http://localhost:${PORT}/`)
);
