// 파일 시스템 읽어들이기.

// const fs = require('fs') //노드가 기본적으로 가지고 있기 때문에 그냥 읽어들이기만 하면 됨.
// fs.readFile('c:/temp/data.txt', 'utf-8', function(err, data){ //readFile() => 비동기형식. ()안에 있는 파일을 읽어들이겠다는 뜻.
//   //첫번째는 읽어들일 파일, 두번째는 옵션(인코딩값이라던가), 세번째는 함수(에러, 데이터)
//   //에러가 있으면 에러 데이터, 아니면 데이터를 넘겨줌.
//   console.log(data);
// })

//동기 방법.
fs.readFileSync('c:/temp/data.txt', 'utf-8')

console.log('the end');
