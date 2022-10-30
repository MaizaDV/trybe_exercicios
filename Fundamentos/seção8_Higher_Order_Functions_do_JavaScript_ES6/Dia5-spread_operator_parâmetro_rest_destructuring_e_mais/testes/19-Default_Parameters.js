const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

const greeting2 = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting2(); // Welcome pessoa usuária!

//? Com o ES6, podemos pré-definir um parâmetro padrão para a função. Assim, podemos reescrever o exemplo anterior da seguinte forma:

const greeting3 = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);
greeting3(); // Welcome pessoa usuária!

