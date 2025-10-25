express = require("express");
const router = express.Router();
const { autorController } = require("../controllers/autorController");
//GET /autor -> listar Autor

router.get('/autores',autorController.buscarAutor);

//POST /autor -> cadastrar Autor

router.post('/autores',autorController.cadastrarAutor);

module.exports = {autorRoute: router};