async function cadastrar(form) {
  const User = require("../dto/user-dto")
  const db = require("./database")
  let usuario = new User()
  usuario = form
  console.log(usuario)
  const cadastro = await db.connect()

  let exists = await cadastro.query(
    `SELECT users.email FROM users WHERE email = '${usuario.email}'`,
    (error, result) => {
      if (error) {
        throw error
      } else {
        return result
      }
    }
  )

  if (exists === null) {
    await cadastro.query(
      `INSERT INTO users ("email","password","name","telefone") values ('${usuario.email}','${usuario.password}','${usuario.name}','${usuario.telefone}')`
    )
  } else {
    console.log("não foi possível realizar o cadastro, o usuario ja existe!")
  }
}
module.exports = {
  cadastrar,
}
