function fazertabuada(){
    var num = document.getElementById('número')
    var respostar = document.getElementById('res')
    if (num.value == 0){
        window.alert("não possue número, Por favor Digite um número a Baixo")
    }
    else{
        var n = Number(num.value)
        var c = 1
        respostar.innerHTML = ""
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            c++
            item.value = `respostar${c}`
            respostar.appendChild(item)
        }
    }
}