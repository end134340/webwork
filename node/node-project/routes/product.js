const express = require('express');
const router = express.Router();

router.get('', (req, res) => { //전체 조회
  res.send('product root')
})
router.post('', (req, res) => { //등록
  res.send('insert root')
})

router.get('/:id', (req, res) => { //단건 조회
  res.send('product 단건 조회')
})
router.put('/:id', (req, res) => { //수정
  res.send('update root')
})
router.delete('/:id', (req, res) => { //삭제
  res.send('delete route')
})

module.exports = router; //생성한 라우터들을 export