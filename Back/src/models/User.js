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
    cpf: {
        type: Sequelize.STRING,
        validate: {
            isCpfValid(value) {
                if (value.length !== 11) {
                    throw new Error('O CPF deve ter 11 caracteres');
                }
                if (!/^\d+$/.test(value)) {
                    throw new Error('O CPF deve conter apenas caracteres numéricos');
                }
            }
        },
        unique: {
            msg: 'CPF já está sendo utilizado por outro usuário'
        }
    },
    dataNascimento: {
        type: Sequelize.STRING,
        allowNull: false,
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
                msg: "Email digitado eh invalido!"
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