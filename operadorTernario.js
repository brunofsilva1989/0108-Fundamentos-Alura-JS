//Operador ternário, explicando.

let idadeMinima = 18;
let idadeCliente;
var idade = prompt("Digite sua idade: ")

//if básico
if(idadeCliente >= idadeMinima){
    console.log("Você pode beber")
}else{
    console.log("Você é muito novo para beber")
    document.write("Você é muito novo para beber")
}

//Exemplificando Ternário
console.log(idadeCliente >= idadeMinima ? "Pode beber" : "Não pode beber");