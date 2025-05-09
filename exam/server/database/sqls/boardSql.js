const sqlList = {
  selectList: "SELECT b.no, b.title, b.writer, b.created_dt, count(c.no) as cnt FROM t_board_board as b LEFT OUTER JOIN t_comment_board as c ON b.no = c.bno GROUP BY b.no, b.title, b.writer, b.created_dt ORDER BY no",
  selectInfo: "SELECT no, title, writer, content, created_dt FROM t_board_board WHERE no = ?",
  insertInfo: "INSERT t_board_board SET ?",
  updateInfo: "UPDATE t_board_board SET ? WHERE no = ?"
}

module.exports = sqlList;