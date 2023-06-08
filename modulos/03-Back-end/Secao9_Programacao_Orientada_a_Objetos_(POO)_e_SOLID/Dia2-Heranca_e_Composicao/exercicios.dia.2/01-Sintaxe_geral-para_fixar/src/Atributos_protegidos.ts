class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  // Mude a visibilidade do método `sayHello` de _public_ para _protected_.
  protected sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  // Crie, na _Subclass_, um método público chamado `sayHello2`.
  public sayHello2(): void {
    // Chame o método `sayHello` dentro do método `sayHello2`.
    this.sayHello();
  }
}

// Faça a função receber não mais um objeto da _Superclass_, mas sim da _Subclass_.
const myFunc = (object: Subclass) => {
  // Ao mudar a visibilidade, o compilador (ou o vs code) vai mostrar um erro. Conserte esse erro utilizando o novo método `sayHello2`.
  object.sayHello2();
};

// Comente a criação da instância da Superclass
// const sup = new Superclass();
const sub = new Subclass();

// Comente a chamada da função que possui o objeto do tipo Superclass como parâmetro.
// myFunc(sup);
myFunc(sub);

// Mude a visibilidade do método `sayHello` de _protected_ para _private_. O que acontece?
// Ao mudar a visibilidade de _protected_ para _private_, o método `sayHello2` da _Subclass_ deixa de poder acessar o método `sayHello` definido na _Superclass_. Isso acontece pois um método privado só pode ser acessado na classe que o define.
