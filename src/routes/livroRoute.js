express = require("express");
const router = express.Router();
const { livroController } = require("../controllers/livroController");

//GET /Livros -> Listar Livros

router.get('/livros', livroController.ListarLivros);

//POST /Livros -> Cadastrar livros

router.post('/Livros',livroController.cadastrarLivro);

module.exports = { livroRoute: router };