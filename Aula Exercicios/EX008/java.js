var num = document.getElementById('num')
var tab = document.getElementById('tabela')
var res = document.getElementById('res')
var numeros = []

function adicionar() {
    let n = Number(num.value)
    if(numeros.indexOf(n) !== -1){
        window.alert('Número ja na tabela')
    }else if (n == 0){
        window.alert('Digite Um Número')
    }else if (n < 1 || n > 100){
        window.alert('Fora dos Parametros')
    }else{
        let item = document.createElement('option')
        item.text = `O Número ${n} Foi Adicionado`
        tab.appendChild(item)
        numeros.push(n)
    }
}

function verificar(){
    numeros.sort()
    let tot = numeros.length
    let res1 = document.createElement('option')
    res1.text = `A Quantidade de Elementos na sequencia é ${tot}`
    res.appendChild(res1)
    let soma = 0
    let maior = numeros[0]
    let menor = numeros[0]
    for(let v in numeros){
        soma += numeros[v]
        if(numeros[v]> maior){
            maior = numeros[v]
        }if(numeros[v]< menor){
            menor = numeros[v]
        }
    }
    let res2 =document.createElement('option')
    res2.text = `A soma dos Resultado é ${soma}`
    res.appendChild(res2)
    let res3 = document.createElement('option')
    res3.text = `O maior numerio é ${maior}`
    res.appendChild(res3)
    let res4 = document.createElement('option')
    res4.text = `O menor numerio é ${menor}`
    res.appendChild(res4)
    let media = soma / tot
    let res5 = document.createElement('option')
    res5.text = `A media numerica é ${media}`
    res.appendChild(res5)
    
}