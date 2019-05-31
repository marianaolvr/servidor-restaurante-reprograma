// const http = require('http')

// const comidas = {
//     pratosFavoritos: [   
 
//   {
//     "nome": "Batata frita",
//     "descricao": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
//     "imagem": "img/Batata-frita.jpg"
//   },
//   {
//     "nome": "Macarronada",
//     "descricao": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
//     "imagem": "img/macarronada.jpg"
//   },
//   {
//     "nome": "Falafel",
//     "descricao": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
//     "imagem": "img/falafel.jpg"
//   },
//   {
//     "nome": "Creme de abóbora",
//     "descricao": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
//     "imagem": "img/creme-de-abobora.jpg"
//   },
 
// ]}


// // criando um servidor
// const server = http.createServer(function (request, response){ //função que requisita e responde - createServer é uma função dentro do HTTP
//     if (request.url ==='/'){ // se chegou uma requisição no site e essa requisição tem uma barra... (a barra é nossa primeira rota)
//         response.end('Hello wonderful world!') //...responda para ela helloo
//     }else if(request.url === '/comidas'){// mas se chegar uma requisicao de comida...
//        //response.end('Nova resposta para a nova rota')//responda isso
//         if(request.method === 'GET'){//se alguém bateu na comida com um GET
//             request.setEncoding(charset = 'utf8')//ler os caracteres
//             response.writeHead(200, {"Content-Type": "application/json", // escreve no header {header eu quero você leia um tipo de texto html} isso é um pedaço de jason por isso precisa de aspas duplas
//         "Access-Control-Allow-Origin":"*"
//         })
//         response.write(JSON.stringify(comidas))
//           response.end()
//         }else if (request.method === 'POST'){//if pra saber se é um post
//             response.writeHead(201, {
//                 "content-Type": "text/html; charset=utf-8"
//             })
//             response.end("<h1>Nova respostona do POST para tester o nodemon do servidor</h1>");//nova resposta se alguém der um POST
//         }
        
//     }
// }) 

// server.listen(3000) // subir = listen | 3000 é uma porta qualquer sempre usar porta alta daí pra cima, ou seja, "servidor, quero subir para a porta 3000"
// console.log('servidor rodando na porta 3000')

