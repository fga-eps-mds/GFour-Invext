const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const app = express();

// so esse funciona
app.post("/cadastrar", async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    var usr = {
        nomeCompleto: req.body.nomeCompleto,
        dataNascimento: req.body.dataNascimento,
        telefone: req.body.telefone,
        email: req.body.email,
        senha: await bcrypt.hash(req.body.senha, salt)
    };

    await User.create(usr)
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
app.post("/login", async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if(user){
        const validador_de_senha = await bcrypt.compare(req.body.senha, User.senha);
        if(validador_de_senha){
            return res.json({
                erro: false,
                message: "Usuario logado com sucesso"
            })
        } else {
            return res.status(400).json({
                erro: true,
                message: "Usuario nao logado com sucesso"
            })
        }
    } else {
        return res.status(400).json({
            erro: true,
            message: "Usuario nao existe"
        })
    }
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