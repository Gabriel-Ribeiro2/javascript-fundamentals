/*
Crie uma função para calcular a soma de 2 números.
Agora crie um loop for com 10 iterações, 
e dentro do loop chame a função para somar
o índice do loop com o número 5.
*/

const sum = (num1, num2) => num1 + num2;

for (index = 1; index <= 10; index++) {
  console.log(sum(index, 5));
}
