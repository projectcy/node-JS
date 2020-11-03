module.exports.index = function (application, req, res) {
    var connection = application.config.dbConnection();
    connection.connect();

    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.get5UltimasNoticias(function(error, result){
        res.render("home/index", {noticias : result});
    });    
}