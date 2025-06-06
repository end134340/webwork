// mysql 모듈 로드 
const mysql = require("mysql2");

// mysql 접속 정보 
const conn = {
  host: '127.0.0.1',
  port: "3306",
  user: "root",
  password: "admin",
  database: "shop"
};

// DB 커넥션 생성 
let connection = mysql.createConnection(conn);

// 1. DB 접속 체크 (생략가능) 
connection.connect((err) => {
  if (err) {
    console.log("error connection" + err.stack);
    return;
  }
});
// 2. SQL 실행 
const id = 1
const data = {name: '김정석'}
sql = "UPDATE customers SET ? WHERE id = ?"; //값이 여러개면 배열로 묶어줌.
connection.query(sql, [data, id], function (err, results, fields) { //콜백함수 인수: 에러, 쿼리문 처리결과, 필드
  //sql문을 넘긴 다음, SET으로 넘길 데이터가 있으면 객체?로 넘김. 값이(?가 두개 이상) 여러개면 배열로 넘기는데 순서대로 넣어줘야 함.
  if (err) {
    console.log(err);
  }
  // 3. 결과 처리 
  console.log(results);
});
// DB 접속 종료(비동기이지만 SQL이 모두 실행되면 종료) 
connection.end();