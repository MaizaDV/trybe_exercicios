import java.util.List;

public class MaiorQuantidadeVogais {

  /**
   * Retorna a palavra da lista com a maior quantidade de vogais.
   *
   * @param palavras a lista de palavras a serem analisadas.
   * @return a palavra da lista com a maior quantidade de vogais.
   */
  public static String palavraComMaiorQuantidadeVogais(List<String> palavras) {
    String palavraComMaisVogais = null;
    int quantidadeVogais = 0;
    for (String palavra : palavras) {
      int qtdVogais = contarVogais(palavra);
      if (qtdVogais > quantidadeVogais) {
        quantidadeVogais = qtdVogais;
        palavraComMaisVogais = palavra;
      }
    }
    return palavraComMaisVogais;
  }

  /**
   * Conta a quantidade de vogais em uma palavra.
   *
   * @param palavra a palavra a ser analisada.
   * @return a quantidade de vogais na palavra.
   */
  private static int contarVogais(String palavra) {
    int qtdVogais = 0;
    for (int i = 0; i < palavra.length(); i++) {
      char c = Character.toLowerCase(palavra.charAt(i));
//      Use 'a' and not "a", the difference between char and string is subtle here but substantial.
      if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        qtdVogais++;
      }
    }
    return qtdVogais;
  }
}
