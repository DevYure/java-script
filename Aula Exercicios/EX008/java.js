var num = document.getElementById('num')
var tab = document.getElementById('tabela')
var res = document.getElementById('res')
var numeros = []

function adicionar() {
    let n = Number(num.value)
    if(numeros.indexOf(n) !== -1){
        window.alert('Número ja na tabela')
    }else if (numeros.length == 0){
        window.alert('Digite Um Número')
    }else if (n <= 1 && n >= 100){
        window.alert('Froa dos Parametros')
    }else{
        let item = document.createElement('option')
        item.text = `O Número ${n} Foi Adicionado`
        tab.appendChild(item)
        numeros.push(n)
       
    }
}

function verificar(){
    if(numeros.length == 0){
        window.alert('[ERRO] Digite um número')
    }else{
        numeros.push(n)
        let total = document.createComment('option')
        let tot = numeros.length
        total.text = `O Conjunto Possui ${tot} Números`
        tab.innerHTML = ""
    }
}