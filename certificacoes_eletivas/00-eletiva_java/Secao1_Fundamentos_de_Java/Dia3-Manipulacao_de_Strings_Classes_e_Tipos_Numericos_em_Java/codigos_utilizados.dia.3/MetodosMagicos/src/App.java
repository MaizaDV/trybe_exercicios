/**
 * Classe App.
 */
public class App {

  /**
   * Método main.
   */
  public static void main(String[] args) {
    /*
      Informações do texto separadas por vírgula:
      1. De quem é o e-mail
      2. Para quem o e-mail será endereçado
      3. Se haverá cópia oculta do e-mail para o diretor da empresa - Se for vogal
      4. Qual é o assunto do e-mail
      5. A mensagem
     */
    // caso não use vogal depois do segundo ";", a cópia oculta não é exibida na mensagem.
    String info;
    // info = "notreply@mycompany.com;onetaxi@company.com;b;De {de} para {para}; Bom dia amigo!";
    info = "notreply@mycompany.com;onetaxi@company.com;a;De {de} para {para}; Bom dia amigo!";
    Email email = new Email();
    email.enviar(info);
  }
}
