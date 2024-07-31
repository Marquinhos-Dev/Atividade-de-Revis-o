
function adicionar_editar_Contato(prompt,contatos,listarContatos,opcao){

    const { verificarNumero } = require('./verificacaoNumeroValido')

    if(opcao == 1){

        let nome = prompt(`Digite o nome do contato: `)
        let telefone = prompt(`Digite o telefone do contato: `)
        let email = prompt(`Digite o email do contato: `)

        contatos.push({nome,telefone,email})

        console.log(`--> Contato registrado com sucesso!`)
        
    } else{

        if(contatos.length == 0){

            console.log(`--> Ainda não há contatos registrados.`)

        }else{

            listarContatos(contatos)

            let posicaoArray = prompt(`Digite o número do contato que deseja atualizar: `)

            if(verificarNumero(posicaoArray,contatos.length) == false){

                console.log(`--> Digite um número válido`)

                adicionar_editar_Contato(prompt,contatos,opcao)
            }

            contatos[posicaoArray].nome = prompt(`Digite o novo nome do contato: `)
            contatos[posicaoArray].email = prompt(`Digite o novo telefone do contato: `)
            contatos[posicaoArray].telefone = prompt(`Digite o novo email do contato: `)

            console.log(`--> Contato atualizado com sucesso!`)
        }
    }
}

module.exports = {adicionar_editar_Contato}