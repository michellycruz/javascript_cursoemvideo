let number = document.querySelector("input#inum")
let lista = document.querySelector("input#ilista")
let resultado = document.querySelector("div#res")
let valores = []


function isNumber(n){
    
}


function adicionar(){
    if(isNumber(number.value) && !inList(number.value, valores)){

    } else{
        alert("Resultado inválido ou o número já se encontra na lista.")
    }
}