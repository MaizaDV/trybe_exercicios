import Subclass from "./Subclass ";
import Superclass from "./Superclass";

// Crie uma função myFunc fora do escopo da Subclass que recebe um objeto da Superclass.
const myFunc = (object: Superclass) => {
  object.sayHello();
};

// Crie um objeto da Superclass e outro da Subclass.
const sup = new Superclass();
const sub = new Subclass();

// Chame a função myFunc 2 vezes, passando os objetos criados.
myFunc(sup);
myFunc(sub);
