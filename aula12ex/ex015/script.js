function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = '19'
    msg.innerHTML = `Agora sao ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //BOM DIA !
        img.src = 'fotomanha.png'
        document.body.style.background = '#e5c58d'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#f8b278'
    } else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#5c5a5a'
    }
}

