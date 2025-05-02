const express = require('express')
const router = express.Router();
const query = require('../mysql');

const tbl = 'customer';
//sql쿼리문을 따로 만들어 index에 임포트 => 여기서는 키 값만 넘겨줘 알아서 찾도록.

router.get('', async (req, res) => {
  const result = await query(tbl, 'selectList', null)
  res.send(result); //쿼리가 다 끝나면 결과 받아서 처리.
  //await를 하더라도 Promise로 결과를 리턴해줘야 함.

  //query(sql, null)
  //.then(result => res.send(result));
  //resolve로 받은 result 값을 send로 보내줌.
  // res.send('어떤 결과가 나올까'); //바깥에서 실행되면 쿼리 결과가 안 나와도 그냥 넘어가버림.
})


//req 뒤에 쓸 수 있는 것: body, params, query, (file)
router.post('', async (req, res) => {
  const result = await query(tbl, 'insertInfo', req.body);
  res.send(result);

})

router.get('/:id', async (req, res) => {
  const result = await query(tbl, 'selectInfo', req.params.id);
  res.send(result);
})

router.put('/:id', async (req, res) => {
  const result = await query(tbl, 'updateInfo', [req.body, req.params.id])
  res.send(result);
})

router.delete('/:id', async (req, res) => {
  const result = await query(tbl, 'deleteInfo', req.params.id);
  res.send(result);
})

module.exports = router;