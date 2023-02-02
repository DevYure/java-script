var num = document.getElementById('num')
var tab = document.getElementById('tabela')
var res = document.getElementById('res')
var numeros = []

function adicionar() {
    var numero = Number(num.value)
    if(numeros.indexOf(numero)!== -1) {
        window.alert('Valor ja Celecionado, Por Favor escolha outro número')
    }else if(numero.lenght == 0){
        window.alert('[ERRO] Valor não encontrado, Por Favor Digite um Número')
    }else if (numero < 1 || numero > 100){
        window.alert('Valor fora da Área Aceitavel, Por Farvor Escreva um número entre 1 e 100')
    }
}