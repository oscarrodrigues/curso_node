module.exports = function(app) {

  app.get('/noticias', function(req, res){
    // Carrega a funcao de conexao com bd exportada via autoload.
    var connection = app.config.dbConnection()
    // Carrega o model de noticias.
    var noticiasModel = app.app.models.noticiasModel

    noticiasModel.getNoticias(connection, function(error, result){
        res.render('noticias/noticias', {noticias : result})
      })
    })
}
