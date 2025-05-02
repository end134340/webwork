//sql 쿼리만 모아오기.

const sqllist = {
  selectList: "SELECT * FROM customers",
  selectInfo: "SELECT * FROM customers WHERE id = ?",
  insertInfo: "INSERT customers set ?",
  updateInfo: "UPDATE customers SET ? WHERE id = ?",
  deleteInfo: "DELETE FROM shop.customers WHERE id = ?"
}

module.exports = sqllist;