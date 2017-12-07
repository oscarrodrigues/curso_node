var mysql = require('mysql')

var connMysql = function(){
  //console.log("Conexao com bd foi estabelecida")
  return mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'portal_noticias'
  })
}

module.exports = function(){
  //console.log("O autoload carregou o modulo de conexao com bd.");
  return connMysql
}
