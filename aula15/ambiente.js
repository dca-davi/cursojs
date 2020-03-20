var num = [3, 4, 5, 6, 8]
//num.sort()
/*
for(var i = 0; i<=num.length; i++){
    console.log(num[i])
}*/

for(var i in num){
    console.log(num[i])
}

var pos = num.indexOf(8)
console.log(`O numero 8 esta na posicao ${pos}`)
