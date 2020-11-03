var pg = require('pg');

var conn = function(){
    return new pg.Client({
        host : 'localhost',
        user : 'postgres',
        password : '12345',
        database : 'portal_de_noticiais'
    });
}

//var conString = "postgres://postgres:12345@localhost:5432/portal_de_noticiais";
//var client = new pg.Client(conString);
//client.connect();

module.exports = function(){
    return conn;
};