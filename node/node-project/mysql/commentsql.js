
const sqlList = {
  selectList: "SELECT id, writer, content, created_date, bid FROM comment WHERE bid = ?",
  selectInfo: "SELECT id, writer, content, created_date, bid FROM comment WHERE id = ?",
  insertInfo: "INSERT comment SET ?",
  updateInfo: "UPDATE comment SET ? WHERE id = ?",
  deleteInfo: "DELETE FROM shop.comment WHERE id = ?"
}

module.exports = sqlList;