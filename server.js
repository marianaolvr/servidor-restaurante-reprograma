const express = require('express')
const comidas = {pratosFavoritos: [
  ]}
const server = express() //fala para o meu programa que vou usar o express

server.get("/comidas", (request, response)=> {
  response.send("Boa noite, amigas!")
})

  server.listen(3000) // subir = listen | 3000 é uma porta qualquer sempre usar porta alta daí pra cima, ou seja, "servidor, quero subir para a porta 3000"
console.log('servidor rodando na porta 3000')