// server.mjs

//Node.js로 서버 구축.

import { createServer } from 'node:http'; //서버 구축 모듈.

const server = createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' }); //resp타입은 텍스트가 넘어감. 상태 코드는 200번(성공)으로 넘어감.
res.end('Hello World!\n'); //응답을 보냄.
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => { //서버 구동하는데 포트는 3000으로 함.
console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`

