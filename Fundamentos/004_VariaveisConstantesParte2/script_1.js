// as variaveis podem ter valores inicias declarados e posteriormentes serem alterado;
let myName = "Steve";
console.log(myName); //Steve

myName = "John";

console.log(myName); //Jonh

// uma váriavel pode ter um valor inicial e depois ser alterada para outro tipo
// este é um dos "maus" principios do JavaScript, as variaveis não tem um tipo "fixo"
let variable = 50;
console.log(variable);

variable = "John";
console.log(variable);
// alterar o tipo de uma variavel é uma má prática
// o código fica mais díficil de ler e manter
