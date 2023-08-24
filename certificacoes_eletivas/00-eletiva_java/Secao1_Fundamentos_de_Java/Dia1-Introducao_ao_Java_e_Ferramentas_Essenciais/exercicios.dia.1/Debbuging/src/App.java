import java.util.Arrays;
import java.util.List;

public class App {

  public static void main(String[] args) {
    List<String> frutas = Arrays.asList("abacaxi", "laranja", "manga", "uva", "caqui");
    String palavraComMaisVogais = MaiorQuantidadeVogais.palavraComMaiorQuantidadeVogais(frutas);
    System.out.println("A palavra com mais vogais é: " + palavraComMaisVogais);
  }

}
