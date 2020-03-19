function contar() {
    var ini = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')

    if (ini.value == '' || fim.value == '' || passo.value == '') {
        window.alert('[ERRO] Falta dados!!')
    }else{
        res.innerHTML = 'Contando: <br>'
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo Invalido considerando Passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            do {
                res.innerHTML += `${i} \u{1F449}`
                i += p
            } while (i <= f);
            res.innerHTML += `\u{1F3C1}`    
        } else {
            //Contagem Decrescente
            do {
                res.innerHTML += `${i} \u{1F449}`
                i -= p
            } while (i >= f)
            res.innerHTML += `\u{1F3C1}`
        }

        

        /*for(count = 1; count<=ini.value; count++) {
            res.innerHTML = count
        }*/


    }


}