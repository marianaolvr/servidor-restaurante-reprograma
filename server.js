const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./ComidasController')


// controller.get() //peguei a funcao do arquivo ComidasController

const server = express() //fala para o meu programa que vou usar o express
server.use(cors())

server.get("/comidas", (request, response) => { //get com express, sem ifs
  response.send(controller.getAll())
})

server.post('/comidas', bodyParser.json(), (request, response) => {
  controller.add(request.body)//request da requisição do postman que é feita no body
  response.send(201)
  
})


server.listen(3000)
console.log('servidor rodando na porta 3000')