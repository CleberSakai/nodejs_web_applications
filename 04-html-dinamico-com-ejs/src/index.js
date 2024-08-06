const express = require("express");
const path = require("node:path");

const app = express();

const storedUsers = [];

// Configuração EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configuração do body
app.use(express.urlencoded({ extended: true })); // por aqui tenho acesso ao corpo da requisição

app.get("/", (request, response) => {
  const title = "Homepage";
  const message = "Mensagem dinâmica inserida pelo EJS";

  response.render("index", { title, message });
});

app.get("/formulario", (request, response) => {
  response.render("form");
});

app.post("/register", (request, response) => {
  const username = request.body.username;
  const password = request.body.password;

  storedUsers.push({ username, password });

  response.redirect("/usuarios");
});

app.get("/usuarios", (request, response) => {
  response.render("users", { users: storedUsers });
});

const PORT = 3000;
app.listen(PORT, () => console.log("Servidor Iniciado!"));
