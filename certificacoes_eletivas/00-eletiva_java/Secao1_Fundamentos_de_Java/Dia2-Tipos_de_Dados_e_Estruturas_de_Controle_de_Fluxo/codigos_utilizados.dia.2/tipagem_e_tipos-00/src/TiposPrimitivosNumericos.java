/**
 * Classe com tipos numéricos.
 */
public class TiposPrimitivosNumericos {

  /**
   * método main chamando outros métodos.
   */
  public static void main(String[] args) {
    typeFloat();
    typeDouble();
  }

  private static void typeFloat() {
    float numA = -101.23f;
    float numB = 2.356f;
    System.out.println(">------------------------<");
    System.out.println("type float: " + numA + numB); // -98.874
  }

  private static void typeDouble() {
    double a = 2.356; // double inicializado naturalmente
    double b = 1.409F; // double aceitando número float
    double c = 12930L; // double aceitando número long
    System.out.println(">------------------------<");
    System.out.println("type double " + a);
    System.out.println("doubleRecebendoFloat " + b); // 1.409000039100647
    System.out.println("doubleRecebendoLong " + c); // 12930.0
  }

}
