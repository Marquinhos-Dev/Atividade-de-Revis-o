
let array = require('./contatos')

function funcaoExcluir(index){

    index = array.findIndex(verificar => verificar.nome === index)

    array.splice(index,1)

    console.log(`\n--> Contato removido com sucesso!`)
}

module.exports = {funcaoExcluir}