var express = require("express")
var app = express()
const rotas = require("./routes/controller")
const port = 3000
const path = require("path")

app.use(express.json())

app.use("chat", express.static(path.join(__dirname, "public")))

app.listen(port)
