const express = require('express');
const router = express.Router();
const query = require('../mysql');

router.get('', async (req, res) => {
  const result = await query('selectList', null);
  res.send(result);
})

router.get('/:id', async (req, res) => {
  const result = await query('selectInfo', req.params.id);
  res.send(result);
})

router.post('', async (req, res) => {
  const result = await query('insertInfo', req.body);
  res.send(result);
})

router.put('/:id', async (req, res) => {
  const result = await query('updateInfo', [req.body, req.params.id]);
  res.send(result);
})

router.delete('/:id', async (req, res) => {
  const result = await query('deleteInfo', req.params.id);
  res.send(result);
})

module.exports = router;