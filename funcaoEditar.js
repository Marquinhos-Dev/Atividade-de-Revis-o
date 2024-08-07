
let array = require('./contatos')

function funcaoEditar(index,nome,email,telefones){

    index = array.findIndex(verificar => verificar.nome == index)

    array[index] = {ID: array[index].ID,nome:nome,email:email,telefones:telefones}

    console.log(`\n--> Contato alterado com sucesso!`)
}

module.exports = {funcaoEditar}