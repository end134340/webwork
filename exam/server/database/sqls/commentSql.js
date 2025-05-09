const sqlList = {
  selectList: "SELECT content, writer, created_dt FROM t_comment_board WHERE bno = ?",
  selectCnt: "SELECT count(*) as cnt FROM t_comment_board WHERE bno = ?"
}

module.exports = sqlList;