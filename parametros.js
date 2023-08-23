function soma(n1, n2){
    return n1 + n2;
}

const soma2 = (n1,n2) => n1 + n2 


console.log(soma(2,3));

console.log(soma2(5,6));

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade('Bruno',34));


const multiplica = (numero1, numero2 = 2) => numero1 * numero2;

console.log(multiplica(soma(4,5),soma(3,3)))

console.log(multiplica(5))

function comParametro(param) {
    console.log(param)
}
comParametro()