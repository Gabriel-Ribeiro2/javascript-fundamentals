// Funções aninhadas e closures

// uma função aninhada é uma função declarada dentro de outra função
// uma função aninhada tem um escopo local

function myFunction() {
  console.log("Hellor World!");

  function myNestedFunction() {
    console.log("Hello Universe!");
  }

  myNestedFunction();
}

// a função aninha só pode ser chamada dentro da função onde foi declarada
myFunction();
