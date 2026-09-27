// conversão implícita e conversão explícita
// conversão implícita: quando o JavaScript converte um tipo de dado em outro automaticamente.
// Conversão explícita: quando o programador converte um tipo de dado em outro através de funções

// Conversão implícita
let score1 = 100;
let score2 = "100";
console.log(score1 + score2); // 100100 - converte score1 para string e faz a concatenação com score 2
// este é um exemplo de conversão implícita

// Conversão explícita
let score3 = 100;
let score4 = "100";
console.log(score3 + Number(score4)); // 200 - converte score4 para number e faz a soma com score3
// este é um exemplo de conversão explícita

// importante: sempre que possível, use a conversão explícita.
// A conversão implícita pode levar a erros difíceis de encontrar e corrigir.
