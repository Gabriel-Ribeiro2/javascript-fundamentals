/*
    Crie uma classe que tenha 4 métodos estáticos:
    - sum (a, b)
    - subtract (a, b)
    - multiply (a, b)
    - divide (a, b)

    cada método deve devolver a respectiva opreação entre a e b
    Teste todos os métodos com os valores 100 e 20
*/

class Operations {
  constructor() {}
  static sum(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }
}

console.log(Operations.sum(100, 20));
console.log(Operations.subtract(100, 20));
console.log(Operations.multiply(100, 20));
console.log(Operations.divide(100, 20));
