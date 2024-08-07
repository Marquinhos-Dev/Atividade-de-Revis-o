
function excluirContato(prompt,contatos,listarContatos){

    if(contatos.length == 0){

        console.log(`\n--> Ainda não há contatos registrados.`)

    } else{

        listarContatos(contatos)

        console.log()

        let nomeIndex = prompt(`Digite o nome do contato que deseja excluir: `)

        console.log()

        let index = contatos.findIndex(contato => contato.nome == nomeIndex)

        if(index < 0){

            console.log(`--> Digite um nome válido!\n`)

            excluirContato(prompt,contatos,listarContatos)
        }

        if(prompt(`Deseja mesmo excluir o contato?(Digite 'Sim'): `) != 'Sim'){

            return console.log(`\n--> Exclusão cancelada!`)

        } else{

            contatos.splice(index,1)

            console.log(`\n--> Contato excluído com sucesso!`)
        }
    }
}

module.exports = {excluirContato}