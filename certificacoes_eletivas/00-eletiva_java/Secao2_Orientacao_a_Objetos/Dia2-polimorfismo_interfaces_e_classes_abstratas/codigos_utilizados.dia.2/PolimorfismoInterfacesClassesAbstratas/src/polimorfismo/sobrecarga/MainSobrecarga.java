package polimorfismo.sobrecarga;

/**
 * Overload (sobrecarregar) permite que métodos diferentes tenham o mesmo nome em nossas classes,
 * desde que possuam assinaturas diferentes. Por assinatura diferente queremos dizer que o número de
 * parâmetros e/ou o tipo dos parâmetros devem ser diferentes, fazendo com que o compilador Java
 * entenda que a técnica de Overload está sendo utilizada. Essa técnica também é conhecida como
 * sobrecarregamento de métodos em português.
 */
public class MainSobrecarga {

  /**
   * Aqui nessa classe, os métodos estão com o mesmo nome, mas a quantidade de parâmetros e os tipos
   * deles são diferentes. Quando chamamos esses métodos, o Java saberá qual deles será utilizado
   * pela quantidade de parâmetros recebidos e/ou pelos tipos deles.
   */
  public static void main(String[] args) {
    Calculadora calc = new Calculadora();
    System.out.println("soma(int a, int b): " + calc.soma(3, 7));
    System.out.println("soma(int a, int b, int c): " + calc.soma(3, 7, 5));
    System.out.println("soma(double a, double b): " + calc.soma(3.5, 7.9));
  }
}
