package abstratos.classes;

public class SeniorDeveloper extends Developer {

  public double wage() {
    return 5000.0 + yearsOfExperience * 500;
  }

  public String mainSkill() {
    return language + " Debug";
  }
}
