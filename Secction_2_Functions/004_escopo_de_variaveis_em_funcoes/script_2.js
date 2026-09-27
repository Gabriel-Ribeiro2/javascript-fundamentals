// variáveis globais podem ser acedidas a partir de qualquer parte

let myName = "John";

function showMyName() {
  console.log(myName);
}

showMyName();

// se existisse uma variável com o mesmo nome de dentro da função,
// essa seria usada em vez da variável global
