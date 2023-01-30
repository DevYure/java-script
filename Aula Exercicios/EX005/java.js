function passos(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passos = document.getElementById('passos')
    var res = document.getElementById('res')
    if( inicio.value == 0 || fim.value == 0 || passos.value == 0){
        window.alert('[ERRO], Dados em Falta, Favor preencher os daos')
    }
    else{
        var inicio1 = Number(inicio.value)
        var fim1 = Number(fim.value)
        var passos1 = Number(passos.value)
        if(inicio1 <= fim1){
        for ( y = inicio1; y <= fim1; y += passos1){
            res.innerText += `${y} \u{1F642}`
        }}
        else{
            for(y = inicio1; y >= fim1; y-= passos1){
                res.innerHTML += `${y} \u{1F3C8}`
            }
        }
        res.innerHTML += `${y} \u{1F448}`
    }
}