import express, { Express } from "express"

const server: Express = express()

// Routing

server.get("/", (req, res) => {

  const datos = [
    {familiar1:"adrian enis"},
    {familiar2:"lucia enis"}
  ]

  res.json(datos)
})

export default server