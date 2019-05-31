const express = require('express')
const cors = require('cors')
const controller = require('./ComidasController')

// controller.get() //peguei a funcao do arquivo ComidasController

const server = express() //fala para o meu programa que vou usar o express
server.use(cors())

server.get("/comidas", (request, response) => {
  response.send(controller.getAll())

})


server.listen(3000)
console.log('servidor rodando na porta 3000')