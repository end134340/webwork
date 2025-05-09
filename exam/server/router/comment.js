const express = require('express');
const router = express.Router();
const query = require('../database/mapper.js');

const tbl = 'comment';

router.get('/:bno', async (req, res) => {
  const result = await query(tbl, 'selectList', req.params.bno);
  res.send(result);
})

router.get('/cnt/:bno', async (req, res) => {
  const result = await query(tbl, 'selectCnt', req.params.bno);
  res.send(result);
})

module.exports = router;