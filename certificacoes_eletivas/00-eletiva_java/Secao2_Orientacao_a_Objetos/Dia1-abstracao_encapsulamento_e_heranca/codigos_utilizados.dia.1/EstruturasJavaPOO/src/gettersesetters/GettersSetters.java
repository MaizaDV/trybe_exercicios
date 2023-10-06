package gettersesetters;

/**
 * Classe chamando métodos getters e setters.
 */
public class GettersSetters {

  /**
   * Instância de Carro usando ‘getters’ e instância de Calculadora usando ‘setters’.
   */
  public static void main(String[] args) {
    Carro objCarro = new Carro("Creta", "Hyundai", 2021);

    System.out.println("O nome do carro é: " + objCarro.getNome());
    System.out.println("A montadora do carro é: " + objCarro.getMontadora());
    System.out.println("O ano do carro é: " + objCarro.getAno());

    Calculadora objCalculadora = new Calculadora();

    objCalculadora.setPrimeiroNumero(10);
    objCalculadora.setSegundoNumero(7);

    System.out.println("Resultado da multiplicação é: " + objCalculadora.multiplicar());
  }
}
