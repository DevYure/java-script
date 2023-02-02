var num = document.getElementById('num');
var tab = document.getElementById('tabela');
let sequencia = [];
var res = document.getElementById('res');

function adicionar(){
    let numero = Number(num.value)
    if(sequencia.indexOf(numero) !== -1){
        window.alert('Número já Escolido')
    } else if (numero.lenght == 0){
        window.alert('Digite um numero')
    } else if (numero < 1 || numero > 100){
        window.alert('Fora dos Parametros')
    }
    else{
        sequencia.push(numero)
        let item = document.createElement('option')
        item.text= `O Número ${numero} foi adidionado com sucesso`
        tab.appendChild(item)
    }
}

function verificar(){
    let numero = Number(num.value)
    let item2 = document.createElement('p')
    let ordem = sequencia.length
    res.appendChild(item2)
    item.innerHTML = `Na contagem tem ${ordem} temos na sequencia`

    
}
