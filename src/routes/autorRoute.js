express = require("express");
const router = express.Router();
const { autorController } = require("../controllers/autorController");
//GET /autor -> listar Autores

router.get('/autores',autorController.buscarAutor);

//POST /autor -> cadastrar Autores

router.post('/autores',autorController.cadastrarAutor);

module.exports = {autorRoute: router};