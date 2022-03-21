var express = require("express")
var app = express()
const cors = require("cors")
const rotas = require("./routes/controller")
const port = 3000

app.use(cors())

app.use("chat", rotas)

app.listen(port)
