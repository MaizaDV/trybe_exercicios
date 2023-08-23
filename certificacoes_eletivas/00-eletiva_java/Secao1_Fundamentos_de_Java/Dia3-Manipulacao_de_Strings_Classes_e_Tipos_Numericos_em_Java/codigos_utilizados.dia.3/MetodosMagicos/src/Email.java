/**
 * Classe Email.
 */
public class Email {

  /**
   * Método que envia o email.
   */
  public void enviar(String email) {
    // TODO

    // Impressão das infromações no terminal que simula o envio do email
    System.out.println("De: " + de + "\n" +
        "Para: " + para + "\n" +
        "CC: " + copiaOcultaPara + "\n" +
        "Assunto: " + assunto + "\n" +
        "Mensagem " + mensagem
    );
  }
}
