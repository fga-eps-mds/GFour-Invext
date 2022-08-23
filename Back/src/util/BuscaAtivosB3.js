const AtivosB3 = require("../models/AtivosB3");

exports.buscaPorCaractere =  async function (caracter) {
    var lista = [];
    await AtivosB3.findAll().
    then(function(res) {
        for (let ativo of res) {
            const { nome_empresa } = ativo;
            const { codigo_acao } = ativo;
            lista.push(nome_empresa, codigo_acao);
        }
        return lista;
    }).catch(() => {
        return lista;
    });
}
