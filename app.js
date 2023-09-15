
const express = require('express');
const path = require('path');
const app = express();
// A session criada abaixo 
const session = require('express-session')
const connection = require('./database/database.js')

// Setup de ambiente
// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Sessions
app.use(session({
  secret: 'livro',
  cookie: {
    maxAge : 1200000, // Equivale a 30 minutos por sessão
  },
  resave: true, // Enquanto o usuario estiver usando, se deixar 'true' ele fica renovando automaticamente, 
                // Se deixar 'false' o usuario terá que renovar o login a cada 30 minuto ou o tempo que for estipulado no maxAge(milisegundos)
  saveUninitialized: true
}))

// Ativar os arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Banco de dados
connection.authenticate()
          // Then é executado quando tudo corre bem
          .then(() => { 
            console.log('Conexão feita com sucesso!')
          })
          // Catch é executado quando der erro
          .catch(erro => {
            console.log('Problemas na conexão!')
          })

// Parse de formulários - decripta os formularios para que possa ser lido
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Models - Primeiro a fazer
const Usuario = require('./models/usuario')
const Genero = require('./models/genero')
const Editora = require('./models/editora')
const Autor = require('./models/autor')
const Livro = require('./models/livro')

// Contollers - Segundo a fazer
// TODO

// Rotas - Terceiro a fazer
// TODO

module.exports = app;
