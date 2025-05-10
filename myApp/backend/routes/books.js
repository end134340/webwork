const express = require('express');
const router = express.Router();
const query = require('../mysql');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); // uploads 폴더에 저장
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // 고유한 파일명
  }
});
const upload = multer({ storage: storage });

router.get('', async (req, res) => {
  const result = await query('selectList', null);
  res.send(result);
})

router.get('/:id', async (req, res) => {
  const result = await query('selectInfo', req.params.id);
  res.send(result);
})

router.post('', upload.single('image'), async (req, res) => {
  const data = {
    ...req.body,
    image: req.file ? `/uploads/${req.file.filename}` : null
  };
  const result = await query('insertInfo', data);
  res.send(result);
});

router.put('/:id', upload.single('image'), async (req, res) => {
  const data = {
    ...req.body,
    image: req.file ? `/uploads/${req.file.filename}` : req.body.image
  };
  const result = await query('updateInfo', [data, req.params.id]);
  res.send(result);
});

router.delete('/:id', async (req, res) => {
  const result = await query('deleteInfo', req.params.id);
  res.send(result);
})

module.exports = router;