// Entendendo funcoes

//DECLARACAO DE FUNCAO
// 1 declara a função

function imprimeTexto (texto) {
    console.log(texto)
}



// 2 executa a função 1 ou + vezes
imprimeTexto("Hello Bruno")

// 3 formas de declarar funções


function soma () {
    
    return 2 + 2
}


//Quando usar o return ?

//executar função dentro de função

imprimeTexto(soma())