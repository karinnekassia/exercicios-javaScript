function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'menino-nenem.jpg')
            }else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'adolecente-menino.jpg')
            }else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'adulto-homem.jpg')
            }else {
                //IDOSO
                img.setAttribute('src', 'idoso-homem.jpg')
            }
        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'menina-nena.jpg')
            }else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'adolecente-mulher.jpg')
            }else if (idade < 50){
                //ADULTA
                img.setAttribute('src', 'adulta-mulher.jpg')
            }else {
                //IDOSA
                img.setAttribute('src', 'idosa-mulher.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos. <br>`
        res.appendChild(img)
    }
}