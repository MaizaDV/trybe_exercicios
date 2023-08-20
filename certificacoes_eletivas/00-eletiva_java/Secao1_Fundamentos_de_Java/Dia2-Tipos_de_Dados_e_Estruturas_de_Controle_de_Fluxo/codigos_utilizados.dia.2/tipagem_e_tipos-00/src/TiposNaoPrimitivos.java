/**
 * Classe.
 */
public class TiposNaoPrimitivos {

  /**
   * Chamada de métodos.
   */
  public static void main(String[] args) {
    typeString();
    concatenandoStrings();
    concatenandoStringBuilder();
  }

  private static void typeString() {
    String frase = "Estou aprendendo Java!";
    String numeros = "09890";
    String caractere = "a";
  }

  /**
   * Para cada concatenação, o Java vai criar um novo espaço em memória com o novo valor. Aqui
   * teremos 7 variáveis em memória para armazenar uma única frase, o que não é não é uma prática
   * recomendada. String é uma classe do pacote java.lang.String que vem de forma nativa na jre e
   * jdk.
   */
  private static void concatenandoStrings() {
    String eu = "Eu";
    String ja = " já";
    String sei = " sei";
    String usar = " usar";
    String strings = " Strings";
    String em = " em";
    String java = " Java";

    String frase = eu + ja + sei + usar + strings + em + java;
    System.out.println(">------------------------<");
    System.out.println(frase); // Eu já sei usar Strings em Java
  }

  /**
   * O StringBuilder é uma classe especial para lidar com concatenação de Strings e, utilizando seu
   * métodoappend, conseguimos fazer isso sem desperdício de memória. StringBuilder é do pacote
   * java.lang
   */
  private static void concatenandoStringBuilder() {
    StringBuilder stringBuilder = new StringBuilder();
    String eu = "Eu";
    String ja = " já";
    String sei = " sei";
    String usar = " usar";
    String strings = " Strings";
    String em = " em";
    String java = " Java";

    String frase = stringBuilder.append(eu)
        .append(ja)
        .append(sei)
        .append(usar)
        .append(strings)
        .append(em)
        .append(java)
        .toString();
    System.out.println(">------------------------<");
    System.out.println(frase); // Eu já sei usar Strings em Java
  }
  
}
