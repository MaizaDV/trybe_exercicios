/**
 * o método split possui muitas formas diferentes de ser utilizado. Agora já sabemos que o primeiro
 * parâmetro é obrigatório e uma expressão regular, e que o segundo parâmetro é opcional e tem um
 * limite, que pode ser positivo, negativo ou zero.
 */
public class MetodoSplit {

  /**
   * Método Split. Esse método é utilizado para dividir uma String em um array de Strings, esse
   * método vai “varrendo” toda String através do padrão definido, deixando cada coisa em seu devido
   * lugar. O parâmetro do método split é uma expressão regular.
   */
  public static void main(String[] args) {
    metodoSplit();
    metodoSplitNum();
    metodoSplitLimite();
  }

  /**
   * Suponha que recebemos uma linha contendo o seguinte texto:
   * "Grifinória;Sonseria;Corvinal;Lufa-Lufa" e a expressão regular delimitadora ";" Nosso objetivo
   * inicial é imprimir cada um dos nomes das casas de Hogwarts.
   */
  public static void metodoSplit() {
    String casasTexto = "Grifinória;Sonseria;Corvinal;Lufa-Lufa";
    String[] casas = casasTexto.split(";");

    for (String casa : casas) {
      System.out.println(casa);
    }
    System.out.println(">------------------------<");
  }

  /**
   * Suponha que recebemos uma linha contendo o seguinte texto:
   * "Grifinória123Sonseria456Corvinal789Lufa-Lufa" e a expressão regular delimitadora agora são
   * números. Nosso objetivo inicial é imprimir cada um dos nomes das casas de Hogwarts.
   */
  public static void metodoSplitNum() {
    String casasTexto = "Grifinória123Sonseria456Corvinal789Lufa-Lufa";

    //  A expressão regular \\d+, encontra todos os números de 0 a 9, independente de quantos são.
    //  Isso significa que o método split vai encontrar todos os números e dividir a String,
    //  adicionando tudo em um array e retornando String sem números.
    String[] casas = casasTexto.split("\\d+");

    for (String casa : casas) {
      System.out.println(casa);
    }
    System.out.println(">------------------------<");
  }

  /**
   * Imagine que você tem uma frase com excesso de vírgulas e deseja removê-las das duas primeiras
   * palavras. Para isso, limitamos a 3 divisões após a vírgula. O limite, então, é o número que
   * especifica um limite no número de divisões a serem encontradas.
   */
  public static void metodoSplitLimite() {
    String frase = "caneta,lápis,lapiseira,caderno,borracha";
    String[] formatado = frase.split(",", 3);

    for (String novoFormato : formatado) {
      System.out.println(novoFormato); // imprime ["caneta", "lápis", "lapiseira,caderno,borracha"]
    }
    System.out.println(">------------------------<");
  }

}
