const express = require('express');
const router = express.Router();
const query = require('../mysql');

const tbl = 'comment';

//댓글 조회
router.get('/:bid', async (req, res) => {
  const result = await query(tbl, 'selectList', req.params.bid)
  res.send(result);
})

//댓글 단건 조회(수정을 위함)
router.get('/info/:id', async (req, res) => {
  const result = await query(tbl, 'selectInfo', req.params.id)
  res.send(result);
})

//댓글 등록
router.post('', async (req, res) => {
  const result = await query(tbl, 'insertInfo', req.body)
  res.send(result);
})

//댓글 수정
router.put('/:id', async (req, res) => {
  const result = await query(tbl, 'updateInfo', [req.body, req.params.id])
  res.send(result);
})

//댓글 삭제
router.delete('/:id', async (req, res) => {
  const result = await query(tbl, 'deleteInfo', req.params.id);
  res.send(result);
})

module.exports = router;