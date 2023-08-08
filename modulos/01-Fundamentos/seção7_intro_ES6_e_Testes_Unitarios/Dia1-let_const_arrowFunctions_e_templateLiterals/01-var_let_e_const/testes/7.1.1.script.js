function userInfo() {
  const userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail); // => a variável reconhecida dentro do escopo da função
}
// console.log(userEmail); => a variável só é reconhecida dentro do escopo da função

userInfo();
