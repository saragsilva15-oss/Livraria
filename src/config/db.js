const sql = require("mssql");

const CONFIG = {
    user: 'sa',
    password: '123456789',
    server: 'localhost',
    database: 'Livraria',
    options: {
        encrypt: true,
        trustServerCertificate: true //ignora o erro de certificado autoassinado
    }
}

async function getConnection() {
    try {
        const pool = await sql.connect(CONFIG);
        return pool;
    } catch (error) {
        console.error('Erro na conexão SQL Server', error);
    }
}

module.exports = {sql, getConnection};