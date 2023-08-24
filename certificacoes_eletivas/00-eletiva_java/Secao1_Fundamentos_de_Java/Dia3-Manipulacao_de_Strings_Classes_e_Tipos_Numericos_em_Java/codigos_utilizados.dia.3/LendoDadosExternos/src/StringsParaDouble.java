import java.util.Scanner;

class StringsParaDouble {

  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);
    System.out.print("Entre com o preço do litro da gasolina: ");
    String input1 = scanner.next();

    double gasolina = Double.parseDouble(input1);

    double resultado = gasolina + gasolina;
    System.out.println("Ano que vem o litro da gasolina vai custar: " + resultado);
    scanner.close();
  }

}