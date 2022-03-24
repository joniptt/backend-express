async function cadastrar(req, res) {
  const User = require("../dto/user-dto")
  const db = require("./database")
  let usuario = new User()
  usuario = req
  console.log(usuario)
  const cadastro = await db.connect()

  const emailAlreadyExists = await cadastro.query(
    `SELECT users.email FROM users WHERE email = '${usuario.email}'`
  )

  if (emailAlreadyExists.rows.length > 0) {
    console.log("Não foi possível realizar o cadastro, o usuario ja existe!")
    let status = {
      msg: "Não foi possível realizar o cadastro, o usuario ja existe!",
      status: "401",
    }
    return res.status(401).send(status)
  } else {
    await cadastro.query(
      `INSERT INTO users ("email","password","name","telefone") values ('${usuario.email}','${usuario.password}','${usuario.name}','${usuario.telefone}')`
    )
    let status = {
      msg: "Cadastro realizado com sucesso",
      status: "201",
    }
    return res.status(201).send(status)
  }
}
module.exports = {
  cadastrar,
}
