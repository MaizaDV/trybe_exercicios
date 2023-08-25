package atributosmetodos;

/**
 * Classe usada para chamar a Classe Livro.
 */
public class AtributosEmetodos {

  /**
   * Chamada da Classe livro e chama método da classe.
   */
  public static void main(String[] args) {
    Livro livro = new Livro(100);
    int numeroDePaginas = livro.retornarNumeroDePaginas();
    System.out.println("Número de páginas" + numeroDePaginas);
  }

}
