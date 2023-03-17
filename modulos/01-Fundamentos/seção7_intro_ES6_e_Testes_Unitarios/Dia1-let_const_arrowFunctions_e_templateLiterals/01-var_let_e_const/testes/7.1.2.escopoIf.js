if (true) {
  // inicio do escopo do if
  var userAge = '20';
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20 => Temos acesso à variável declarada com o var dentro e fora do escopo do bloco.

// => não temos acesso à userAge fora do bloco de código quando usamos let e const para declarar essa variável.
