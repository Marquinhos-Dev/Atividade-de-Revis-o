
const prompt = require('prompt-sync')()

// Modularização das funções
const {funcaoListar} = require('./funcaoListar')
const {funcaoAdicionar} = require('./funcaoAdicionar')
const {funcaoExcluir} = require('./funcaoExcluir')
const {funcaoEditar} = require('./funcaoEditar')

let contatos = require('./contatos')

rodarMenuInicial()

function rodarMenuInicial(){

    console.log(`
    |=============================================|
    |       Menu Inicial - Crud 'contatos'        |
    |=============================================|
    | 1 - Adicionar contato à lista               |
    | 2 - Listar todo os contatos                 |
    | 3 - Editar contato existente                |
    | 4 - Excluir contato                         |
    | 5 - Sair                                    |
    |=============================================|
    `)

    let perguntaInicial = parseInt(prompt('--> Escolha uma opção: '))

    let nome,email,telefone,index,adicionar
    let telefones = []

    switch(perguntaInicial){
        case 1:

            nome = prompt(`Digite o nome do contato: `)
            email = prompt(`Digite o email do contato: `)
            
            do{
                telefone = prompt('Digite um telefone para o contato: ')
                telefones.push(telefone)
                adicionar = prompt('Deseja adicionar mais telefones?(Digite s/n): ')

            } while(adicionar == 's')

            funcaoAdicionar(nome,email,telefones)

            rodarMenuInicial()

        break
        case 2:

            funcaoListar()
            rodarMenuInicial()

        break
        case 3:

            funcaoListar()

            console.log()

            index = prompt('Digite o nome do contato que deseja alterar: ')

            if(contatos.find(verificar => verificar.nome == index) == undefined){

                console.log(`\n--> Digite um nome válido!`)

                rodarMenuInicial()
            }

            nome = prompt(`Digite o nome do contato: `)
            email = prompt(`Digite o email do contato: `)
            
            do{
                telefone = prompt('Digite um telefone para o contato: ')
                telefones.push(telefone)
                adicionar = prompt('Deseja adicionar mais telefones?(Digite s/n): ')

            } while(adicionar == 's')

            funcaoEditar(index,nome,email,telefones)

            rodarMenuInicial()

        break
        case 4:

            funcaoListar()

            console.log()

            index = prompt('Digite o nome do contato que deseja excluir: ')

            if(contatos.find(verificar => verificar.nome == index) == undefined){

                console.log(`\n--> Digite um nome válido!`)

                rodarMenuInicial()
            }

            funcaoExcluir(index)

            rodarMenuInicial()
        break
        case 5:
            console.log(`\n--> Saindo...`)
        break
        default:
            console.log(`\n--> Escolha uma opção válida!`)
            rodarMenuInicial()
        break
    }
}