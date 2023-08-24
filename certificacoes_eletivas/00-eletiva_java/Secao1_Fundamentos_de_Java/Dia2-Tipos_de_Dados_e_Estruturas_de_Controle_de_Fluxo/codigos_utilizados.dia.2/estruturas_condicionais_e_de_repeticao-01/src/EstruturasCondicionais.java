import java.util.Random;

/**
 * Classe Condicional de IF/ELSE. CASO o resultado seja superior a 7, a mensagem: "PARABÉNS! VOCÊ
 * ESTÁ NA PRÓXIMA ETAPA!". CASO O CONTRÁRIO, exibe: "POXA, NÃO FOI DESSA VEZ, MAS CONTINUE
 * TENTANDO, ATÉ A PRÓXIMA".
 */
public class EstruturasCondicionais {

  /**
   * método main.
   */
  public static void main(String[] args) {
    int resultado = resultadoTeste();
    if (resultado > 7) {
      imprimeMensagem("PARABÉNS! VOCÊ ESTÁ NA PRÓXIMA ETAPA!");
    } else {
      imprimeMensagem("POXA, NÃO FOI DESSA VEZ, MAS CONTINUE TENTANDO, ATÉ A PRÓXIMA");
    }
    System.out.println(">------------------------<");
    double mediaFinal = 6.0;
    String resultado2 = "INDEFINIDO";

    if (mediaFinal >= 7) {
      resultado2 = "APROVADA";
    } else if (mediaFinal == 6.0) {
      resultado2 = "REALIZAR PROVA BONUS";
    } else {
      resultado2 = "REPROVADA";
    }
    imprimeMensagem(resultado2);
  }

  /**
   * Essa função retorna uma nota aleatória de 0 a 10.
   */
  static int resultadoTeste() {
    //instância um objeto da classe Random
    Random random = new Random();

    //gera um valor aleatório qualquer do tipo int
    int valor = random.nextInt();

    //retorna o valor gerado
    return valor;
  }

  static void imprimeMensagem(String mensagem) {
    System.out.println(mensagem);
  }
}
