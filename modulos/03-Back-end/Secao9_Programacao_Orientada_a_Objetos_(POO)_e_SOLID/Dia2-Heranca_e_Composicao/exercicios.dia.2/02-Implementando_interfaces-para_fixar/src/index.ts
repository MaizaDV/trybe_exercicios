// Crie uma interface chamada _MyInterface_.
interface MyInterface {
  // _MyInterface_ deve possuir um atributo `myNumber` do tipo _number_.
  myNumber: number;
  // _MyInterface_ deve possuir um método `myFunc`, que recebe um parâmetro `myParam` do tipo _number_ e retorna uma _string_.
  myFunc(myParam: number): string;
}

// Crie uma classe _MyClass_ que implementa _MyInterface_.
class MyClass implements MyInterface {
  // Faça o `myNumber` ser inicializado diretamente nos parâmetros do construtor da _MyClass_.
  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    return `myNumber + myParam: ${this.myNumber + myParam}`;
  }
}

// Crie um objeto da classe _MyClass_ e o utilize acessando `myNumber` e chamando `myFunc`.
const myObject = new MyClass(2);
console.log(myObject.myNumber);
console.log(myObject.myFunc(4));
