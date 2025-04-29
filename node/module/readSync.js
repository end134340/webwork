//readSync.js

//동기, 블로킹 함수
const fs = require('fs')
let text = fs.readFileSync('c:/temp/data.txt', 'utf-8') //동기 방법은 콜백함수가 없음.

console.log(text);

console.log('the end');