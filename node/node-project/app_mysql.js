//DB연동까지 되는 서버 만들기.
const express = require('express');

//express 생성 전에 먼저 환경 변수가 등록되어야 함.
require('dotenv').config({path: './mysql/.env'}) 

const cors = require('cors'); //cors 임포트 
const session = require('express-session');  //서버에 세션 저장
const fileStore = require('session-file-store')(session);

const app = express();
const port = 3000;

//세션 서버 저장 설정.
app.use(session({ 
  secret: '1234', //암호화하는 데 쓰일 키. 암호 키 값(패스워드) 키가 다르면 암호화 복호화 안됨
  resave: false,        // 세션에 변경사항이 없어도 항상 다시 저장할지 여부 
  saveUninitialized: true,  // 초기화되지 않은 세션을 스토어(저장소)에 강제로 저장할지 여부 
  cookie: {          // 세션 쿠키 설정 (세션 관리 시 클라이언트에 보내는 쿠키) 
    httpOnly: true,  // true 이면 클라이언트 자바스크립트에서 document.cookie로 쿠키 정보를 볼 수 없음 
    secure: false, //true,    // true 이면 https 환경에서만 쿠키 정보를 주고 받도록 처리, 지금은 http 환경이므로 false로 함. 필요하면 true.
    maxAge: 60000    // 쿠키가 유지되는 시간 (밀리세컨드 단위) 
  }, 
  store: new fileStore() // 세션 저장소로 fileStore 사용. 파일 대신에 메모리나 sql?로도 가능?
}));

//cors 설정(모두 허용)
// app.use(cors()) //도메인 또는 포트가 다른 서버의 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제.
//다른 도메인의 리소스는 접근할 수 없음

//body parse (req.body로 받기 위해 파싱이 필요함.)
app.use(express.urlencoded({
  extended: false
})); //폼 데이터 파싱.
app.use(express.json()) //json 데이터 파싱.
//이거없으면안됨!!!!!!!!!!!!!!!!!!!!!!!!!!


//라우트 설정.
app.get('/', (req, res) => { //엔드포인트
  res.send('hello~(❁´◡`❁)');
});

// app.get('/customers');
app.use('/api/customers', require('./routes/customers.js'));
app.use('/api/board', require('./routes/board.js'));
app.use('/api/comment', require('./routes/comment.js'));
app.use('/api/users', require('./routes/users.js'));

app.listen(port, () => {
  console.log(`http://localhost:${port}서버 실행됨.`);
})