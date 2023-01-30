function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('final')
    var passos = document.getElementById('Passos')
    var texto = document.getElementById('textoresultado')
    var resultado = document.getElementById('resultado')
    if (inicio.value == 0 || fim.value == 0 || passos.value == 0){
        window.alert("Sem dados cadastrado, por vafor prenchar novamente")
    }
    else{
        texto.innerHTML = "Contando :"
        var inicio2 = Number(inicio.value)
        var fim2 = Number(fim.value)
        var passos2 = Number (passos.value)
        if (inicio2 < fim2){
            for( y = inicio2; y <=fim2; y += passos2){
                resultado.innerHTML += `${y} \u{1F449}`
            }
        }
        else {
            for (y = inicio2; y >= fim2; y-= passos2)
            resultado.innerHTML += `${y} \u{1F449}`
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
    
}