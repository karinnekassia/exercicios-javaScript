function carregar () {
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()
    //CASO QUEIRA TESTAR AS CORES E FOTOS DIFERENTES (PARA VER COMO É) TESTAR O CÓDIGO A BAIXO.
    // var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
//BOM DIA
        img.src='manha.jpg'
        document.body.style.background = '#ffc0cbb5'
    } else if ( hora >= 12 && hora <= 18) {
//BOA TARDE
        img.src='tarde.jpg'
        document.body.style.background = '#7eec25be'
        //'#008000' verde
        //dee127ed amarelo
    } else {
//BOA NOITE
        img.src='noite.jpg'
        document.body.style.background = '#000015f2'
    }
}
