const { default: message } = require("tedious/lib/message");
const { autorModel } = require("../models/autorModel");

const autorController = {


    buscarAutor: async (req, res) => {

        try {
            const autores = await autorModel.buscarAutores();

            res.status(200).json(autores);
        } catch (error) {
            console.error("erro ao listar Autores", error)
            res.status(500).json({ error: 'erro ao buscar Autores' })
        }

    },

    cadastrarAutor: async (req, res) => {
        try {
            const { nomeAutor, nacionalidadeAutor } = req.body;

            if (nomeAutor == undefined || nacionalidadeAutor == undefined) {
                return res.status(400).json({ erro: 'Campos obrigatórios não preenchidos' });
            }
            await autorModel.cadastrarAutor(nomeAutor, nacionalidadeAutor);
            res.status(201).json({ message: 'Autor cadastrado com sucesso' });

        } catch (error) {
            console.error('Erro ao cadastrar Autor', error);
            res.status(500).json({ erro: 'erro ao cadastrar Autor' });
        }

    }

}

module.exports = { autorController };