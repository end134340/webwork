const express = require('express');

require('dotenv').config({path: './mysql/.env'})

const session = require('express-session') //서버 내 세션 저장.
const fileStore = require('session-file-store')(session);

const app = express();
const port = 3000;

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

//body parse
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('welcome~💜(❁´◡`❁)');
})

//라우터들
app.use('/api/books', require('./routes/books.js'));

//리스너
app.listen(port, () => {
  console.log(`http://localhost:${port} 서버가 실행되었습니다.`);
})