package abstratos.classes;

public class Main {

  public static void main(String[] args) {
    /*
    A expressão abstract class impede que a classe seja instanciada da mesma maneira que uma
    classe concreta. Desta forma, o código a seguir não será compilado.

    Developer developer = new Developer(); // ERRO!! NÃO COMPILA!!
     */
    /*
    No entanto, podemos criar um objeto a partir de uma classe abstrata, desde que os métodos
    abstratos sejam implementados no momento da criação do objeto. Este recurso é chamado de classe
    anônima, que é bastante utilizado quando o código do método é muito curto e não reutilizável.
     */
    Developer developer = new Developer() {

      public double wage() {
        return 4000.0;
      }

      public String mainSkill() {
        return "Debug";
      }

    }; // COMPILA!!
  }

}
