// Encapsulamento

class Person {
  #name = ""; // propriedade privada
  #age = 100; // propriedade privada

  // método privado
  #showAge() {
    console.log(this.#age);
  }

  test() {
    this.#showAge();
  }
}

// o método #showAge() não é acessível fora da classe
// se tentarmos chamá-lo, iremos obter um

let person1 = new Person();
// person1.#showAge(); // SyntaxError: O campo privado "#showAge()"
// deve ser declarada numa classe envolvente
person1.test();
