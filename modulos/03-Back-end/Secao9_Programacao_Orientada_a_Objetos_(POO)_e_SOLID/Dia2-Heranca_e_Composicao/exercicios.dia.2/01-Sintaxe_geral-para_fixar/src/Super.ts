// class Superclass {
//   isSuper: boolean;

//   constructor() {
//     this.isSuper = true;
//   }

//   public sayHello(): void {
//     console.log('Olá mundo!');
//   }
// }

// class Subclass extends Superclass {
//   // No construtor da _Subclass_, o atributo _isSuper_ deve ser setado como `false`. Você vai precisar utilizar o _super_.
//   constructor() {
//     super();
//     this.isSuper = false;
//   }
// }

// const myFunc = (object: Superclass) => {
//   object.sayHello();
//   // Dentro da função que recebe um objeto da _Superclass_ como parâmetro, cheque o valor do atributo _isSuper_ e imprima no console "Super!" se for `true` e "Sub!" se for `false`;
//   console.log(object.isSuper ? 'Super!' : 'Sub!');
// };

// const sup = new Superclass();
// const sub = new Subclass();

// myFunc(sup);
// myFunc(sub);
