const express = require('express');
require('dotenv').config({path: './database/mysql.env'})

const app = express();
const port = 3000;

//body parse
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('welcome~💜(❁´◡`❁)');
})

//라우터들
app.use('/board', require('./router/board.js'));
app.use('/comment', require('./router/comment.js'));

//리스너
app.listen(port, () => {
  console.log(`http://localhost:${port} 서버가 실행되었습니다.`);
})