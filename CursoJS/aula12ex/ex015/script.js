function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criancahomem.png')
            } else if (idade < 20){
                img.setAttribute('src', 'adolescentehomem.png')
                    //adolescente
            } else if (idade < 30) {
                img.setAttribute('src', 'jovemhomem.png')
                // Jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adultohomem.png')
                // Adulto
            } else {
                img.setAttribute('src', 'idosohomem.png')
                // Idoso
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'criancamulher.png')
                //criança
            } else if (idade < 20){
                img.setAttribute('src', 'adolescentemulher.png')
                    //adolescente
            } else if (idade < 30) {
                img.setAttribute('src', 'jovemmulher.png')
                // Jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adultamulher.png')
                // Adulto
            } else {
                img.setAttribute('src', 'idosamulher.png')
                // Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}