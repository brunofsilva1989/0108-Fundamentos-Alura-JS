//Arrow function
const arrowTeste = () => console.log("arrow Functions teste");


arrowTeste();

const soma = (num1, num2) => {
    if(num1 > 10 || num2 > 10){
        return "somente números de 1 a 9"
    }
    else{
        return num1 + num2;
    }
}

console.log(soma(15,11));
console.log(soma(5,6))

//Arrow function com + de 1 linha de instrução

//Hoisting: arrow function se comporta como expressão
