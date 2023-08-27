package polimorfismo.sobrecarga;

/**
 * Temos a classe Calculadora com três métodos com o mesmo nome, porém com assinaturas diferentes.
 * Como podemos ver, os parâmetros estão variando em quantidade e tipo, representando o uso da
 * técnica de Overload.
 */
public class Calculadora {

  public int soma(int a, int b) {
    return a + b;
  }

  public int soma(int a, int b, int c) {
    return a + b + c;
  }

  public double soma(double a, double b) {
    return a + b;
  }
}
