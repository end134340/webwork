//board 쿼리문만 모아둠.

const sqlList = {
  selectList: "SELECT id, title, writer, content, created_date FROM board",
  selectInfo: "SELECT id, title, writer, content, created_date FROM board WHERE id = ?",
  insertInfo: "INSERT board SET ?",
  updateInfo: "UPDATE board SET ? WHERE id = ?",
  deleteInfo: "DELETE FROM shop.board WHERE id = ?"
}

module.exports = sqlList;
