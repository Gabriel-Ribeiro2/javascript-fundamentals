/*
1. Crie duas variáveis: uma numérica "Score" e uma string "result"
2. Atribua os valores 50 e "50" as variáveis , respectivamente
3. Crie uma estrutura condicional que verifique se os valores são iguais ou não, e exiba uma mensagem
*/

let score = 50;
let result = "50";

if (score === result) {
  console.log(
    "A pontuação corresponde ao resultado em valor numérico e em tipo",
  );
} else if (score == result && score !== result) {
  console.log("A pontuação corresponde ao valor numérico de resultado");
} else {
  console.log("A pontuação é diferente de resultado");
}
