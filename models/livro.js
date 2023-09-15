const Sequelize = require('sequelize');
const connection = require('../database/database.js');
const Autor = require('./autor')
const Editora = require('./editora')
const Genero = require('./genero')

const Livro = connection.define(
    'livro',
    {
        titulo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        paginas: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
)

// Este comando fará a chave extrangeira automaticamente, esta deve ser a ultima tabela a ser criada no banco
Livro.belongsTo(Autor)
Livro.belongsTo(Editora)
Livro.belongsTo(Genero)

// Livro.sync({force: true});

module.exports = Livro;