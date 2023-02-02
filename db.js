var mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
module.exports = {
    getData: function(sql, param, callback){
        var connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });

        connection.connect(function(err){
            if(err)
            {
                console.log('error connecting database ...');
            }
        });
        if(param == null)
        {
            connection.query(sql, function(err, result){
                callback(result);
            });
        }
        else
        {
            connection.query(sql, param, function(err,result){
                callback(result);
            });
        }
    }
};

