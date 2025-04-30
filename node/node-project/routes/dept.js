const express = require('express');
const router = express.Router();

router.get('', (req, res) => { res.send('dept 전체 조회')})
router.post('', (req, res) => { res.send('dept 등록')})

router.get('/:id', (req, res) => { res.send('dept 단건 조회')})
router.put('/:id', (req, res) => { res.send('dept 수정')})
router.delete('/:id', (req, res) => { res.send('dept 삭제')})


module.exports = router;