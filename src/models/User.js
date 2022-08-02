const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeCompleto: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo nao pode ser vazio"
            }
        }
    },
    dataNascimento: {
        type: Sequelize.DATEONLY,
        validate: {
            notEmpty: {
                msg: "Esse campo nao pode ser vazio"
            }
        }
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Esse campo precisa ser um email"
            }
        }
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo nao pode ser vazio"
            }
        }
    }
});

User.sync()

// verifica se existe alteração na model que não está no BD
// User.sync({ alter: true })

module.exports = User;