package encapsulamentoprotecteddefault;

/**
 * Note que utilizamos o conceito de herança aqui! Como o objeto Porta já existia, resolvemos herdar
 * as suas características e comportamentos. Além disso, adicionamos uma chave que é inicializada no
 * construtor da classe.
 */
public class PortaSegura extends Porta {

  private String chave;
  private boolean estaTrancada;

  public PortaSegura(String chave) {
    super(); // Executa o construtor da superclasse Porta
    this.chave = chave;
    this.estaTrancada = false;
  }


  public void trancar(String chave) {
    if (this.estaTrancada) {
      System.out.println("PortaSegura já está trancada");
    } else {
      if (this.estaAberta) {
        super.fechar();
      }

      this.estaTrancada = true;
      System.out.println("PortaSegura foi trancada");
    }
  }
}
