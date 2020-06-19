let rs = require('readline-sync')

let saudacao = rs.question("Oi, qual o seu nome?")
let nome = rs.question('nome: ')
let peso = rs.questionFloat('Qual o seu peso\n')
let altura = rs.questionFloat('Qual sua altura\n')
let imc = peso / (altura*altura)
console.log('O seu IMC é:' + imc)


if ( imc < 17 ) {
    console.log ("você está muito abaixo do peso" + " " + nome)
}

else if (imc >= 17 && imc <= 18.49 ) {
    console.log("você está abaixo do peso")

}

else if (imc >= 18.50 && imc <= 24.99) {
    console.log("você está com o peso normal" + " " + nome)
}

else if (imc >= 25 && imc <= 29.99){
    console.log("você está acima do peso" + " " + nome)


} else if ( imc >= 30 && imc <= 34.99){
    console.log(" você está com obeisdade tipo I" + " " + nome)


} else if ( imc >= 35 && imc <= 39.99){
    console.log(" você está com obeisdade tipo II" + " " + nome)


    
} else if ( imc > 40){
    console.log (" você está com obeisdade tipo III (morbida)" + " " + nome)

}