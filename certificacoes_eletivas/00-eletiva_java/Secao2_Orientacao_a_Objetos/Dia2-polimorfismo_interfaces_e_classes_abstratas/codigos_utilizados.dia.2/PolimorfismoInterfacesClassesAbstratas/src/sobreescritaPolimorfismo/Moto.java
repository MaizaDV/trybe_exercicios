package sobreescritaPolimorfismo;

public class Moto extends Veiculo {

  private String modelo;

  public void acelerar() {
    System.out.println("Método acelerar da classe Moto.");
  }

  /**
   * quando chamamos o método acelerar usando a palavra reservada super, o método que é chamado é o
   * da superclasse, e quando usamos a palavra reservada this, o método que é chamado é o que está
   * sobrescrito.
   */
  public void mostrar() {
    System.out.print("super => ");
    super.acelerar();
    System.out.print("this => ");
    this.acelerar();
  }
}
