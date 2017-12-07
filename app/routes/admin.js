module.exports = function(app){
  app.get('/formulario_inclusao_noticia', function(req, res){
    res.render('admin/form_add_noticia')
  })

  app.post('/noticias/salvar', function(req, res){
    var noticia = req.body

    // Carrega a funcao de conexao com bd exportada via autoload.
    var connection = app.config.dbConnection()
    // Carrega o model de noticias.
    var noticiasModel = new app.app.models.NoticiasDAO(connection)

    noticiasModel.salvarNoticia(noticia, function(error, result){
        res.redirect('/noticias')
      })
    })
}
