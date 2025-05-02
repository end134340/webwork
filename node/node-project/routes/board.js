const express = require('express');
const router = express.Router();
const query = require('../mysql');

const tbl = 'board';


//전체 조회
router.get('', async (req, res) => {
  const result = await query(tbl, 'selectList', null)
  res.send(result);
})

//단건 조회
router.get('/:id', async (req, res) => {
  const result = await query(tbl, 'selectInfo', req.params.id)
  res.send(result);
})

//등록
router.post('', async (req, res) => {
  const result = await query(tbl, 'insertInfo', req.body);
  res.send(result);
})

//수정
router.put('/:id', async (req, res) => {
  const result = await query(tbl, 'updateInfo', [req.body, req.params.id])
  res.send(result);
})

//삭제
router.delete('/:id', async (req, res) => {
  const result = await query(tbl, 'deleteInfo', req.params.id)
  res.send(result)
})

module.exports = router;
