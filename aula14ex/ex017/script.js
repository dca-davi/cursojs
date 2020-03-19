function tabuada() {
    var num = window.document.getElementById('txtnum')
    var sel = window.document.getElementById('seltab')
    n = Number(num.value)

    if (num.value == '') {
        window.alert('[ERRO] Dados Invalidos')
    } else {
        sel.innerHTML = ''
        for(c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            sel.appendChild(item)
        }
    }
    


}

//alert('Ola')