const express = require("express");
const Ativo = require("../models/Ativo");
const app = express();


app.post("/cadastrar", async (req, res) => {
    
    const novo_ativo = {
        nomeAtivo: req.body.nomeAtivo,
        sigla: req.body.sigla,
        preco: req.body.preco,
        quantidade: req.body.quantidade,
        dataCompra: req.body.data
    };

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