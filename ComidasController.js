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
    )
    // const comidaCadastrada = getAll().find(comida =>{
    //     return comida.id === id
    // })
    // return comidaCadastrada
}

const add = (comida) => {
       // TODO: usar o mongoose para inserir uma nova comida
    const novaComida = new comidasModel({
        nome: comida.nome,
        descricao: comida.descricao
    })

    novaComida.save()
}

const remove = (id) => {
    comidas.pratosFavoritos = getAll().filter((comidas) =>{
        return comida.id !== id
    })
}

const update = (id, comida) => {
    let comidaCadastrada = getAll().find(comida => {
        return comida.id === id
    })
    if (comidaCadastrada === undefined){
        return false
    }else{
        if(comida.nome !== undefined){
            comidaCadastrada.nome = comida.nome
        }

    if (comida.descricao !== undefined){
        comidaCadastrada.descricao = comida.descricao
    }
        return true
}}
module.exports = {
    getAll,
    add,
    remove,
    update,
    getById
}
