// Carrega o modulo do Express.
var express = require('express')
// Armazena a instancia do Express na variavel app.
var app = express()
// Configura como engine de view o modulo EJS.
app.set('view engine', 'ejs')
// Especifica o diretorio de views
app.set('views', './app/views')
app.use(express.static('public'));

// Exporta o objeto app.
module.exports = app
