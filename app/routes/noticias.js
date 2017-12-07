module.exports = function(app) {

  app.get('/noticias', function(req, res){
    // Carrega a funcao de conexao com bd exportada via autoload.
    var connection = app.config.dbConnection()
    // Carrega o model de noticias.
    var noticiasModel = new app.app.models.NoticiasDAO(connection)

    noticiasModel.getNoticias(function(error, result){
        res.render('noticias/noticias', {noticias : result})
      })
    })
}
