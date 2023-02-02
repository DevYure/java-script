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
        res.innerHTML=''
    }
}

function verificar(){
    let numero = Number(num.value)
    let maior = sequencia[0]
    let menor = sequencia [0]
    if(sequencia.indexOf(numero) == -1){
        window.alert('Digite um numero')
    }else if (numero > 1 || numero < 100){
        sequencia.sort()
        let primeiro = sequencia.length
        let item = document.createElement('option')
        let soma = 0
        res.appendChild(item)
        for(let pos in sequencia){
            soma += sequencia[pos]
            if(sequencia[pos] > maior){
                maior = sequencia[pos]
            }if(sequencia[pos]< menor){
                menor = sequencia[pos]
            }

        }
         let media = soma / primeiro
        item.text = `A seguencia tem ${primeiro} números`
        let maiornumero = document.createElement('option')
        maiornumero.text = `O maior numero da seguencia é ${maior}`
        let menornumero = document.createElement('option')
        menornumero.text = `O menor numero da seguencia é ${menor}`
        let soma2 = document.createElement('option')
        soma2.text = `A soma dos valores na sequencia é ${soma}`
        let media2 = document.createElement('option')
        media2.text = `A media dos valroes da seguencia é ${media}`
        res.appendChild(menornumero)
        res.appendChild(maiornumero)
        res.appendChild(soma2)
        res.appendChild(media2)

    }

    
}
