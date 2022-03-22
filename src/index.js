var express = require("express")
var app = express()
var cors = require("cors")
const rotas = require("./routes/controller")
const port = 4300

app.use(cors())

app.use(express.json())

app.use("", rotas)

app.listen(port)
