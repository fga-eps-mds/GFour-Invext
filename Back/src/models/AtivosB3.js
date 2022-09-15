const Sequelize = require('sequelize');
const db = require('./db');

const AtivosB3 = db.define('b3_ativo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data_pregao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    codigo_acao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome_empresa: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    valor_fechamento: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
});

AtivosB3.sync()

module.exports = AtivosB3;