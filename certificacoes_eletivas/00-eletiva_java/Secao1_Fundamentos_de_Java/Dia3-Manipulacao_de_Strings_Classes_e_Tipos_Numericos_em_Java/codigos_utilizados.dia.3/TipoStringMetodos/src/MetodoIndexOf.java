/**
 * Classe.
 */
public class MetodoIndexOf {

  /**
   * Chamada de método.
   */
  public static void main(String[] args) {
    // Imagine que você está desenvolvendo um sistema que deverá comparar se duas frases são
    // iguais. Para isso, é definida a mesma frase, e o output deverá ser igual, por se tratar de
    // frases idênticas. Nessas situações, é importante saber em qual posição houve a primeira
    // ocorrência de um caractere ou texto.
    metodoIndexOf();
  }

  /**
   * metodo.
   */
  public static void metodoIndexOf() {
    // utilizando minhaString.indexOf(meuCaracter) a função retorna o índice,
    // ou seja, a posição da primeira ocorrência do caractere na string dada.
    // O uso do método minhaString.indexOf nos permiti fazer a busca pela ocorrência de
    // um caractere, nome ou texto.

    String saudacao = "Olá, Mundo!";
    System.out.println("primeira posição encontrada: " + saudacao.indexOf('M')); // imprime: 5
    System.out.println(">------------------------<");
    // Perceba que agora foi impressa a primeira posição do caractere s a partir da  posição 10,
    // ou seja, primeiro serão puladas 10 posições, e depois a primeira ocorrência do caractere s
    // será encontrada.
    String lorem = "Lorem ipsum dolor sit amet";
    System.out.println("primeira posição encontrada, a partir da  posição 10: " + lorem.indexOf('s',
        10)); // imprime: 18
    System.out.println(">------------------------<");

    // Note que a função indexOf procura onde está o primeiro caractere da palavra governar na
    // string verso. Dessa vez, a função vai procurar pela palavra inteira.
    // Quando encontrá-la, retornará a posição do primeiro caractere dessa palavra.
    String verso = "Um Anel para a todos governar, Um Anel para encontrá-los";
    System.out.println(
        "primeira posição encontrada do primeiro caractere da palavra governar: " + verso.indexOf(
            "governar")); // Imprime: 21
  }

  public static void imprimeMensagem(String mensagem) {
    System.out.println(mensagem);

  }
}
