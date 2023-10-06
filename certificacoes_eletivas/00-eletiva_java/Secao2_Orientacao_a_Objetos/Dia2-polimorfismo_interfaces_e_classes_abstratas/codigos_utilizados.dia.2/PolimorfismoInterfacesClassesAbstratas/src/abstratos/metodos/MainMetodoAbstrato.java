package abstratos.metodos;

/**
 * Os métodos abstratos são simplesmente métodos que não têm corpo. Eles são métodos não
 * implementados, ou seja, são assinaturas de métodos e obrigam quem herda da classe que os contém a
 * implementá-los. Por meio deles, evitamos que uma pessoa desenvolvedora se esqueça de fazer o
 * Override e acabe deixando o programa com um comportamento esquisito e difícil de identificar.
 * Assim evitamos os temidos bugs! 🪲
 */
public class MainMetodoAbstrato {

  public static void main(String[] args) {
    Carro carro = new Carro();
    carro.abastecer();
    carro.acelerar();

    Moto moto = new Moto();
    moto.abastecer();
    moto.acelerar();
  }
}
