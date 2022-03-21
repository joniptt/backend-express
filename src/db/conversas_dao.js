async function getConversas(id) {
  const db = require("./database")
  const conversas = await db.connect()
  const res = await conversas.query(
    `SELECT u.iduser,u.username FROM users AS u INNER JOIN conversas AS c ON c.iduser1 = ${id} WHERE c.iduser2 = u.iduser`
  )
  return res.rows
}

module.exports = {
  getConversas,
}
