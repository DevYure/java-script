let tab = document.getElementById('tabela')
let res = document.getElementById('res')
let sequencia = []
function adicionar(){
var num = document.getElementById('num')
if( num.value == 0){
    window.alert("[ERRO], Não Possui Numero para seram Adicionados")
}
else if (num.value > 100 || num.value < 1){
    window.alert("[ERRO] Número fora dos parametros")
}
else if (num.value < 100 && num.value > 1 ){
    let item = document.createElement('option')
    let numero = Number(num.value)
    tab.appendChild(item)
    item.text = `O número ${numero} foi adicionado`
}
}

function verificar() {
    if (sequencia != 0 ){
        sequencia.push(Number(num.value))
        sequencia.sort()
        let total = sequencia.lenght
        let resposta = document.createElement('p')
        let resposta2 = document.createElement('p')
        let resposta3 = document.createElement('p')
        let resposta4 = document.createElement('p')
        let resposta5 = document.createElement('p')
        resposta.text = `O total de números dadastrado foi ${total}`
    }
}



