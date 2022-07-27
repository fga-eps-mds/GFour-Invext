const express = require("express");
const app = express();

const User = require('../models/User');

// so esse funciona
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

// nao funciona
app.get("/buscar", async (req, res) => {
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

// nao funciona
app.post("/atualizar", async (req, res) => {
    console.log(req.body);

    await User.destroy(req.body)
    .then(() => {
        return res.json({
            erro: false,
            message: "Usuario deletado com sucesso"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            message: "Usuario nao deletado com sucesso"
        })
    });
})

// nao funciona
app.post("/deletar", async (req, res) => {
    console.log(req.body);

    await User.destroy(req.body)
    .then(() => {
        return res.json({
            erro: false,
            message: "Usuario deletado com sucesso"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            message: "Usuario nao deletado com sucesso"
        })
    });
})

module.exports = app;