//1. express 임포트
const express = require('express')

//multer: 멀티파트, 폼 데이터 처리 미들웨어.
const multer  = require('multer') //multer import
// const upload = multer({ dest: 'c:/temp/uploads/'
//  }) //파일 저장 경로... 인듯?

 const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'c:/temp/uploads')
  },
  filename: function (req, file, cb) { //파일네임 지정 옵션(원본 파일 이름에 시간을 덧붙임.)
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage })

//2. express 인스턴스 생성
const app = express()
//3. 포트 지정
const port = 80

//미들웨어 자리

//body parse (req.body로 받기 위해 파싱이 필요함.)
app.use(express.urlencoded({
  extended: false
})); //폼 데이터 파싱.
app.use(express.json()) //json 데이터 파싱.
 


//id, title, content
let boards = [{
    "id": 1,
    "title": "잠온다",
    "content": "점심 뭐먹지"
  },
  {
    "id": 2,
    "title": "영화",
    "content": "라스트 마일 봤었어야 했는데..."
  },
  {
    "id": 3,
    "title": "점심",
    "content": "메뉴 추천 받습니다."
  }

]

//로그 찍어주는 미들웨어(morgan). 라우트 설정 위에 있어야 함.
const morgan = require('morgan')
app.use(morgan('[:date[iso]] :method :url :remote-addr')) //로그 출력형식 지정 가능.

app.get('/download', (req, res, next) => {
  const filepath = 'c:/temp/uploads/strawberrycake.jpg'; //파일 이름
  const downname = 'strawberrycake.jpg' //다운로드 받게 할 이름
  // res.setHeader('Content-Type', 'text/plain')
  //다운받은 사용자가 보게 될 파일명
  res.setHeader('Content-Disposition', `attachment; filename=${downname}`); // 이게 핵심 
  res.sendFile(filepath);
});  

//multer 처리를 위한..........라우트? 
app.post('/profile', upload.single('avatar'), function (req, res) {
  // req.file 은 `avatar` 라는 필드의 파일 정보입니다.
  // 텍스트 필드가 있는 경우, req.body가 이를 포함할 것입니다.
  console.log(req.file.size) //파일 크기
  console.log(req.file.filename) //업로드된 파일 이름
  console.log(req.file.originalname) //사용자가 올릴때의 이름.
  res.send('ok');
  
})


//라우트 설정
//개별 라우트 매핑.

// get 방식으로 / 요청이 들어왔을 때 라우터 추가.
app.get('/', (req, res) => {
  res.send('어서오세요.')
})

//전체 조회.
app.get('/board', (req, res) => {
  res.send(boards);
})

//단건 조회
app.get('/board/:id', (req, res) => {
  const id = req.params.id;
  let result = boards.find(ele => ele.id == id)
  res.send(result);
})

// 등록
app.post('/board', (req, res) => {
  //req.body => post로 등록? 했을 때에는 body로 읽어옴.
  const board = req.body; //java에서 req.getParameter로 받아서 vo에 넣어주는데, 거기서 값을 담은 vo라고 보면? 된...다는듯?
  boards.push(board);
  console.log('받은 파라미터', board)
  res.send(board);
})

//수정
app.put('/board/:id', (req, res) => {
  const id = req.params.id //req.params.키 => /경로/값 을 읽어옴.
  const board = req.body; //formData나 json 모두를 받아냄.

  //find로 해당 id 게시글 찾고, 요소의 인덱스 번호 가져와서 board를 바꿈.
  const idx = boards.findIndex((ele) => ele.id == id) //findIndex: 해당하는 조건의 index를 반환함.
  if (idx >= 0) {
    boards[idx] = board; //배열의 idx에 해당하는 글 하나를 board로 바꿔줌.
    res.send(board);
  } else {
    res.send('not found');
  }

})

//삭제
app.delete('/board/:id', (req, res) => {
  const id = req.params.id;
  const idx = boards.findIndex((ele) => ele.id == id);
  if (idx >= 0) {
    // splice 방식. 배열 자체를 건드리기 때문에 잘 안...쓰나?
    //   boards.splice(idx, 1);
    // filter  방식.
    boards = boards.filter(ele => ele.id != id) //삭제하려는 아이디만 제외하고 새 배열을 만들어 넣어줌.
    res.send('삭제되었습니다.');
  } else {
    res.send('not found');
  }
})

let emps = [{
  id: 0,
  name: "길동"
}, {
  id: 1,
  name: "티슈"
}]

//route() 함수를 이용해 같은 리소스(url) moethod 종류별로 묶어서 라우트 구성.

app.route('/emp') //이 url 요청이 들어올 때
  .get((req, res) => { //get 메소드일 때
    res.send(emps);
  })
  // .get((req, res) => { //
  //   const id = req.query.id;
  //   res.send(emps.find(ele => ele.id == id))
  // })
  .post((req, res) => { //post 메소드일 때
    res.send(req.body);
  })
  .put((req, res) => { //put 메소드일 때
    res.send(req.body);
  })
  .delete((req, res) => { //delete 메소드일 때
    res.send(req.body);
  })

//Router를 이용하여 모듈(파일) 분리해 리소스별로 라우트 지정.
app.use('/product', require('./routes/product.js')) //생성한 라우터 파일 import하면서 호출 url 지정.
app.use('/dept', require('./routes/dept.js'));



//listen 설정은 맨 마지막에! 라우터는 중간에.

app.listen(port, () => { //포튼만 넣어서 구동도 가능하고, 콜백함수를 이용해 문자를 출력? 할? 수도 있음.
  //콜백함수로 서버가 구동되었다는 로그 메시지 출력.
  console.log(`http://localhost:${port} 서버가 실행됨.`)
})