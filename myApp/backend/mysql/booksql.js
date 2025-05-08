const sqlList = {
  selectList: "SELECT id, title, writer, pub_date FROM books",
  selectInfo: "SELECT id, title, writer, pub_date, isbn, book_desc FROM books WHERE id = ?",
  insertInfo: "INSERT books SET ?",
  updateInfo: "UPDATE books SET ? WHERE id = ?",
  deleteInfo: "DELETE FROM shop.book WHERE id = ?"
}

module.exports = sqlList;