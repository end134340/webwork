const express = require('express');
const router = express.Router();
const query = require('../database/mapper.js');

const tbl = 'board'

router.get('', async (req, res) => {
  const result = await query(tbl, 'selectList', null);
  res.send(result);
})

router.get('/:no', async (req, res) => {
  const result = await query(tbl, 'selectInfo', req.params.no);
  res.send(result);
})

router.post('', async (req, res) => {
  const result = await query(tbl, 'insertInfo', req.body);
  res.send(result);
})

router.put('/:no', async (req, res) => {
  const result = await query(tbl, 'updateInfo', [req.body, req.params.no])
  res.send(result);
})

module.exports = router;