const mysql = require('mysql2');
//여기에 sql.js 파일 임포트(require)
const books = require('../mysql/booksql.js');
const sqlList = books;

const conn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE,
  connectionLimit: process.env.DB_LIMIT,
}

let pool = mysql.createPool(conn);

const query = (sql, data) => {
  return new Promise((resolve, reject) => {
    pool.query(sqlList[sql], data, (err, result) => {
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