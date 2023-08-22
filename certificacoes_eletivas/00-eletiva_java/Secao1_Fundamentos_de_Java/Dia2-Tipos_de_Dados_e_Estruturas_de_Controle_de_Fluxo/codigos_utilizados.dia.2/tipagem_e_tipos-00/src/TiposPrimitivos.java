/**
 * Classe que imprime os tipos primitivos.
 */
public class TiposPrimitivos {

  /**
   * método main chamando métodos privados dos tipos.
   */
  public static void main(String[] args) {
    typeByte();
    typeShort();
    typeInt();
    typeLong();
  }

  private static void typeByte() {
    byte b = 9;
    System.out.println(">------------------------<");
    System.out.println("type byte " + b);
  }

  private static void typeShort() {
    short num = 300;
    short formatadaComUnderscore = 20_000; // variável
    System.out.println(">------------------------<");
    System.out.println("type short " + num);
    System.out.println("type short " + formatadaComUnderscore); // 20000
  }

  private static void typeInt() {
    int numeroInteiro = 10;
    int a = 10; // inicialização de variáveis inline
    int b = 20;
    int soma;
    soma = a + b; // atribuição da soma da variável a + b para a variável soma
    System.out.println(">------------------------<");
    System.out.println("type int " + numeroInteiro); // 10
    System.out.println("type int " + soma); // 30
  }

  private static void typeLong() {
    long numA = 102040;
    // adicionado L no final para indicar que estamos inserindo um valor do tipo long
    long numB = 102030405060L;
    System.out.println(">------------------------<");
    System.out.println("type long " + numA);
    System.out.println("type long " + numB);
  }
}
