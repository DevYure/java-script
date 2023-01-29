var idade = 65
if(idade <= 15){
    console.log('Pre-adolecente')
}
else if (idade <= 18 && idade >= 15){
    console.log('adolecente')
}
else if (idade >= 18 && idade <= 25){
    console.log('Joven')
}
else if (idade >= 25 && idade <= 40){
    console.log('adulto')
}
else if (idade >= 40 && idade <= 60){
    console.log(
        'Adulto com Experiencia'
    )
}
else if (idade >= 60) {
    console.log('Idoso')
}
