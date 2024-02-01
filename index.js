const socketIO = require("socket.io")
const http = require("http")
const express = require("express")
const cors = require("cors")
const app = express()
const server = http.createServer(app)
const io = socketIO(server)
const dotenv = require("dotenv")

dotenv.config({
  path: "./.env"
})

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World!")
})

server.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`)
})