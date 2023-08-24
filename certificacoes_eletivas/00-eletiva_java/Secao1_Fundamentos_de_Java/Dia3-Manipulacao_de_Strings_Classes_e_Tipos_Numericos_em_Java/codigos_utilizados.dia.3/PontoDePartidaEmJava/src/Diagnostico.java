import java.util.Scanner;

public class Diagnostico {

  public static void main(String[] args) {
    Scanner instaciDeScanner = new Scanner(System.in);

    System.out.println("Qual o seu peso? ");
    String pesoEntrada = instaciDeScanner.next();

    System.out.println("Qual a sua altura? ");
    String alturaEntrada = instaciDeScanner.next();

    double peso = Double.parseDouble(pesoEntrada);
    double altura = Double.parseDouble(alturaEntrada);

    Avaliacao instanciDeAvaliacao = new Avaliacao();
    instanciDeAvaliacao.calcularIMC(peso, altura);

    instaciDeScanner.close();
  }
}
