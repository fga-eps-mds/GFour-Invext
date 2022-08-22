const Axios = require("axios");
const AtivosB3 = require("../models/AtivosB3")

exports.updateAtivosB3 = async function () {
    let dt_ultimo_pregao;

    // Pega a data do ultimo pregao dispnivel na API da B3
    await Axios.get("https://api-cotacao-b3.labdo.it/api/sysinfo", {
    }).then(function(res){
        const { data } = res;
        dt_ultimo_pregao = data.dt_ultimo_pregao;
    }).catch(function(err){
        console.log(err);
    });
    
    // Seleciona todas as informacoes disponiveis sobre todos os ativos nesse dia
    // e atualiza o banco de dados com as novas contacoes do dia
    await Axios.get(`https://api-cotacao-b3.labdo.it/api/cotacao/dt/${dt_ultimo_pregao}/02`, {
    }).then(function(res){
        const { data } = res;

        for (let ativo of data) {
            const novo_ativo = {
                data_pregao: ativo.dt_pregao,
                codigo_acao: ativo.cd_acao,
                nome_empresa: ativo.nm_empresa_rdz,
                valor_fechamento: ativo.vl_fechamento
            }

            AtivosB3.create(novo_ativo); // adiciona o novo ativo no banco a cada iteracao
        }
    }).catch(function(err){
        console.log(err);
    });
}