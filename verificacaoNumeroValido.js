
function verificarNumero(numero,valorMaximo){

    return (isNaN(numero) == false && numero < valorMaximo && numero > 0)
}

module.exports = { verificarNumero }