const express = require('express')
const app = express()
const port = 8080
// get the client
const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

// For pool initialization, see above
pool.getConnection(function(err, conn) {
  // For pool initialization, see above
  pool.query("SELECT * FROM University", function(err, rows, fields) {
    // Connection is automatically released when query resolves
    console.log(rows);
  });
  // Don't forget to release the connection when finished!
  pool.releaseConnection(conn);
});

app.get('/', (req, res) => {
  res.json({
    "hey" : "NodeJs"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})