const express = require("express");
const Ativo = require("../models/Ativo");
const app = express();
const auth = require("../middleware/auth");

app.post("/cadastrar", auth, async (req, res) => {    
    const novo_ativo = {
        id_usuario: "token", // ESTA ERRADO <============== TEM QUE PUXAR DO BACK
        nomeAtivo: req.body.nomeAtivo,
        sigla: req.body.sigla,
        preco: req.body.preco,
        quantidade: req.body.quantidade,
        data: req.body.data,
        execucao: "compra"
    };

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
})

module.exports = app;