function carregar() {
    var msg = document.getElementById('texto')
    var img = document.getElementById('fotos')
    var cor = document.getElementById('cordefundo')
    var agora = new Date()
    //var hora = agora.getHours()
    var hora = 6
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora < 12){
        //Bom dia
        img.src = "imagens-para-relogio/amanhecer.png"
        cor.style.backgroundColor = '#C3905C'
    }
    else if (hora > 12 && hora < 18){
        //Boa tarde
        img.src = "imagens-para-relogio/entardecer.png"
        cor.style.backgroundColor = '#F2B56B'
    }
    else{
        img.src = "imagens-para-relogio/noite.png"
        cor.style.backgroundColor = '#022859'
    }
}


