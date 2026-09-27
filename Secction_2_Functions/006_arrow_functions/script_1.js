/*
Arrow functions - são funções anônimas que podem ser atribuídas a variáveis,
    passadas como argumentos para outras funções ou retornadas de outras funções
    Elas são uma forma mais concisa de escrever funções em JavaScript
*/

// função normal
function sum(a, b) {
  return a + b;
}

// a chamar a função
sum(5, 10); // retorna 15

// arrow function
const sum = (a, b) => {
  return a + b;
};

// a chamar a função
sum(5, 10); // retorna 15

// arrow function com retorno implícito
const sum = (a, b) => a + b;
// a chamar a função
sum(5, 10); // retorna 15

// arrow function com retorno implícito e apenas um parâmetro
const square = (a) => a * a;

// a chamar a função
square(5); // retorna 25
