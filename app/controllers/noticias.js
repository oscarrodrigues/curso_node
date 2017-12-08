module.exports.noticias = function (app, req, res){
  // Carrega a funcao de conexao com bd exportada via autoload.
  var connection = app.config.dbConnection()
  // Carrega o model de noticias.
  var noticiasModel = new app.app.models.NoticiasDAO(connection)

  noticiasModel.getNoticias(function(error, result){
    res.render('noticias/noticias', {noticias : result})
  })
}

module.exports.noticia = function(app, req, res) {
  // Carrega a funcao de conexao com bd exportada via autoload.
  var connection = app.config.dbConnection()
  // Carrega o model de noticias.
  var noticiasModel = new app.app.models.NoticiasDAO(connection)

  noticiasModel.getNoticia(function(error, result){
    res.render('noticias/noticia', {noticia : result})
  })
}
