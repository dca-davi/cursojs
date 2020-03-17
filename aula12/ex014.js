var agora = new Date()
var diaSem = agora.getDay()

//console.log(diaSem)

switch(diaSem){
    case 0:
        console.log('Hoje e Domingo')
        break
    case 1:
        console.log('Hoje e Segunda')
        break
    case 2:
        console.log('Hoje e Terca')
        break
    case 3:
        console.log('Hoje e Quarta')
        break
    case 4:
        console.log('Hoje e Quinta')
        break
    case 5:
        console.log('Hoje e Sexta')
        break
    case 6:
        console.log('Hoje e Sabado')
        break
    default:
        console.log('[ERRO] Dia Invalido')
}

/*

0 = Domingo
1 = Segundo
2 = Terca
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado

*/