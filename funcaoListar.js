
function funcaoListar(array) {

  if(array.length == 0){
    console.log(`\n--> Ainda não há contatos registrados.`)
  } else{
    array.forEach(variavel => {
      console.log(`ID: ${variavel.ID} - Nome: ${variavel.nome}, Telefone: ${variavel.telefone}, Email: ${variavel.email}`);
    });
  }
}

module.exports = { funcaoListar }