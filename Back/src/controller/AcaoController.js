const express = require("express");
const Acao = require("../models/Acao");
const app = express();


app.post("/cadastrarAcao", async (req, res) => {
    
    const nova_acao = {
        nomeAtivo: req.body.nomeAtivo,
        tipo: req.body.tipo,
        sigla: req.body.sigla,
        preco: req.body.preco,
        quantidade: req.body.quantidade,
        dataCompra: req.body.dataCompra,
    };

    const acoes = await Acao.findOne({ where: { nomeAtivo: nova_acao.nomeAtivo}  });

    if (acoes === null || acoes === acoes){
        await Acao.create(nova_acao)
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