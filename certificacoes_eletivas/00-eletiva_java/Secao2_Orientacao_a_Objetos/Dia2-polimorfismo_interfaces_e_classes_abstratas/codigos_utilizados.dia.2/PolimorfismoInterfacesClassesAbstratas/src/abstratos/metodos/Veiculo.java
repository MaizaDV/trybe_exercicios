package abstratos.metodos;

/**
 * Para poder utilizar métodos abstratos em Java, a classe que contém o método abstrato também deve
 * ser abstrata. E o que significa uma classe abstrata? Uma classe que não permite que objetos sejam
 * instanciados dela, servindo como um modelo, protótipo para outras classes que herdam dela. Então,
 * na classe abstrata teremos as assinaturas dos métodos abstratos, que obrigam todas as classes que
 * herdam dela a implementar os métodos. Mas classes abstratas podem ter também métodos que não são
 * abstratos, e esses métodos são herdados. Para transformar classes e métodos em abstratos, devemos
 * utilizar a palavra reservada abstract na assinatura.
 */
public abstract class Veiculo {

  public void abastecer() {
    System.out.println("Método abastecer da classe Veiculo.");
  }

  /**
   * Como cada veículo tem uma forma de acelerar, o método deve ser abstrato.
   */
  public abstract void acelerar();
}
