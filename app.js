const express = require("express");
const app = express();
const {livroRoute} = require("./src/routes/livroRoute");
const PORT = 8080;

app.use(express.json());

//Rotas de aplicação de livros

app.use('/',livroRoute);

app.listen(PORT,()=>{
    console.log(`Servidor rodando em http//localhost:${PORT}`);
})