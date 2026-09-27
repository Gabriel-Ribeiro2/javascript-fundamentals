// converter uma string para um número
let score = "100";
console.log(Number(score)); // 100
// ou
console.log(parseInt(score)); // 100

// exemplo de conversão implícita
// o JavaScript faz a conversão implícita automaticamente quando necessário
let score1 = 100;
let score2 = "100";

console.log(score1 + score2); // 100100 - converte score1 para string e faz um concatenção com score2
// este é um exemplo de conversão implícita

console.log(score1 + Number(score2)); // 200 - converte o score2 para number e faz a soma dos valores
// este é um exemplo de conversão explícita

// veremos mais a frente o que são operadores matemáticos e como utilizá-los
