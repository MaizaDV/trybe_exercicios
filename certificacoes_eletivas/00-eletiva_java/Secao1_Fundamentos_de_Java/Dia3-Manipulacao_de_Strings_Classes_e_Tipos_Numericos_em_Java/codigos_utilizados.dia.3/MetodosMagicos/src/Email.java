import java.text.MessageFormat;

/**
 * Classe Email.
 */
public class Email {

  /**
   * Método que envia o email.
   */
  public void enviar(String email) {
    // TODO
    String[] campos = email.split(";");

    String de = campos[0];
    String para = campos[1];
    String copiaOcultaPara = "";
    String assunto = campos[3];
    String mensagem = campos[4];

    /*
      Usando o método toUpperCase aliado ao alfabeto em maiúsculas, o indexOf consegue verificar se
      existe a vogal no campo selecionado, caso não exista a vogal, o indexOf retorna -1 e o if não
      é executado, caso exista ele retorna o index, logo, sendo maior que 0, ele executa o if
     */
    if ("AEIOU".indexOf(campos[2].toUpperCase()) >= 0) {
      copiaOcultaPara = "diretor@mycompany.com";
    }

    /*
      Usado para a substituição dos campos
     */
    assunto = assunto.replace("{de}", de);
    assunto = assunto.replace("{para}", para);

    // Impressão das infromações no terminal que simula o envio do email
    System.out.println(
        MessageFormat.format("De: {0}\nPara: {1}\nCC: {2}\nAssunto: {3}\nMensagem {4}", de, para,
            copiaOcultaPara, assunto, mensagem)
    );
  }
}
