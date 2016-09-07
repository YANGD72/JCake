var mysql = require('mysql')
var pool = mysql.createPool({
  connectionLimit: 3,
  host: 'localhost',
  user: 'root',
  database: 'testdb',
  password: ''
})


// register = function(){
  pool.getConnection(function (err, conn) {
      // Use the connection
      console.log(err);
      conn.query('SELECT * FROM test', function (err, rows) {
          if (err) console.error("err : " + err);
          console.log("rows : " + JSON.stringify(rows));
          conn.release();

          // Don't use the connection here, it has been returned to the pool.
      });
  });
// }
// register();
module.export = {

}
