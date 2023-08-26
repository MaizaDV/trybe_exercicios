package sobreescritaPolimorfismo;

/**
 * O conceito de Override (sobrescrever) está ligado diretamente ao conceito de herança no Java. O
 * uso do Override permite que uma classe filha altere o comportamento de um método já implementado
 * em uma classe pai.
 */
public class MainSobrescrita {

  /**
   * Quando chamamos o método acelerar(), o método chamado é o que está sobrescrito dentro da classe
   * Carro e na classe Moto. Com a técnica de Override, fomos capazes de alterar o comportamento do
   * método herdado da classe pai.
   */
  public static void main(String[] args) {
    //Carro carro = new Carro();
    //carro.abastecer();
    //carro.acelerar();

    Moto moto = new Moto();
    //moto.abastecer();
    //moto.acelerar();

    moto.mostrar();
  }
}
