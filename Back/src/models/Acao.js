const Sequelize = require('sequelize');
const db = require('./db');

const Acao = db.define('acoes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ativo: {
        type: Sequelize.JSON,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo nao pode ser vazio"
            }
        }
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo nao pode ser vazio"
            }
        }
    },
    quantidade: {
        type: Sequelize.STRING,
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
});
Acao.sync()
Acao.sync({ alter: true })


// verifica se existe alteração na model que não está no BD


module.exports = Acao;