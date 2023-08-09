//tipo de dado
//bollean

// conversao implícita
const numero = 456;
const numeroString = "456";
// console.log(numero == numeroString)
// console.log(numero + Number(numeroString))

//Number() - passa a variavel para numero
//String() - passa a variável para string

//conversao explícita
// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
// console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação

let largura1 = "10";
let altura1 = "5";
// console.log( + largura1 * + altura1); // teremos a conversão de String para números realizado usando o + antes das variáveis

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)