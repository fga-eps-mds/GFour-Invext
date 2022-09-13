const express = require("express");
const router = express.Router();
const Axios = require("axios");
const sequelize = require('sequelize');

const auth = require("../middleware/auth");
const Ativo = require("../models/Ativo");
const AtivosB3 = require("../models/AtivosB3");

const ativosB3Util = require("../util/AtivosB3Util");

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


    if (ativo_comprado[0] == null) {
        return res.status(400).json({
            erro: true,
            message: "Não existe ativo para vender"
        })
    } else {
        if (ativo_vendido[0] == null) {
            var totalQuantidade = ativo_comprado[0].total - 0;
        } else {
            var totalQuantidade = ativo_comprado[0].total - ativo_vendido[0].total;
        }
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
            message: "Quantidade maior do que disponivel para venda!"
        })
    }

});

// Rota que envia o historico da acao do usuario
router.post("/historico", auth, async (req,res) => {

    const dadoHistorico = await Ativo.findAll({
        attributes: [
            "id",
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
    return res.json({
        historico: dadoHistorico
    })

})

// Rota que envia o patrimonio do usuario
router.post("/patrimonio", auth, async (req, res) => {
    await Ativo.findAll({
        attributes: [
            [sequelize.fn('DISTINCT', sequelize.col('sigla')), 'sigla'],
        ],
        where: {
            "id_usuario": req.usuario.id
        },
    }).then(async (ativos) => {
        let siglas = []
        for (let ativo of ativos) {
            siglas.push(ativo.dataValues.sigla);
        }
        
        const patrimonio = await ativosB3Util.calculaPatrimonio(siglas, req.usuario.id);
        
        return res.json({
            erro: false,
            ativos: patrimonio
        });

    }).catch((error) => {
        console.log(error);
        return res.status(400).json({
            erro: true,
            ativos: []
        })
    });
});

// Rota que envia a Rentabilidade do usuario
router.post("/rentabilidade", auth, async (req, res) => {
    const sc = new sequelize("usuario", "root", "12345678", {
        host: 'localhost',
        dialect: 'mysql'
    });

    await sc.query(`SELECT DISTINCT(SUBSTRING_INDEX(data, '-', 2)) as data FROM ativos WHERE id_usuario = ${req.usuario.id}`).then(async (results) => {
        let datas = []
        for (let data of results[0]) {
            datas.push(data.data);
        }
        const rentabilidade = await ativosB3Util.calculaRentabilidade(datas, req.usuario.id);
        
        return res.json({
            erro: false,
            rentabilidade: rentabilidade
        });

    }).catch((error) => {
        console.log(error);
        return res.status(400).json({
            erro: true,
            ativos: []
        })
    });
});

router.post("/editar", auth, async (req,res) => {
    const { id } = req.body;
    const { data } = req.body;
    const { preco } = req.body;
    const { quantidade } = req.body;

    try {
        if (data !== null) {
            await Ativo.update(
                { data: data },
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

router.get("/buscaativos", async (req,res) => {
    var lista = [];
    var linha = [];
    await AtivosB3.findAll().
    then(function(response) {
        for (let ativo of response) {
            const { nome_empresa } = ativo;
            const { codigo_acao } = ativo;
            linha = {nome: nome_empresa, sigla: codigo_acao};
            lista.push(linha);
        }
        
        return res.json({
            erro: false,
            lista: lista
        });
        
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            lista: lista
        });
    });
}); 

module.exports = router;