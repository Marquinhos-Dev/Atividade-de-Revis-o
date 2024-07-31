
function listarContatos(contatos) {

  if(contatos.length == 0){
    console.log(`--> Ainda não há contatos registrados.`)
  } else{
    contatos.forEach(contato => {
      console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    });
  }
}
  
module.exports = { listarContatos }