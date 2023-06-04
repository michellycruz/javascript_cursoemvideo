let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/* console.log(valores)

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let posicao = 0 ; posicao < valores.length ; posicao++){
    console.log(`A posicao ${posicao} guarda o valor ${valores[posicao]}`)
} */

for(let posicao in valores){
    console.log(`A posicao ${posicao} guarda o valor ${valores[posicao]}`)
} 

