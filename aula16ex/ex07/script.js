let lista = []

function addnum() {
    var numero = window.document.getElementById('num')
    var sel = window.document.getElementById('selnum')
    n = Number(numero.value)
    //validacao - o campo numero tem que ser preenchido entre 1 e 100
    if (numero.value == '' || n < 0 || n > 100) {
        alert('Dados de entrada invalidos')
    }else {

        if (lista.indexOf(n) != -1) {
            alert(`O Valor ${n} ja foi adicionado`)
        }else {
            lista.push(n)
    
            var item = document.createElement('option')
            item.text = `O valor ${n} foi adicionado`
            sel.appendChild(item)
        }

        numero.value = ''
        numero.focus()

    }
    

}

function finalizar() {
    
    var sel = window.document.getElementById('selnum')

    if (lista.length == 0) {
        alert('[Erro] voce precisa informar valores')
    }else {
        res.innerHTML = ''
        //numero cadastrados

        res.innerHTML += `Ao todos temos ${lista.length} numeros cadastrados. <br><br>`

        //o Maior valor foi?

        for(let i in lista) {
            var maiornum = lista[0]
            if (lista[i] >= maiornum) {
                maiornum = lista[i]
            }
        }

        res.innerHTML += `O Maior valor foi ${maiornum} <br><br>`

        //o menor valor foi?

        for(let i in lista) {
            var menornum = lista[0]
            if (lista[i] <= menornum) {
                menornum = lista[i]
            }
        }

        res.innerHTML += `O menor valor foi ${menornum} <br><br>`

        //a Soma de todos os valores

        let soma = 0
        for(let i in lista) {
            soma = lista[i] + soma
        }

        res.innerHTML += `A soma dos valores foi ${soma} <br><br>`

        //A media de todos os valores
        
        var media = 0
        for(let i in lista) {
            media = soma/lista.length
        }

        res.innerHTML += `A media dos valores foi ${media}`
    }

    


    //alert(lista)
}