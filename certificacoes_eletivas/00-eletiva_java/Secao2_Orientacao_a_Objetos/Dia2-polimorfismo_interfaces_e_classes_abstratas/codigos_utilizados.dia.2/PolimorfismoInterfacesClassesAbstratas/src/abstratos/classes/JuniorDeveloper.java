package abstratos.classes;

public class JuniorDeveloper extends Developer {

  public double wage() {
    return 3000.0 + yearsOfExperience * 100;
  }

  public String mainSkill() {
    return language + " Automated tests";
  }
}
