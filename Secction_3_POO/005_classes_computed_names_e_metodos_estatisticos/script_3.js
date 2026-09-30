// vamos criar uma classe apenas com métodos estáticos

class Operation {
  static sum(a, b) {
    return a + b;
  }

  static sub(a, b) {
    return a - b;
  }

  static mult(a, b) {
    return a * b;
  }

  static div(a, b) {
    return a / b;
  }
}

// chamando métodos estáticos

// podemos guardar o resutlado de um método estático numa variável
let result = Operations.mult(10, 2); // 20
