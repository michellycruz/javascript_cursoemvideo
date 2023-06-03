function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossível contar"
        alert("[ERRO] faltam dados!")
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i < f){
            //CONTAGEM CRESCENTE
            for(let contador = i; contador <= f; contador += p){
                res.innerHTML += ` ${contador} \u{1F449}`
            }
        } else {
            // CONTAGEM REGRESSIVA
            for(contador = i ; contador >= f ; contador -= p){
                res.innerHTML += ` ${contador} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }
}