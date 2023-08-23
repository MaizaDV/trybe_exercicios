/**
 * O método toUpperCase() da String, converte todas as letras minúsculas em maiúsculas. Método
 * minhaString.toUpperCase()
 */
public class MetodoToUpperCase {

  /**
   * main.
   */
  public static void main(String[] args) {
    System.out.println("melancia".toUpperCase());
    System.out.println("Mamão".toUpperCase());
    System.out.println("aBaCaXi".toUpperCase());
    System.out.println("laranj@".toUpperCase());

    String fruta = "limão";
    System.out.println(fruta.toUpperCase());

    // O método toUpperCase imprime todo o texto em letras maiúsculas. Logo, o primeiro texto
    // será JABUTICABA. E o segundo texto imprimi a forma na qual a string está armazenada, no nosso
    // caso, jabuticaba. Ao chamar o método toUpperCase(), a string original não é alterada,
    // de modo que o método retorna uma  nova string com todas as letras maiúsculas.
    String fruta2 = "jabuticaba";
    System.out.println(fruta2.toUpperCase());

    System.out.println(fruta2);
  }
}
