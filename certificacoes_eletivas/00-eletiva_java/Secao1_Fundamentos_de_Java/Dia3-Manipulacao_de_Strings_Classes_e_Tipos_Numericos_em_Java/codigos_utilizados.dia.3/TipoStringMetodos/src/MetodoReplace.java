/**
 * Classe com métodos replace. método replace(char oldChar, char newChar), retornando a string
 * resultante e substituindo todas as ocorrências de oldChar na string por newChar. Método
 * minhaString.replace(). Serve para substituir caracteres ou textos de uma determinada String por
 * outro caractere ou texto.
 */
public class MetodoReplace {

  /**
   * método main.
   */
  public static void main(String[] args) {
    //
    //* Imagine que você está trabalhando no desenvolvimento de um sistema bancário que recebe
    //números de contas no padrão 15983-X e deve retornar somente os números, pois são somente
    //eles que o campo aceita. Vamos ver, a seguir, como seria o contrato:
    //
    final String n = getNumeralConta("15983-X");
    imprimeMensagem("somente os números: " + n);

    metodoReplaceAll();

  }

  public static String getNumeralConta(String contaFormatada) {
    return contaFormatada.replace('X', '0');
  }

  /**
   * No replaceAll, devemos ter uma expressão regular como primeiro parâmetro, podendo assim
   * substituir para nomes.replaceAll("\\S+!", pessoa); e obter o mesmo resultado. Ao fazermos isso,
   * qualquer texto que estiver antes da exclamação será substituído.O replaceFirst serve para
   * substituir apenas a primeira ocorrência da expressão regular.
   */
  public static void metodoReplaceAll() {
    // Acabou de surgir uma demanda para um programa chamado Troca Tudo!
    // O nosso objetivo é substituir o nome das pessoas chamadas Magali por Laura.
    String nomes = "Maria Magali, Magali da Silva, Magali Medeiros";
    String pessoa = "Laura";
    // nomes = nomes.replace("Magali", pessoa);

    // outra forma de substituição na classe String.
    //
    nomes = nomes.replaceAll("Magali", pessoa);
    imprimeMensagem("Substituição Magali por Laura: " + nomes);
  }

  public static void imprimeMensagem(String mensagem) {
    System.out.println(mensagem);
    System.out.println(">------------------------<");
  }
}
