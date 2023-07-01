const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'yacine251203**',
  database : 'shops'
});


connection.connect((err)=>{
  if(err) throw err
  else console.log("database connected");
})
module.exports = connection;