const express = require("express");
const Ativo = require("../models/Ativo");
const app = express();
const Axios = require("axios");
const linkApi = ("https://api-cotacao-b3.labdo.it/api/carteira");

app.post("/cadastrar", async (req, res) => {
    
    const novo_ativo = {
        nomeAtivo: req.body.nomeAtivo,
        sigla: "",
        preco: req.body.preco,
        quantidade: req.body.quantidade,
        dataCompra: req.body.data
    };

    Axios.get(linkApi, {  

    }).then(function(res){
        const data = res.data;
        
        for(let ativo of data){
            const { nm_empresa } = ativo;
            const { cd_acao } = ativo; 
            //console.log(nm_empresa, cd_acao);

            if(nm_empresa === nomeAtivo){
                novo_ativo.sigla = cd_acao;
            }
        }
    }).catch(function(err){
        console.log(err);
    });

    const ativos = await Ativo.findOne({ where: { nomeAtivo: novo_ativo.nomeAtivo}  });

    if (ativos === null || ativos === ativos){
        await Ativo.create(novo_ativo)
        .then(() => {
            return res.json({
                erro: false,
                message: "Ação cadastrada com sucesso!"
            })
        }).catch((error) => {
            console.log(error);
            return res.status(400).json({
                erro: true,
                message: error.message
            })
        });
    } 
})


module.exports = app;