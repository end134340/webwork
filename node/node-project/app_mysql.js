//DB연동까지 되는 서버 만들기.
const express = require('express');

//express 생성 전에 먼저 환경 변수가 등록되어야 함.
require('dotenv').config({path: './mysql/.env'}) 

const app = express();
const cors = require('cors'); //cors 임포트
const port = 3000;

//cors 설정(모두 허용)
app.use(cors())

//body parse (req.body로 받기 위해 파싱이 필요함.)
app.use(express.urlencoded({
  extended: false
})); //폼 데이터 파싱.
app.use(express.json()) //json 데이터 파싱.
//이거없으면안됨ㅅㅂ!!!!!!!!!!!!!!!!!!!!!!!!!!


//라우트 설정.
app.get('/', (req, res) => { //엔드포인트
  res.send('hello~(❁´◡`❁)');
});

// app.get('/customers');
app.use('/customers', require('./routes/customers.js'));
app.use('/board', require('./routes/board.js'));
app.use('/comment', require('./routes/comment.js'))

app.listen(port, () => {
  console.log(`http://localhost:${port}서버 실행됨.`);
})