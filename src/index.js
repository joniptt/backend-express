var express = require("express")
var app = express()

const rotas = require("./routes/controller")
const port = 3000

app.use("chat", rotas)

app.listen(port)
