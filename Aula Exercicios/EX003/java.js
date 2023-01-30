function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('final')
    var passos = document.getElementById('Passos')
    var texto = document.getElementById('textoresultado')
    var resultado = document.getElementById('resultado')
    var inicio2 = Number(inicio.value)
    var fim2 = Number(fim.value)
    var passos2 = Number (passos.value)
    if (inicio == 0 || fim == 0 || passos == 0){
        window.alert("Sem dados cadastrado, por vafor prenchar novamente")
    }
    else{
        texto.innerHTML = "Contando :"
        for( y = inicio2; y <=fim2; y += passos2){
            resultado.innerHTML += `${y} `
        }
    }
    
}