import java.lang.Math;

public class Avaliacao {

  public void calcularIMC(double peso, double altura) {
    // peso / altura^2
    double IMC = peso / Math.pow(altura, 2);
    System.out.println("O seu IMC é " + IMC);
  }
}
