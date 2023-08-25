package heranca;

class SubClasse extends SuperClasse {

  public String nome = "Subclasse";

  /**
   * A primeira cláusula acessa, com base na classe herdada, a propriedade nome desta classe herdada
   * com o uso do super. A segunda acessa, com o uso do this, a propriedade da classe atual (classe
   * SubClasse).
   */
  public SubClasse() {
    System.out.println(super.nome);
    System.out.println(this.nome);
  }
}
