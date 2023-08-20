/**
 * Classe Estrutura de repetição for(para). No FOR você precisa ter uma previsibilidade de número de
 * ocorrências, diferente do WHILE, que prossegue enquanto alguma condição for verdadeira (true).
 */
public class EstruturaDeRepeticaoFor {

  /**
   * Método main.
   */
  public static void main(String[] args) {
    loopForNumbers();
    caminhandoPorArrays();
  }

  /**
   * Laço de repetição.
   */
  static void loopForNumbers() {
    int numero;
    String log;

    // Leia como: PARA numero = 1, contanto que numero <= 10, faça o loop e depois
    // faça numero += 1!
    for (numero = 1; numero <= 10; numero += 1) {
      log = "O Número atual é: " + numero + "\n";
      System.out.println(log);
    }
    System.out.println(">------------------------<");
  }

  /**
   * O comando FOR também é compatível para interagir em um array de dados previamente estruturado.
   * Imagine que você tem um sistema que precisa exibir no console a lista de estudantes de uma
   * turma de escola.
   */
  static void caminhandoPorArrays() {
    // Cria um vetor com 4 alunos
    String[] alunos = {"MARCOS", "ALINE", "LUCAS", "PATRICIA"};
    String log;

    for (String aluno : alunos) {
      System.out.println(aluno);
    }
    System.out.println(">------------------------<");
    // Pega o total de alunos existentes no vetor
    int totalAlunos = alunos.length;

    // Nossa variável 'log' não é muito útil agora, mas serve para registrarmos o
    // que está acontecendo! ✌️
    log = "A lista de chamadas possui " + totalAlunos + " alunos\n";

    // Imprime a lista de chamadas. Note que você pode declarar a variável posição
    // dentro do for!
    int matricula;
    for (int posicao = 0; posicao < totalAlunos; posicao++) {
      matricula = posicao + 1;
      log = "Matricula: " + matricula + " Aluno: " + alunos[posicao] + "\n";
      System.out.println(log);
    }
    System.out.println(">------------------------<");
  }
}
