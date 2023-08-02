// Tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero - segundoNumero;



const numeroPontoFlutuante = 3.3
const novaOperacao = primeiroNumero / numeroPontoFlutuante;



// NaN -> Not A Number (não é um número)

const alura = "Alura";


function ganhoPorHora(salario, horasTrabalhadasNoMes){
    const salarioHora = (salario / horasTrabalhadasNoMes);
    const total = salarioHora.toFixed(2)
    const formatado = salarioHora.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
    return Math.round(formatado);
}

//console.log(ganhoPorHora(3500,160))

// Strings

const texto1 = "Olá Mundo cruel";
const texto2 = 'Olá Mundo Véi';
const senha = '123456';
const StringDeNumeros = "34567";

const citacao = "O leo disse 'Oi'"

// concatenacao (+)

const name = "Bruno ";
const sobronome = "Silva";
const nomeCompleto = name + sobronome
//console.log(nomeCompleto)

//Códigos UTF e UNICODE

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

//console.log(cifrao)
//console.log(aMaiusculo)
//console.log(tique)
//console.log(hiragana)

//Comparação de strings
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

//console.log(cidade === inputMinusculo);


//Template string Ou template literal



// Tipo Boolean
const terceiroNum = 5;
const quartoNum = 5;

console.log(terceiroNum != quartoNum)
console.log(terceiroNum == quartoNum)
console.log(terceiroNum === quartoNum)
console.log(terceiroNum > quartoNum)
console.log(terceiroNum < quartoNum)
console.log(terceiroNum >= quartoNum)
console.log(terceiroNum <= quartoNum)




