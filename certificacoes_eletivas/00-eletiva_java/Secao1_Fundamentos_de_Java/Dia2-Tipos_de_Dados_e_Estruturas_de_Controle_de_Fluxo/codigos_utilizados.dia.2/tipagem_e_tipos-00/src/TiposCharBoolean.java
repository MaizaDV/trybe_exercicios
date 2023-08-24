/**
 * Classe com métodos.
 */
public class TiposCharBoolean {

  /**
   * método main que chama os métodos.
   */
  public static void main(String[] args) {
    typeBoolean();
    typeChar();
  }

  /**
   * Em Java, você vai ver muitas das vezes as variáveis do tipo boolean sendo declaradas com os
   * prefixos 'is'.
   */
  private static void typeBoolean() {
    boolean isBoolean = true; // outros exemplos: isGreaterThan, isFlexible, isStarted
    boolean ehNumero = false; // outros exemplos: ehMaiorDeIdade, ehCedo, ehValido
    System.out.println(">------------------------<");
    System.out.println("type boolean: " + isBoolean + " " + ehNumero);
  }

  /**
   * O tipo primitivo char, ou caractere, é um dos tipos primitivos para lidar com valores
   * alfanuméricos em Java. Com ele, deixamos de trabalhar com apenas representações numéricas para
   * trabalhar com representações de letras ou texto. No caso do char, ele armazena apenas um
   * caractere por variável.
   */
  private static void typeChar() {
    char letraA = 'a';
    char letraaMaiuscula = 'A';
    System.out.println(">------------------------<");
    System.out.println("type char: " + letraA); // a
    System.out.println("type char: " + letraaMaiuscula); // A
  }
}
