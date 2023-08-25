package construtor;

/**
 * Classe usada para entender a estrutura de construção de Classe. Os construtores de classes em
 * Java são métodos responsáveis por inicializar os objetos no momento de sua criação.
 */
public class Livro {

  /**
   * Construtor da Classe livro. O construtor de uma classe tem uma sintaxe parecida com a de um
   * método comum, porém o construtor precisa ter o mesmo nome da classe — e não estipulamos um tipo
   * de retorno em sua declaração (por exemplo, void, int, entre outros). Por isso, o construtor não
   * é um método.
   */

  public Livro(String mensagem) {
    System.out.println(mensagem);
  }
}
