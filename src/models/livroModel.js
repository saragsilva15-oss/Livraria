const { sql, getConnection } = require("../config/db");

const livroModel = {

    buscarTodos: async () => {
        try {
            const pool = await getConnection();

            let querySQL = "SELECT * FROM Livros";

            const result = await pool.request().query(querySQL);

            return result.recordset;

        } catch (error) {

            console.error("erro ao buscar livros", error);
            throw error;
        }
    },
    buscarTitulo: async (tituloLivro) => {
        try {

            const pool = await getConnection();

            let querySQL = "SELECT * FROM Livros WHERE tituloLivro LIKE @tituloLivro";

            const result = await pool.request().input('titulo',`%${tituloLivro}`).query(querySQL);

            return result.recordset;

        } catch (error) {

            console.error("erro ao buscar Titulo", error);
            throw error;

        }

    },
    cadastrarLivros: async (tituloLivro, anoLivro, qtdeLivro) => {
        try {

            const pool = await getConnection();

            let querySQL = 'INSERT INTO Livros (tituloLivro, anoLivro, qtdeLivro) VALUES (@tituloLivro, @anoLivro, @qtdeLivro)';

            await pool.request().input('tituloLivro', sql.VarChar(100), tituloLivro)
                .input('anoLivro', sql.Int, anoLivro)
                .input('qtdeLivro', sql.Int, qtdeLivro)
                .query(querySQL);
        } catch (error) {
            console.error('Erro ao cadastrar livro', error);
            throw error;

        }
    }
}

module.exports = { livroModel };
