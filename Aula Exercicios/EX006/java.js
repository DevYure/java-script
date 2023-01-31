function fazertabuada(){
    var número = document.getElementById('número')
    var resposta = document.getElementById('resposta')
    var img1 = document.getElementById('parafoto')
    if (número.value == 0){
        window.alert("Erro,Não possui valor, Porfavor Digite novamente Um número a baixo")
    }
    else{
        var n = Number(número.value)
        var c = 1
        resposta.innerHTML = ""
        while ( c <= 20){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            c++
            item.value = `resposta${c}`
            resposta.appendChild(item)
            let img = document.createElement("img")
            img.src = 'imagens/foto.jpg'
            img1.appendChild(img)
        }
    }
}