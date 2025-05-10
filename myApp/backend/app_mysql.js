const express = require('express');

require('dotenv').config({path: './mysql/.env'})


const app = express();
const port = 3000;
const path = require('path');

//body parse
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('welcome~💜(❁´◡`❁)');
})

//라우터들
app.use('/api/books', require('./routes/books.js'));
app.use('/api/uploads/', express.static(path.join(__dirname, 'uploads')));

//리스너
app.listen(port, () => {
  console.log(`http://localhost:${port} 서버가 실행되었습니다.`);
})