/*
Crie um array com 4 nomes: John, Paul, Ringo e George.
Crie um loop que mostre os nomes no console, exceto o nome Paul
*/

let beatles = ["John", "Paul", "Ringo", "George"];

for (let name of beatles) {
  if (name == "Paul") continue;
  console.log(name);
}
