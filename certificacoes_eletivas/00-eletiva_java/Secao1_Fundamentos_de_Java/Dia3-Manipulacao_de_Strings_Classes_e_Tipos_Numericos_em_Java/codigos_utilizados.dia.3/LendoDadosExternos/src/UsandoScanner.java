import java.util.Scanner;

class UsandoScanner {

  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);
    System.out.print("Qual o seu nome: ");
    String nome = scanner.next();
    System.out.println("Boas-vindas, " + nome + "!");
    scanner.close();
    /*
    É importante chamar o método close da sua instância de scanner toda vez
    que você não for ler mais dados. Isso acontece porque, quando criamos nosso scanner, o Java
    aloca um recurso do Sistema Operacional para poder ler essa entrada.
    Caso a gente não feche nosso scanner, o recurso fica alocado e sem uso, o que causa um
    desperdício que vai se acumulando a cada scanner que não é fechado. Quando escrevemos programas
    grandes ou que rodam por muito tempo, isso faz bastante diferença!
     */
  }

}