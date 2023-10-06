package atributosmetodos;

/**
 * Classe com métodos e atributos.
 */
public class Livro {

  // atributos
  String titulo;
  int numeroDePaginas;
  String isbn;

  Livro(int paginas) {
    this.numeroDePaginas = paginas;
  }

  /**
   * Método que retorna o valor do atributo numeroDePaginas do tipo int.
   */
  public int retornarNumeroDePaginas() {
    return this.numeroDePaginas;
  }
}
