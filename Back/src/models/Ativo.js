const Sequelize = require('sequelize');
const db = require('./db');

const Ativo = db.define('ativo', {
    id: {
        type: Sequelize.INTEGER,
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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo nao pode ser vazio"
            }
        }
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
    data: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo nao pode ser vazio"
            }
        }
    },
    execucao: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

Ativo.sync()

// verifica se existe alteração na model que não está no BD
// Acao.sync({ alter: true })

module.exports = Ativo;