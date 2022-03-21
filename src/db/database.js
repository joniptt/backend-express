const Pool = require("pg").Pool
require("dotenv").config()

function connect() {
  if (global.connection) return global.connection.connect()

  const pool = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: +process.env.DB_PORT,
  })
  global.connection = pool
  return pool.connect()
}

module.exports = {
  connect,
}
