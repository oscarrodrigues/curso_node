// Carrega o modulo do Express.
var express = require('express')
// Carrega o modulo do consign
var consign = require('consign')

// Armazena a instancia do Express na variavel app.
var app = express()
// Configura como engine de view o modulo EJS.
app.set('view engine', 'ejs')
// Especifica o diretorio de views
app.set('views', './app/views')
// Especifia o diretorio com conteudo estatico
app.use(express.static('public'));

// Realiza o autoload das rotas e da conexao do bd para dentro da app.
consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .into(app)

// Exporta o objeto app.
module.exports = app
