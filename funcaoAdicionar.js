
function adicionar_editar_Contato(prompt,contatos,listarContatos,opcao){

    if(opcao == 1){

        let nome = prompt(`Digite o nome do contato: `)
        let telefone = prompt(`Digite o telefone do contato: `)
        let email = prompt(`Digite o email do contato: `)

        contatos.push({ID: contatos[contatos.length -1].ID +1 ,nome,telefone,email})

        console.log(`\n--> Contato registrado com sucesso!`)
        
    } else{

        if(contatos.length == 0){

            console.log(`\n--> Ainda não há contatos registrados.`)

        }else{

            listarContatos(contatos)

            console.log()

            let nomeIndex = prompt(`Digite o nome do contato que deseja atualizar: `) 
            
            console.log()

            let index = contatos.findIndex(contato => contato.nome == nomeIndex)

            if(index < 0){

                console.log(`\n--> Digite um nome válido!`)
    
                adicionar_editar_Contato(prompt,contatos,listarContatos,opcao)

            } else{

                contatos[index].nome = prompt(`Digite o novo nome do contato: `)
                contatos[index].email = prompt(`Digite o novo telefone do contato: `)
                contatos[index].telefone = prompt(`Digite o novo email do contato: `)

                console.log(`\n--> Contato atualizado com sucesso!`)
            }
        }
    }
}

module.exports = {adicionar_editar_Contato}