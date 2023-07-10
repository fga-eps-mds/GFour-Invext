const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const User = require("../models/User");
const AtivosB3 = require("../util/AtivosB3Util");

// funciona
router.post("/cadastrar", async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    
    const novo_usuario = {
        nomeCompleto: req.body.nomeCompleto,
        cpf: req.body.cpf,
        dataNascimento: req.body.dataNascimento,
        telefone: req.body.telefone,
        email: req.body.email,
        senha: await bcrypt.hash(req.body.senha, salt)
    };

    const usuario = await User.findOne({ where: { email: novo_usuario.email}  });

    if (usuario === null){
        await User.create(novo_usuario)
        .then(() => {
            return res.json({
                erro: false,
                message: "Usuario cadastrado com sucesso!"
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
            message: "Usuario ja existente no banco!"
        })
    }
})

//funciona
router.post("/login", async (req, res) => {
    const usuario = await User.findOne({
        attributes: ["id", "email", "senha"],
        where: {
            email: req.body.email
        }
    });

    if(usuario === null){
        return res.status(400).json({
            erro: true,
            message: "Usuario nao encontrado!"
        });
    } else {
        if(!(await bcrypt.compare(req.body.senha, usuario.senha))){
            return res.status(400).json({
                erro: true,
                message: "Senha incorreta!"
            });
        } else {
            const token = jwt.sign({id: usuario.id}, "INVEXTGFOURD62ST92Y7A6V7K5C6W9ZU6W8KS3", {
                // expiresIn: 600 //10 min
                // expiresIn: '7d' // 7 dia
                // expiresIn: 1800 //30 min
            });
        
            // Quando o usuario fizer login, o banco de dados 
            // com todos os ativos eh atualizado
            //await AtivosB3.updateAtivosB3().
            /*then(async () => {
                return res.json({
                    erro: false,
                    message: "Login realizado com sucesso!",
                    token
                });
            }).catch(async () => {
                return res.status(400).json({
                    erro: true,
                    message: "Login nao realizado com sucesso!!"
                });
            });*/

            AtivosB3.updateAtivosB3();
            return res.json({
                erro: false,
                message: "Login realizado com sucesso!",
                token
            });
        }
    }
});

// nao funciona -> somente o usuario logado deve conseguir atualizar suas infos
router.post("/atualizar", async (req, res) => {

})

// nao funciona -> somente o usuario logado deve conseguir deletar sua conta
router.post("/deletar", async (req, res) => {

})

module.exports = router;