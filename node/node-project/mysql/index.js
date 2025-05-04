// mysql 모듈 로드 
const mysql = require("mysql2");
const customer = require('../mysql/customersql.js');
const board = require('../mysql/boardsql.js');
const comment = require('../mysql/commentsql.js');
const sqlList = { customer, board, comment }; // = customer: customer, board: board
// sqlList['customer']['selectList']; 형식으로 2차원 배열처럼 들어와야함.
//sql 쿼리문 임포트.

// mysql 접속 정보 
const conn = {
  // connectionLimit: 10, //미리 생성해 둘 커넥션 개수(connectionPool을 사용할 때 필요.)
  // host: '127.0.0.1',
  // port: "3306",
  // user: "hr",
  // password: "Admin1234",
  // database: "shop"

  //.env파일에 등록한 정보를 읽어옴.
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE,
  connectionLimit: process.env.DB_LIMIT,
};

// DB 커넥션 생성 (커넥션 풀)
let pool = mysql.createPool(conn);

//실행구문을 함수로 만듦.
const query = (tbl, sql, data) => {
  return new Promise((resolve, reject) => {
    //promise의 인수: resolve: 성공했을 때 실행할 함수 reject: 에러가 있을 때 실행할 함수?
    pool.query(sqlList[tbl][sql], data, (err, result) => { //콜백함수 첫 번째 인수: 에러, 두번째 인수: 쿼리 실행 결과.
      //sqlList[sql]로 sqlList['selectList']로 키 값을 넘겨 받아서 알아서 찾아와서 쿼리.
      if (err) {
        console.error(err);
        reject();
      } else {
        resolve(result); //resolve로 다음 then절을 실행하며 쿼리 실행문 결과를 넘겨줌.
      }
    })
  })
}

module.exports = query; //다른 곳에서 사용하기 위해 export