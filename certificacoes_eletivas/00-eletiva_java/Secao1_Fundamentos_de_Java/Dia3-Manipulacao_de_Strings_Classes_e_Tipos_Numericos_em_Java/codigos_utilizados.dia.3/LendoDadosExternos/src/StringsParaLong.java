import java.util.Scanner;

class StringsParaLong {

  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);
    System.out.print("Entre com o tamanho da população chinesa: ");
    String input1 = scanner.next();

    long populacaoChinesa = Long.parseLong(input1);

    // Obs: não se preocupe, logo mais descobriremos o porquê desse L aparecer no número `7909863848L`.
    long resultado = 7909863848L + populacaoChinesa;
    System.out.println(
        "Se tivéssemos duas Chinas no mundo, a população mundial seria: " + resultado);
    scanner.close();
  }

}