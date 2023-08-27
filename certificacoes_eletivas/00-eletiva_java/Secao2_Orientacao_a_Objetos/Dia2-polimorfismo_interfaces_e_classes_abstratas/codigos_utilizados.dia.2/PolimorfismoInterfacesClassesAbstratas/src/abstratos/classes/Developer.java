package abstratos.classes;

/**
 * Considere um sistema de gerenciamento de carreira de pessoas desenvolvedoras.
 * <p>
 * As posições inicialmente disponíveis são: Júnior e Sênior. Cada posição possui uma linguagem de
 * programação e um tempo de experiência, além de métodos para retornar o salário e a principal
 * habilidade.
 */
public abstract class Developer {

  public String language;
  public int yearsOfExperience;

  public abstract double wage();

  public abstract String mainSkill();
}
