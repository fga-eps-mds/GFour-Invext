const express = require("express");
const router = express.Router();
const Axios = require("axios");
const sequelize = require('sequelize');

const auth = require("../middleware/auth");
const Ativo = require("../models/Ativo");

router.post("/cadastrar", auth, async (req, res) => {
    const novo_ativo = {
        id_usuario: req.usuario.id,
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
            message: "Compra de ativo cadastrada com sucesso!"
        })
    }).catch((error) => {
        console.log(error);
        return res.status(400).json({
            erro: true,
            message: error.message
        })
    });
});

router.post("/vender", auth, async (req,res) => {

    // filtro que soma a quantidade de compra do ativo
    const ativo_comprado = await Ativo.findAll({
        attributes: [
            "id_usuario", 
            "nomeAtivo",
            "execucao",
            [sequelize.fn("sum", sequelize.col("quantidade")), "total"]],
        group : ['id_usuario', 'nomeAtivo', 'execucao'],
        raw: true,
        where: {
            "id_usuario" : req.usuario.id,
            "nomeAtivo" : req.body.nomeAtivo,
            "execucao" : "compra"
        },
    })

    // filtro que soma a quantidade de venda do ativo
    const ativo_vendido = await Ativo.findAll({
        attributes: [
            "id_usuario", 
            "nomeAtivo",
            "execucao",
            [sequelize.fn("sum", sequelize.col("quantidade")), "total"]],
        group : ['id_usuario', 'nomeAtivo', 'execucao'],
        raw: true,
        where: {
            "id_usuario" : req.usuario.id,
            "nomeAtivo" : req.body.nomeAtivo,
            "execucao" : "venda"
        },
    })

    if (ativo_vendido[0] == null) {
        var totalQuantidade = ativo_comprado[0].total - 0;
    } else {
        var totalQuantidade = ativo_comprado[0].total - ativo_vendido[0].total;
    }

    const nova_venda = {
        id_usuario: req.usuario.id,
        nomeAtivo: req.body.nomeAtivo,
        sigla: req.body.sigla,
        preco: req.body.preco,
        quantidade: req.body.quantidade,
        data: req.body.data,
        execucao: "venda"
    };

    if (req.body.quantidade <= totalQuantidade) {

        await Ativo.create(nova_venda)
    .then(() => {
        return res.json({
            erro: false,
            message: "Ativo vendido com sucesso!"
        })
    }).catch((error) => {
        console.log(error);
        return res.status(400).json({
            erro: true,
            message: "Erro na venda do ativo"
        })
    });
    } else {
        return res.status(400).json({
            erro: true,
            message: "Erro na venda do ativo"
        })
    }

});

// Rota que envia o historico da acao do usuario
router.get("/historico", auth, async (req,res) => {

    const dadoHistorico = await Ativo.findAll({
        attributes: [
            "id_usuario",
            "nomeAtivo",
            "sigla",
            "preco",
            "quantidade",
            "data",
            "execucao",
            ],
        raw: true,
        where: {
            "id_usuario": req.usuario.id
        },
    })
    console.log(dadoHistorico);

})

router.post("/editar", auth, async (req,res) => {
    const { id } = req.body;
    const { sigla } = req.body;
    const { preco } = req.body;
    const { quantidade } = req.body;

    try {
        if (sigla !== null) {
            await Ativo.update(
                { sigla: sigla },
                { where: {id: id}}
            );     
        }
    
        if (preco !== null) {
            await Ativo.update(
                { preco: preco },
                { where: {id: id}}
            )    
        }
    
        if (quantidade !== null) {
            await Ativo.update(
                { quantidade: quantidade },
                { where: {id: id}}
            );     
        }
        
        return res.json({
            erro: false,
            message: "Ativo editado com sucesso!"
        });

    } catch (error) {
        return res.status(400).json({
            erro: true,
            message: error.message
        });
    }
});

router.post("/excluir", auth, async (req,res) => {
    const { id } = req.body;
      
    await Ativo.destroy({ 
        where: { id: id } 
    }).then(() => {
        return res.json({
            erro: false,
            message: `Ativo ${id} excluido com sucesso!`
        })
    }).catch((error) => {
        console.log(error);
        return res.status(400).json({
            erro: true,
            message: error.message
        })
    });
});

module.exports = router;