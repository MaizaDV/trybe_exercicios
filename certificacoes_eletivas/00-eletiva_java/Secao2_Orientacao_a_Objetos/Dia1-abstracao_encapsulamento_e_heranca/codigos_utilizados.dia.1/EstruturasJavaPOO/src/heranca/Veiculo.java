package heranca;

/**
 * Classe Veiculo com métodos setters e getters.
 */
public class Veiculo {

  public String placa;
  public String motorista;
  public String cor;

  /**
   * Construtor da Classe Veiculo.
   */
  public Veiculo(String placa, String motorista, String cor) {
    this.placa = placa;
    this.motorista = motorista;
    this.cor = cor;
  }

  public String getPlaca() {
    return placa;
  }

  public void setPlaca(String placa) {
    this.placa = placa;
  }

  public String getMotorista() {
    return motorista;
  }

  public void setMotorista(String motorista) {
    this.motorista = motorista;
  }

  public String getCor() {
    return cor;
  }

  public void setCor(String cor) {
    this.cor = cor;
  }

}