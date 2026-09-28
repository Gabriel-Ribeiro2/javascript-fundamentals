// criar uma função que recebe um número indefinido de argumentos

function myFunction1(...args) {
  for (let value of args) {
    console.log(value);
  }
}

// chamar a função
myFunction1(5, 10, 15, 20, 25); // retorna 5 10 15 20 25
myFunction1(5, 10, 15); // retorna 5 10 15

// Nota: podemos combinar o parâmetro rest com outros parâmetros

function myFunction2(a, b, ...args) {
  console.log(a, b, args);
}

// chamar a função
myFunction2(5, 10, 15, 20, 25); // retorna 5 10 [15, 20, 25]
