
const prompt = require('prompt-sync')()

// Modularização das funções
const {listarContatos} = require('./funcaoListar')
const {adicionar_editar_Contato} = require('./funcaoAdicionar')
const {excluirContato} = require('./funcaoExcluir')

let contatos = [
    { nome: 'Alice', telefone: '1234-5678', email: 'alice@example.com' },
    { nome: 'Bob', telefone: '8765-4321', email: 'bob@example.com' },
    { nome: 'Carol', telefone: '5678-1234', email: 'carol@example.com' }
]

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

    switch(perguntaInicial){
        case 1:
            adicionar_editar_Contato(prompt,contatos,1)
            rodarMenuInicial()
        break
        case 2:
            listarContatos(contatos)
            rodarMenuInicial()
        break
        case 3:
            adicionar_editar_Contato(prompt,contatos,listarContatos,2)
            rodarMenuInicial()
        break
        case 4:
            excluirContato(prompt,contatos,listarContatos)
            rodarMenuInicial()
        break
        case 5:
            console.log(`--> Saindo...`)
        break
        default:
            console.log(`--> Escolha uma opção válida!`)
            rodarMenuInicial()
        break
    }
}