let vetores = [9,3,2,1,0,7,6,5]
vetores.sort()
/*for (let pos=0;pos<vetores.length;pos++){
    console.log(`os números são ${vetores[pos]}`)
}*/
let poss = vetores.indexOf(4)
if (poss == -1){
    console.log('este valo não esta presente')
}
else{
    console.log( ` o numero 7 esta na posição ${poss}`)
}

for (let pos in vetores){
    console.log(`Para cada número de vetores ${pos} explificado utiliza-se ${vetores[pos]}`)
}
