package heranca;

/**
 * Classes em Java é que todas, sem exceção, estendem da classe Object implicitamente.
 */
public class Heranca {

  /**
   * Main Heranca.
   */
  public static void main(String[] args) {
    Carro objCarro = new Carro("placa", "Geraldo", "azul");
    String corCarro = objCarro.getCor();
    System.out.println("Cor do carro => " + corCarro);

    // Utilizando o ‘this’ e ‘super’ para diferenciar o acesso a campos e métodos
    new SubClasse();

  }
}
