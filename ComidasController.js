const repository = require('./ComidasRepository')

const getAll = () => {
    return repository.comidas
}

const add = (comida) => {
    comida.id = Math.random().toString(36).substr(-8) //números aleatórios nesse caso - gerar um ID aleatório 
    getAll().pratosFavoritos.push(comida) //push para cadastrar um novo objeto na array
}

const remove = (id) => {
    let comidasQueFicaram = getAll()

    getAll().pratosFavoritos = comidasQueFicaram.pratosFavoritos.filter((comida) =>{
    return comida.id !== id 
    })
}
module.exports = { 
    getAll,
    add, 
    remove
}