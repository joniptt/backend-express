const express = require("express")
const getConvDao = require("../db/conversas_dao")
const cadastro = require("../db/cadastro_dao")
const User = require("../dto/user-dto")
const routes = express.Router()

routes.get("/conversas/:id", async (req, res) => {
  console.log("era pra bater aqui essa merda")
  const idParam = +req.params.id
  let result = await getConvDao.getConversas(idParam)
  res.json(result)
})
routes.get("/:id", (req, res) => {
  res.send("Conversa de id " + req.params.id)
})
routes.post("/cadastrar", async (req, res) => {
  let form = new User()
  form = req.body
  console.log(form)
  let result = await cadastro.cadastrar(form, res)
  res.json(result)
})
routes.post("login", (req, res) => {})
routes.post("message", (req, res) => {})

module.exports = routes
