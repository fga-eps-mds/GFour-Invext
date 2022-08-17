const express = require("express");
const Ativo = require("../models/Ativo");
const app = express();
const sequelize = require('sequelize');
const Axios = require("axios");
const linkApi = ("https://api-cotacao-b3.labdo.it/api/carteira");
const auth = require("../middleware/auth");

app.post("/cadastrar", auth, async (req, res) => {
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
        id_usuario: req.usuario.id,
        nomeAtivo: req.body.nomeAtivo,
        sigla: sigla,
        preco: req.body.preco,
        quantidade: req.body.quantidade,
        data: req.body.data,
        execucao: req.body.execucao
    };

    // caso nao ache o nome da empresa,
    // o ativo nao eh cadastrado
    if (!novo_ativo.sigla) {
        return res.json({
            erro: true,
            message: "Ativo nao listado na B3!"
        })
    }

    const ativos = await Ativo.findOne({ where: { nomeAtivo: novo_ativo.nomeAtivo}  });

    
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

app.post("/venda", auth, async (req,res) => {

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
    
    const totalQuantidade = ativo_comprado[0].total - ativo_vendido[0].total;

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

    const nova_venda = {
        id_usuario: req.usuario.id,
        nomeAtivo: req.body.nomeAtivo,
        sigla: sigla,
        preco: req.body.preco,
        quantidade: req.body.quantidade,
        data: req.body.data,
        execucao: req.body.execucao
    };

    if (!nova_venda.sigla) {
        return res.json({
            erro: true,
            message: "Ativo nao listado na B3!"
        })
    }

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
})



module.exports = app;