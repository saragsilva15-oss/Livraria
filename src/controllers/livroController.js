const { default: message } = require("tedious/lib/message");
const { livroModel } = require("../models/livroModel");

const livroController = {
    /*
    listar todos os livros
    */
    ListarLivros: async (req, res) => {
        try {
            const { titulo } = req.query;


            if (titulo) {

                const livro = await livroModel.buscarTitulo(titulo);

                if (livro.length <= 0) {
                    return res.status(400).json({ message: "nenhum livro encontrado" });
                }

                return res.status(200).json(livro);

            }
            const livros = await livroModel.buscarTodos();

            res.status(200).json(livros);

        } catch (error) {

            console.error("erro ao listar livros", error)
            res.status(500).json({ error: 'erro ao buscar livros' })

        }

    },
    /*
    Buscar titulo
    */

    buscarTitulo: async (req, res) => {
        try {
            const tituloLivro = await livroModel.buscarTitulo();

            if (tituloLivro) {
                livros = livros.filter(livro => livro.titulo.toLowerCase().includes(tituloLivro.toLowerCase()));
            }

            res.status(200).json(livros);
        } catch (error) {
            console.error("erro ao buscar titulo");
            res.status(500).json({ error: 'error ao buscar livros' });
        }
    },

    /*
    cadastrar livro
    */

    cadastrarLivro: async (req, res) => {
        try {
            const { tituloLivro, anoLivro, qtdeLivro,nomeAutor } = req.body;

            if (tituloLivro == undefined || anoLivro == undefined || qtdeLivro == undefined || isNaN(anoLivro) || isNaN(qtdeLivro) ||nomeAutor == undefined) {
                return res.status(400).json({ erro: 'Campos obrigatórios não preenchidos' });
            };
            await livroModel.cadastrarLivros(tituloLivro, anoLivro, qtdeLivro,nomeAutor);
            res.status(201).json({ message: 'Livro cadastrado com sucesso' });
        } catch (error) {
            console.error('Erro ao cadastrar livro', error);
            res.status(500).json({ erro: 'erro ao cadastrar livro' });
        }

    }
}

module.exports = { livroController };