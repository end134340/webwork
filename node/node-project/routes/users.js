//유저 저장
const express = require('express');
const router = express.Router();

//로그인 정보
router.get('/info', (req, res) => {
  res.send({email: req.session.email});
})


//로그인
router.post('/login', (req, res) => {
  const { email, pw } = req.body; //query에서 email이랑 pw를 읽어와라
  req.session.email = email; //세션에 이메일 넣음.
  req.session.save(err => { //세션에 저장. 에러가 있으면 콜백, 없으면 그냥.
    if (err) {
      throw err;
    }
    res.send({code: 'success'});
  })
})

//로그아웃
router.post('/logout', (req, res) => {
  req.session.destroy(); // destroy() 함수를 사용해서 세션 삭제 
})

module.exports = router; //생성한 라우터들을 export