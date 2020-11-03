function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    var aux = "(" + "'" + noticia['titulo'] + "'" + ", " + "'" + noticia['noticia'] + "'" + 
    ", " + "'" + noticia['resumo'] + "'" + ", " + "'" + noticia['autor'] + "'" + 
    ", " + "'" + noticia['data_noticia'] + "'" + ")";
    this._connection.query('insert into noticias (titulo, noticia, resumo, autor, data_noticia) values ' + aux, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function () {
    return NoticiasDAO;    
}