// const comidas = {
//     pratosFavoritos: [

//         {
//             "nome": "Batata frita",
//             "descricao": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
//             "imagem": "img/Batata-frita.jpg"
//         },
//         {
//             "nome": "Macarronada",
//             "descricao": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
//             "imagem": "img/macarronada.jpg"
//         },
//         {
//             "nome": "Falafel",
//             "descricao": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
//             "imagem": "img/falafel.jpg"
//         },
//         {
//             "nome": "Creme de abóbora",
//             "descricao": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
//             "imagem": "img/creme-de-abobora.jpg"
//         },

//     ]
// }

// module.exports = {comidas}



// TODO: conectando o banco com o mongoose
const mongoose = require('mongoose');
// string de conexão: mongodb://dominio:porta/nome_database
const MONGO_URL = 'mongodb://localhost:27017/reprograma' //numeração padrão do mongo

function connect (){
    //TODO: conectar no nosso mongo usando a MONGO_URL
    mongoose.connect(MONGO_URL, {useNewUrlParser: true},
        
    function (error) {
        if(error){
            console.error('Deu erro:' +error)
        }else{
            console.log('Conectamos no mongodb!! o/')
        }
    
    }
    );
}

module.exports = { connect }
