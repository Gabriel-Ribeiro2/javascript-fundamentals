/*
1. Crie uma variável "Classification" e atribua o valor entre 1 e 5.
Essas são as classificações entre 1 (ruim) e 5 (excelente) que um filme pode ter
2. Crie uma estrutura de switch para exibir uma mensagem diferente dependendo da classificação
*/

let classfication = 3;

switch (classfication) {
  case 1 <= classfication < 2:
    console.log("Filme Ruim!");
    break;
  case 2 <= classfication < 3:
    console.log("Filme OK!");
    break;
  case 3 <= classfication < 4:
    console.log("Filme Bom!");
    break;
  case 4 <= classfication < 5:
    console.log("Filme Excelente!");
    break;
  case 5:
    console.log("Filme perfeito!");
    break;
  default:
    console.log("Classificação inválida, dê uma nota de 1 a 5");
}
