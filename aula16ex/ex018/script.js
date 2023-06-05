let num = document.querySelector("input#inum")
let lista = document.querySelector("select#ilista")
let resultado = document.querySelector("div#res")
let valores = []


function isNumber(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}


function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumber(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        alert("Resultado inválido ou o número já se encontra na lista")
    }
    num.value = ''
    num.focus()
}