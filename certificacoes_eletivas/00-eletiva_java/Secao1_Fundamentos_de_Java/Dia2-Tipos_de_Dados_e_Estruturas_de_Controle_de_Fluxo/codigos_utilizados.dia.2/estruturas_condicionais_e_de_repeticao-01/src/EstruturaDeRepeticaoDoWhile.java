import java.util.Random;

/**
 * Classe Estrutura de repetição do while(faça enquanto).Semelhante ao WHILE (‘Enquanto’), o DO
 * WHILE (‘Faça Enquanto’) garante que, sempre, ao menos uma iteração do loop será executada, já que
 * ele primeiro executa e apenas depois valida se a condição é verdadeira para continuar ou falsa
 * para interromper o processo.
 */
public class EstruturaDeRepeticaoDoWhile {

  /**
   * Método main.
   */
  public static void main(String[] args) {
    doWhileCandidato();
    doWhileEntregas();
  }

  /**
   * Vamos supor que uma escola entrará em contato com os inscritos aprovados para um curso e que o
   * número máximo de tentativas de contato será até 3.
   */
  static void doWhileCandidato() {
    int tentativas = 0;
    int atendeu = 0;
    String log;

    do {
      log = "Ligando para candidato selecionado ...\n";
      // O código abaixo nos dá um numero aleatório entre 0 e 2.
      atendeu = new Random().ints(0, 2).findFirst().getAsInt();
      tentativas += 1;
    } while (atendeu == 0 && tentativas < 3);

    log = "Candidato atendeu na tentativa: " + tentativas;
    imprimeMensagem(log);
  }

  /**
   * Sistema de tentativa de entrega de encomenda.
   */
  public static void doWhileEntregas() {
    int tentativasRealizadas = 0;
    boolean encomendaRecebida = false;
    String log;

    /*
        while (!encomendaRecebida) {
          log = "Tentando entregar a correspondência, tentativa " + tentativasRealizadas;
          imprimeMensagem(log);
          encomendaRecebida = tentaEntregar();
          tentativasRealizadas += 1;
        }
    */

    do {
      //      log = "Tentando entregar a correspondência, tentativa " + tentativasRealizadas;
      //      imprimeMensagem(log);
      encomendaRecebida = tentaEntregar();
      tentativasRealizadas += 1;
    } while (!encomendaRecebida);

    log = "Correspondência entregue na tentativa " + tentativasRealizadas;
    imprimeMensagem(log);
    imprimeMensagem(">------------------------<");
  }

  static int resultdoRandomNumber() {
    //instância um objeto da classe Random
    Random random = new Random();

    //gera um valor aleatório qualquer do tipo int
    int valor = random.nextInt();

    //retorna o valor gerado
    return valor;
  }

  static boolean tentaEntregar() {
    final boolean f = false;
    final boolean t = true;
    int number = resultdoRandomNumber() % 2;

    if (number == 0) {
      return f;
    } else {
      return t;
    }
  }

  static void imprimeMensagem(String mensagem) {
    System.out.println(mensagem);
  }
}

