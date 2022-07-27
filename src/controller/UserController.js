const express = require("express");
const app = express();

const User = require('../models/User');

app.post("/cadastrar", async (req, res) => {
    console.log(req.body);

    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            message: "Usuario cadastrado com sucesso"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            message: "Usuario nao cadastrado com sucesso"
        })
    });
})

module.exports = app;