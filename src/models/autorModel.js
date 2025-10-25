const { sql, getConnection } = require("../config/db");

const autorModel = {

    buscarAutores: async () => {
        
        try {
            const pool = await getConnection();

            let querySQL = "SELECT * FROM Autores";

            const result = await pool.request().query(querySQL);

            return result.recordset;

        } catch (error) {

            console.error("erro ao buscar Autores", error);
            throw error;

        }
    
    },

    cadastrarAutor: async (nomeAutor, nacionalidadeAutor) => {
        try {

            const pool = await getConnection();

            let querySQL = 'INSERT INTO Autores (nomeAutor, nacionalidadeAutor) VALUES (@nomeAutor, @nacionalidadeAutor)'

            await pool.request().input('nomeAutor', sql.VarChar(100), nomeAutor)
                .input('nacionalidadeAutor', sql.VarChar(100), nacionalidadeAutor)
                .query(querySQL);

        } catch (error) {

            console.error('erro ao cadastrar autor', error);

        }
    }

}

module.exports = { autorModel };