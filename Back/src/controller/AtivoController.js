const express = require("express");
const Ativo = require("../models/Ativo");
const app = express();
const Axios = require("axios");
const linkApi = ("https://api-cotacao-b3.labdo.it/api/carteira");

app.post("/cadastrar", async (req, res) => {
    let sigla =  null;
    
    // verifica na API da B3 qual eh a sigla do ativo que o
    // usuario deseja cadastrar
    await Axios.get(linkApi, {
        
    }).then(function(res){
        const { nomeAtivo } = req.body;
        const data = res.data;
        
        for(let ativo of data){
            const { nm_empresa } = ativo;
            const { cd_acao } = ativo; 
            //console.log(nm_empresa, cd_acao);
            
            if(nm_empresa === nomeAtivo) {
                sigla = cd_acao;
            }
        }
    }).catch(function(err){
        console.log(err);
    });
    
    const novo_ativo = {
        nomeAtivo: req.body.nomeAtivo,
        sigla: sigla,
        preco: req.body.preco,
        quantidade: req.body.quantidade,
        data: req.body.data
    };

    // caso nao ache o nome da empresa,
    // o ativo nao eh cadastrado
    if (novo_ativo.sigla === null) {
        return res.json({
            erro: true,
            message: "Ativo nao listado na B3!"
        })
    }

    const ativos = await Ativo.findOne({ where: { nomeAtivo: novo_ativo.nomeAtivo}  });

    if (ativos === null){
        await Ativo.create(novo_ativo)
        .then(() => {
            return res.json({
                erro: false,
                message: "Ativo cadastrado com sucesso!"
            })
        }).catch((error) => {
            console.log(error);
            return res.status(400).json({
                erro: true,
                message: error.message
            })
        });
    } else {
        return res.status(400).json({
            erro: true,
            message: "Ativo ja existente no banco!"
        })
    }
})

module.exports = app;