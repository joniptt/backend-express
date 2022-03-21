const express = require("express")
const getConvDao = require("../db/conversas_dao")
const routes = express.Router()

routes.get("conversas/:id", async (req, res) => {
  const idParam = +req.params.id
  let result = await getConvDao.getConversas(idParam)
  res.json(result)
})
routes.get("/:id", (req, res) => {
  console.log("era pra bater aqui essa merda")
  res.send("Conversa de id" + req.params.id)
})
// routes.post("login", (req, res) => {})
// routes.post("message", (req, res) => {})

module.exports = routes
