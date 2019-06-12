//Metodos para controlar os nossos objetos
const {connect} = require('./ComidasRepository')
const comidasModel = require('./comidasSchema')
connect() // para conectar no mongoDB

const getAll = async () => {
    // pegue todas as comidas do mongodb usando mongoose
    // nome da collection: comidas
    return comidasModel.find((error, comidas) =>{
        if(error){
            console.error(error)
        }
        return comidas
    })
}

const getById = async (id) => {
    return comidasModel.findById(
        id, 
        (error, comida) =>{
            return comida
        }
    )}

const add = (comida) => {
       // TODO: usar o mongoose para inserir uma nova comida
    const novaComida = new comidasModel({
        nome: comida.nome,
        descricao: comida.descricao
    })
    novaComida.save()
}

const remove = async (id) => {
    // comidas.pratosFavoritos = getAll().filter((comida) =>{
    //     return comida.id !== id
    // })
    return comidasModel.findByIdAndDelete(id)
    }

const update = async (id, comida) => { // no server é patch
//     let comidaCadastrada = getAll().find(comida => {
//         return comida.id === id
//     })
//     if (comidaCadastrada === undefined){// nao encontrou a comida
//         return false
//     }else{
//         if(comida.nome !== undefined){
//             comidaCadastrada.nome = comida.nome
//         }

//     if (comida.descricao !== undefined){
//         comidaCadastrada.descricao = comida.descricao
//     }
//         return true
    return comidasModel.findByIdAndUpdate(
        id,
        { $set: comida }, //parametros que queremos
        { new: true}, //retornar a comida atualizada no callback 
        (error, comida) => { //é o nosso callback
            return comida
        }
        )
}
module.exports = {
    getAll,
    getById,
    add,
    remove,
    update
}
