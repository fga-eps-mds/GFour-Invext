const Sequelize = require('sequelize');
const db = require('./db');

const Acao = db.define('acao', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeAtivo: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo nao pode ser vazio"
            }
        }
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    sigla: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo nao pode ser vazio"
            }
        }
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: true,
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo nao pode ser vazio"
            }
        }
    },
    dataCompra: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo nao pode ser vazio"
            }
        }
    }
});

Acao.sync()

// verifica se existe alteração na model que não está no BD
// Acao.sync({ alter: true })

module.exports = Acao;