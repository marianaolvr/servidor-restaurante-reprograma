// métodos da API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./ComidasController')


// controller.get() //peguei a funcao do arquivo ComidasController

const server = express() //fala para o meu programa que vou usar o express
server.use(cors())
server.use(bodyParser.json())

server.get("/comidas", async (request, response) => { //get com express, sem ifs
  // response.send(controller.getAll())
  controller.getAll() //agora é um método assincrino que não responde de forma direta. 
  .then(listaDeComidas => response.send(listaDeComidas))
})

server.get("/comidas/:id", (request, response) => { //get com express, sem ifs
  const id = request.params.id
  response.send(controller.getById(id))
})



server.post('/comidas', (request, response) => {
  // controller.add(request.body)//request da requisição do postman que é feita no body
  response.status(200).send(controller.add(request.body))
})

server.patch('/comidas/:id', (request, response) => {
  const id = request.params.id //id poderia passar qualquer coisa depois do barra
  controller.update(id, request.body)
  response.sendStatus(204)
})

server.delete('/comidas/:id', (request, response) => {
  controller.remove(request.params.id)
  response.sendStatus(200)
}) 

server.put('/comidas/:id', (request, response) =>{
  controller.change(request.params.id, request.body)
  response.end(204)
})


server.listen(5000)
console.log('servidor rodando na porta 5000')