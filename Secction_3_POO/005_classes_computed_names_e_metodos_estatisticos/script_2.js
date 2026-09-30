/*
As classes podem também ter métodos estáticos.
Métodos estáticos são métodos que pertencem à classe e não a uma instância
da classe
Isso significa que você pode chamar um método estático sem criar uma
instância da classe.
Isto é, podemos criar classes cujos métodos não precisam de instâncias
num objeto para serem chamados
*/

class Human {
  // método não estático
  talk() {
    console.log("Estou a falar...");
  }

  // método estático. Usamos a palavra-chave static para definir um método estático.
  static walk() {
    console.log("Estou a caminhar...");
  }
}

let person = new Human();

person.talk(); // Estou a falar... - este é um método não estático - o método só está disponivel
