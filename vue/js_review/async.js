// async await
axios = require('axios');
//비동기 ajax 통신
async function getBoard(){
  let res = await axios('http://localhost:3000/board/1')
  console.log('2: ', res.data.title);
}

getBoard();
console.log('1: the end');