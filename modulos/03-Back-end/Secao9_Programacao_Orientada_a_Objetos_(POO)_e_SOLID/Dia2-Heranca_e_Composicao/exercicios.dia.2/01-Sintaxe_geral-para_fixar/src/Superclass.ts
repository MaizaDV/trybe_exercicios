// Crie uma classe chamada Superclass.
export default class Superclass {
  // atributo público isSuper
  public isSuper: boolean;

  constructor() {
    // isSuper deve ser setado como true na inicialização
    this.isSuper = true;
  }

  // método público chamado sayHello
  public sayHello():void {
    console.log("Olá mundo!");
  }
}