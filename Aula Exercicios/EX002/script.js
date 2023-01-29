function verificar(){
    var data = window.document.getElementById('data')
    var Masculino = document.getElementById('Masculino')
    var Feminino = document.getElementById('Feminino')
    var res = document.getElementById('texto')
    var img = document.getElementById('foto')
    var nas = Number(data.value)
    var agora = new Date()
    var ano = agora.getFullYear()
    var idade = ano-nas
    var sexo = document.getElementsByName('sext')
    var genero = ""
    if (sexo[0].checked){
        genero = "Homem"
        if (idade < 10){
            //criança
            img.src ='imagens/garoto menor de 10 .png'
        }
        else if (idade < 21){
            //joven
            img.src ='imagens/garoto menor de 18.png'
        }
        else if ( idade < 50){
            //adulto
            img.src ='imagens/homem adulto.png'
        }
        else{
            //idoso
            img.src ='imagens/homem idoso.png'
        }
    }
    else if (sexo[1].checked){
        genero = "Mulher"
        if (idade < 10){
            //criança
            img.src ='imagens/manina menor de 10.png'
        }
        else if (idade < 21){
            //joven
            img.src ='imagens/menina menor de 18.png'
        }
        else if ( idade < 50){
            //adulto
            img.src ='imagens/melher adulta.png'
        }
        else{
            //idoso
            img.src ='imagens/mulher idosa.png'
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    
}