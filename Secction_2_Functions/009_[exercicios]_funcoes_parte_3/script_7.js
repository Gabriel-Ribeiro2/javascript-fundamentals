function evenOrOdd(a) {
  if (a % 2 === 0) {
    console.log("Seu número", a, "é par");
  } else {
    console.log("Seu número", a, "é impar");
  }

  for (let i = 10; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log("Seu número", i, "é par");
    } else {
      console.log("Seu número", i, "é impar");
    }
  }
}

evenOrOdd(5);
