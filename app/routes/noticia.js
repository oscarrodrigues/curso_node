module.exports = function(app) {

  app.get('/noticia', function(req, res){
    // Carrega a funcao de conexao com bd exportada via autoload.
    var connection = app.config.dbConnection();
    var noticiasModel = app.app.models.noticiasModel

    noticiasModel.getNoticia(connection, function(error, result){
      res.render('noticias/noticia', {noticia : result})
    })
  })
}
