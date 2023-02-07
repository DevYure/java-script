var ingredientes = ['água','mel','sal','mostarda']
var ordem = []

for(var i = 0; i < ingredientes.length;i++){
   var primeiraletra = 
        ingredientes[i].charAt(0).toLocaleUpperCase()
   var corte = 
        ingredientes[i].slice(1)
   var palavra = 
        primeiraletra+corte
   ordem[i] = 
        palavra
   var ordenado = 
        ordem.sort(function(a,b){
    return  a.localeCompare(b);
   })
   console.log(ordenado)
}