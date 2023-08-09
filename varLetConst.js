//var, ela tem o scopo global, por isso é preciso tomar cuidado com ela.

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area)

// var area;


//Usando o let, ele só funciona no scopo em qual ele foi declarado.
// let forma = 'Retangulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if(forma === 'Retangulo'){
//     area = altura * comprimento;
// }else{
//     area = (altura * comprimento) / 2;
// }


// console.log(area);

// Utilizando Const
const forma = "quadrado";
const altura = 5;
const comprimento = 7;
let area;

if(forma === 'triangulo'){
    area = altura * comprimento;
}else{
    area = (altura * comprimento) / 2;
}


console.log(area)
