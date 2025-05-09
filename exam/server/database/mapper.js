const mysql = require('mysql2');
const board = require('./sqls/boardSql.js');
const comment = require('./sqls/commentSql.js');
const sqlList = { board, comment };

const conn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE,
  connectionLimit: process.env.DB_LIMIT,
}

let pool = mysql.createPool(conn);

const query = (tbl, sql, data) => {
  return new Promise((resolve, reject) => {
    pool.query(sqlList[tbl][sql], data, (err, result) => {
      if(err) {
        console.log(err);
        reject();
      } else {
        resolve(result);
      }
    })
  })
}

module.exports = query;