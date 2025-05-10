const sqlList = {
  selectList: "SELECT id, title, writer, pub_date FROM books",
  selectInfo: "SELECT id, title, writer, pub_date, isbn, book_desc, image FROM books WHERE id = ?",
  insertInfo: "INSERT books SET ?",
  updateInfo: "UPDATE books SET ? WHERE id = ?",
  deleteInfo: "DELETE FROM shop.books WHERE id = ?"
}

module.exports = sqlList;