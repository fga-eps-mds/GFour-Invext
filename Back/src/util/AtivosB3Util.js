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
            let pPrecoMedio = 0, pQuantidade = 0, pTotal = 0, pDiferenca = 0, pTotalatt = 0, pTotalPM = 0, pQuantidadePM = 0;
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
                    pTotalPM += parseFloat(preco) * parseInt(quantidade);
                    pTotal += parseFloat(preco) * parseInt(quantidade);
                    pTotalatt += parseFloat(precoAtt) * parseInt(quantidade);
                    pQuantidadePM += parseInt(quantidade);
                    pQuantidade += parseInt(quantidade);
                } else {
                    //pTotal += (-1) * parseFloat(preco) * parseInt(quantidade);
                    pTotalatt += (-1) * parseFloat(preco) * parseInt(quantidade);
                    pQuantidade += (-1) * parseInt(quantidade);
                }
            }
            vTotal += pTotalatt;
            pPrecoMedio = pTotalPM / pQuantidadePM;
            
            console.log(pTotalatt);
            console.log(pTotal);
            console.log(vTotal);

            const patrimonio = {
                nomeAtivo: pNomeAtivo,
                sigla: pSigla,
                porcentagem: ((pTotalatt / vTotal)*100).toFixed(2),
                quantidade: pQuantidade,
                precoAtual: precoAtual[0].valor_fechamento,
                precoMedio: parseFloat(pPrecoMedio.toFixed(2)),
                diferenca: (precoAtual[0].valor_fechamento*pQuantidade - pTotal).toFixed(2),
                valorTotal: (precoAtual[0].valor_fechamento*pQuantidade).toFixed(2)
            }

            lista.push(patrimonio);

        });
    }
    // Percorre os valores da lista e calcula a porcentagem.
    for (let x of lista) {
        x.porcentagem = ((x.valorTotal / vTotal)*100).toFixed(2);
    }

    return lista;
}

exports.calculaRentabilidade = async function (datas, id_usuario) {
    console.log(datas);
    const sc = new sequelize("usuario", "root", "12345678", {
        host: 'localhost',
        dialect: 'mysql'
    });

    let lista = [];
    for (let data of datas) {
        let lucro = 0;
        await sc.query(`SELECT DISTINCT(sigla) FROM ativos WHERE data LIKE '${data}%' AND id_usuario = ${id_usuario}`).then(async (res) => {
            for (let ativo of res[0]) {
                await sc.query(`SELECT * FROM ativos WHERE data LIKE '${data}%' AND id_usuario = ${id_usuario} AND sigla = '${ativo.sigla}'`).then(async (res2) => {
                    let pTotal = 0, precoMedio = 0, sigla;
                    let qtCompras = 0, qtVendida = 0, qtComprada = 0, qtTotal = 0;
                    for (let result of res2[0]) {
                        // console.log(result, i);
                        sigla = result.sigla;
                        const { preco } = result;
                        const { quantidade } = result;
                        const { execucao } = result;
                        
                        qtTotal += quantidade;
                        if (execucao === "compra") {
                            qtCompras++;
                            qtComprada += quantidade;
                            pTotal = parseFloat(preco) * parseInt(quantidade);
                            precoMedio += parseFloat(preco) * parseInt(quantidade);
                        } else {
                            qtVendida += quantidade;
                            pTotal = (-1) * parseFloat(preco) * parseInt(quantidade);
                        }
                    }

                    // cria a string da data do pregao do mes
                    const pregao = `${data.split("-")[0]}${data.split("-")[1]}`
                    // descobre qual o preco de fechamento do ultimo dia do mes em especifico que teve pregao
                    const precoAtual = await calculaPrecoAtual(pregao, sigla);
                    
                    precoMedio = precoMedio / qtComprada;
                    if (qtCompras === res2[0].length) { // somente compra
                        lucro += qtComprada * (precoAtual - precoMedio); // somente a valorizacao do ativo
                    } else {
                        if (qtVendida === (qtTotal - qtComprada)) { // venda total
                            lucro += pTotal;
                        } else { // venda parcial
                            lucro += pTotal + qtComprada * (precoAtual - precoMedio);
                        }
                    }
                });
            }
            
            const rentabilidade = {
                data: data,
                valor: lucro,
            }

            lista.push(rentabilidade);
        });
    }
    return lista;
}

async function calculaPrecoAtual(data, sigla) {
    return new Promise((resolve, reject) => {
        Axios.get(`https://api-cotacao-b3.labdo.it/api/cotacao/cd_acao/${sigla}/100`, { // devolve os ultimos 100 pregoes desse ativo
        }).then(function(res) {
            for (let pregao of res.data) {
                const { dt_pregao } = pregao;
                if (JSON.stringify(dt_pregao).includes(data)) {
                    return resolve(pregao.vl_fechamento);
                }
            }
        }).catch(function(err) {
            console.log(err);
        });
    });
}