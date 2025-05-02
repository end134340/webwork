//index.js에서 생성한 커넥션 풀을 import함

const pool = require('./mysql') //index는 적지 않아도 자동으로 index를 불러옴.

// 1. DB 접속 체크 (생략가능) Connection Pool일 때에는 딱히 필요 없음
// connection.connect((err) => {
//   if (err) {
//     console.log("error connection" + err.stack);
//     return;
//   }
// });
// 2. SQL 실행 
const data = {
  name: '최커피',
  email: "choi@ma.il",
  phone: "01099991111"
}
// sql = "INSERT customers set ?"; //?가 있다면 넘겨줄 데이터가 필요. ?가 없으면 데이터 넘기지 않아도 됨.
sql = "INSERT customers (name, email, phone) VALUES(? , ? , ?)";

//일반 기본? connection 사용
// connection.query(sql, data, function (err, results, fields) { //콜백함수 인수: 에러, 처리결과, 필드
//   if (err) {
//     console.log(err);
//   }

//Connection Pool 사용.
//? 개수가 2개 이상이면 배열로 보내하 하고, 컬럼 순서대로 값을 보내야 함. SET 절을 사용하지 않을 때에는 이렇게 해야됨.
pool.query(sql, [data.name, data.email, data.phone], function (err, results, fields) { //콜백함수 인수: 에러, 처리결과, 필드. 바뀌지 않음.
  if (err) {
    console.log(err);
  }
  // 3. 결과 처리 
  console.log(results);
});
// DB 접속 종료(비동기이지만 SQL이 모두 실행되면 종료) 
// connection.end(); Connection Pool일 때에는 딱히 필요 없?나봄.