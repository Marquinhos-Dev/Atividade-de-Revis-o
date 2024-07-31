
function excluirContato(prompt,contatos,listarContatos){

    const { verificarNumero } = require("./verificacaoNumeroValido")

    if(contatos.length == 0){

        console.log(`--> Ainda não há contatos registrados.`)

    } else{

        listarContatos(contatos)

        let posicaoArray = parseInt(prompt(`Escolha o contato que deseja excluir: `))

        if(verificarNumero(posicaoArray,contatos.length) == false){

            console.log(`--> Digite um número válido`)

            excluirContato(prompt,contatos,listarContatos)
        }

        contatos.splice(posicaoArray - 1,1)

        console.log(`--> Contato excluído com sucesso!`)
    }
}

module.exports = {excluirContato}