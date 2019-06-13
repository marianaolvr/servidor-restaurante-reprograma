// métodos da API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./ComidasController')

const server = express() //fala para o meu programa que vou usar o express
server.use(cors())
server.use(bodyParser.json())

server.get("/comidas", async (request, response) => { //get com express, sem ifs
  // response.send(controller.getAll())
  controller.getAll() //agora é um método assincrino que não responde de forma direta. 
  .then(listaDeComidas => response.send(listaDeComidas))
})

server.get("/comidas/:id", (request, response) => { //get com express, sem ifs
  // const id = request.params.id
  // response.send(controller.getById(id))
  const id = request.params.id
  controller.getById(id)
    .then(comida => {
      if(!comida){ // comida === null || comida === undefined
        response.sendStatus(404) // comida nao encontrada
      } else {
        response.send(comida)
      }
    })
    .catch(error => {
      if(error.name === "CastError"){
        response.sendStatus(400) // bad request - tem algum parametro errado
      } else {
        response.sendStatus(500) // deu ruim, e nao sabemos oq foi
      }
    })
})


server.post('/comidas', (request, response) => {
  response.status(200).send(controller.add(request.body))
})


server.patch('/comidas/:id', async (request, response) => {
  const id = request.params.id
  controller.update(id, request.body)
    .then(comida => {
      if(!comida) { response.sendStatus(404) } // nao encontrei a comida
      else { response.send(comida) } // o status default 200
    })
    .catch(error => {
      if(error.name === "MongoError" || error.name === "CastError"){
        response.sendStatus(400) // bad request
      } else {
        response.sendStatus(500)
      }
    })
})




server.delete('/comidas/:id', async (request, response) => {
  controller.remove(request.params.id)
  // response.sendStatus(20)
  .then(comida => response.sendStatus(204))
})


// server.put('/comidas/:id', (request, response) =>{
//   controller.change(request.params.id, request.body)
//   response.end(204)
// })


server.listen(5000)
console.log('servidor rodando na porta 5000')