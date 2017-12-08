module.exports.formulario_inclusao_noticia = function(app, req, res){
  res.render('admin/form_add_noticia', {validacao : {}, noticia : {}})
}

module.exports.noticias_salvar = function(app, req, res){
  var noticia = req.body

  // Validacao dos campos enviados para request via post do formulario.
  req.assert('titulo', 'Título é obrigatório.').notEmpty()
  req.assert('resumo', 'Resumo é obrigatório.').notEmpty()
  req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres.').notEmpty()
  req.assert('autor', 'Autor é obrigatório.').notEmpty()
  req.assert('data_noticia', 'Data é obrigatório').notEmpty()
  req.assert('noticia', 'Noticia é obrigatório.').notEmpty()

  // Se houver erros envia os dados da variavel "errors" para variavel "validacao" que eh passada para view form_add_noticia.
  var erros = req.validationErrors()
  //console.log(erros);
  if(erros){
    res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia})
    return;
  }

  // Carrega a funcao de conexao com bd exportada via autoload.
  var connection = app.config.dbConnection()
  // Carrega o model de noticias.
  var noticiasModel = new app.app.models.NoticiasDAO(connection)

  noticiasModel.salvarNoticia(noticia, function(error, result){
      res.redirect('/noticias')
  })
}
