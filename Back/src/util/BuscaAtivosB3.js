const { QueryTypes } = require('sequelize');
const Sequelize = require('sequelize');

const sequelize = new Sequelize("usuario", "root", "12345678", {
    host: 'localhost',
    dialect: 'mysql'
});

exports.buscaPorCaractere =  function (caracter) {
    let caracter = "BANANA"
    const query = sequelize.query(`SELECT * FROM b3_ativos WHERE (nome_empresa LIKE '${caracter}%' OR codigo_acao LIKE '${caracter}%');`, { type: QueryTypes.SELECT }).
    then(function(res) {
        var lista_ativos = [];
        for (let ativo of res) {
            const { nome_empresa } = ativo;
            const { codigo_acao } = ativo;
            const linha_ativo = `${nome_empresa} - ${codigo_acao}`
            lista.push(linha_ativo);
        }
        return lista_ativos;
    })
}
