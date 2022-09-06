const Axios = require("axios");
const AtivosB3 = require("../models/AtivosB3")
const Ativo = require("../models/Ativo");
const sequelize = require('sequelize');

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
    }).then(async function(res){
        const { data } = res;
        var lista = [];
        // deleta todos os registros do banco primeiro
        await AtivosB3.destroy({
            where: {},
            truncate: true
        }).then(async () => {
            for (let ativo of data) {
                const novo_ativo = {
                    data_pregao: ativo.dt_pregao,
                    codigo_acao: ativo.cd_acao,
                    nome_empresa: ativo.nm_empresa_rdz,
                    valor_fechamento: ativo.vl_fechamento
                }
                lista.push(novo_ativo);
            }
            await AtivosB3.bulkCreate(lista); // adiciona todos os ativos no banco de uma vez
        });
    }).catch(function(err){
        console.log(err);
    });
}

exports.calculaPatrimonio = async function (siglas, id_usuario) {
    var lista = [];
    var vTotal = 0;
    for (let sigla of siglas) {
        await Ativo.findAll({
            attributes: [
                "nomeAtivo",
                "sigla",
                "preco",
                "quantidade",
                "data",
                "execucao",
            ],
            where: {
                "id_usuario": id_usuario,
                "sigla": sigla
            },
        }).then(async (res) => {
            let pPrecoMedio = 0, pQuantidade = 0, pTotal = 0, pDiferenca = 0, pTotalatt = 0;
            let pNomeAtivo, pSigla;
            const precoAtual = await AtivosB3.findAll({
                attributes: ['valor_fechamento'],
                where: {
                "codigo_acao": sigla
                }
            });
            precoAtt = precoAtual[0].valor_fechamento;
            for (let result of res) {
                const { nomeAtivo } = result;
                const { sigla } = result;
                const { preco } = result;
                const { quantidade } = result;
                const { execucao } = result;
                const { data } = result;
                
                pNomeAtivo = nomeAtivo;
                pSigla = sigla;
                if (execucao === "compra") {
                    pTotal += parseFloat(preco) * parseInt(quantidade);
                    pTotalatt += parseFloat(precoAtt) * parseInt(quantidade);
                    pQuantidade += parseInt(quantidade);
                } else {
                    pTotal += (-1) * parseFloat(preco) * parseInt(quantidade);
                    pTotalatt += (-1) * parseFloat(preco) * parseInt(quantidade);
                    pQuantidade += (-1) * parseInt(quantidade);
                }
                pPrecoMedio = pTotal / pQuantidade;
            }
            vTotal += pTotalatt;
            
            const patrimonio = {
                nomeAtivo: pNomeAtivo,
                sigla: pSigla,
                porcentagem: ((pTotalatt / vTotal)*100).toFixed(2), // falta calcular
                quantidade: pQuantidade,
                precoAtual: precoAtual[0].valor_fechamento,
                precoMedio: parseFloat(pPrecoMedio.toFixed(2)),
                diferenca: (pTotalatt - pTotal).toFixed(2),
                valorTotal: pTotalatt
            }

            lista.push(patrimonio);

            // Percorre os valores da lista e calcula a porcentagem.
            for (let x of lista) {
                const calculo = ((x.valorTotal / vTotal)*100).toFixed(2);
                x.porcentagem = calculo;
            }
        });
    }
    return lista;
}