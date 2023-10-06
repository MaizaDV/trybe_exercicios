package gettersesetters;

/**
 * Classe para entendimento de getters.
 */
public class Carro {

  private String nome;
  private String montadora;
  private int ano;

  /**
   * Construtor da Classe.
   */
  public Carro(String nomeCarro, String montadoraCarro, int anoCarro) {
    nome = nomeCarro;
    montadora = montadoraCarro;
    ano = anoCarro;
  }

  public String getNome() {
    return nome;
  }

  public String getMontadora() {
    return montadora;
  }

  public int getAno() {
    return ano;
  }


}
