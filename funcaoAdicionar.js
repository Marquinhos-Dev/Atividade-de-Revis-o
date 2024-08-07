
let array = require('./contatos')

function funcaoAdicionar(nome,email,telefones){

    if(index = array.find(verificar => verificar.email == email)){

        return('--> Já existe um contato com esse email! Tente novamente.')
    }
    
    array.push({ID: (array[array.length-1].ID +1), nome,email,telefones})

    console.log(`\n--> Contato registrado com sucesso!`)
}

module.exports = {funcaoAdicionar}